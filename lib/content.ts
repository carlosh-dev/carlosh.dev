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

export type Accent = 'accent' | 'neutral'

/**
 * Classes completas e literais — o Tailwind faz varredura estática do código,
 * então nomes de classe montados em runtime não seriam gerados.
 *
 * Dois tons só: o lime marca o que lidera, o branco carrega o resto.
 */
export const accentClass: Record<
    Accent,
    { text: string; dot: string; ring: string }
> = {
    accent: {
        text: 'text-on-surface',
        dot: 'bg-accent',
        ring: 'bg-accent/15',
    },
    neutral: {
        text: 'text-on-surface',
        dot: 'bg-on-surface',
        ring: 'bg-white/10',
    },
}

/**
 * Tom por tecnologia. Tudo branco: o lime é sinal de estado, não categoria.
 */
const techTone: Record<string, string> = {
    React: 'text-on-surface',
    'React.js': 'text-on-surface',
    'Next.js': 'text-on-surface',
    TypeScript: 'text-on-surface',
    Redis: 'text-on-surface',
    'Power BI': 'text-on-surface',
    'Express.js': 'text-on-surface',
    'React Query': 'text-on-surface',
    'Ruby on Rails': 'text-on-surface',
    'Node.js': 'text-on-surface',
    Storybook: 'text-on-surface',
    Sidekiq: 'text-on-surface',
    Nginx: 'text-on-surface',
    Jest: 'text-on-surface',
    RTL: 'text-on-surface',
    RSpec: 'text-on-surface',
    Elasticsearch: 'text-on-surface',
    Kibana: 'text-on-surface',
    WebSockets: 'text-on-surface',
    PostgreSQL: 'text-on-surface',
    SQL: 'text-on-surface',
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
    { id: 'experience', label: 'EXP_PROD', icon: History, accent: 'neutral' },
    { id: 'scale', label: 'SCALE_USERS', icon: Users, accent: 'neutral' },
    { id: 'performance', label: 'WEB_PERF', icon: Gauge, accent: 'neutral' },
    {
        id: 'tests',
        label: 'AUTOMATED_TESTS',
        icon: ShieldCheck,
        accent: 'neutral',
    },
    {
        id: 'cache',
        label: 'CACHE_OPTIMIZATION',
        icon: MemoryStick,
        accent: 'neutral',
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
    { id: 'frontend', icon: MonitorSmartphone, accent: 'neutral' },
    { id: 'designSystems', icon: Blocks, accent: 'neutral' },
    { id: 'quality', icon: FlaskConical, accent: 'neutral' },
    { id: 'ai', icon: Bot, accent: 'neutral' },
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
        accent: 'neutral',
        skills: [
            { name: 'React.js', dot: 'neutral', lead: true },
            { name: 'Next.js', dot: 'neutral', lead: true },
            { name: 'TypeScript', dot: 'neutral', lead: true },
            { name: 'React Query', dot: 'neutral' },
            { name: 'TailwindCSS', dot: 'neutral' },
            { name: 'Storybook', dot: 'neutral' },
            { name: 'Redux Toolkit' },
            { name: 'Zustand' },
            { name: 'TanStack Table' },
        ],
    },
    {
        id: 'backend',
        icon: Server,
        accent: 'neutral',
        skills: [
            { name: 'Node.js', dot: 'neutral', lead: true },
            { name: 'Ruby on Rails', dot: 'neutral', lead: true },
            { name: 'Express.js', dot: 'neutral' },
            { name: 'REST APIs', dot: 'neutral' },
            { name: 'WebSockets (Socket.io / Pusher)', dot: 'neutral' },
            { name: 'Background Jobs (Sidekiq)' },
            { name: 'Nginx', dot: 'neutral' },
        ],
    },
    {
        id: 'data',
        icon: Database,
        accent: 'neutral',
        skills: [
            { name: 'PostgreSQL', dot: 'neutral', lead: true },
            { name: 'Redis (Cache-aside)', dot: 'neutral', lead: true },
            { name: 'MySQL', dot: 'neutral' },
            { name: 'Elasticsearch', dot: 'neutral' },
            { name: 'Query Optimization' },
        ],
    },
    {
        id: 'testing',
        icon: ListChecks,
        accent: 'neutral',
        skills: [
            { name: 'Jest', dot: 'neutral', lead: true },
            { name: 'React Testing Library', dot: 'neutral', lead: true },
            { name: 'RSpec (Ruby)', dot: 'neutral' },
            { name: 'TDD / Unit Tests', dot: 'neutral' },
            { name: 'Integration Tests' },
        ],
    },
    {
        id: 'practices',
        icon: Brain,
        accent: 'neutral',
        wide: true,
        skills: [
            { name: 'Claude & GitHub Copilot', dot: 'neutral', lead: true },
            { name: 'Design Systems Architecture', dot: 'neutral', lead: true },
            { name: 'Design Patterns & Clean Architecture', dot: 'neutral' },
            { name: 'CI/CD Pipelines', dot: 'neutral' },
            { name: 'Git & Trunk-based Dev' },
            { name: 'Jira & Linear' },
            { name: 'Scrum / Kanban' },
            { name: 'Docker' },
            { name: 'Nginx', dot: 'neutral' },
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
        accent: 'accent',
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
        accent: 'neutral',
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
        accent: 'neutral',
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
        accent: 'neutral',
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
        accent: 'neutral',
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
        accent: 'neutral',
        period: '2018 - 2022',
    },
    {
        id: 'technical',
        icon: Terminal,
        accent: 'neutral',
        period: '2015 - 2016',
    },
]

export type Language = { id: string; level: number; accent: Accent }

export const languages: Language[] = [
    { id: 'portuguese', level: 100, accent: 'neutral' },
    { id: 'english', level: 75, accent: 'neutral' },
]

/* -------------------------------------------------------------------------- */
/*  Projetos                                                                   */
/* -------------------------------------------------------------------------- */

/** As duas metades saem rotuladas: num projeto solo, o alcance é a prova. */
export const stackSides = ['frontend', 'backend'] as const

export type Project = {
    id: string
    accent: Accent
    href: string
    year: string
    stack: Record<(typeof stackSides)[number], string[]>
}

export const projects: Project[] = [
    {
        id: 'planus',
        accent: 'neutral',
        href: 'https://www.planus.app.br/',
        year: '2026',
        stack: {
            frontend: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
            // Na ordem do caminho de uma requisição, não na de digitação.
            backend: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Nginx'],
        },
    },
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
        accent: 'neutral',
        href: `mailto:${siteConfig.email}`,
        external: false,
    },
    {
        id: 'linkedin',
        icon: LinkedinIcon,
        accent: 'neutral',
        href: siteConfig.linkedin,
        external: true,
    },
    {
        id: 'github',
        icon: GithubIcon,
        accent: 'neutral',
        href: siteConfig.github,
        external: true,
    },
]
