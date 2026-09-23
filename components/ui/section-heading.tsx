import { cn } from '@/lib/cn'

/** Rótulo ("01 // …") + título gigante em caixa-alta + descrição. */
export default function SectionHeading({
    eyebrow,
    title,
    description,
    align = 'start',
    className,
}: {
    eyebrow: string
    title: React.ReactNode
    description?: React.ReactNode
    align?: 'start' | 'center'
    className?: string
}) {
    const centered = align === 'center'

    return (
        <div
            className={cn(
                'flex flex-col',
                centered
                    ? 'mx-auto max-w-3xl items-center text-center'
                    : 'items-start',
                className
            )}
        >
            <span className="mb-4 flex items-center gap-2 text-label-code uppercase text-on-surface-variant">
                <span
                    aria-hidden
                    className="size-1.5 shrink-0 rounded-full bg-accent"
                />
                {eyebrow}
            </span>
            <h2 className="mb-5 text-balance text-headline-xl uppercase font-stretch-semi-condensed text-white">
                {title}
            </h2>
            {description ? (
                <p
                    className={cn(
                        'text-body-md text-on-surface-variant',
                        !centered && 'max-w-2xl'
                    )}
                >
                    {description}
                </p>
            ) : null}
        </div>
    )
}
