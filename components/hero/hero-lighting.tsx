'use client'

import { useEffect, useRef } from 'react'

import { createLightField, type LightField } from './light-field'

/**
 * Controlador da fonte de luz do hero.
 *
 * Existe uma única luz. Ela alimenta duas coisas ao mesmo tempo — o campo
 * volumétrico em WebGL (a luz em si) e as hairlines de 1px de cada superfície
 * marcada com `data-lit` (as superfícies pegando essa luz). É por isso que as
 * duas concordam entre si em vez de parecerem dois efeitos empilhados.
 *
 * Custo por frame: duas escritas de custom property na raiz. Cada elemento
 * guarda o próprio offset (`--lit-ox/--lit-oy`), medido só quando o layout
 * muda, e o CSS resolve a posição local da luz sozinho.
 */

/** Posição de repouso da luz, em fração do hero. */
const REST_X = 0.26
const REST_Y = 0.24

/** Suavização exponencial — a luz tem inércia, não teleporta. */
const EASE_POS = 0.075
const EASE_INT = 0.05

/** Tempo sem ponteiro até a luz voltar a derivar sozinha. */
const IDLE_MS = 2200

export default function HeroLighting({
    className,
    children,
}: {
    className?: string
    children: React.ReactNode
}) {
    const rootRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const root = rootRef.current
        const canvas = canvasRef.current
        if (!root || !canvas) return

        const lit = Array.from(root.querySelectorAll<HTMLElement>('[data-lit]'))
        let rect = root.getBoundingClientRect()

        const field: LightField | null = createLightField(canvas)
        if (field) root.dataset.lightfield = 'on'

        /** Offsets locais só mudam quando o layout muda, não a cada frame. */
        const measure = () => {
            rect = root.getBoundingClientRect()
            for (const el of lit) {
                const r = el.getBoundingClientRect()
                el.style.setProperty('--lit-ox', `${r.left - rect.left}px`)
                el.style.setProperty('--lit-oy', `${r.top - rect.top}px`)
            }
            field?.resize()
        }

        const write = (x: number, y: number, strength: number) => {
            root.style.setProperty('--lit-x', `${x * rect.width}px`)
            root.style.setProperty('--lit-y', `${y * rect.height}px`)
            root.style.setProperty('--lit-strength', strength.toFixed(3))
        }

        measure()

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')

        // Sem movimento: a luz fica parada num ponto agradável e o shader
        // desenha um frame só. Continua sendo uma sala iluminada.
        if (reduced.matches) {
            write(REST_X, REST_Y, 0.72)
            field?.render(6, REST_X, REST_Y, 0)
            const onResize = () => {
                measure()
                field?.render(6, REST_X, REST_Y, 0)
            }
            window.addEventListener('resize', onResize)
            return () => {
                window.removeEventListener('resize', onResize)
                field?.dispose()
            }
        }

        let curX = REST_X
        let curY = REST_Y
        let curInt = 0
        let tgtInt = 0
        let pointerX = REST_X
        let pointerY = REST_Y
        let lastPointer = -Infinity
        let onScreen = true
        let visible = true
        let raf = 0

        const fine = window.matchMedia('(hover: hover) and (pointer: fine)')

        const onPointerMove = (event: PointerEvent) => {
            if (!fine.matches) return
            const nx = (event.clientX - rect.left) / Math.max(1, rect.width)
            const ny = (event.clientY - rect.top) / Math.max(1, rect.height)
            // Um cursor parado no rodapé não pode arrastar a luz para fora da
            // sala: fora dessa margem o hero volta a se iluminar sozinho.
            if (ny < -0.4 || ny > 1.4) return
            pointerX = Math.min(1.25, Math.max(-0.25, nx))
            pointerY = ny
            lastPointer = event.timeStamp
            tgtInt = 1
        }

        const onPointerLeave = () => {
            lastPointer = -Infinity
            tgtInt = 0
        }

        const frame = (now: number) => {
            raf = requestAnimationFrame(frame)
            if (!visible) return

            const t = now / 1000
            const engaged = now - lastPointer < IDLE_MS

            // Repouso: uma órbita lenta o bastante para ler como ar da sala,
            // não como animação.
            const driftX = REST_X + 0.1 * Math.sin(t * 0.11)
            const driftY = REST_Y + 0.07 * Math.cos(t * 0.09)

            const tgtX = engaged ? pointerX : driftX
            const tgtY = engaged ? pointerY : driftY
            if (!engaged) tgtInt = 0

            curX += (tgtX - curX) * EASE_POS
            curY += (tgtY - curY) * EASE_POS
            curInt += (tgtInt - curInt) * EASE_INT

            // A intensidade sobe do zero na carga, então a luz "acende".
            const strength = 0.55 + 0.45 * curInt
            write(curX, curY, strength)
            field?.render(t, curX, curY, curInt)
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                onScreen = entry.isIntersecting
                visible = onScreen && !document.hidden
            },
            { rootMargin: '96px' }
        )
        observer.observe(root)

        const onVisibility = () => {
            visible = onScreen && !document.hidden
        }

        const resizeObserver = new ResizeObserver(measure)
        resizeObserver.observe(root)

        // Scroll só desloca o hero na viewport; os offsets locais seguem válidos.
        let scrollRaf = 0
        const onScroll = () => {
            if (scrollRaf) return
            scrollRaf = requestAnimationFrame(() => {
                scrollRaf = 0
                rect = root.getBoundingClientRect()
            })
        }

        window.addEventListener('pointermove', onPointerMove, { passive: true })
        window.addEventListener('pointerdown', onPointerMove, { passive: true })
        document.addEventListener('pointerleave', onPointerLeave)
        window.addEventListener('scroll', onScroll, { passive: true })
        document.addEventListener('visibilitychange', onVisibility)
        raf = requestAnimationFrame(frame)

        return () => {
            cancelAnimationFrame(raf)
            if (scrollRaf) cancelAnimationFrame(scrollRaf)
            observer.disconnect()
            resizeObserver.disconnect()
            window.removeEventListener('pointermove', onPointerMove)
            window.removeEventListener('pointerdown', onPointerMove)
            document.removeEventListener('pointerleave', onPointerLeave)
            window.removeEventListener('scroll', onScroll)
            document.removeEventListener('visibilitychange', onVisibility)
            field?.dispose()
        }
    }, [])

    return (
        <div ref={rootRef} className={className}>
            <canvas
                ref={canvasRef}
                aria-hidden
                className="hero-lightfield pointer-events-none absolute inset-0 -z-10 size-full mix-blend-screen"
            />
            {children}
        </div>
    )
}
