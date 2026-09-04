import { AtSign, MessageCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { GithubIcon, LinkedinIcon } from '@/components/ui/brand-icons'
import Container from '@/components/ui/container'
import { siteConfig } from '@/lib/site-config'

const socials = [
    { id: 'github', icon: GithubIcon, href: siteConfig.github, external: true },
    {
        id: 'linkedin',
        icon: LinkedinIcon,
        href: siteConfig.linkedin,
        external: true,
    },
    {
        id: 'email',
        icon: AtSign,
        href: `mailto:${siteConfig.email}`,
        external: false,
    },
    {
        id: 'whatsapp',
        icon: MessageCircle,
        href: siteConfig.whatsapp,
        external: true,
    },
]

export default function SiteFooter() {
    const t = useTranslations('footer')
    const tContact = useTranslations('contact.channels')

    return (
        <footer className="glass glass-band w-full border-t border-border-subtle">
            <Container className="py-12">
                <div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex flex-col items-center gap-1 md:items-start">
                        <span className="font-mono text-label-code text-primary">
                            &lt;Dev /&gt;
                        </span>
                        <span className="text-body-sm text-on-surface-variant">
                            {t('tagline')}
                        </span>
                    </div>

                    <ul className="flex items-center gap-2">
                        {socials.map(({ id, icon: Icon, href, external }) => (
                            <li key={id}>
                                <a
                                    href={href}
                                    aria-label={tContact(`${id}.value`)}
                                    {...(external && {
                                        target: '_blank',
                                        rel: 'noopener noreferrer',
                                    })}
                                    className="flex rounded-lg p-2 text-on-surface-variant transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    <Icon aria-hidden className="size-5" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-center justify-between gap-3 border-t border-border-subtle pt-6 text-center md:flex-row md:text-left">
                    <p className="text-body-sm text-on-surface-variant">
                        {t('copyright', {
                            year: String(new Date().getFullYear()),
                        })}
                    </p>
                    <p className="flex items-center gap-1">
                        <span
                            aria-hidden
                            className="size-2 animate-pulse rounded-full bg-tertiary"
                        />
                        <span className="font-mono text-label-code text-tertiary">
                            {t('available')}
                        </span>
                    </p>
                </div>
            </Container>
        </footer>
    )
}
