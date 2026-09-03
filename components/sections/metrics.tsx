import { useTranslations } from 'next-intl'

import Card from '@/components/ui/card'
import Container from '@/components/ui/container'
import { accentClass, metrics } from '@/lib/content'
import { cn } from '@/lib/cn'

export default function Metrics() {
    const t = useTranslations('metrics')

    return (
        <section
            id="metricas"
            aria-label={t('title')}
            className="w-full border-y border-border-subtle bg-surface-raised/60 py-8 backdrop-blur-lg"
        >
            <Container>
                <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                    {metrics.map(({ id, label, icon: Icon, accent }, index) => {
                        const suffix = t.has(`items.${id}.suffix`)
                            ? t(`items.${id}.suffix`)
                            : null

                        return (
                            <Card
                                as="li"
                                key={id}
                                className={cn(
                                    'group p-4',
                                    // O 5º card ocupa a linha inteira no layout de 2 colunas.
                                    index === metrics.length - 1 &&
                                        'col-span-2 md:col-span-1'
                                )}
                            >
                                <div className="mb-1 flex items-center justify-between gap-2">
                                    <span
                                        className={cn(
                                            'font-mono text-label-code',
                                            accentClass[accent].text
                                        )}
                                    >
                                        {label}
                                    </span>
                                    <Icon
                                        aria-hidden
                                        className="size-4 shrink-0 text-outline"
                                    />
                                </div>
                                <p className="text-stat-metric text-white">
                                    {t(`items.${id}.value`)}
                                    {suffix ? (
                                        <span className="text-sm font-normal text-on-surface-variant">
                                            {' '}
                                            {suffix}
                                        </span>
                                    ) : null}
                                </p>
                                <p className="mt-1 text-body-sm text-on-surface-variant">
                                    {t(`items.${id}.description`)}
                                </p>
                            </Card>
                        )
                    })}
                </ul>
            </Container>
        </section>
    )
}
