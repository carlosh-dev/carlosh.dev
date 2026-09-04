import Link from 'next/link'

import { cn } from '@/lib/cn'

/**
 * CTA do design system.
 *
 * `primary` — vidro aceso. O gradiente violeta é a luz dentro da lâmina; o
 *             filete branco no topo é a mesma aresta de bisel dos cartões, só
 *             que numa superfície que emite em vez de transmitir. Continua
 *             sendo o objeto mais brilhante da região.
 * `ghost`   — vidro apagado. Mesma matéria dos cartões, sem luz própria.
 */
export default function ButtonLink({
    href,
    variant = 'primary',
    size = 'md',
    className,
    children,
    ...rest
}: {
    href: string
    variant?: 'primary' | 'ghost'
    size?: 'sm' | 'md'
    className?: string
    children: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href' | 'className'>) {
    return (
        <Link
            href={href}
            {...rest}
            className={cn(
                'inline-flex items-center justify-center gap-2 rounded-lg text-body-sm font-bold transition-all duration-200',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                size === 'sm' ? 'px-4 py-2' : 'px-6 py-3',
                variant === 'primary'
                    ? cn(
                          'border border-white/20 bg-gradient-to-r from-violet-intense to-violet-deep text-white hover:scale-[1.01]',
                          'shadow-[inset_0_1px_0_rgb(255_255_255/0.28),inset_0_-1px_0_rgb(52_0_128/0.5),0_0_28px_rgb(139_92_246/0.45)]'
                      )
                    : 'glass glass-interactive border border-border-subtle text-on-surface hover:border-border-active',
                className
            )}
        >
            {children}
        </Link>
    )
}
