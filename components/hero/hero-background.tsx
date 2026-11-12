'use client'

import { useState } from 'react'

import AeroShards from '@/components/hero/aero-shards'
import FaultyTerminal from '@/components/hero/faulty-terminal'

/**
 * Campo do hero: AeroShards (WebGPU). Sem WebGPU — Firefox, Safari antigo —
 * cai no FaultyTerminal (WebGL) para o hero não ficar vazio.
 */
export default function HeroBackground() {
    const [fallback, setFallback] = useState(false)

    if (fallback) {
        return (
            <FaultyTerminal
                className="hero-terminal-field pointer-events-none absolute inset-0 size-full overflow-hidden"
                scale={2.5}
                gridMul={[2, 1]}
                digitSize={1.2}
                timeScale={1}
                scanlineIntensity={1}
                glitchAmount={1}
                flickerAmount={1}
                noiseAmp={1}
                curvature={0}
                tint="#bbe851"
                mouseStrength={0.5}
                brightness={0.2}
            />
        )
    }

    return (
        <AeroShards
            className="pointer-events-none"
            shardColor="#a3a3a3"
            accentColor="#bbe851"
            placement="full"
            material="glass"
            markers="plus"
            count={1300}
            depthOfField={0.75}
            vignette={0.3}
            mouseInteraction
            pulseOnClick
            holdToGather
            // Cada pixel faz ray-trace dos prismas: em dpr 2 a GPU caía para 30 fps.
            dpr={1}
            onError={(error: Error) => {
                console.warn('[AeroShards] fallback para FaultyTerminal:', error)
                setFallback(true)
            }}
        />
    )
}
