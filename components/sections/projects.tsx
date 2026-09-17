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
                                    <span className="flex items-center gap-2 font-mono text-label-code text-on-surface-variant">
                                        {/* Verde só diz "está vivo" — e não
                                            floresce: quem emite, no sistema,
                                            é o violeta. */}
                                        <span
                                            aria-hidden
                                            className="size-2 animate-pulse rounded-full bg-tertiary"
                                        />
                                        {new URL(href).host.replace(
                                            /^www\./,
                                            ''
                                        )}
                                    </span>
                                    <span className="rounded bg-tertiary-container/30 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-tertiary">
                                        {t('liveBadge')}
                                    </span>
                                </span>
                                <span className="glass-inset rounded-md border border-border-subtle px-3 py-1 font-mono text-label-code text-on-surface-variant">
                                    {year}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                                <div className="lg:col-span-7">
                                    <h3 className="text-headline-md text-white">
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
                                        o chip já é `.glass-inset`, e dentro
                                        deste bloco — que também é — ele
                                        perderia o rebaixo. Em mono e na cor
                                        fixa de cada tecnologia, a linha lê
                                        como a saída de um highlighter. */}
                                    <dl className="glass-inset rounded-lg border border-border-subtle p-4">
                                        <dt className="font-mono text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                                            {t('audienceLabel')}
                                        </dt>
                                        <dd className="mt-1.5 text-body-sm text-white">
                                            {t(`items.${id}.audience`)}
                                        </dd>

                                        {stackSides.map((side) => (
                                            <Fragment key={side}>
                                                <dt className="mt-4 font-mono text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                                                    {t(`${side}Label`)}
                                                </dt>
                                                <dd className="mt-1.5 font-mono text-[11px] leading-5">
                                                    {stack[side].map(
                                                        (tech, index) => (
                                                            <Fragment
                                                                key={tech}
                                                            >
                                                                {index > 0 ? (
                                                                    <span className="text-on-surface-variant">
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

                                    {/* Inset, não o CTA `ghost`: o botão
                                        apagado é uma lâmina, e uma lâmina
                                        dentro de outra empilharia dois
                                        `backdrop-filter`. O aceso fica
                                        reservado ao funil de contato — este
                                        link sai da página. */}
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass-inset glass-inset-interactive flex items-center justify-center gap-2 rounded-lg border border-border-subtle px-6 py-3 text-body-sm font-bold text-on-surface transition-colors duration-200 hover:border-border-active focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        {t(`items.${id}.cta`)}
                                        <ArrowUpRight
                                            aria-hidden
                                            className="size-[18px]"
                                        />
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
