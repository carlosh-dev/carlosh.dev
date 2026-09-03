import Link from 'next/link'

import { cn } from '@/lib/cn'

/**
 * CTA do design system.
 * `primary`  — gradiente violeta com aura;
 * `ghost`    — superfície elevada discreta.
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
                'inline-flex items-center justify-center gap-2 rounded-lg text-body-sm font-semibold transition-all duration-200',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                size === 'sm' ? 'px-4 py-2' : 'px-6 py-3',
                variant === 'primary'
                    ? 'border border-white/20 bg-gradient-to-r from-violet-intense to-violet-deep text-white shadow-[0_0_28px_rgb(139_92_246/0.45)] hover:scale-[1.01]'
                    : 'border border-border-subtle bg-surface-raised text-on-surface hover:border-border-active hover:bg-surface-card',
                className
            )}
        >
            {children}
        </Link>
    )
}
