import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'

import SiteFooter from '@/components/layout/site-footer'
import SiteHeader from '@/components/layout/site-header'
import CustomCursor from '@/components/ui/custom-cursor'
import './globals.css'

// Uma família só. O eixo de largura vem junto para os títulos apertados;
// o peso já é variável por padrão.
const archivo = Archivo({
    subsets: ['latin'],
    axes: ['wdth'],
    variable: '--font-archivo',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Carlos Henrique - Software Engineer',
    description:
        'Software Engineer com mais de 5 anos de experiência em React, Next.js, TypeScript, Node.js e Ruby on Rails. Arquitetura de software, Web Vitals e produtos SaaS de alto tráfego.',
    openGraph: {
        title: 'Carlos Henrique - Software Engineer',
        description:
            'Arquitetura de software, Web Vitals e produtos SaaS de alto tráfego.',
        type: 'website',
    },
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
            lang={locale}
            className={`${archivo.variable} h-full`}
        >
            <body className="bg-surface-base font-sans text-body-md text-on-surface antialiased">
                <CustomCursor />
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
