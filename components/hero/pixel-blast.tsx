'use client'

import { Effect, EffectComposer, EffectPass, RenderPass } from 'postprocessing'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * PixelBlast — campo de dithering ordenado em WebGL.
 *
 * Baseado no componente do React Bits, que por sua vez veio de
 * github.com/zavalit/bayer-dithering-webgl-demo. Um quad de tela inteira
 * roda FBM através de uma matriz de Bayer 8x8: o ruído vira cobertura, a
 * matriz decide quais células acendem, e o resultado é uma nuvem de pontos
 * que lê como framebuffer de terminal em vez de gradiente.
 *
 * Divergências deliberadas em relação à fonte, todas por causa deste site:
 *
 * 1. Ponteiro escutado na `window`, não no canvas. O canvas fica atrás do
 *    conteúdo do hero, então headline, CTAs e retrato comeriam os eventos e
 *    o rastro líquido quebraria em cima deles. Mapeando pelo rect do canvas
 *    o rastro atravessa a seção inteira, e o canvas fica `pointer-events:none`
 *    — não disputa clique nem seleção de texto com nada.
 * 2. `autoPauseOffscreen` de verdade. No original o ref de visibilidade nunca
 *    era escrito e o laço rodava para sempre; aqui um IntersectionObserver e
 *    o `visibilitychange` param o rAF. O hero sai da tela nos primeiros
 *    segundos da visita — o resto da leitura não paga GPU nenhuma.
 * 3. `prefers-reduced-motion` desenha um quadro e encerra o laço. O campo
 *    continua lá, parado. É um estado acabado, não uma degradação.
 * 4. `maxPixelRatio` separado do DPR da tela. Pontos de 5px não ganham nada
 *    visível acima de 1.5x e o custo é quadrático.
 * 5. O uniforme `uStrength` do efeito líquido é atualizado no lugar certo
 *    (no original a atribuição caía no próprio Effect e não fazia nada).
 */

const SHAPE_MAP = { square: 0, circle: 1, triangle: 2, diamond: 3 } as const

export type PixelBlastVariant = keyof typeof SHAPE_MAP

const MAX_CLICKS = 10

/* -------------------------------------------------------------------------- */
/*  Textura de toque (rastro do ponteiro que alimenta a distorção líquida)     */
/* -------------------------------------------------------------------------- */

type TouchPoint = {
    x: number
    y: number
    age: number
    force: number
    vx: number
    vy: number
}

type TouchTexture = {
    texture: THREE.Texture
    addTouch: (norm: { x: number; y: number }) => void
    update: () => void
    radiusScale: number
    dispose: () => void
}

