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
    /** Tecnologia do núcleo da stack, em lime. */
    v: (chunks: ReactNode) => <span className="text-accent">{chunks}</span>,
    /** Tecnologia de apoio, em branco. */
    s: (chunks: ReactNode) => <span className="text-white">{chunks}</span>,
    /** Trecho de ênfase do h1 do hero. Cor chapada, sem gradiente. */
    g: (chunks: ReactNode) => <span className="text-accent">{chunks}</span>,
}
