import messages from '@/messages/en.json'
import { education, experience, projects, skillCategories } from '@/lib/content'
import { siteConfig } from '@/lib/site-config'

/* Resumo em Markdown para motores generativos (convenção llms.txt), em
   inglês porque é a língua de trabalho desses modelos. Montado das mesmas
   mensagens da página, então não envelhece separado dela. */
export const dynamic = 'force-static'

/** Tira as tags ICU (`<b>…</b>`) que a página usa só para destaque. */
const plain = (text: string) => text.replace(/<\/?\w+>/g, '')

export function GET() {
    const {
        meta,
        hero,
        experience: exp,
        education: edu,
        projects: proj,
    } = messages
    const roles = exp.roles as Record<
        string,
        { role: string; company: string; summary: string; bullets: object }
    >
    const items = proj.items as Record<
        string,
        { name: string; description: string }
    >
    const degrees = edu.degrees as Record<
        string,
        { title: string; institution: string }
    >
    const categories = messages.skills.categories as Record<
        string,
        { title: string }
    >

    const body = [
        `# ${siteConfig.name}`,
        `> ${meta.description}`,
        plain(hero.subheadline),
        '## Links',
        [
            `- Website: ${siteConfig.url}`,
            `- LinkedIn: ${siteConfig.linkedin}`,
            `- GitHub: ${siteConfig.github}`,
            `- Email: ${siteConfig.email}`,
        ].join('\n'),
        '## Experience',
        ...experience.map(({ id, start, end, stack }) => {
            const role = roles[id]
            return [
                `### ${role.role} — ${role.company} (${start} – ${end ?? exp.present})`,
                role.summary,
                ...Object.values(role.bullets).map(
                    (b: string) => `- ${plain(b)}`
                ),
                `Stack: ${stack.join(', ')}`,
            ].join('\n')
        }),
        '## Skills',
        skillCategories
            .map(
                ({ id, skills }) =>
                    `- ${categories[id].title}: ${skills.map((s) => s.name).join(', ')}`
            )
            .join('\n'),
        '## Projects',
        ...projects.map(({ id, href }) => {
            const item = items[id]
            return `### [${item.name}](${href})\n${item.description}`
        }),
        '## Education',
        [
            ...education.map(({ id, period }) => {
                const d = degrees[id]
                return `- ${d.title} — ${d.institution} (${period})`
            }),
            `- ${edu.languages.portuguese.name}: ${edu.languages.portuguese.level}; ${edu.languages.english.name}: ${edu.languages.english.level}`,
        ].join('\n'),
    ].join('\n\n')

    return new Response(`${body}\n`, {
        headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
    })
}
