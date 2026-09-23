import { cn } from '@/lib/cn'

/**
 * Chapa do design system: preenchimento escuro e hairline, sem sombra nem
 * vidro. No hover a chapa sobe um degrau e a aresta clareia.
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
                'surface rounded-2xl',
                interactive && 'surface-interactive',
                className
            )}
        >
            {children}
        </Tag>
    )
}
