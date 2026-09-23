import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { cn } from '@/lib/cn'

/**
 * CTA do design system — sempre pílula.
 *
 * `primary` — pílula branca com o círculo lime da seta colado no fim. No
 *             hover a seta gira 45°: é o único movimento do botão.
 * `ghost`   — pílula vazada, hairline que clareia no hover.
 *
 * Atenção ao esconder um botão por breakpoint: `cn` aqui é concatenação
 * pura, não `tailwind-merge`, então um `hidden` sem variante empata com o
 * `inline-flex` da base. Use sempre uma variante com media query
 * (`max-sm:hidden`, `lg:hidden`).
 */
export default function ButtonLink({
    href,
    variant = 'primary',
    size = 'md',
    arrow = variant === 'primary',
    className,
    children,
    ...rest
}: {
    href: string
    variant?: 'primary' | 'ghost'
    size?: 'sm' | 'md'
    /** Círculo lime com a seta. Padrão: só no `primary`. */
    arrow?: boolean
    className?: string
    children: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href' | 'className'>) {
    return (
        <Link
            href={href}
            {...rest}
            className={cn(
                'group/btn inline-flex items-center justify-center gap-2 rounded-full text-body-sm font-medium transition-colors duration-300',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                size === 'sm' ? 'h-9 pl-4' : 'h-12 pl-6',
                arrow
                    ? size === 'sm'
                        ? 'pr-1'
                        : 'pr-1.5'
                    : size === 'sm'
                      ? 'pr-4'
                      : 'pr-6',
                variant === 'primary'
                    ? 'bg-white text-black hover:bg-on-surface'
                    : 'border border-border-subtle text-on-surface hover:border-border-active hover:bg-white/5',
                className
            )}
        >
            {children}
            {arrow ? (
                <span
                    aria-hidden
                    className={cn(
                        'ml-1 flex shrink-0 items-center justify-center rounded-full bg-accent text-on-accent',
                        size === 'sm' ? 'size-7' : 'size-9'
                    )}
                >
                    <ArrowUpRight className="size-4 transition-transform duration-300 ease-out-expo group-hover/btn:rotate-45" />
                </span>
            ) : null}
        </Link>
    )
}
