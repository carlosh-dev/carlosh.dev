'use client'

import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { useEffect } from 'react'

/* Inércia na roda/trackpad. Âncoras passam pelo Lenis também, que já
   respeita o scroll-margin-top das seções e o reduced-motion. */
export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({ autoRaf: true, anchors: true })
        return () => lenis.destroy()
    }, [])

    return null
}
