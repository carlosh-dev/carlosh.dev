import { Languages } from 'lucide-react'
import { useTranslations } from 'next-intl'

import Card from '@/components/ui/card'
import Container from '@/components/ui/container'
import SectionHeading from '@/components/ui/section-heading'
import { accentClass, education, languages } from '@/lib/content'
import { cn } from '@/lib/cn'

export default function Education() {
    const t = useTranslations('education')

    return (
        <section
            id="formacao"
            className="w-full bg-surface-raised/20 py-16 lg:py-24"
        >
            <Container>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    {/* ---------- Título + idiomas ---------- */}
                    <div className="flex flex-col items-start lg:col-span-5">
                        <SectionHeading
                            eyebrow={t('eyebrow')}
                            title={t('title')}
                            description={t('description')}
                            className="[&>h2]:mb-4 [&>p]:mb-6"
                        />

                        <Card className="w-full p-6">
                            <h3 className="mb-4 flex items-center gap-2 text-headline-sm text-white">
                                <Languages
                                    aria-hidden
                                    className="size-5 shrink-0 text-primary"
                                />
                                {t('languagesTitle')}
                            </h3>

                            <ul className="space-y-4">
                                {languages.map(({ id, level, accent }) => (
                                    <li key={id}>
                                        <div className="mb-1 flex flex-wrap items-center justify-between gap-2 text-body-sm">
                                            <span className="text-white">
                                                {t(`languages.${id}.name`)}
                                            </span>
                                            <span
                                                className={cn(
                                                    'font-mono text-label-code',
                                                    accentClass[accent].text
                                                )}
                                            >
                                                {t(`languages.${id}.level`)}
                                            </span>
                                        </div>
                                        <div
                                            role="meter"
                                            aria-valuenow={level}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            aria-label={t(
                                                `languages.${id}.name`
                                            )}
                                            className="glass-inset h-1.5 w-full overflow-hidden rounded-full"
                                        >
                                            <div
                                                className={cn(
                                                    'h-full rounded-full bg-gradient-to-r from-violet-intense',
                                                    accent === 'tertiary'
                                                        ? 'to-tertiary'
                                                        : 'to-primary'
                                                )}
                                                style={{ width: `${level}%` }}
                                            />
                                        </div>
                                        {t.has(`languages.${id}.note`) ? (
                                            <p className="mt-1.5 font-mono text-[11px] leading-4 text-on-surface-variant">
                                                {t(`languages.${id}.note`)}
                                            </p>
                                        ) : null}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>

                    {/* ---------- Formação acadêmica ---------- */}
                    <ul className="flex flex-col justify-center gap-4 lg:col-span-7">
                        {education.map(({ id, icon: Icon, accent, period }) => (
                            <Card
                                as="li"
                                key={id}
                                className="flex items-start gap-4 p-6"
                            >
                                <span className="glass-inset flex size-12 shrink-0 items-center justify-center rounded-xl border border-border-subtle">
                                    <Icon
                                        aria-hidden
                                        className={cn(
                                            'size-6',
                                            accentClass[accent].text
                                        )}
                                    />
                                </span>
                                <div className="flex-1">
                                    <div className="mb-1 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                                        <h3 className="text-headline-sm text-white">
                                            {t(`degrees.${id}.title`)}
                                        </h3>
                                        <span className="glass-inset shrink-0 rounded border border-border-subtle px-2 py-0.5 font-mono text-label-code text-on-surface-variant">
                                            {period}
                                        </span>
                                    </div>
                                    <p
                                        className={cn(
                                            'mb-1 text-body-sm',
                                            accentClass[accent].text
                                        )}
                                    >
                                        {t(`degrees.${id}.institution`)}
                                    </p>
                                    <p className="text-body-sm text-on-surface-variant">
                                        {t(`degrees.${id}.description`)}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    )
}