const createTouchTexture = (): TouchTexture | null => {
    const size = 64
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    if (!ctx) return null

    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, size, size)

    const texture = new THREE.Texture(canvas)
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
    texture.generateMipmaps = false

    const trail: TouchPoint[] = []
    let last: { x: number; y: number } | null = null
    const maxAge = 64
    let radius = 0.1 * size
    const speed = 1 / maxAge

    const easeOutSine = (t: number) => Math.sin((t * Math.PI) / 2)
    const easeOutQuad = (t: number) => -t * (t - 2)

    const drawPoint = (p: TouchPoint) => {
        const pos = { x: p.x * size, y: (1 - p.y) * size }
        let intensity: number
        if (p.age < maxAge * 0.3) {
            intensity = easeOutSine(p.age / (maxAge * 0.3))
        } else {
            intensity =
                easeOutQuad(1 - (p.age - maxAge * 0.3) / (maxAge * 0.7)) || 0
        }
        intensity *= p.force

        // R/G carregam a direção do movimento, B carrega a intensidade —
        // é a textura que o shader líquido lê como campo vetorial.
        const color = `${((p.vx + 1) / 2) * 255}, ${((p.vy + 1) / 2) * 255}, ${intensity * 255}`
        const offset = size * 5
        ctx.shadowOffsetX = offset
        ctx.shadowOffsetY = offset
        ctx.shadowBlur = radius
        ctx.shadowColor = `rgba(${color},${0.22 * intensity})`
        ctx.beginPath()
        ctx.fillStyle = 'rgba(255,0,0,1)'
        ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2)
        ctx.fill()
    }

    return {
        texture,
        addTouch(norm) {
            let force = 0
            let vx = 0
            let vy = 0
            if (last) {
                const dx = norm.x - last.x
                const dy = norm.y - last.y
                if (dx === 0 && dy === 0) return
                const dd = dx * dx + dy * dy
                const d = Math.sqrt(dd)
                vx = dx / (d || 1)
                vy = dy / (d || 1)
                force = Math.min(dd * 10000, 1)
            }
            last = { x: norm.x, y: norm.y }
            trail.push({ x: norm.x, y: norm.y, age: 0, force, vx, vy })
        },
        update() {
            ctx.shadowOffsetX = 0
            ctx.shadowOffsetY = 0
            ctx.shadowBlur = 0
            ctx.shadowColor = 'transparent'
            ctx.fillStyle = 'black'
            ctx.fillRect(0, 0, size, size)

            for (let i = trail.length - 1; i >= 0; i--) {
                const point = trail[i]
                const f = point.force * speed * (1 - point.age / maxAge)
                point.x += point.vx * f
                point.y += point.vy * f
                point.age++
                if (point.age > maxAge) trail.splice(i, 1)
            }
            for (const point of trail) drawPoint(point)
            texture.needsUpdate = true
        },
        get radiusScale() {
            return radius / (0.1 * size)
        },
        set radiusScale(v: number) {
            radius = 0.1 * size * v
        },
        dispose() {
            trail.length = 0
            texture.dispose()
        },
    }
}

/* -------------------------------------------------------------------------- */
/*  Efeito líquido (passe de pós-processamento)                                */
/* -------------------------------------------------------------------------- */

const LIQUID_FRAG = `
uniform sampler2D uTexture;
uniform float uStrength;
uniform float uTime;
uniform float uFreq;

void mainUv(inout vec2 uv) {
    vec4 tex = texture2D(uTexture, uv);
    float vx = tex.r * 2.0 - 1.0;
    float vy = tex.g * 2.0 - 1.0;
    float intensity = tex.b;

    float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);
    float amt = uStrength * intensity * wave;

    uv += vec2(vx, vy) * amt;
}
`

const createLiquidEffect = (
    texture: THREE.Texture,
    opts: { strength: number; freq: number }
) =>
    new Effect('LiquidEffect', LIQUID_FRAG, {
        uniforms: new Map<string, THREE.Uniform>([
            ['uTexture', new THREE.Uniform(texture)],
            ['uStrength', new THREE.Uniform(opts.strength)],
            ['uTime', new THREE.Uniform(0)],
            ['uFreq', new THREE.Uniform(opts.freq)],
        ]),
    })

/* -------------------------------------------------------------------------- */
/*  Shader principal                                                           */
/* -------------------------------------------------------------------------- */

const VERTEX_SRC = `
void main() {
    gl_Position = vec4(position, 1.0);
}
`

