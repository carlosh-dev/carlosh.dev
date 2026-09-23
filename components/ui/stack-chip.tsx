import { toneFor } from '@/lib/content'
import { cn } from '@/lib/cn'

/** Chip compacto de tecnologia usado no rodapé de cada cargo da timeline. */
export default function StackChip({ label }: { label: string }) {
    return (
        <span
            className={cn(
                'rounded-full border border-border-subtle bg-white/5 px-2.5 py-0.5 text-label-code',
                toneFor(label)
            )}
        >
            {label}
        </span>
    )
}
