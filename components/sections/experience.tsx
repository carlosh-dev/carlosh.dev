import { CircleCheck } from 'lucide-react'
import { useTranslations } from 'next-intl'

import Card from '@/components/ui/card'
import Container from '@/components/ui/container'
import SectionHeading from '@/components/ui/section-heading'
import StackChip from '@/components/ui/stack-chip'
import { accentClass, experience } from '@/lib/content'
import { cn } from '@/lib/cn'
import { richTags } from '@/lib/rich-tags'

export default function Experience() {
    const t = useTranslations('experience')

    return (
        <section id="experiencia" className="relative w-full py-16 lg:py-24">
            <Container>
                <SectionHeading
                    eyebrow={t('eyebrow')}
                    title={t('title')}
                    description={t('description')}
                    className="mb-12"
                />

                <ol className="relative space-y-8 pl-6 sm:pl-8">
                    {/* Trilho da timeline */}
                    <span
                        aria-hidden
                        className="absolute bottom-6 left-2.5 top-3 w-0.5 bg-gradient-to-b from-violet-intense via-primary to-transparent opacity-60 sm:left-3.5"
                    />

                    {experience.map(
                        ({ id, accent, start, end, bulletCount, stack }) => (
                            <li key={id} className="group relative">
                                {/* Nó da timeline */}
                                <span
                                    aria-hidden
                                    className={cn(
                                        'absolute -left-6 top-1.5 flex size-6 items-center justify-center rounded-full bg-surface-base sm:-left-8',
                                        end === null &&
                                            'shadow-[0_0_16px_rgb(139_92_246/0.8)]'
                                    )}
                                >
                                    <span
                                        className={cn(
                                            'size-2.5 rounded-full transition-transform group-hover:scale-125',
                                            accentClass[accent].dot
                                        )}
                                    />
                                </span>

                                <Card className="p-6">
                                    <div className="mb-3 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                                        <div>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <h3 className="text-headline-md font-bold text-white">
                                                    {t(`roles.${id}.role`)}
                                                </h3>
                                                {end === null ? (
                                                    <span className="rounded bg-tertiary-container/30 px-2 py-0.5 font-mono text-[10px] font-bold text-tertiary">
                                                        {t('currentBadge')}
                                                    </span>
                                                ) : null}
                                            </div>
                                            <p
                                                className={cn(
                                                    'text-body-sm font-medium',
                                                    accentClass[accent].text
                                                )}
                                            >
                                                {t(`roles.${id}.company`)}
                                            </p>
                                        </div>
                                        <p className="self-start rounded-md border border-border-subtle bg-surface-base px-3 py-1 font-mono text-label-code text-on-surface-variant sm:self-auto">
                                            {start} — {end ?? t('present')}
                                        </p>
                                    </div>

                                    <ul className="mb-4 space-y-2 text-body-sm text-on-surface-variant">
                                        {Array.from({
                                            length: bulletCount,
                                        }).map((_, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-2"
                                            >
                                                <CircleCheck
                                                    aria-hidden
                                                    className={cn(
                                                        'mt-0.5 size-[18px] shrink-0',
                                                        accentClass[accent].text
                                                    )}
                                                />
                                                <span>
                                                    {t.rich(
                                                        `roles.${id}.bullets.${index}`,
                                                        richTags
                                                    )}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {stack.map((tech) => (
                                            <StackChip
                                                key={tech}
                                                label={tech}
                                            />
                                        ))}
                                    </div>
                                </Card>
                            </li>
                        )
                    )}
                </ol>
            </Container>
        </section>
    )
}