const FRAGMENT_SRC = `
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
    a = floor(a);
    return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
    vec3 ip = floor(p);
    vec3 fp = fract(p);
    float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
    float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
    float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
    float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
    float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
    float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
    float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
    float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
    vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
    float x00 = mix(n000, n100, w.x);
    float x10 = mix(n010, n110, w.x);
    float x01 = mix(n001, n101, w.x);
    float x11 = mix(n011, n111, w.x);
    float y0  = mix(x00, x10, w.y);
    float y1  = mix(x01, x11, w.y);
    return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
    vec3 p = vec3(uv * uScale, t);
    float amp = 1.0;
    float freq = 1.0;
    float sum = 1.0;
    for (int i = 0; i < FBM_OCTAVES; ++i){
        sum  += amp * vnoise(p * freq);
        freq *= FBM_LACUNARITY;
        amp  *= FBM_GAIN;
    }
    return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
    float r = sqrt(cov) * .25;
    float d = length(p - 0.5) - r;
    float aa = 0.5 * fwidth(d);
    return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
    bool flip = mod(id.x + id.y, 2.0) > 0.5;
    if (flip) p.x = 1.0 - p.x;
    float r = sqrt(cov);
    float d  = p.y - r*(1.0 - p.x);
    float aa = fwidth(d);
    return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
    float r = sqrt(cov) * 0.564;
    return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
    float pixelSize = uPixelSize;
    vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
    float aspectRatio = uResolution.x / uResolution.y;

    vec2 pixelId = floor(fragCoord / pixelSize);
    vec2 pixelUV = fract(fragCoord / pixelSize);

    float cellPixelSize = 8.0 * pixelSize;
    vec2 cellId = floor(fragCoord / cellPixelSize);
    vec2 cellCoord = cellId * cellPixelSize;
    vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

    float base = fbm2(uv, uTime * 0.05);
    base = base * 0.5 - 0.65;

    float feed = base + (uDensity - 0.5) * 0.3;

    float speed     = uRippleSpeed;
    float thickness = uRippleThickness;
    const float dampT = 1.0;
    const float dampR = 10.0;

    if (uEnableRipples == 1) {
        for (int i = 0; i < MAX_CLICKS; ++i){
            vec2 pos = uClickPos[i];
            if (pos.x < 0.0) continue;
            vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
            float t = max(uTime - uClickTimes[i], 0.0);
            float r = distance(uv, cuv);
            float waveR = speed * t;
            float ring  = exp(-pow((r - waveR) / thickness, 2.0));
            float atten = exp(-dampT * t) * exp(-dampR * r);
            feed = max(feed, ring * atten * uRippleIntensity);
        }
    }

    float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
    float bw = step(0.5, feed + bayer);

    float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
    float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
    float coverage = bw * jitterScale;

    float M;
    if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle  (pixelUV, coverage);
    else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
    else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond (pixelUV, coverage);
    else                                   M = coverage;

    if (uEdgeFade > 0.0) {
        vec2 norm = gl_FragCoord.xy / uResolution;
        float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
        float fade = smoothstep(0.0, uEdgeFade, edge);
        M *= fade;
    }

    vec3 color = uColor;

    // Linear -> sRGB. O material é um ShaderMaterial cru, então nenhuma
    // conversão de espaço de cor é anexada pelo three: ela é feita aqui.
    vec3 srgbColor = mix(
        color * 12.92,
        1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055,
        step(0.0031308, color)
    );

    fragColor = vec4(srgbColor, M);
}
`

const NOISE_FRAG = `
uniform float uTime;
uniform float uAmount;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
void mainUv(inout vec2 uv){}
void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor){
    float n = hash(floor(uv * vec2(1920.0, 1080.0)) + floor(uTime * 60.0));
    float g = (n - 0.5) * uAmount;
    outputColor = inputColor + vec4(vec3(g), 0.0);
}
`

/* -------------------------------------------------------------------------- */
/*  Componente                                                                 */
/* -------------------------------------------------------------------------- */

export type PixelBlastProps = {
    variant?: PixelBlastVariant
    pixelSize?: number
    color?: string
    className?: string
    style?: React.CSSProperties
    antialias?: boolean
    patternScale?: number
    patternDensity?: number
    liquid?: boolean
    liquidStrength?: number
    liquidRadius?: number
    pixelSizeJitter?: number
    enableRipples?: boolean
    rippleIntensityScale?: number
    rippleThickness?: number
    rippleSpeed?: number
    liquidWobbleSpeed?: number
    autoPauseOffscreen?: boolean
    speed?: number
    transparent?: boolean
    edgeFade?: number
    noiseAmount?: number
    /** Teto de DPR do campo. Ver nota 4 no topo do arquivo. */
    maxPixelRatio?: number
}

type FieldState = {
    renderer: THREE.WebGLRenderer
    scene: THREE.Scene
    camera: THREE.OrthographicCamera
    material: THREE.ShaderMaterial
    quad: THREE.Mesh
    uniforms: Record<string, THREE.IUniform>
    composer?: EffectComposer
    touch?: TouchTexture
    liquidEffect?: Effect
    clickIx: number
}

