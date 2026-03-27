import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'

const spaceMono = Space_Mono({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'CARLOSH_DEV',
    description:
        'Personal website of Carlos Henrique, a software developer and technology enthusiast.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${spaceMono.className} h-full antialiased`}>
            <body className="w-full flex flex-col items-center bg-zinc-950">
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
            </body>
        </html>
    )
}
