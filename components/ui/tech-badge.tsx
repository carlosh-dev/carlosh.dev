/** Pílula de tecnologia com ponto de tom — usada na grade de competências. */
export default function TechBadge({ label }: { label: string }) {
    return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-white/5 px-3 py-1 text-label-code text-on-surface">
            <span
                aria-hidden
                className="size-1.5 shrink-0 rounded-full bg-accent"
            />
            {label}
        </span>
    )
}
