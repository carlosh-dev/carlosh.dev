import { getLocale, getTranslations } from 'next-intl/server'

import About from '@/components/sections/about'
import Contact from '@/components/sections/contact'
import Education from '@/components/sections/education'
import Experience from '@/components/sections/experience'
import Hero from '@/components/sections/hero'
import Projects from '@/components/sections/projects'
import Skills from '@/components/sections/skills'
import { localeInfo, type Locale } from '@/i18n/config'
import { education, experience, projects, skillCategories } from '@/lib/content'
import { siteConfig } from '@/lib/site-config'

/**
 * Dados estruturados (schema.org) para buscadores e motores generativos:
 * quem é a pessoa, onde trabalha, onde estudou e o que sabe. Tudo sai do
 * mesmo conteúdo da página, então nunca diverge do que está na tela.
 */
async function getJsonLd() {
    const locale = (await getLocale()) as Locale
    const t = await getTranslations()
    const url = siteConfig.url
    const person = `${url}/#person`
    const current = experience.find((role) => role.end === null)

    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': `${url}/#website`,
                url,
                name: siteConfig.name,
                inLanguage: localeInfo[locale].tag,
                publisher: { '@id': person },
            },
            {
                '@type': 'ProfilePage',
                '@id': `${url}/#profile`,
                url,
                name: t('meta.title'),
                description: t('meta.description'),
                inLanguage: localeInfo[locale].tag,
                isPartOf: { '@id': `${url}/#website` },
                mainEntity: { '@id': person },
            },
            {
                '@type': 'Person',
                '@id': person,
                name: siteConfig.name,
                url,
                image: `${url}${siteConfig.portrait.src}`,
                jobTitle: 'Software Engineer',
                description: t('meta.description'),
                email: `mailto:${siteConfig.email}`,
                sameAs: [siteConfig.linkedin, siteConfig.github],
                ...(current && {
                    worksFor: {
                        '@type': 'Organization',
                        name: t(`experience.roles.${current.id}.company`),
                    },
                }),
                alumniOf: education.map(({ id }) => ({
                    '@type': 'EducationalOrganization',
                    name: t(`education.degrees.${id}.institution`),
                })),
                knowsLanguage: Object.values(localeInfo).map((l) => l.tag),
                knowsAbout: [
                    ...new Set(
                        skillCategories.flatMap((c) =>
                            c.skills.map((s) => s.name)
                        )
                    ),
                ],
                owns: projects.map(({ id, href }) => ({
                    '@type': 'SoftwareApplication',
                    name: t(`projects.items.${id}.name`),
                    description: t(`projects.items.${id}.description`),
                    url: href,
                })),
            },
        ],
    }
}

export default async function Home() {
    const jsonLd = await getJsonLd()

    return (
        <>
            <script
                type="application/ld+json"
                // `<` escapado: o payload não pode fechar a tag <script>.
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
                }}
            />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Contact />
        </>
    )
}
