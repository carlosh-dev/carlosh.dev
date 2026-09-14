'use client'

import { useEffect, useRef } from 'react'

/* Mesmo alvo que já ganha o anel violeta ao passar o mouse em qualquer
   outro lugar do sistema (nav, cards, chips) — o cursor só amplia um
   sinal que a página já dá, não inventa um novo. */
const INTERACTIVE_SELECTOR =
    'a, button, input, textarea, select, summary, [role="button"], [data-cursor="link"]'

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null)
    const ringRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const fine = window.matchMedia('(pointer: fine)').matches
        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches
        const dot = dotRef.current
        const ring = ringRef.current
        if (!fine || reduceMotion || !dot || !ring) return

        document.documentElement.dataset.customCursor = 'active'

        let x = window.innerWidth / 2
        let y = window.innerHeight / 2
        let ringX = x
        let ringY = y
        let raf = 0

        const setVisible = (visible: boolean) => {
            const opacity = visible ? '1' : '0'
            dot.style.opacity = opacity
            ring.style.opacity = opacity
        }

        const handleMove = (event: PointerEvent) => {
            x = event.clientX
            y = event.clientY
            dot.style.transform = `translate3d(${x}px, ${y}px, 0)`
            setVisible(true)
        }

        const handleOver = (event: PointerEvent) => {
            if (
                event.target instanceof Element &&
                event.target.closest(INTERACTIVE_SELECTOR)
            ) {
                ring.dataset.state = 'hover'
            }
        }

        const handleOut = (event: PointerEvent) => {
            const related = event.relatedTarget
            const stillInside =
                related instanceof Element &&
                related.closest(INTERACTIVE_SELECTOR)
            if (!stillInside) ring.dataset.state = 'idle'
        }

        const handleDown = () => {
            ring.dataset.pressed = 'true'
        }
        const handleUp = () => {
            delete ring.dataset.pressed
        }
        const handleLeaveWindow = () => setVisible(false)

        /* O ponto acompanha o mouse quadro a quadro; o anel some atrás por
           inércia (lerp) — a mesma folga de mola que já rege a pílula do
           nav, só que aqui contínua em vez de disparada por clique. */
        const tick = () => {
            ringX += (x - ringX) * 0.18
            ringY += (y - ringY) * 0.18
            ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
            raf = requestAnimationFrame(tick)
        }

        window.addEventListener('pointermove', handleMove, { passive: true })
        document.addEventListener('pointerover', handleOver, {
            passive: true,
        })
        document.addEventListener('pointerout', handleOut, { passive: true })
        window.addEventListener('pointerdown', handleDown, { passive: true })
        window.addEventListener('pointerup', handleUp, { passive: true })
        document.addEventListener('mouseleave', handleLeaveWindow)
        raf = requestAnimationFrame(tick)

        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('pointermove', handleMove)
            document.removeEventListener('pointerover', handleOver)
            document.removeEventListener('pointerout', handleOut)
            window.removeEventListener('pointerdown', handleDown)
            window.removeEventListener('pointerup', handleUp)
            document.removeEventListener('mouseleave', handleLeaveWindow)
            delete document.documentElement.dataset.customCursor
        }
    }, [])

    return (
        <div aria-hidden className="fixed inset-0 z-100 pointer-events-none">
            <div ref={dotRef} className="custom-cursor-dot opacity-0" />
            <div
                ref={ringRef}
                data-state="idle"
                className="custom-cursor-ring opacity-0"
            />
        </div>
    )
}
