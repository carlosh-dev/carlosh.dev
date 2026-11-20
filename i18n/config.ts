export const locales = ['pt', 'en'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'pt'

export function isLocale(value: string | undefined): value is Locale {
    return locales.includes(value as Locale)
}

/** Tag BCP 47 (`<html lang>`, JSON-LD), formato do `og:locale` e nome no próprio idioma. */
export const localeInfo: Record<
    Locale,
    { tag: string; og: string; name: string }
> = {
    pt: { tag: 'pt-BR', og: 'pt_BR', name: 'Português' },
    en: { tag: 'en-US', og: 'en_US', name: 'English' },
}
