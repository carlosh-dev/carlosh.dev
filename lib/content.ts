import {
    AppWindow,
    AtSign,
    Blocks,
    Bot,
    Brain,
    Database,
    FlaskConical,
    Gauge,
    GraduationCap,
    History,
    ListChecks,
    MemoryStick,
    MessageCircle,
    MonitorSmartphone,
    Server,
    ShieldCheck,
    Terminal,
    Users,
} from 'lucide-react'
import type { ComponentType } from 'react'

import { GithubIcon, LinkedinIcon } from '@/components/ui/brand-icons'

import { siteConfig } from './site-config'

/** Assinatura mínima compartilhada pelos ícones do Lucide e pelas marcas locais. */
export type IconComponent = ComponentType<{
    className?: string
    'aria-hidden'?: boolean | 'true' | 'false'
}>

/* -------------------------------------------------------------------------- */
/*  Accents                                                                    */
/* -------------------------------------------------------------------------- */

export type Accent = 'primary' | 'secondary' | 'tertiary' | 'pink' | 'cyan'

/**
 * Classes completas e literais — o Tailwind faz varredura estática do código,
 * então nomes de classe montados em runtime não seriam gerados.
 */
export const accentClass: Record<
    Accent,
    { text: string; dot: string; ring: string }
> = {
    primary: {
        text: 'text-primary',
        dot: 'bg-primary',
        ring: 'bg-violet-intense/20',
    },
    secondary: {
        text: 'text-secondary',
        dot: 'bg-secondary',
        ring: 'bg-secondary/20',
    },
    tertiary: {
        text: 'text-tertiary',
        dot: 'bg-tertiary',
        ring: 'bg-tertiary-container/30',
    },
    pink: {
        text: 'text-accent-pink',
        dot: 'bg-accent-pink',
        ring: 'bg-accent-pink/20',
    },
    cyan: {
        text: 'text-accent-cyan',
        dot: 'bg-accent-cyan',
        ring: 'bg-accent-cyan/20',
    },
}

/**
 * Cor por tecnologia, aplicada de forma consistente em toda a página —
 * no HTML de referência as mesmas techs já recebiam sempre a mesma cor,
 * repetida à mão em cada cargo.
 */
const techTone: Record<string, string> = {
    React: 'text-primary',
    'React.js': 'text-primary',
    'Next.js': 'text-primary',
    TypeScript: 'text-primary',
    Redis: 'text-primary',
    'Power BI': 'text-primary',
    'React Query': 'text-secondary',
    'Ruby on Rails': 'text-secondary',
    Storybook: 'text-accent-pink',
    Sidekiq: 'text-accent-pink',
    Jest: 'text-accent-cyan',
    RTL: 'text-accent-cyan',
    RSpec: 'text-accent-cyan',
    Elasticsearch: 'text-accent-cyan',
    Kibana: 'text-accent-cyan',
    WebSockets: 'text-tertiary',
    PostgreSQL: 'text-tertiary',
    SQL: 'text-tertiary',
    TailwindCSS: 'text-on-surface',
    'Google Maps APIs': 'text-on-surface',
}

export function toneFor(tech: string): string {
    return techTone[tech] ?? 'text-on-surface-variant'
}

/* -------------------------------------------------------------------------- */
/*  Métricas                                                                   */
/* -------------------------------------------------------------------------- */

export type Metric = {
    id: string
    /** Rótulo em snake case — identificador, não traduzido. */
    label: string
    icon: IconComponent
    accent: Accent
}

export const metrics: Metric[] = [
    { id: 'experience', label: 'EXP_PROD', icon: History, accent: 'primary' },
    { id: 'scale', label: 'SCALE_USERS', icon: Users, accent: 'tertiary' },
    { id: 'performance', label: 'WEB_PERF', icon: Gauge, accent: 'pink' },
    {
        id: 'tests',
        label: 'AUTOMATED_TESTS',
        icon: ShieldCheck,
        accent: 'cyan',
    },
    {
        id: 'cache',
        label: 'CACHE_OPTIMIZATION',
        icon: MemoryStick,
        accent: 'secondary',
    },
]

/**
 * As provas do hero, na ordem em que são lidas.
 *
 * Sem ícone e sem accent: a linha é tipográfica, e o que separa valor de
 * rótulo ali é cor e corpo, não um glifo. A ordem é a de leitura —
 * senioridade, escala, mecanismo — que é a ordem em que um recruiter
 * decide se vale continuar.
 */
export const heroStats = ['years'] as const

/* -------------------------------------------------------------------------- */
/*  Pilares (seção "Sobre")                                                    */
/* -------------------------------------------------------------------------- */

export type Pillar = { id: string; icon: IconComponent; accent: Accent }

export const pillars: Pillar[] = [
    { id: 'frontend', icon: MonitorSmartphone, accent: 'primary' },
    { id: 'designSystems', icon: Blocks, accent: 'pink' },
    { id: 'quality', icon: FlaskConical, accent: 'tertiary' },
    { id: 'ai', icon: Bot, accent: 'cyan' },
]

/* -------------------------------------------------------------------------- */
/*  Competências                                                               */
/* -------------------------------------------------------------------------- */

export type Skill = { name: string; dot?: Accent; lead?: boolean }

