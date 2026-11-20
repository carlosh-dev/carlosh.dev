import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'

import SiteFooter from '@/components/layout/site-footer'
import SiteHeader from '@/components/layout/site-header'
import CustomCursor from '@/components/ui/custom-cursor'
import SmoothScroll from '@/components/ui/smooth-scroll'
import { isLocale, localeInfo } from '@/i18n/config'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

// Uma família só. O eixo de largura vem junto para os títulos apertados;
// o peso já é variável por padrão.
const archivo = Archivo({
    subsets: ['latin'],
    axes: ['wdth'],
    variable: '--font-archivo',
    display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale()
    const t = await getTranslations('meta')
    const title = t('title')
    const description = t('description')

    return {
        metadataBase: new URL(siteConfig.url),
        title,
        description,
        applicationName: siteConfig.name,
        authors: [{ name: siteConfig.name, url: siteConfig.url }],
        creator: siteConfig.name,
        alternates: { canonical: '/' },
        openGraph: {
            type: 'profile',
            firstName: 'Carlos',
            lastName: 'Henrique',
            username: 'carlosh-dev',
            url: '/',
            siteName: siteConfig.name,
            title,
            description,
            locale: isLocale(locale) ? localeInfo[locale].og : undefined,
        },
        twitter: { card: 'summary_large_image', title, description },
        robots: { index: true, follow: true },
    }
}

export const viewport: Viewport = {
    themeColor: '#000000',
    colorScheme: 'dark',
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const locale = await getLocale()
    const t = await getTranslations('nav')

    return (
        <html
            lang={isLocale(locale) ? localeInfo[locale].tag : locale}
            className={`${archivo.variable} h-full`}
        >
            <body className="bg-surface-base font-sans text-body-md text-on-surface antialiased">
                <CustomCursor />
                <SmoothScroll />
                <NextIntlClientProvider>
                    <a
                        href="#main"
                        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-body-sm focus:font-semibold focus:text-on-accent"
                    >
                        {t('skip')}
                    </a>
                    <SiteHeader />
                    <main id="main" className="w-full">
                        {children}
                    </main>
                    <SiteFooter />
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
