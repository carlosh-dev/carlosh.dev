import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

import Container from '@/components/ui/container'
import { channels } from '@/lib/content'

/**
 * O destino da página. Sem painel: o título gigante abre a seção e cada
 * canal é uma linha inteira — índice, rótulo, valor e o círculo da seta.
 * Sob o ponteiro (ou o foco) a linha inteira se enche de lime, o texto vira
 * preto e a seta gira: é o único lugar da página em que o sinal ocupa uma
 * superfície inteira, porque é aqui que o visitante age.
 */
export default function Contact() {
    const t = useTranslations('contact')

    return (
        <section id="contato" className="w-full py-24 lg:py-32">
            <Container>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
                    <div className="lg:col-span-7">
                        <span className="mb-4 flex items-center gap-2 text-label-code uppercase text-on-surface-variant">
                            <span
                                aria-hidden
                                className="size-1.5 shrink-0 rounded-full bg-accent"
                            />
                            {t('eyebrow')}
                        </span>
                        <h2 className="text-balance text-headline-xl uppercase font-stretch-semi-condensed text-white">
                            {t('title')}
                        </h2>
                    </div>

                    <div className="lg:col-span-5">
                        <p className="max-w-xl text-pretty text-body-lg text-on-surface-variant">
                            {t('description')}
                        </p>
                        <p className="mt-4 flex items-center gap-2 text-body-sm text-on-surface">
                            <span
                                aria-hidden
                                className="size-2 shrink-0 animate-pulse rounded-full bg-accent"
                            />
                            {t('responseTime')}
                        </p>
                    </div>
                </div>

                <ul className="mt-14 flex flex-col gap-3 lg:mt-20">
                    {channels.map(
                        ({ id, icon: Icon, href, external }, index) => (
                            <li key={id} className="reveal-up">
                                <a
                                    href={href}
                                    {...(external && {
                                        target: '_blank',
                                        rel: 'noopener noreferrer',
                                    })}
                                    className="group grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 rounded-2xl border border-border-subtle bg-surface-raised px-5 py-5 transition-colors duration-300 ease-out-expo hover:border-accent hover:bg-accent focus-visible:border-accent focus-visible:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:grid-cols-[4rem_1fr_auto_auto] sm:px-8 sm:py-7"
                                >
                                    <span className="hidden text-label-code text-outline transition-colors duration-300 group-hover:text-on-accent/60 group-focus-visible:text-on-accent/60 sm:block">
                                        ({String(index + 1).padStart(2, '0')})
                                    </span>

                                    <span className="min-w-0">
                                        <span className="mb-1 flex items-center gap-2 text-label-code uppercase text-on-surface-variant transition-colors duration-300 group-hover:text-on-accent/70 group-focus-visible:text-on-accent/70">
                                            <Icon
                                                aria-hidden
                                                className="size-3.5 shrink-0 text-accent transition-colors duration-300 group-hover:text-on-accent group-focus-visible:text-on-accent"
                                            />
                                            {t(`channels.${id}.label`)}
                                        </span>
                                        <span className="block truncate text-headline-lg text-white transition-colors duration-300 group-hover:text-on-accent group-focus-visible:text-on-accent">
                                            {t(`channels.${id}.value`)}
                                        </span>
                                    </span>

                                    <span className="hidden text-body-sm text-on-surface-variant transition-colors duration-300 group-hover:text-on-accent/70 group-focus-visible:text-on-accent/70 md:block">
                                        {href
                                            .replace(
                                                /^(mailto:|https?:\/\/(www\.)?)/,
                                                ''
                                            )
                                            .replace(/\/$/, '')}
                                    </span>

                                    <span
                                        aria-hidden
                                        className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border-active text-white transition-colors duration-300 group-hover:border-on-accent group-hover:bg-on-accent group-hover:text-accent group-focus-visible:border-on-accent group-focus-visible:bg-on-accent group-focus-visible:text-accent"
                                    >
                                        <ArrowUpRight className="size-5 transition-transform duration-500 ease-out-expo group-hover:rotate-45 group-focus-visible:rotate-45" />
                                    </span>
                                </a>
                            </li>
                        )
                    )}
                </ul>
            </Container>
        </section>
    )
}
