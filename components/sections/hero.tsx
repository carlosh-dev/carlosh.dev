import Image from 'next/image'
import { ArrowDown, Terminal } from 'lucide-react'
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
            className="relative min-h-screen w-full overflow-hidden pb-16 pt-28 lg:pb-24 lg:pt-36"
        >
            <div aria-hidden className="hero-field absolute inset-0 -z-10">
                <div className="hero-ambient-orb pointer-events-none absolute left-1/2 top-1/4 h-[360px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-intense/15 blur-[130px]" />
                <div className="hero-ambient-orb pointer-events-none absolute -right-20 -top-12 size-[420px] rounded-full bg-primary-container/10 blur-[140px]" />

                <PixelBlast
                    className="hero-pixel-field pointer-events-none absolute inset-0 size-full"
                    variant="square"
                    color="#7c3aed"
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

                <div className="hero-scrim pointer-events-none absolute inset-0" />
            </div>

            <Container>
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                    <div className="flex flex-col items-start lg:col-span-7">
                        <h1 className="text-balance text-display-hero-mobile text-white lg:text-display-hero">
                            {t.rich('headline', richTags)}
                        </h1>

                        <p className="mt-6 max-w-2xl text-pretty text-body-lg text-on-surface-variant">
                            {t.rich('subheadline', richTags)}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <ButtonLink href="#experiencia">
                                <span>{t('ctaPrimary')}</span>
                                <ArrowDown
                                    aria-hidden
                                    className="size-[18px]"
                                />
                            </ButtonLink>
                            <ButtonLink href="#contato" variant="ghost">
                                <Terminal
                                    aria-hidden
                                    className="size-[18px] text-primary"
                                />
                                <span>{t('ctaSecondary')}</span>
                            </ButtonLink>
                        </div>
                    </div>

                    <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
                        <div className="relative w-full max-w-70 sm:max-w-[320px] lg:max-w-90">
                            <div
                                aria-hidden
                                className="portrait-organic absolute -inset-6 bg-linear-to-tr from-violet-intense via-secondary to-accent-pink opacity-40 blur-2xl"
                            />

                            <div className="portrait-organic relative aspect-4/5 overflow-hidden bg-surface-lowest">
                                <Image
                                    src={siteConfig.portrait}
                                    alt={t('portraitAlt')}
                                    fill
                                    priority
                                    quality={90}
                                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                                    className="object-cover object-[center_30%] brightness-[1.04] contrast-[1.06] grayscale-[15%]"
                                />

                                <div
                                    aria-hidden
                                    className="portrait-organic pointer-events-none absolute inset-0 bg-[radial-gradient(64%_54%_at_52%_34%,transparent_28%,rgb(10_10_12/0.7)_100%)] shadow-[inset_0_0_0_1px_rgb(255_255_255/0.12)]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
