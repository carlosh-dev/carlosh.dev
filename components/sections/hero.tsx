import Image from 'next/image'
import { ArrowDown, Terminal } from 'lucide-react'
import { useTranslations } from 'next-intl'

import HeroLighting from '@/components/hero/hero-lighting'
import ButtonLink from '@/components/ui/button-link'
import Container from '@/components/ui/container'
import { accentClass, heroHighlights } from '@/lib/content'
import { cn } from '@/lib/cn'
import { richTags } from '@/lib/rich-tags'
import { siteConfig } from '@/lib/site-config'

const SHELL_STACK = '["Next.js", "TypeScript", "Rails", "Redis"]'

export default function Hero() {
    const t = useTranslations('hero')

    return (
        <section id="inicio" className="relative w-full overflow-hidden">
            <HeroLighting className="relative py-16 lg:py-24">
                {/* Piso de luz ambiente. Vale sozinho quando não há WebGL, e
                    cede lugar ao campo volumétrico quando ele sobe. */}
                <div
                    aria-hidden
                    className="hero-ambient-orb pointer-events-none absolute left-1/2 top-1/4 -z-20 h-[360px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-intense/15 blur-[130px]"
                />
                <div
                    aria-hidden
                    className="hero-ambient-orb pointer-events-none absolute -right-20 -top-12 -z-20 size-[420px] rounded-full bg-primary-container/10 blur-[140px]"
                />

                <Container>
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                        {/* ---------- Coluna de texto ---------- */}
                        <div className="flex flex-col items-start space-y-4 lg:col-span-7">
                            <p
                                data-lit
                                className="lit-edge relative inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-raised px-4 py-1 shadow-[0_0_24px_rgb(139_92_246/0.18)]"
                            >
                                <span
                                    aria-hidden
                                    className="relative flex size-2.5 shrink-0"
                                >
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-tertiary opacity-75" />
                                    <span className="relative inline-flex size-2.5 rounded-full bg-tertiary" />
                                </span>
                                <span className="font-mono text-label-code text-on-surface">
                                    {t('status')}
                                </span>
                            </p>

                            <h1 className="text-display-hero-mobile text-white lg:text-display-hero">
                                {t.rich('headline', richTags)}
                            </h1>

                            <p className="max-w-2xl pt-2 text-body-lg leading-relaxed text-on-surface-variant">
                                {t.rich('subheadline', richTags)}
                            </p>

                            <div className="flex w-full flex-wrap items-center gap-4 pt-4 sm:w-auto">
                                {/* O CTA primário fica de fora do modelo de luz
                                    de propósito: pela "Regra do Único Nó Aceso",
                                    ele é o ponto mais brilhante da região e não
                                    disputa com as arestas. */}
                                <ButtonLink href="#experiencia">
                                    <span>{t('ctaPrimary')}</span>
                                    <ArrowDown
                                        aria-hidden
                                        className="size-[18px]"
                                    />
                                </ButtonLink>
                                <ButtonLink
                                    href="#contato"
                                    variant="ghost"
                                    data-lit
                                    className="lit-edge relative"
                                >
                                    <Terminal
                                        aria-hidden
                                        className="size-[18px] text-primary"
                                    />
                                    <span>{t('ctaSecondary')}</span>
                                </ButtonLink>
                            </div>

                            {/* Faixa de shell prompt */}
                            <div className="mt-3 w-full max-w-2xl pt-2">
                                <div
                                    data-lit
                                    className="lit-edge lit-sheen relative flex flex-wrap items-center justify-between gap-2 overflow-hidden rounded-lg border border-border-subtle bg-surface-raised px-4 py-2 font-mono text-label-code text-on-surface-variant"
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="text-tertiary">➜</span>
                                        <span className="text-primary-fixed">
                                            engineer.stack
                                        </span>
                                        <span className="text-outline">::</span>
                                        <span className="text-white">
                                            {SHELL_STACK}
                                        </span>
                                    </span>
                                    <span className="text-[10px] uppercase tracking-wider text-tertiary">
                                        {t('shellStatus')}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* ---------- Retrato ---------- */}
                        <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
                            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
                                <div
                                    aria-hidden
                                    className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-violet-intense via-secondary to-accent-pink opacity-40 blur-xl"
                                />

                                <div
                                    data-lit
                                    className="lit-edge relative overflow-hidden rounded-2xl border border-border-subtle bg-surface-raised p-2 shadow-2xl"
                                >
                                    <div
                                        data-lit
                                        className="lit-sheen relative aspect-square overflow-hidden rounded-xl bg-surface-lowest"
                                    >
                                        <Image
                                            src={siteConfig.portrait}
                                            alt={t('portraitAlt')}
                                            fill
                                            priority
                                            sizes="(max-width: 640px) 90vw, 420px"
                                            className="object-cover contrast-110 grayscale-[15%] transition-all duration-500 hover:grayscale-0"
                                        />
                                        <div
                                            aria-hidden
                                            className="absolute inset-0 bg-gradient-to-t from-surface-raised via-transparent to-transparent opacity-80"
                                        />
                                    </div>
                                </div>

                                {/*
                                 * Cards flutuantes ficam FORA do frame: ele tem
                                 * `overflow-hidden` para arredondar a imagem, e o
                                 * transbordo lateral (-left/-right) seria cortado.
                                 */}
                                {heroHighlights.map(
                                    ({ id, icon: Icon, accent }, index) => (
                                        <div
                                            key={id}
                                            data-lit
                                            className={cn(
                                                'lit-edge absolute flex items-center gap-2 rounded-xl border border-border-subtle bg-surface-raised/95 px-4 py-2 shadow-xl backdrop-blur-md',
                                                index === 0
                                                    ? '-left-4 top-4 animate-float sm:-left-6'
                                                    : '-right-4 bottom-6 sm:-right-6'
                                            )}
                                        >
                                            <span
                                                className={cn(
                                                    'flex size-8 shrink-0 items-center justify-center rounded-lg',
                                                    accentClass[accent].ring
                                                )}
                                            >
                                                <Icon
                                                    aria-hidden
                                                    className={cn(
                                                        'size-[18px]',
                                                        accentClass[accent].text
                                                    )}
                                                />
                                            </span>
                                            <span className="block">
                                                <span className="block text-[16px] font-bold leading-tight text-white">
                                                    {t(
                                                        `highlights.${id}.value`
                                                    )}
                                                </span>
                                                <span className="block font-mono text-[10px] text-on-surface-variant">
                                                    {t(
                                                        `highlights.${id}.label`
                                                    )}
                                                </span>
                                            </span>
                                        </div>
                                    )
                                )}

                                <p
                                    data-lit
                                    className="lit-edge absolute bottom-4 left-6 flex items-center gap-1.5 rounded-full border border-border-subtle bg-surface-base/90 px-3 py-1 shadow-md backdrop-blur-md"
                                >
                                    <span
                                        aria-hidden
                                        className="size-2 rounded-full bg-accent-pink"
                                    />
                                    <span className="font-mono text-[10px] font-semibold text-on-surface">
                                        {t('microPill')}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </HeroLighting>
        </section>
    )
}
