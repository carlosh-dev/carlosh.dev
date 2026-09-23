'use client'

import { Color, Mesh, Program, Renderer, Triangle } from 'ogl'
import { useEffect, useRef } from 'react'

/**
 * FaultyTerminal — grade de glifos com glitch, portada do React Bits.
 *
 * Divergências em relação à fonte, pelos mesmos motivos do campo anterior:
 *
 * 1. Ponteiro escutado na `window`, não no container. O canvas fica atrás do
 *    conteúdo do hero com `pointer-events:none`; mapeando pelo rect dele a
 *    reação ao mouse atravessa headline, CTAs e retrato.
 * 2. Pausa fora da tela (IntersectionObserver + `visibilitychange`).
 * 3. `prefers-reduced-motion` desenha um quadro e para.
 * 4. DPR lido dentro do efeito — o default da fonte tocava `window` no
 *    render e quebrava o SSR.
 * 5. Fade-in por CSS via `data-field='on'`, no lugar do `pageLoadAnimation`.
 */

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragmentShader = `
precision mediump float;

varying vec2 vUv;

uniform float iTime;
uniform vec3  iResolution;
uniform float uScale;

uniform vec2  uGridMul;
uniform float uDigitSize;
uniform float uScanlineIntensity;
uniform float uGlitchAmount;
uniform float uFlickerAmount;
uniform float uNoiseAmp;
uniform float uChromaticAberration;
uniform float uDither;
uniform float uCurvature;
uniform vec3  uTint;
uniform vec2  uMouse;
uniform float uMouseStrength;
uniform float uUseMouse;
uniform float uBrightness;

float time;

float hash21(vec2 p){
  p = fract(p * 234.56);
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}

float noise(vec2 p)
{
  return sin(p.x * 10.0) * sin(p.y * (3.0 + sin(time * 0.090909))) + 0.2;
}

mat2 rotate(float angle)
{
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c);
}

float fbm(vec2 p)
{
  p *= 1.1;
  float f = 0.0;
  float amp = 0.5 * uNoiseAmp;

  mat2 modify0 = rotate(time * 0.02);
  f += amp * noise(p);
  p = modify0 * p * 2.0;
  amp *= 0.454545;

  mat2 modify1 = rotate(time * 0.02);
  f += amp * noise(p);
  p = modify1 * p * 2.0;
  amp *= 0.454545;

  mat2 modify2 = rotate(time * 0.08);
  f += amp * noise(p);

  return f;
}

float pattern(vec2 p, out vec2 q, out vec2 r) {
  vec2 offset1 = vec2(1.0);
  vec2 offset0 = vec2(0.0);
  mat2 rot01 = rotate(0.1 * time);
  mat2 rot1 = rotate(0.1);

  q = vec2(fbm(p + offset1), fbm(rot01 * p + offset1));
  r = vec2(fbm(rot1 * q + offset0), fbm(q + offset0));
  return fbm(p + r);
}

float digit(vec2 p){
    vec2 grid = uGridMul * 15.0;
    vec2 s = floor(p * grid) / grid;
    p = p * grid;
    vec2 q, r;
    float intensity = pattern(s * 0.1, q, r) * 1.3 - 0.03;

    if(uUseMouse > 0.5){
        vec2 mouseWorld = uMouse * uScale;
        float distToMouse = distance(s, mouseWorld);
        float mouseInfluence = exp(-distToMouse * 8.0) * uMouseStrength * 10.0;
        intensity += mouseInfluence;

        float ripple = sin(distToMouse * 20.0 - iTime * 5.0) * 0.1 * mouseInfluence;
        intensity += ripple;
    }

    p = fract(p);
    p *= uDigitSize;

    float px5 = p.x * 5.0;
    float py5 = (1.0 - p.y) * 5.0;
    float x = fract(px5);
    float y = fract(py5);

    float i = floor(py5) - 2.0;
    float j = floor(px5) - 2.0;
    float n = i * i + j * j;
    float f = n * 0.0625;

    float isOn = step(0.1, intensity - f);
    float brightness = isOn * (0.2 + y * 0.8) * (0.75 + x * 0.25);

    return step(0.0, p.x) * step(p.x, 1.0) * step(0.0, p.y) * step(p.y, 1.0) * brightness;
}

float onOff(float a, float b, float c)
{
  return step(c, sin(iTime + a * cos(iTime * b))) * uFlickerAmount;
}

float displace(vec2 look)
{
    float y = look.y - mod(iTime * 0.25, 1.0);
    float window = 1.0 / (1.0 + 50.0 * y * y);
    return sin(look.y * 20.0 + iTime) * 0.0125 * onOff(4.0, 2.0, 0.8) * (1.0 + cos(iTime * 60.0)) * window;
}

vec3 getColor(vec2 p){

    float bar = step(mod(p.y + time * 20.0, 1.0), 0.2) * 0.4 + 1.0;
    bar *= uScanlineIntensity;

    float displacement = displace(p);
    p.x += displacement;

    if (uGlitchAmount != 1.0) {
      float extra = displacement * (uGlitchAmount - 1.0);
      p.x += extra;
    }

    float middle = digit(p);

    const float off = 0.002;
    float sum = digit(p + vec2(-off, -off)) + digit(p + vec2(0.0, -off)) + digit(p + vec2(off, -off)) +
                digit(p + vec2(-off, 0.0)) + digit(p + vec2(0.0, 0.0)) + digit(p + vec2(off, 0.0)) +
                digit(p + vec2(-off, off)) + digit(p + vec2(0.0, off)) + digit(p + vec2(off, off));

    vec3 baseColor = vec3(0.9) * middle + sum * 0.1 * vec3(1.0) * bar;
    return baseColor;
}

vec2 barrel(vec2 uv){
  vec2 c = uv * 2.0 - 1.0;
  float r2 = dot(c, c);
  c *= 1.0 + uCurvature * r2;
  return c * 0.5 + 0.5;
}

void main() {
    time = iTime * 0.333333;
    vec2 uv = vUv;

    if(uCurvature != 0.0){
      uv = barrel(uv);
    }

    vec2 p = uv * uScale;
    vec3 col = getColor(p);

    if(uChromaticAberration != 0.0){
      vec2 ca = vec2(uChromaticAberration) / iResolution.xy;
      col.r = getColor(p + ca).r;
      col.b = getColor(p - ca).b;
    }

    col *= uTint;
    col *= uBrightness;

    if(uDither > 0.0){
      float rnd = hash21(gl_FragCoord.xy);
      col += (rnd - 0.5) * (uDither * 0.003922);
    }

    gl_FragColor = vec4(col, 1.0);
}
`

