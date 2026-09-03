import { DraftingCompass } from 'lucide-react'
import { useTranslations } from 'next-intl'

import Card from '@/components/ui/card'
import Container from '@/components/ui/container'
import SectionHeading from '@/components/ui/section-heading'
import { accentClass, pillars } from '@/lib/content'
import { cn } from '@/lib/cn'

export default function About() {
    const t = useTranslations('about')

    return (
        <section id="sobre" className="relative w-full py-16 lg:py-24">
            <Container>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    {/* ---------- Coluna de título ---------- */}
                    <div className="flex flex-col items-start lg:col-span-4">
                        <SectionHeading
                            eyebrow={t('eyebrow')}
                            title={t('title')}
                            description={t('description')}
                            className="[&>h2]:mb-4 [&>p]:mb-6"
                        />

                        <Card className="w-full p-4">
                            <h3 className="mb-1 flex items-center gap-2 text-headline-sm text-white">
                                <DraftingCompass
                                    aria-hidden
                                    className="size-5 shrink-0 text-tertiary"
                                />
                                {t('stackCard.title')}
                            </h3>
                            <p className="text-body-sm text-on-surface-variant">
                                {t('stackCard.description')}
                            </p>
                        </Card>
                    </div>

                    {/* ---------- Mosaico de pilares ---------- */}
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
                        {pillars.map(({ id, icon: Icon, accent }) => (
                            <Card
                                as="li"
                                key={id}
                                className="flex flex-col justify-between p-6"
                            >
                                <div>
                                    <span className="mb-4 flex size-10 items-center justify-center rounded-lg border border-border-subtle bg-surface-base">
                                        <Icon
                                            aria-hidden
                                            className={cn(
                                                'size-[22px]',
                                                accentClass[accent].text
                                            )}
                                        />
                                    </span>
                                    <h3 className="mb-1 text-headline-sm text-white">
                                        {t(`pillars.${id}.title`)}
                                    </h3>
                                    <p className="text-body-sm leading-relaxed text-on-surface-variant">
                                        {t(`pillars.${id}.description`)}
                                    </p>
                                </div>
                                <p className="mt-4 flex items-center gap-2 pt-3">
                                    <span
                                        aria-hidden
                                        className={cn(
                                            'size-2 shrink-0 rounded-full',
                                            accentClass[accent].dot
                                        )}
                                    />
                                    <span className="font-mono text-label-code text-on-surface-variant">
                                        {t(`pillars.${id}.tag`)}
                                    </span>
                                </p>
                            </Card>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    )
}
