'use client'

import { useTransition } from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { setLocale } from '@/app/actions/set-locale'
import { locales } from '@/i18n/config'
import { cn } from '@/lib/cn'

/**
 * Trilho de duas células. Dentro da cápsula do header ele é concêntrico com
 * ela, não só redondo: 16px da célula + 2px de recheio = 18px do trilho. O
 * preenchimento da célula ativa é exatamente o do item ativo do menu — é o
 * mesmo lime carregando texto preto.
 */
export default function LocaleSwitcher() {
    const active = useLocale()
    const t = useTranslations('nav')
    const [isPending, startTransition] = useTransition()

    return (
        <div
            aria-label={t('language')}
            role="group"
            className={cn(
                'flex h-9 shrink-0 items-center gap-0.5 rounded-full border border-border-subtle p-0.5 transition-opacity',
                isPending && 'opacity-60'
            )}
        >
            {locales.map((locale) => (
                <button
                    key={locale}
                    type="button"
                    disabled={isPending || locale === active}
                    aria-current={locale === active ? 'true' : undefined}
                    onClick={() => startTransition(() => setLocale(locale))}
                    className={cn(
                        'flex h-8 items-center rounded-full px-2.5 text-label-code uppercase transition-colors',
                        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                        locale === active
                            ? 'bg-accent text-on-accent'
                            : 'text-on-surface-variant hover:text-on-surface'
                    )}
                >
                    {locale}
                </button>
            ))}
        </div>
    )
}