function hexToRgb(hex: string): [number, number, number] {
    let h = hex.replace('#', '').trim()
    if (h.length === 3) h = [...h].map((c) => c + c).join('')
    const num = parseInt(h.slice(0, 6), 16)
    return [((num >> 16) & 255) / 255, ((num >> 8) & 255) / 255, (num & 255) / 255]
}

export type FaultyTerminalProps = {
    scale?: number
    gridMul?: [number, number]
    digitSize?: number
    timeScale?: number
    scanlineIntensity?: number
    glitchAmount?: number
    flickerAmount?: number
    noiseAmp?: number
    chromaticAberration?: number
    dither?: number
    curvature?: number
    tint?: string
    mouseReact?: boolean
    mouseStrength?: number
    maxPixelRatio?: number
    brightness?: number
    className?: string
}

export default function FaultyTerminal({
    scale = 1,
    gridMul = [2, 1],
    digitSize = 1.5,
    timeScale = 0.3,
    scanlineIntensity = 0.3,
    glitchAmount = 1,
    flickerAmount = 1,
    noiseAmp = 1,
    chromaticAberration = 0,
    dither = 0,
    curvature = 0.2,
    tint = '#ffffff',
    mouseReact = true,
    mouseStrength = 0.2,
    maxPixelRatio = 1.5,
    brightness = 1,
    className,
}: FaultyTerminalProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [gridX, gridY] = gridMul

    useEffect(() => {
        const ctn = containerRef.current
        if (!ctn) return

        const renderer = new Renderer({
            dpr: Math.min(window.devicePixelRatio || 1, maxPixelRatio),
        })
        const gl = renderer.gl
        gl.clearColor(0, 0, 0, 1)

        const [r, g, b] = hexToRgb(tint)
        const program = new Program(gl, {
            vertex: vertexShader,
            fragment: fragmentShader,
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new Color(1, 1, 1) },
                uScale: { value: scale },
                uGridMul: { value: new Float32Array([gridX, gridY]) },
                uDigitSize: { value: digitSize },
                uScanlineIntensity: { value: scanlineIntensity },
                uGlitchAmount: { value: glitchAmount },
                uFlickerAmount: { value: flickerAmount },
                uNoiseAmp: { value: noiseAmp },
                uChromaticAberration: { value: chromaticAberration },
                uDither: { value: dither },
                uCurvature: { value: curvature },
                uTint: { value: new Color(r, g, b) },
                uMouse: { value: new Float32Array([0.5, 0.5]) },
                uMouseStrength: { value: mouseStrength },
                uUseMouse: { value: mouseReact ? 1 : 0 },
                uBrightness: { value: brightness },
            },
        })
        const mesh = new Mesh(gl, { geometry: new Triangle(gl), program })

        const resize = () => {
            renderer.setSize(ctn.offsetWidth, ctn.offsetHeight)
            program.uniforms.iResolution.value = new Color(
                gl.canvas.width,
                gl.canvas.height,
                gl.canvas.width / gl.canvas.height
            )
        }
        const resizeObserver = new ResizeObserver(resize)
        resizeObserver.observe(ctn)
        resize()

        const mouse = { x: 0.5, y: 0.5 }
        const smooth = { x: 0.5, y: 0.5 }
        const onPointerMove = (e: PointerEvent) => {
            const rect = ctn.getBoundingClientRect()
            mouse.x = (e.clientX - rect.left) / rect.width
            mouse.y = 1 - (e.clientY - rect.top) / rect.height
        }
        if (mouseReact) window.addEventListener('pointermove', onPointerMove, { passive: true })

        const timeOffset = Math.random() * 100
        const draw = (t: number) => {
            program.uniforms.iTime.value = (t * 0.001 + timeOffset) * timeScale
            if (mouseReact) {
                smooth.x += (mouse.x - smooth.x) * 0.08
                smooth.y += (mouse.y - smooth.y) * 0.08
                const m = program.uniforms.uMouse.value as Float32Array
                m[0] = smooth.x
                m[1] = smooth.y
            }
            renderer.render({ scene: mesh })
        }

        let raf = 0
        let onScreen = true
        const loop = (t: number) => {
            draw(t)
            raf = requestAnimationFrame(loop)
        }
        const sync = () => {
            cancelAnimationFrame(raf)
            raf = 0
            if (onScreen && !document.hidden) raf = requestAnimationFrame(loop)
        }

        ctn.appendChild(gl.canvas)
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        let io: IntersectionObserver | undefined
        if (reduced) {
            draw(0)
        } else {
            io = new IntersectionObserver(([entry]) => {
                onScreen = entry.isIntersecting
                sync()
            })
            io.observe(ctn)
            document.addEventListener('visibilitychange', sync)
        }
        ctn.dataset.field = 'on'

        return () => {
            cancelAnimationFrame(raf)
            resizeObserver.disconnect()
            io?.disconnect()
            document.removeEventListener('visibilitychange', sync)
            window.removeEventListener('pointermove', onPointerMove)
            ctn.removeAttribute('data-field')
            gl.canvas.remove()
            gl.getExtension('WEBGL_lose_context')?.loseContext()
        }
    }, [
        scale,
        gridX,
        gridY,
        digitSize,
        timeScale,
        scanlineIntensity,
        glitchAmount,
        flickerAmount,
        noiseAmp,
        chromaticAberration,
        dither,
        curvature,
        tint,
        mouseReact,
        mouseStrength,
        maxPixelRatio,
        brightness,
    ])

    return <div ref={containerRef} className={className} />
}
