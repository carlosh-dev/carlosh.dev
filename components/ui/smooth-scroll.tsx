'use client'

import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { useEffect } from 'react'

/* Inércia na roda/trackpad. Âncoras passam pelo Lenis também, que já
   respeita o scroll-margin-top das seções e o reduced-motion.

   Parallax: todo `[data-parallax="0.2"]` desliza em `translate` (não em
   `transform`, para não brigar com animações como o float) na proporção da
   distância do seu centro ao centro da tela. Positivo anda mais devagar que
   a página, negativo mais rápido. */
export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({ autoRaf: true, anchors: true })
        if (lenis.prefersReducedMotion) return () => lenis.destroy()

        // ponytail: a página é estática; se surgir conteúdo montado depois, re-consultar aqui.
        const items = [
            ...document.querySelectorAll<HTMLElement>('[data-parallax]'),
        ].map((el) => ({ el, speed: Number(el.dataset.parallax), y: 0 }))

        const update = () => {
            const mid = window.innerHeight / 2
            // Lê tudo antes de escrever, descontando o deslocamento já
            // aplicado, para medir a posição real sem reflow a cada item.
            const next = items.map(({ el, speed, y }) => {
                const r = el.getBoundingClientRect()
                return (mid - (r.top - y + r.height / 2)) * speed
            })
            items.forEach((item, i) => {
                item.y = next[i]
                item.el.style.translate = `0 ${next[i].toFixed(1)}px`
            })
        }

        update()
        const off = lenis.on('scroll', update)
        window.addEventListener('resize', update)
        return () => {
            off()
            window.removeEventListener('resize', update)
            lenis.destroy()
        }
    }, [])

    return null
}
