import type { Accent } from '@/lib/content'
import { cn } from '@/lib/cn'

/** Pílula de tecnologia com ponto de tom — usada na grade de competências. */
export default function TechBadge({
    label,
    dot,
    lead,
}: {
    label: string
    dot?: Accent
    lead?: boolean
}) {
    return (
        <span
            className={cn(
                'inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-white/5 px-3 py-1 text-label-code',
                'text-on-surface',
                !dot && 'text-on-surface-variant'
            )}
        >
            {dot ? (
                <span
                    aria-hidden
                    className={cn(
                        'size-1.5 shrink-0 rounded-full',
                        lead ? 'bg-accent' : 'bg-white/40'
                    )}
                />
            ) : null}
            {label}
        </span>
    )
}
