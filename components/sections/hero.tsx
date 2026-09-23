import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { useTranslations } from 'next-intl'

import PixelBlast from '@/components/hero/pixel-blast'
import ButtonLink from '@/components/ui/button-link'
import Container from '@/components/ui/container'
import { richTags } from '@/lib/rich-tags'
import { siteConfig } from '@/lib/site-config'

export default function Hero() {
    const t = useTranslations('hero')

    return (
        <section
            id="inicio"
            className="relative flex items-center min-h-screen w-full overflow-hidden pb-16 pt-28 lg:pb-24 lg:pt-36"
        >
            <div aria-hidden className="hero-field absolute inset-0 -z-10">
                <PixelBlast
                    className="hero-pixel-field pointer-events-none absolute inset-0 size-full"
                    variant="square"
                    color="#bbe851"
                    pixelSize={5}
                    patternScale={3}
                    patternDensity={1.05}
                    pixelSizeJitter={0.45}
                    enableRipples
                    rippleSpeed={0.34}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.4}
                    speed={0.45}
                    edgeFade={0.28}
                    maxPixelRatio={1.5}
                    transparent
                />
            </div>

            <Container>
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                    <div className="flex flex-col items-start lg:col-span-7">
                        <h1 className="text-balance text-display uppercase font-stretch-semi-condensed text-white">
                            {t.rich('headline', richTags)}
                        </h1>

                        <p className="mt-8 max-w-xl text-pretty text-body-lg text-on-surface-variant">
                            {t.rich('subheadline', richTags)}
                        </p>

                        <div className="mt-10 flex flex-wrap items-center gap-3">
                            {/* O contato é o destino da página, então é ele
                                que leva a pílula cheia. */}
                            <ButtonLink href="#contato">
                                {t('ctaSecondary')}
                            </ButtonLink>
                            <ButtonLink href="#experiencia" variant="ghost">
                                <span>{t('ctaPrimary')}</span>
                                <ArrowDown aria-hidden className="size-4" />
                            </ButtonLink>
                        </div>
                    </div>

                    <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
                        <div className="relative w-full max-w-70 animate-float sm:max-w-[320px] lg:max-w-1000">
                            <div className="overflow-hidden rounded-md border border-border-active bg-surface-card shadow-[0_24px_64px_-16px_rgb(0_0_0/0.8)]">
                                <div
                                    aria-hidden
                                    className="relative flex h-8 items-center gap-2 border-b border-border-subtle px-3"
                                >
                                    <span className="size-3 rounded-full bg-accent" />
                                    <span className="size-3 rounded-full bg-outline" />
                                    <span className="size-3 rounded-full bg-surface-overlay ring-1 ring-border-active" />
                                    <span className="absolute inset-x-0 text-center text-label-code text-on-surface-variant">
                                        {siteConfig.name}
                                    </span>
                                </div>
                                <div className="relative aspect-4/5 overflow-hidden bg-surface-lowest">
                                    <Image
                                        src={siteConfig.portrait}
                                        alt={t('portraitAlt')}
                                        fill
                                        priority
                                        placeholder="blur"
                                        quality={85}
                                        sizes="(max-width: 640px) 280px, (max-width: 1024px) 520px, 560px"
                                        className="object-cover object-[center_30%] contrast-[1.08] grayscale"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
