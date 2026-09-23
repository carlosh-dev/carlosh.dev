import { DraftingCompass } from 'lucide-react'
import { useTranslations } from 'next-intl'

import Card from '@/components/ui/card'
import Container from '@/components/ui/container'
import SectionHeading from '@/components/ui/section-heading'
import { pillars } from '@/lib/content'
import { cn } from '@/lib/cn'

export default function About() {
    const t = useTranslations('about')

    return (
        <section id="sobre" className="relative w-full py-16 lg:py-24">
            <Container>
                {/* O título gigante não cabe em 4 colunas: fica numa linha
                    própria, e a coluna estreita guarda só o cartão da stack. */}
                <SectionHeading
                    eyebrow={t('eyebrow')}
                    title={t('title')}
                    description={t('description')}
                    className="mb-12 [&>h2]:max-w-5xl"
                />

                {/* O cartão da stack vira uma faixa inteira: numa coluna
                    estreita ao lado do mosaico ele deixaria um buraco. */}
                <Card className="mb-4 w-full p-5 sm:p-6">
                    <h3 className="mb-1 flex items-center gap-2 text-headline-sm text-white">
                        <DraftingCompass
                            aria-hidden
                            className="size-5 shrink-0 text-accent"
                        />
                        {t('stackCard.title')}
                    </h3>
                    <p className="max-w-3xl text-body-sm text-on-surface-variant">
                        {t('stackCard.description')}
                    </p>
                </Card>

                {/* ---------- Mosaico de pilares ---------- */}
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {pillars.map(({ id, icon: Icon }) => (
                        <Card
                            as="li"
                            key={id}
                            className="reveal-up flex flex-col justify-between p-6"
                        >
                            <div>
                                <span className="mb-6 flex size-11 items-center justify-center rounded-full border border-border-subtle">
                                    <Icon
                                        aria-hidden
                                        className={cn(
                                            'size-[22px]',
                                            'text-accent'
                                        )}
                                    />
                                </span>
                                <h3 className="mb-1 text-headline-sm text-white">
                                    {t(`pillars.${id}.title`)}
                                </h3>
                                <p className="text-body-sm text-on-surface-variant">
                                    {t(`pillars.${id}.description`)}
                                </p>
                            </div>
                            <p className="mt-4 flex items-center gap-2 pt-3">
                                <span
                                    aria-hidden
                                    className={cn(
                                        'size-2 shrink-0 rounded-full',
                                        'bg-accent'
                                    )}
                                />
                                <span className="text-label-code text-on-surface-variant">
                                    {t(`pillars.${id}.tag`)}
                                </span>
                            </p>
                        </Card>
                    ))}
                </ul>
            </Container>
        </section>
    )
}
