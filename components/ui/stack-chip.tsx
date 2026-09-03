import { toneFor } from '@/lib/content'
import { cn } from '@/lib/cn'

/** Chip compacto de tecnologia usado no rodapé de cada cargo da timeline. */
export default function StackChip({ label }: { label: string }) {
    return (
        <span
            className={cn(
                'rounded border border-border-subtle bg-surface-base px-2 py-0.5 font-mono text-[11px] leading-4',
                toneFor(label)
            )}
        >
            {label}
        </span>
    )
}
