import { useTranslations } from 'next-intl'

import Container from '@/components/ui/container'
import { metrics } from '@/lib/content'
import { cn } from '@/lib/cn'

/**
 * A faixa dos números. Sem cartão: cinco colunas separadas por hairline,
 * cada número grande e leve com o rótulo embaixo — o peso está no corpo,
 * não no traço.
 */
export default function Metrics() {
    const t = useTranslations('metrics')

    return (
        <section
            id="metricas"
            aria-label={t('title')}
            className="w-full border-y border-border-subtle"
        >
            <Container>
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {metrics.map(({ id, label }, index) => {
                        const suffix = t.has(`items.${id}.suffix`)
                            ? t(`items.${id}.suffix`)
                            : null

                        return (
                            <li
                                key={id}
                                className={cn(
                                    'reveal-up flex flex-col border-border-subtle py-8 pr-4 sm:py-10',
                                    // Hairline entre colunas, nunca na borda esquerda da linha.
                                    'not-first:max-md:even:border-l not-first:max-md:even:pl-4',
                                    'md:max-lg:[&:not(:nth-child(3n+1))]:border-l md:max-lg:[&:not(:nth-child(3n+1))]:pl-6',
                                    'lg:not-first:border-l lg:not-first:pl-6',
                                    // O 5º ocupa a linha inteira no layout de 2 colunas.
                                    index === metrics.length - 1 &&
                                        'col-span-2 max-md:border-t md:col-span-1'
                                )}
                            >
                                <p className="text-stat-metric text-white">
                                    {t(`items.${id}.value`)}
                                    {suffix ? (
                                        <span className="ml-1 text-body-md text-on-surface-variant">
                                            {suffix}
                                        </span>
                                    ) : null}
                                </p>
                                <p className="mt-3 text-body-sm text-on-surface-variant">
                                    {t(`items.${id}.description`)}
                                </p>
                                <span className="mt-auto pt-4 text-label-code text-outline">
                                    {label}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </Container>
        </section>
    )
}
