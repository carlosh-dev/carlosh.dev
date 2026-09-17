import portrait from '@/public/carlos.jpg'

export const siteConfig = {
    name: 'Carlos Henrique',
    // TODO: preencher com os canais reais antes de publicar.
    email: 'contato.carlosh@outlook.com',
    linkedin: 'https://www.linkedin.com/in/carlosh-dev/',
    github: 'https://github.com/carlosh-dev',
    whatsapp: 'https://wa.me/5511900000000',
    /** Retrato do hero. Import estático: gera blur placeholder automático. */
    portrait,
} as const

/**
 * Ordem do menu = ordem real das seções no DOM.
 * (O HTML de referência listava "Experiência" antes de "Competências",
 * mas a seção 02 é Competências e a 03 é Experiência.)
 */
export const navItems = [
    'inicio',
    'sobre',
    'competencias',
    'experiencia',
    'formacao',
    'projetos',
    'contato',
] as const

export type NavItem = (typeof navItems)[number]
