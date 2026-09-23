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

                <ol
                    className="stack-cards relative pl-6 sm:pl-8"
                    style={
                        { '--count': experience.length } as React.CSSProperties
                    }
                >
                    {/* Trilho da timeline */}
                    <span
                        aria-hidden
                        className="absolute bottom-6 left-3 top-3 w-px -translate-x-1/2 bg-white/15"
                    />

                    {experience
                        .toReversed()
                        .map(
                            (
                                { id, accent, start, end, bulletCount, stack },
                                cardIndex
                            ) => (
                                <li
                                    key={id}
                                    className="stack-card group"
                                    style={
                                        {
                                            '--i': cardIndex,
                                        } as React.CSSProperties
                                    }
                                >
                                    {/* Nó da timeline */}
                                    <span
                                        aria-hidden
                                        className="stack-card-node absolute -left-6 top-1.5 flex size-6 items-center justify-center rounded-full bg-surface-base sm:-left-8"
                                    >
                                        {/* O pulso mora no ponto, não no anel: o
                                        anel é quem apaga ao entrar na pilha, e
                                        `animate-*` é atalho de `animation` — as
                                        duas coisas não cabem no mesmo elemento. */}
                                        <span
                                            className={cn(
                                                'size-2.5 rounded-full transition-transform group-hover:scale-125',
                                                accentClass[accent].dot,
                                                end === null &&
                                                    'animate-live-node'
                                            )}
                                        />
                                    </span>

                                    <Card className="stack-card-face p-6 sm:p-8">
                                        <div className="mb-3 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                                            <div>
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <h3 className="text-headline-md uppercase font-stretch-semi-condensed text-white">
                                                        {t(`roles.${id}.role`)}
                                                    </h3>
                                                    {end === null ? (
                                                        <span className="rounded-full bg-accent px-2.5 py-0.5 text-label-code font-semibold uppercase text-on-accent">
                                                            {t('currentBadge')}
                                                        </span>
                                                    ) : null}
                                                </div>
                                                <p
                                                    className={cn(
                                                        'text-body-sm',
                                                        accentClass[accent].text
                                                    )}
                                                >
                                                    {t(`roles.${id}.company`)}
                                                </p>
                                            </div>
                                            <p className="self-start rounded-full border border-border-subtle px-3 py-1 text-label-code text-on-surface-variant sm:self-auto">
                                                {start} - {end ?? t('present')}
                                            </p>
                                        </div>

                                        <p className="mb-4 text-body-sm text-on-surface-variant">
                                            {t(`roles.${id}.summary`)}
                                        </p>

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
                                                            'text-accent'
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
