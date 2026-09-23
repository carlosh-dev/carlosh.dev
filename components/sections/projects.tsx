import { Fragment } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

import Card from '@/components/ui/card'
import Container from '@/components/ui/container'
import SectionHeading from '@/components/ui/section-heading'
import { accentClass, projects, stackSides, toneFor } from '@/lib/content'
import { cn } from '@/lib/cn'

export default function Projects() {
    const t = useTranslations('projects')

    return (
        <section id="projetos" className="relative w-full py-16 lg:py-24">
            <Container>
                <SectionHeading
                    eyebrow={t('eyebrow')}
                    title={t('title')}
                    description={t('description')}
                    className="mb-12"
                />

                <ul className="flex flex-col gap-6">
                    {projects.map(({ id, accent, href, year, stack }) => (
                        <Card as="li" key={id} className="p-6 sm:p-8">
                            <div className="mb-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                                <span className="flex flex-wrap items-center gap-2">
                                    <span className="flex items-center gap-2 text-label-code text-on-surface-variant">
                                        <span
                                            aria-hidden
                                            className="size-2 animate-pulse rounded-full bg-accent"
                                        />
                                        {new URL(href).host.replace(
                                            /^www\./,
                                            ''
                                        )}
                                    </span>
                                    <span className="rounded-full bg-accent px-2.5 py-0.5 text-label-code font-semibold uppercase text-on-accent">
                                        {t('liveBadge')}
                                    </span>
                                </span>
                                <span className="rounded-full border border-border-subtle px-3 py-1 text-label-code text-on-surface-variant">
                                    {year}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                                <div className="lg:col-span-7">
                                    <h3 className="text-headline-lg uppercase font-stretch-semi-condensed font-extrabold text-white">
                                        {t(`items.${id}.name`)}
                                    </h3>
                                    <p
                                        className={cn(
                                            'mb-4 text-body-sm',
                                            accentClass[accent].text
                                        )}
                                    >
                                        {t(`items.${id}.role`)}
                                    </p>
                                    <p className="text-body-md text-on-surface-variant">
                                        {t(`items.${id}.description`)}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4 lg:col-span-5">
                                    {/* A stack vem como texto, não como chips:
                                        dentro de um bloco com hairline, um
                                        chip seria uma terceira caixa. */}
                                    <dl className="rounded-xl border border-border-subtle bg-surface-base p-4">
                                        <dt className="text-label-code uppercase text-outline">
                                            {t('audienceLabel')}
                                        </dt>
                                        <dd className="mt-1.5 text-body-sm text-white">
                                            {t(`items.${id}.audience`)}
                                        </dd>

                                        {stackSides.map((side) => (
                                            <Fragment key={side}>
                                                <dt className="mt-4 text-label-code uppercase text-outline">
                                                    {t(`${side}Label`)}
                                                </dt>
                                                <dd className="mt-1.5 text-body-sm">
                                                    {stack[side].map(
                                                        (tech, index) => (
                                                            <Fragment
                                                                key={tech}
                                                            >
                                                                {index > 0 ? (
                                                                    <span className="text-accent">
                                                                        {' · '}
                                                                    </span>
                                                                ) : null}
                                                                <span
                                                                    className={toneFor(
                                                                        tech
                                                                    )}
                                                                >
                                                                    {tech}
                                                                </span>
                                                            </Fragment>
                                                        )
                                                    )}
                                                </dd>
                                            </Fragment>
                                        ))}
                                    </dl>

                                    {/* Pílula vazada, não a branca: o CTA
                                        cheio fica reservado ao funil de
                                        contato — este link sai da página. */}
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn flex h-12 items-center justify-between gap-2 rounded-full border border-border-subtle pl-6 pr-1.5 text-body-sm font-medium text-on-surface transition-colors duration-300 hover:border-border-active hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                                    >
                                        {t(`items.${id}.cta`)}
                                        <span
                                            aria-hidden
                                            className="flex size-9 items-center justify-center rounded-full border border-border-subtle transition-colors duration-300 group-hover/btn:border-accent group-hover/btn:bg-accent group-hover/btn:text-on-accent"
                                        >
                                            <ArrowUpRight className="size-4 transition-transform duration-300 ease-out-expo group-hover/btn:rotate-45" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    ))}
                </ul>
            </Container>
        </section>
    )
}