export default function PixelBlast({
    variant = 'square',
    pixelSize = 4,
    color = '#B497CF',
    className,
    style,
    antialias = true,
    patternScale = 2,
    patternDensity = 1,
    liquid = false,
    liquidStrength = 0.1,
    liquidRadius = 1,
    pixelSizeJitter = 0,
    enableRipples = true,
    rippleIntensityScale = 1,
    rippleThickness = 0.1,
    rippleSpeed = 0.3,
    liquidWobbleSpeed = 4.5,
    autoPauseOffscreen = true,
    speed = 0.5,
    transparent = true,
    edgeFade = 0.5,
    noiseAmount = 0,
    maxPixelRatio = 2,
}: PixelBlastProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const fieldRef = useRef<FieldState | null>(null)
    const speedRef = useRef(speed)
    speedRef.current = speed

    /* --- Ciclo de vida do contexto WebGL ---------------------------------- */
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        let renderer: THREE.WebGLRenderer
        try {
            renderer = new THREE.WebGLRenderer({
                canvas: document.createElement('canvas'),
                antialias,
                alpha: true,
                powerPreference: 'high-performance',
            })
        } catch {
            // Sem WebGL2 o hero fica com os orbes CSS, que já são um estado
            // acabado. Melhor a versão estática do que uma quebrada.
            return
        }

        const ratio = Math.min(window.devicePixelRatio || 1, maxPixelRatio)
        renderer.setPixelRatio(ratio)
        renderer.domElement.style.width = '100%'
        renderer.domElement.style.height = '100%'
        renderer.domElement.style.display = 'block'
        container.appendChild(renderer.domElement)
        if (transparent) renderer.setClearAlpha(0)
        else renderer.setClearColor(0x000000, 1)

        const uniforms: Record<string, THREE.IUniform> = {
            uResolution: { value: new THREE.Vector2(0, 0) },
            uTime: { value: 0 },
            uColor: { value: new THREE.Color(color) },
            uClickPos: {
                value: Array.from(
                    { length: MAX_CLICKS },
                    () => new THREE.Vector2(-1, -1)
                ),
            },
            uClickTimes: { value: new Float32Array(MAX_CLICKS) },
            uShapeType: { value: SHAPE_MAP[variant] ?? 0 },
            uPixelSize: { value: pixelSize * renderer.getPixelRatio() },
            uScale: { value: patternScale },
            uDensity: { value: patternDensity },
            uPixelJitter: { value: pixelSizeJitter },
            uEnableRipples: { value: enableRipples ? 1 : 0 },
            uRippleSpeed: { value: rippleSpeed },
            uRippleThickness: { value: rippleThickness },
            uRippleIntensity: { value: rippleIntensityScale },
            uEdgeFade: { value: edgeFade },
        }

        const scene = new THREE.Scene()
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
        const material = new THREE.ShaderMaterial({
            vertexShader: VERTEX_SRC,
            fragmentShader: FRAGMENT_SRC,
            uniforms,
            transparent: true,
            depthTest: false,
            depthWrite: false,
            glslVersion: THREE.GLSL3,
        })
        const geometry = new THREE.PlaneGeometry(2, 2)
        const quad = new THREE.Mesh(geometry, material)
        scene.add(quad)

        let composer: EffectComposer | undefined
        let touch: TouchTexture | undefined
        let liquidEffect: Effect | undefined
        // `EffectPass.effects` é privado na tipagem do postprocessing, então
        // os efeitos que precisam de tempo são guardados na criação em vez de
        // redescobertos passe a passe a cada quadro.
        const timedEffects: Effect[] = []

        if (liquid) {
            touch = createTouchTexture() ?? undefined
            if (touch) {
                touch.radiusScale = liquidRadius
                composer = new EffectComposer(renderer)
                composer.addPass(new RenderPass(scene, camera))
                liquidEffect = createLiquidEffect(touch.texture, {
                    strength: liquidStrength,
                    freq: liquidWobbleSpeed,
                })
                timedEffects.push(liquidEffect)
                const pass = new EffectPass(camera, liquidEffect)
                pass.renderToScreen = true
                composer.addPass(pass)
            }
        }

        if (noiseAmount > 0) {
            if (!composer) {
                composer = new EffectComposer(renderer)
                composer.addPass(new RenderPass(scene, camera))
            }
            const noiseEffect = new Effect('NoiseEffect', NOISE_FRAG, {
                uniforms: new Map<string, THREE.Uniform>([
                    ['uTime', new THREE.Uniform(0)],
                    ['uAmount', new THREE.Uniform(noiseAmount)],
                ]),
            })
            timedEffects.push(noiseEffect)
            for (const pass of composer.passes) pass.renderToScreen = false
            const noisePass = new EffectPass(camera, noiseEffect)
            noisePass.renderToScreen = true
            composer.addPass(noisePass)
        }

        const field: FieldState = {
            renderer,
            scene,
            camera,
            material,
            quad,
            uniforms,
            composer,
            touch,
            liquidEffect,
            clickIx: 0,
        }
        fieldRef.current = field

        const teardown = () => {
            fieldRef.current = null
            container.removeAttribute('data-pixel-field')
            geometry.dispose()
            material.dispose()
            touch?.dispose()
            composer?.dispose()
            renderer.dispose()
            renderer.forceContextLoss()
            if (renderer.domElement.parentElement === container) {
                container.removeChild(renderer.domElement)
            }
        }

        /* --- Medidas ------------------------------------------------------ */
        let rect = renderer.domElement.getBoundingClientRect()

        const setSize = () => {
            const w = container.clientWidth || 1
            const h = container.clientHeight || 1
            renderer.setSize(w, h, false)
            uniforms.uResolution.value.set(
                renderer.domElement.width,
                renderer.domElement.height
            )
            uniforms.uPixelSize.value = pixelSize * renderer.getPixelRatio()
            composer?.setSize(
                renderer.domElement.width,
                renderer.domElement.height
            )
            rect = renderer.domElement.getBoundingClientRect()
        }
        setSize()

        const resizeObserver = new ResizeObserver(setSize)
        resizeObserver.observe(container)

        // O rect só muda com layout e scroll, então ele é medido nesses dois
        // momentos em vez de a cada pointermove.
        let scrollRaf = 0
        const onScroll = () => {
            if (scrollRaf) return
            scrollRaf = requestAnimationFrame(() => {
                scrollRaf = 0
                rect = renderer.domElement.getBoundingClientRect()
            })
        }
        window.addEventListener('scroll', onScroll, { passive: true })

        /* --- Ponteiro ----------------------------------------------------- */
        const toField = (event: PointerEvent) => {
            if (rect.width === 0 || rect.height === 0) return null
            const px = event.clientX - rect.left
            const py = event.clientY - rect.top
            if (px < 0 || py < 0 || px > rect.width || py > rect.height) {
                return null
            }
            const el = renderer.domElement
            return {
                fx: px * (el.width / rect.width),
                fy: (rect.height - py) * (el.height / rect.height),
                w: el.width,
                h: el.height,
            }
        }

        const onPointerMove = (event: PointerEvent) => {
            if (!touch) return
            const p = toField(event)
            if (!p) return
            touch.addTouch({ x: p.fx / p.w, y: p.fy / p.h })
        }

        const onPointerDown = (event: PointerEvent) => {
            const p = toField(event)
            if (!p) return
            const ix = field.clickIx
            ;(uniforms.uClickPos.value as THREE.Vector2[])[ix].set(p.fx, p.fy)
            ;(uniforms.uClickTimes.value as Float32Array)[ix] =
                uniforms.uTime.value
            field.clickIx = (ix + 1) % MAX_CLICKS
        }

        window.addEventListener('pointermove', onPointerMove, { passive: true })
        window.addEventListener('pointerdown', onPointerDown, { passive: true })

        container.dataset.pixelField = 'on'

        /* --- Laço --------------------------------------------------------- */
        const clock = new THREE.Clock()
        const timeOffset = Math.random() * 1000

        const draw = () => {
            if (composer) {
                touch?.update()
                for (const effect of timedEffects) {
                    const u = effect.uniforms.get('uTime')
                    if (u) u.value = uniforms.uTime.value
                }
                composer.render()
            } else {
                renderer.render(scene, camera)
            }
        }

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')

        // Movimento reduzido: um quadro e pronto. O campo continua na sala,
        // apenas parado.
        if (reduced.matches) {
            uniforms.uTime.value = timeOffset
            draw()
            const onResizeStatic = () => {
                setSize()
                draw()
            }
            const staticObserver = new ResizeObserver(onResizeStatic)
            staticObserver.observe(container)
            return () => {
                staticObserver.disconnect()
                resizeObserver.disconnect()
                window.removeEventListener('scroll', onScroll)
                window.removeEventListener('pointermove', onPointerMove)
                window.removeEventListener('pointerdown', onPointerDown)
                if (scrollRaf) cancelAnimationFrame(scrollRaf)
                teardown()
            }
        }

        let onScreen = true
        let visible = true
        let raf = 0

        const intersection = new IntersectionObserver(
            ([entry]) => {
                onScreen = entry.isIntersecting
                visible = onScreen && !document.hidden
            },
            { rootMargin: '96px' }
        )
        if (autoPauseOffscreen) intersection.observe(container)

        const onVisibility = () => {
            visible = onScreen && !document.hidden
        }
        document.addEventListener('visibilitychange', onVisibility)

        const animate = () => {
            raf = requestAnimationFrame(animate)
            if (autoPauseOffscreen && !visible) return

            uniforms.uTime.value =
                timeOffset + clock.getElapsedTime() * speedRef.current
            draw()
        }
        raf = requestAnimationFrame(animate)

        return () => {
            cancelAnimationFrame(raf)
            if (scrollRaf) cancelAnimationFrame(scrollRaf)
            intersection.disconnect()
            resizeObserver.disconnect()
            document.removeEventListener('visibilitychange', onVisibility)
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('pointermove', onPointerMove)
            window.removeEventListener('pointerdown', onPointerDown)
            teardown()
        }
        // Só as props que exigem reconstruir o contexto entram aqui. As
        // demais são lidas uma vez na criação e daí em diante pertencem ao
        // efeito de sincronização abaixo, que roda logo em seguida.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [antialias, liquid, noiseAmount, autoPauseOffscreen, maxPixelRatio])

    /* --- Sincronização de uniformes --------------------------------------- */
    useEffect(() => {
        const field = fieldRef.current
        if (!field) return
        const { uniforms, renderer } = field

        uniforms.uShapeType.value = SHAPE_MAP[variant] ?? 0
        uniforms.uPixelSize.value = pixelSize * renderer.getPixelRatio()
        ;(uniforms.uColor.value as THREE.Color).set(color)
        uniforms.uScale.value = patternScale
        uniforms.uDensity.value = patternDensity
        uniforms.uPixelJitter.value = pixelSizeJitter
        uniforms.uEnableRipples.value = enableRipples ? 1 : 0
        uniforms.uRippleIntensity.value = rippleIntensityScale
        uniforms.uRippleThickness.value = rippleThickness
        uniforms.uRippleSpeed.value = rippleSpeed
        uniforms.uEdgeFade.value = edgeFade

        if (transparent) renderer.setClearAlpha(0)
        else renderer.setClearColor(0x000000, 1)

        if (field.liquidEffect) {
            const strength = field.liquidEffect.uniforms.get('uStrength')
            if (strength) strength.value = liquidStrength
            const freq = field.liquidEffect.uniforms.get('uFreq')
            if (freq) freq.value = liquidWobbleSpeed
        }
        if (field.touch) field.touch.radiusScale = liquidRadius
    }, [
        variant,
        pixelSize,
        color,
        patternScale,
        patternDensity,
        pixelSizeJitter,
        enableRipples,
        rippleIntensityScale,
        rippleThickness,
        rippleSpeed,
        edgeFade,
        transparent,
        liquidStrength,
        liquidWobbleSpeed,
        liquidRadius,
    ])

    return (
        <div
            ref={containerRef}
            aria-hidden
            className={className}
            style={style}
        />
    )
}
