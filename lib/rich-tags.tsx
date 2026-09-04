import type { ReactNode } from 'react'

/**
 * Tags ICU compartilhadas pelas mensagens.
 * O next-intl v4 não tem tags globais — o padrão documentado é compartilhar
 * este objeto e espalhá-lo nas chamadas de `t.rich()`.
 */
export const richTags = {
    /**
     * Destaque forte, em branco. 700 é o bold real da Sansation — a face não
     * tem 600, e pedir 600 faria o browser engordar o 400 por conta própria.
     */
    b: (chunks: ReactNode) => (
        <strong className="font-bold text-white">{chunks}</strong>
    ),
    /**
     * Nome de tecnologia em violeta primário. Sem peso: a face não tem 500, e
     * neste sistema quem marca tecnologia é a cor, não o peso. Subir para 700
     * colocaria três blocos pesados no mesmo parágrafo do hero.
     */
    v: (chunks: ReactNode) => <span className="text-primary">{chunks}</span>,
    /** Nome de tecnologia em violeta secundário. Mesma regra do `v`. */
    s: (chunks: ReactNode) => <span className="text-secondary">{chunks}</span>,
    /** Trecho com gradiente (usado no h1 do hero). */
    g: (chunks: ReactNode) => (
        <span className="bg-gradient-to-r from-primary via-secondary to-accent-pink bg-clip-text text-transparent">
            {chunks}
        </span>
    ),
}