export type SkillCategory = {
    id: string
    icon: IconComponent
    accent: Accent
    /** Ocupa duas colunas no desktop. */
    wide?: boolean
    skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
    {
        id: 'frontend',
        icon: AppWindow,
        accent: 'primary',
        skills: [
            { name: 'React.js', dot: 'primary', lead: true },
            { name: 'Next.js', dot: 'primary', lead: true },
            { name: 'TypeScript', dot: 'primary', lead: true },
            { name: 'React Query', dot: 'secondary' },
            { name: 'TailwindCSS', dot: 'secondary' },
            { name: 'Storybook', dot: 'pink' },
            { name: 'Redux Toolkit' },
            { name: 'Zustand' },
            { name: 'TanStack Table' },
        ],
    },
    {
        id: 'backend',
        icon: Server,
        accent: 'secondary',
        skills: [
            { name: 'Node.js', dot: 'secondary', lead: true },
            { name: 'Ruby on Rails', dot: 'secondary', lead: true },
            { name: 'Express.js', dot: 'primary' },
            { name: 'REST APIs', dot: 'pink' },
            { name: 'WebSockets (Socket.io / Pusher)', dot: 'cyan' },
            { name: 'Background Jobs (Sidekiq)' },
        ],
    },
    {
        id: 'data',
        icon: Database,
        accent: 'tertiary',
        skills: [
            { name: 'PostgreSQL', dot: 'tertiary', lead: true },
            { name: 'Redis (Cache-aside)', dot: 'pink', lead: true },
            { name: 'MySQL', dot: 'primary' },
            { name: 'Elasticsearch', dot: 'secondary' },
            { name: 'Query Optimization' },
        ],
    },
    {
        id: 'testing',
        icon: ListChecks,
        accent: 'cyan',
        skills: [
            { name: 'Jest', dot: 'cyan', lead: true },
            { name: 'React Testing Library', dot: 'cyan', lead: true },
            { name: 'RSpec (Ruby)', dot: 'primary' },
            { name: 'TDD / Unit Tests', dot: 'secondary' },
            { name: 'Integration Tests' },
        ],
    },
    {
        id: 'practices',
        icon: Brain,
        accent: 'pink',
        wide: true,
        skills: [
            { name: 'Claude & GitHub Copilot', dot: 'pink', lead: true },
            { name: 'Design Systems Architecture', dot: 'primary', lead: true },
            { name: 'Design Patterns & Clean Architecture', dot: 'secondary' },
            { name: 'CI/CD Pipelines', dot: 'tertiary' },
            { name: 'Git & Trunk-based Dev' },
            { name: 'Jira & Linear' },
            { name: 'Scrum / Kanban' },
            { name: 'Docker' },
        ],
    },
]

/* -------------------------------------------------------------------------- */
/*  Trajetória                                                                 */
/* -------------------------------------------------------------------------- */

export type Role = {
    id: string
    accent: Accent
    start: string
    /** `null` = cargo atual; o rótulo "Presente" vem das mensagens. */
    end: string | null
    bulletCount: number
    stack: string[]
}

export const experience: Role[] = [
    {
        id: 'penzack',
        accent: 'primary',
        start: '09/2024',
        end: null,
        bulletCount: 5,
        stack: [
            'React',
            'Next.js',
            'TypeScript',
            'React Query',
            'TailwindCSS',
            'Storybook',
            'Jest',
            'RTL',
            'WebSockets',
        ],
    },
    {
        id: 'kirvano',
        accent: 'secondary',
        start: '12/2022',
        end: '09/2024',
        bulletCount: 3,
        stack: [
            'React',
            'Next.js',
            'TypeScript',
            'React Query',
            'TailwindCSS',
            'Storybook',
            'Jest',
            'RTL',
        ],
    },
    {
        id: 'cloudfox',
        accent: 'pink',
        start: '06/2021',
        end: '11/2022',
        bulletCount: 3,
        stack: [
            'React',
            'Next.js',
            'TypeScript',
            'React Query',
            'TailwindCSS',
            'Storybook',
            'PHP',
            'Laravel',
        ],
    },
    {
        id: 'laager',
        accent: 'tertiary',
        start: '12/2020',
        end: '06/2021',
        bulletCount: 3,
        stack: [
            'Ruby on Rails',
            'PostgreSQL',
            'Sidekiq',
            'Redis',
            'RSpec',
            'Google Maps APIs',
            'Docker',
        ],
    },
    {
        id: 'elaw',
        accent: 'cyan',
        start: '02/2019',
        end: '08/2020',
        bulletCount: 3,
        stack: ['Elasticsearch', 'Kibana', 'Power BI', 'SQL', 'PHP'],
    },
]

/* -------------------------------------------------------------------------- */
/*  Formação e idiomas                                                         */
/* -------------------------------------------------------------------------- */

export type Degree = {
    id: string
    icon: IconComponent
    accent: Accent
    period: string
}

export const education: Degree[] = [
    {
        id: 'computerScience',
        icon: GraduationCap,
        accent: 'primary',
        period: '2018 — 2022',
    },
    {
        id: 'technical',
        icon: Terminal,
        accent: 'secondary',
        period: '2015 — 2016',
    },
]

export type Language = { id: string; level: number; accent: Accent }

export const languages: Language[] = [
    { id: 'portuguese', level: 100, accent: 'tertiary' },
    { id: 'english', level: 75, accent: 'primary' },
]

/* -------------------------------------------------------------------------- */
/*  Contato                                                                    */
/* -------------------------------------------------------------------------- */

export type Channel = {
    id: string
    icon: IconComponent
    accent: Accent
    href: string
    external: boolean
}

export const channels: Channel[] = [
    {
        id: 'email',
        icon: AtSign,
        accent: 'primary',
        href: `mailto:${siteConfig.email}`,
        external: false,
    },
    {
        id: 'linkedin',
        icon: LinkedinIcon,
        accent: 'secondary',
        href: siteConfig.linkedin,
        external: true,
    },
    {
        id: 'github',
        icon: GithubIcon,
        accent: 'pink',
        href: siteConfig.github,
        external: true,
    },
    {
        id: 'whatsapp',
        icon: MessageCircle,
        accent: 'tertiary',
        href: siteConfig.whatsapp,
        external: true,
    },
]
