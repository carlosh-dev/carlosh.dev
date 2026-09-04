import type { Metadata } from 'next'
import { JetBrains_Mono, Sansation } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'

import AmbientField from '@/components/layout/ambient-field'
import SiteFooter from '@/components/layout/site-footer'
import SiteHeader from '@/components/layout/site-header'
import './globals.css'

// Sansation não é fonte variável: os pesos vêm em arquivos separados e só
// existem em 300/400/700. Pedimos apenas os dois que a escala usa — 300 não
// entra porque texto leve sobre quase-preto perde traço antes de ganhar ar.
// Qualquer 500/600/800 que sobrasse no CSS viraria bold sintético do browser.
const sansation = Sansation({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-sansation',
    display: 'swap',
})

const jetbrains = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Carlos Henrique — Software Engineer',
    description:
        'Software Engineer com mais de 5 anos de experiência em React, Next.js, TypeScript, Node.js e Ruby on Rails. Arquitetura frontend, Web Vitals e produtos SaaS de alto tráfego.',
    openGraph: {
        title: 'Carlos Henrique — Software Engineer',
        description:
            'Arquitetura frontend, Web Vitals e produtos SaaS de alto tráfego.',
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
            className={`${sansation.variable} ${jetbrains.variable} h-full`}
        >
            <body className="bg-surface-base font-sans text-body-md text-on-surface antialiased selection:bg-violet-intense selection:text-white">
                <AmbientField />
                <NextIntlClientProvider>
                    <a
                        href="#main"
                        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-primary-container focus:px-4 focus:py-2 focus:text-body-sm focus:font-bold focus:text-on-primary-container"
                    >
                        {t('skip')}
                    </a>
                    <SiteHeader />
                    <main id="main" className="w-full pt-20">
                        {children}
                    </main>
                    <SiteFooter />
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
