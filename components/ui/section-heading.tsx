import { cn } from '@/lib/cn'

/** Eyebrow mono ("01 // …") + título + descrição, repetido em 4 seções. */
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
            <span className="mb-2 font-mono text-label-code uppercase tracking-widest text-primary">
                {eyebrow}
            </span>
            <h2 className="mb-2 text-headline-xl-mobile text-white lg:text-headline-xl">
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
