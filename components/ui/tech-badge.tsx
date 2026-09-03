import { accentClass, type Accent } from '@/lib/content'
import { cn } from '@/lib/cn'

/** Pill mono com ponto de sintaxe — usado na grade de competências. */
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
                'inline-flex items-center gap-1.5 rounded-md border border-border-subtle bg-surface-base px-3 py-1 font-mono text-label-code',
                lead && dot ? accentClass[dot].text : 'text-on-surface',
                !dot && 'text-on-surface-variant'
            )}
        >
            {dot ? (
                <span
                    aria-hidden
                    className={cn(
                        'size-1.5 shrink-0 rounded-full',
                        accentClass[dot].dot
                    )}
                />
            ) : null}
            {label}
        </span>
    )
}
