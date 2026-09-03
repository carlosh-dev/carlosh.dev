/**
 * Campo de luz volumétrica do hero.
 *
 * Um único quad em WebGL1 desenha a fonte de luz da "Regra da Fonte Única":
 * lóbulos violeta contínuos, com domain warp, que derivam sozinhos e se
 * inclinam na direção do ponteiro. Nada de partículas — é emissão contínua,
 * composta sobre o obsidiano via `mix-blend-mode: screen`, então o shader
 * escreve luz (preto = ausência de luz) e o navegador soma.
 *
 * WebGL1/GLSL ES 1.00 de propósito: suporte universal, inclusive iOS antigo.
 */

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`

const FRAG = `
precision mediump float;

uniform vec2  uRes;
uniform float uTime;
uniform vec2  uLight;     // 0..1, origem no topo-esquerdo (igual ao DOM)
uniform float uIntensity; // 0 = luz ambiente, 1 = ponteiro engajado

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 3; i++) {
        v += a * vnoise(p);
        p = p * 2.03 + 17.3;
        a *= 0.5;
    }
    return v;
}

void main() {
    vec2 uv = gl_FragCoord.xy / uRes;
    uv.y = 1.0 - uv.y;

    // Num hero retrato (mobile) a largura real é fração da altura, então os
    // lóbulos não teriam espaço para cair horizontalmente e a luz virava uma
    // lavagem chapada. O piso no aspecto devolve o decaimento lateral.
    float aspect = max(uRes.x / uRes.y, 0.62);
    vec2 p = vec2(uv.x * aspect, uv.y);
    float t = uTime * 0.045;

    // E, sem ponteiro para justificar tanta luz, o retrato pede menos amplitude.
    float portrait = smoothstep(1.0, 0.6, uRes.x / uRes.y);

    // Domain warp: os lóbulos nunca podem ler como círculo limpo.
    vec2 w = vec2(
        fbm(p * 1.6 + vec2(t, -t * 0.7)),
        fbm(p * 1.6 + vec2(4.7 - t * 0.6, 2.1 + t))
    );
    vec2 q = p + (w - 0.5) * 0.30;

    // Luz principal — a que segue o ponteiro.
    vec2 key = vec2(uLight.x * aspect, uLight.y);
    float dk = length(q - key);
    float keyLobe = exp(-dk * dk * 4.6);

    // Luz de preenchimento: mantém a sala acesa quando nada se move.
    vec2 fillPos = vec2(
        (0.74 + 0.05 * sin(t * 0.9)) * aspect,
        0.20 + 0.05 * cos(t * 0.7)
    );
    float df = length(q - fillPos);
    float fillLobe = exp(-df * df * 2.6) * 0.30;

    // Cama larga, para a faixa inteira ler como iluminada e não como dois spots.
    float db = length(p - vec2(0.5 * aspect, 0.45));
    float bed = exp(-db * db * 1.1) * 0.05;

    float e = keyLobe * (0.42 + 0.58 * uIntensity) + fillLobe + bed;
    e *= 0.58 + 0.42 * fbm(q * 2.4 + t * 0.5);
    e = clamp(e, 0.0, 1.0);

    vec3 core = vec3(0.627, 0.470, 1.000); // #a078ff
    vec3 deep = vec3(0.427, 0.157, 0.851); // #6d28d9
    // O teto é baixo de propósito: a sala tem que continuar obsidiana. A luz
    // é um bloom dentro do quarto escuro, não uma troca de fundo.
    vec3 col = mix(deep, core, clamp(e * 1.35, 0.0, 1.0)) * e * mix(0.46, 0.33, portrait);

    // Dither estático: rampas violeta em quase-preto fazem banding feio em 8 bits.
    col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;

    gl_FragColor = vec4(max(col, 0.0), 1.0);
}
`

export type LightField = {
    resize: () => void
    render: (timeSec: number, lx: number, ly: number, intensity: number) => void
    dispose: () => void
}

function compile(gl: WebGLRenderingContext, type: number, src: string) {
    const shader = gl.createShader(type)
    if (!shader) return null
    gl.shaderSource(shader, src)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader)
        return null
    }
    return shader
}

/** Escala de render: o campo é todo de baixa frequência, então metade da
 *  resolução é indistinguível e ~4x mais barata. DPR fica travado em 1. */
const RENDER_SCALE = 0.5

export function createLightField(canvas: HTMLCanvasElement): LightField | null {
    let gl: WebGLRenderingContext | null = null
    try {
        // `failIfMajorPerformanceCaveat` é intencional: em máquinas sem GPU
        // real o contexto não é criado e o hero cai nos orbes CSS, que já são
        // um estado acabado. Melhor a versão estática do que uma com jank.
        gl = canvas.getContext('webgl', {
            alpha: false,
            antialias: false,
            depth: false,
            stencil: false,
            powerPreference: 'low-power',
            failIfMajorPerformanceCaveat: true,
        })
    } catch {
        return null
    }
    if (!gl) return null

    const vs = compile(gl, gl.VERTEX_SHADER, VERT)
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG)
    const program = gl.createProgram()
    if (!vs || !fs || !program) return null

    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null
    gl.useProgram(program)

    // Triângulo único cobrindo a tela — mais barato que dois triângulos.
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 3, -1, -1, 3]),
        gl.STATIC_DRAW
    )
    const aPos = gl.getAttribLocation(program, 'aPos')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(program, 'uRes')
    const uTime = gl.getUniformLocation(program, 'uTime')
    const uLight = gl.getUniformLocation(program, 'uLight')
    const uIntensity = gl.getUniformLocation(program, 'uIntensity')

    const context = gl

    const resize = () => {
        const w = Math.max(1, Math.round(canvas.clientWidth * RENDER_SCALE))
        const h = Math.max(1, Math.round(canvas.clientHeight * RENDER_SCALE))
        if (canvas.width === w && canvas.height === h) return
        canvas.width = w
        canvas.height = h
        context.viewport(0, 0, w, h)
        context.uniform2f(uRes, w, h)
    }

    resize()

    return {
        resize,
        render(timeSec, lx, ly, intensity) {
            context.uniform1f(uTime, timeSec)
            context.uniform2f(uLight, lx, ly)
            context.uniform1f(uIntensity, intensity)
            context.drawArrays(context.TRIANGLES, 0, 3)
        },
        dispose() {
            context.deleteBuffer(buffer)
            context.deleteProgram(program)
            context.deleteShader(vs)
            context.deleteShader(fs)
            context.getExtension('WEBGL_lose_context')?.loseContext()
        },
    }
}
