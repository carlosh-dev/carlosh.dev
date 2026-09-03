import type { ReactNode } from 'react'

/**
 * Tags ICU compartilhadas pelas mensagens.
 * O next-intl v4 não tem tags globais — o padrão documentado é compartilhar
 * este objeto e espalhá-lo nas chamadas de `t.rich()`.
 */
export const richTags = {
    /** Destaque forte, em branco. */
    b: (chunks: ReactNode) => (
        <strong className="font-semibold text-white">{chunks}</strong>
    ),
    /** Destaque em violeta primário. */
    v: (chunks: ReactNode) => (
        <span className="font-medium text-primary">{chunks}</span>
    ),
    /** Destaque em violeta secundário. */
    s: (chunks: ReactNode) => (
        <span className="font-medium text-secondary">{chunks}</span>
    ),
    /** Trecho com gradiente (usado no h1 do hero). */
    g: (chunks: ReactNode) => (
        <span className="bg-gradient-to-r from-primary via-secondary to-accent-pink bg-clip-text text-transparent">
            {chunks}
        </span>
    ),
}
