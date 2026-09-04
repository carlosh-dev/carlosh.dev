'use client'

import { useTransition } from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { setLocale } from '@/app/actions/set-locale'
import { locales } from '@/i18n/config'
import { cn } from '@/lib/cn'

export default function LocaleSwitcher() {
    const active = useLocale()
    const t = useTranslations('nav')
    const [isPending, startTransition] = useTransition()

    return (
        <div
            aria-label={t('language')}
            role="group"
            className={cn(
                'glass-inset flex items-center gap-0.5 rounded-lg border border-border-subtle p-0.5 transition-opacity',
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
                        'rounded-md px-2 py-1 font-mono text-label-code uppercase transition-colors',
                        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                        locale === active
                            ? 'bg-primary-container text-on-primary-container'
                            : 'text-on-surface-variant hover:text-on-surface'
                    )}
                >
                    {locale}
                </button>
            ))}
        </div>
    )
}
