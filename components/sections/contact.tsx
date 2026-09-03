import { Handshake } from 'lucide-react'
import { useTranslations } from 'next-intl'

import Container from '@/components/ui/container'
import { accentClass, channels } from '@/lib/content'
import { cn } from '@/lib/cn'

export default function Contact() {
    const t = useTranslations('contact')

    return (
        <section id="contato" className="relative w-full overflow-hidden py-24">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-radial from-violet-intense/10 via-transparent to-transparent"
            />

            <Container className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-surface-raised p-8 shadow-2xl sm:p-16">
                    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                        <span className="mb-4 flex size-12 items-center justify-center rounded-xl border border-border-subtle bg-surface-base">
                            <Handshake
                                aria-hidden
                                className="size-6 text-primary"
                            />
                        </span>

                        <span className="mb-2 font-mono text-label-code uppercase tracking-widest text-primary">
                            {t('eyebrow')}
                        </span>

                        <h2 className="mb-3 text-headline-xl-mobile font-extrabold text-white lg:text-headline-xl">
                            {t('title')}
                        </h2>

                        <p className="mb-12 max-w-xl text-body-lg text-on-surface-variant">
                            {t('description')}
                        </p>

                        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {channels.map(
                                ({
                                    id,
                                    icon: Icon,
                                    accent,
                                    href,
                                    external,
                                }) => (
                                    <li key={id}>
                                        <a
                                            href={href}
                                            {...(external && {
                                                target: '_blank',
                                                rel: 'noopener noreferrer',
                                            })}
                                            className="flex items-center gap-2 rounded-xl border border-border-subtle bg-surface-base p-4 text-left transition-colors hover:border-border-active hover:bg-surface-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                        >
                                            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-raised">
                                                <Icon
                                                    aria-hidden
                                                    className={cn(
                                                        'size-5',
                                                        accentClass[accent].text
                                                    )}
                                                />
                                            </span>
                                            <span className="min-w-0">
                                                <span className="block font-mono text-[11px] text-on-surface-variant">
                                                    {t(`channels.${id}.label`)}
                                                </span>
                                                <span className="block truncate text-body-sm font-semibold text-white">
                                                    {t(`channels.${id}.value`)}
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>

                        <p className="mt-12 flex items-center gap-2">
                            <span
                                aria-hidden
                                className="size-2 animate-pulse rounded-full bg-tertiary"
                            />
                            <span className="font-mono text-label-code text-on-surface-variant">
                                {t('responseTime')}
                            </span>
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}
