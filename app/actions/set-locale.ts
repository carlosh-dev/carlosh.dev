'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

import { locales, type Locale } from '@/i18n/config'

/** Grava o cookie lido por `i18n/request.ts` e revalida o layout. */
export async function setLocale(locale: Locale) {
    if (!locales.includes(locale)) return

    const store = await cookies()
    store.set('locale', locale, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax',
    })

    revalidatePath('/', 'layout')
}
