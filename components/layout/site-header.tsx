'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

import LocaleSwitcher from '@/components/layout/locale-switcher'
import ButtonLink from '@/components/ui/button-link'
import Container from '@/components/ui/container'
import { navItems, type NavItem } from '@/lib/site-config'
import { cn } from '@/lib/cn'

export default function SiteHeader() {
    const t = useTranslations('nav')
    const locale = useLocale()
    const [active, setActive] = useState<NavItem>('inicio')
    const [menuOpen, setMenuOpen] = useState(false)
    const [lifted, setLifted] = useState(false)

    const navRef = useRef<HTMLElement | null>(null)
    const linkRefs = useRef(new Map<NavItem, HTMLAnchorElement>())
    const [marker, setMarker] = useState<{ x: number; w: number } | null>(null)
    /* Só depois da primeira medida o lozango pode animar — sem isso ele
       entraria deslizando da aresta esquerda no primeiro quadro. */
    const [armed, setArmed] = useState(false)

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
            // Faixa estreita logo abaixo da aresta de baixo da cápsula.
            { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
        )

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    /* Massa da lâmina. `setLifted` com o mesmo booleano não re-renderiza,
       então o listener só custa a leitura de `scrollY` — que durante a
       rolagem já está calculada e não força layout. */
    useEffect(() => {
        const onScroll = () => setLifted(window.scrollY > 24)

        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    /* Posição e largura do lozango, medidas no DOM real. Nada de estimar:
       os rótulos mudam de largura com o idioma, e a Sansation entra por
       `swap`, então a medida certa só existe depois da fonte. */
    const measure = useCallback(() => {
        const nav = navRef.current
        const link = linkRefs.current.get(active)

        if (!nav || !link) return

        setMarker({ x: link.offsetLeft, w: link.offsetWidth })
    }, [active])

    useEffect(() => {
        measure()

        const frame = requestAnimationFrame(() => setArmed(true))
        return () => cancelAnimationFrame(frame)
    }, [measure, locale])

    useEffect(() => {
        const nav = navRef.current
        if (!nav) return

        const observer = new ResizeObserver(() => measure())
        observer.observe(nav)

        // A troca de Arial por Sansation reflui os rótulos uma vez.
        document.fonts?.ready.then(measure).catch(() => {})

        return () => observer.disconnect()
    }, [measure])

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

    const focusRing =
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

    /**
     * Rótulo com a largura travada no peso 700.
     *
     * O item ativo é negrito, e negrito é mais largo — num menu comum isso
     * não aparece, mas aqui a mudança empurraria os vizinhos justamente
     * enquanto o lozango desliza até eles, e o alvo mudaria de lugar no
     * meio do trajeto. A cópia invisível em 700 ocupa a mesma célula do
     * grid e fixa a caixa: o texto visível troca de peso dentro de uma
     * largura que nunca se move.
     */
    const NavLabel = ({ id }: { id: NavItem }) => (
        <span className="inline-grid">
            <span
                aria-hidden
                className="col-start-1 row-start-1 invisible font-bold"
            >
                {t(`items.${id}`)}
            </span>
            <span
                className={cn(
                    'col-start-1 row-start-1',
                    id === active && 'font-bold'
                )}
            >
                {t(`items.${id}`)}
            </span>
        </span>
    )

    return (
        <header className="pointer-events-none fixed inset-x-0 top-0 z-50 pt-3 xl:pt-4">
            <Container>
                <div
                    data-lifted={lifted}
                    className={cn(
                        'glass glass-capsule pointer-events-auto mx-auto flex h-14 w-full items-center gap-2',
                        'rounded-full border border-border-subtle px-2.5',
                        'lg:gap-3 lg:px-3 xl:h-16 xl:w-fit'
                    )}
                >
                    <a
                        href="#inicio"
                        aria-label={t('logo')}
                        className={cn(
                            'group flex shrink-0 items-center rounded-full',
                            focusRing
                        )}
                    >
                        <span className="glass-inset glass-inset-interactive flex h-9 items-center justify-center rounded-full border border-border-subtle px-3.5 font-mono text-label-code text-primary group-hover:border-border-active group-hover:text-primary-fixed">
                            carlosh-dev
                        </span>
                    </a>

                    <span
                        aria-hidden
                        className="hidden h-5 w-px shrink-0 bg-border-subtle xl:block"
                    />

                    <nav
                        ref={navRef}
                        aria-label={t('logo')}
                        className="relative hidden flex-1 items-center justify-center gap-1 lg:flex xl:flex-none xl:justify-start"
                    >
                        <span
                            aria-hidden
                            style={{
                                width: marker?.w ?? 0,
                                transform: `translate(${marker?.x ?? 0}px, -50%)`,
                            }}
                            className={cn(
                                'absolute left-0 top-1/2 h-9 rounded-full bg-primary-container',
                                armed
                                    ? 'opacity-100 transition-[transform,width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]'
                                    : 'opacity-0'
                            )}
                        />

                        {navItems.map((id) => (
                            <a
                                key={id}
                                ref={(node) => {
                                    if (node) linkRefs.current.set(id, node)
                                    else linkRefs.current.delete(id)
                                }}
                                href={`#${id}`}
                                aria-current={
                                    id === active ? 'page' : undefined
                                }
                                className={cn(
                                    'relative z-10 flex h-9 items-center rounded-full px-3 text-body-sm transition-colors duration-200',
                                    focusRing,
                                    id === active
                                        ? 'text-on-primary-container'
                                        : 'text-on-surface-variant hover:text-on-surface'
                                )}
                            >
                                <NavLabel id={id} />
                            </a>
                        ))}
                    </nav>

                    <div className="ml-auto flex shrink-0 items-center gap-2">
                        <ButtonLink
                            href="#contato"
                            size="sm"
                            shape="pill"
                            className="h-9 max-sm:hidden"
                        >
                            {t('cta')}
                        </ButtonLink>

                        <LocaleSwitcher />

                        <button
                            type="button"
                            onClick={() => setMenuOpen((open) => !open)}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-nav"
                            aria-label={
                                menuOpen ? t('closeMenu') : t('openMenu')
                            }
                            className={cn(
                                'glass-inset glass-inset-interactive flex size-9 items-center justify-center rounded-full border border-border-subtle text-on-surface hover:border-border-active lg:hidden',
                                focusRing
                            )}
                        >
                            {menuOpen ? (
                                <X aria-hidden className="size-5" />
                            ) : (
                                <Menu aria-hidden className="size-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* ---------- Folha mobile ----------
                    Raio de 30px = 16px do lozango + 6px da linha + 8px da
                    folha: as três curvas são concêntricas, não só
                    arredondadas pelo mesmo palpite. A massa vem do
                    `.glass-capsule-panel`, e ela não acompanha o estado de
                    rolagem da cápsula — a folha só existe com a rolagem do
                    fundo travada. */}
                <div
                    id="mobile-nav"
                    hidden={!menuOpen}
                    className="glass glass-capsule glass-capsule-panel pointer-events-auto mt-2 origin-top animate-panel-in rounded-[1.875rem] border border-border-subtle p-2 lg:hidden"
                >
                    <nav aria-label={t('openMenu')}>
                        <ul className="flex flex-col">
                            {navItems.map((id) => (
                                <li key={id}>
                                    <a
                                        href={`#${id}`}
                                        onClick={() => setMenuOpen(false)}
                                        aria-current={
                                            id === active ? 'page' : undefined
                                        }
                                        /* O alvo de toque é a linha
                                           inteira; o preenchimento violeta
                                           não. Uma lápide de 44px por toda a
                                           largura é uma barra, não o mesmo
                                           lozango que desliza no desktop —
                                           então o violeta mora num filho que
                                           abraça o rótulo, e a linha inteira
                                           continua clicável. */
                                        className={cn(
                                            'flex h-11 w-full items-center rounded-full px-1.5 text-body-sm transition-colors duration-200',
                                            focusRing,
                                            id === active
                                                ? 'text-on-primary-container'
                                                : 'text-on-surface-variant hover:text-on-surface'
                                        )}
                                    >
                                        <span
                                            className={cn(
                                                'flex h-8 items-center rounded-full px-3',
                                                id === active &&
                                                    'bg-primary-container font-bold'
                                            )}
                                        >
                                            {t(`items.${id}`)}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <ButtonLink
                        href="#contato"
                        size="sm"
                        shape="pill"
                        className="mt-2 h-11 w-full sm:hidden"
                    >
                        {t('cta')}
                    </ButtonLink>
                </div>
            </Container>
        </header>
    )
}
