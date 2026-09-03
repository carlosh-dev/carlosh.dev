'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'

import LocaleSwitcher from '@/components/layout/locale-switcher'
import ButtonLink from '@/components/ui/button-link'
import Container from '@/components/ui/container'
import { navItems, type NavItem } from '@/lib/site-config'
import { cn } from '@/lib/cn'

export default function SiteHeader() {
    const t = useTranslations('nav')
    const [active, setActive] = useState<NavItem>('inicio')
    const [menuOpen, setMenuOpen] = useState(false)

    /* Destaca no menu a seção visível no topo da viewport. */
    useEffect(() => {
        const sections = navItems
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null)

        if (sections.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top
                    )

                if (visible[0]) setActive(visible[0].target.id as NavItem)
            },
            // Faixa estreita logo abaixo do header fixo.
            { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
        )

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    /* Fecha o menu mobile com Esc e trava a rolagem do fundo. */
    useEffect(() => {
        if (!menuOpen) return

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setMenuOpen(false)
        }

        document.addEventListener('keydown', onKeyDown)
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', onKeyDown)
            document.body.style.overflow = previousOverflow
        }
    }, [menuOpen])

    const linkClass = (id: NavItem) =>
        cn(
            'rounded-lg px-3 py-2 text-body-sm transition-colors',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
            id === active
                ? 'bg-primary-container font-semibold text-on-primary-container'
                : 'text-on-surface-variant hover:text-on-surface'
        )

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-surface-base/80 backdrop-blur-xl">
            <Container className="flex h-20 items-center justify-between gap-4">
                <a
                    href="#inicio"
                    aria-label={t('logo')}
                    className="group flex items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                    <span className="flex h-9 items-center justify-center rounded-lg border border-border-subtle bg-surface-raised px-3 font-mono text-label-code text-primary transition-colors group-hover:text-primary-fixed">
                        &lt;Dev /&gt;
                    </span>
                </a>

                <nav
                    aria-label={t('logo')}
                    className="hidden items-center gap-1 xl:flex"
                >
                    {navItems.map((id) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            aria-current={id === active ? 'page' : undefined}
                            className={linkClass(id)}
                        >
                            {t(`items.${id}`)}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2 sm:gap-4">
                    <ButtonLink
                        href="#contato"
                        size="sm"
                        className="hidden sm:inline-flex"
                    >
                        {t('cta')}
                    </ButtonLink>

                    <LocaleSwitcher />

                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-nav"
                        aria-label={menuOpen ? t('closeMenu') : t('openMenu')}
                        className="flex size-9 items-center justify-center rounded-lg border border-border-subtle bg-surface-raised text-on-surface transition-colors hover:border-border-active focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary xl:hidden"
                    >
                        {menuOpen ? (
                            <X aria-hidden className="size-5" />
                        ) : (
                            <Menu aria-hidden className="size-5" />
                        )}
                    </button>
                </div>
            </Container>

            {/* ---------- Menu mobile ---------- */}
            <div
                id="mobile-nav"
                hidden={!menuOpen}
                className="border-t border-border-subtle bg-surface-base/95 backdrop-blur-xl xl:hidden"
            >
                <Container className="py-4">
                    <nav aria-label={t('openMenu')}>
                        <ul className="flex flex-col gap-1">
                            {navItems.map((id) => (
                                <li key={id}>
                                    <a
                                        href={`#${id}`}
                                        onClick={() => setMenuOpen(false)}
                                        aria-current={
                                            id === active ? 'page' : undefined
                                        }
                                        className={cn(
                                            linkClass(id),
                                            'block w-full'
                                        )}
                                    >
                                        {t(`items.${id}`)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <ButtonLink
                        href="#contato"
                        size="sm"
                        className="mt-4 flex w-full sm:hidden"
                    >
                        {t('cta')}
                    </ButtonLink>
                </Container>
            </div>
        </header>
    )
}
