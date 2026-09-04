import { cn } from '@/lib/cn'

/**
 * A lâmina do design system.
 *
 * Não é um retângulo preenchido: é vidro sobre o campo de luz da página. A
 * massa vem de `--glass-tint`, a espessura de `backdrop-filter`, e o bisel
 * dos dois `inset` — aresta de cima recebendo luz, aresta de baixo devolvendo
 * o violeta da sala. A hairline de 1px continua sendo a aresta da lâmina, e
 * continua acendendo no hover.
 *
 * `tier` escolhe a espessura, não a aparência:
 * `pane`  — o cartão padrão, sobre a página;
 * `thick` — as duas maiores lâminas (painel de contato, moldura do retrato);
 * `float` — cartões que flutuam sobre outra superfície, não sobre a página.
 */
export default function Card({
    as: Tag = 'div',
    tier = 'pane',
    interactive = true,
    className,
    children,
}: {
    as?: 'div' | 'li' | 'article'
    tier?: 'pane' | 'thick' | 'float'
    interactive?: boolean
    className?: string
    children: React.ReactNode
}) {
    return (
        <Tag
            className={cn(
                'glass rounded-xl border border-border-subtle',
                tier === 'thick' && 'glass-thick',
                tier === 'float' && 'glass-float',
                interactive && 'glass-interactive hover:border-border-active',
                className
            )}
        >
            {children}
        </Tag>
    )
}
