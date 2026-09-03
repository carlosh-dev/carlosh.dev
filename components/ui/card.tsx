import { cn } from '@/lib/cn'

/**
 * Superfície elevada do design system: fundo `surface-raised`, contorno de 1px
 * que acende no hover e difusão radial violeta em vez de sombra direcional.
 */
export default function Card({
    as: Tag = 'div',
    interactive = true,
    className,
    children,
}: {
    as?: 'div' | 'li' | 'article'
    interactive?: boolean
    className?: string
    children: React.ReactNode
}) {
    return (
        <Tag
            className={cn(
                'rounded-xl border border-border-subtle bg-surface-raised',
                'shadow-[0_0_35px_-5px_rgb(139_92_246/0.12)]',
                interactive &&
                    'transition-colors duration-300 hover:border-border-active',
                className
            )}
        >
            {children}
        </Tag>
    )
}
