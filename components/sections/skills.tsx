import { useTranslations } from 'next-intl'

import Card from '@/components/ui/card'
import Container from '@/components/ui/container'
import SectionHeading from '@/components/ui/section-heading'
import TechBadge from '@/components/ui/tech-badge'
import { accentClass, skillCategories } from '@/lib/content'
import { cn } from '@/lib/cn'

export default function Skills() {
    const t = useTranslations('skills')

    return (
        <section
            id="competencias"
            className="w-full bg-surface-raised/30 py-16 lg:py-24"
        >
            <Container>
                <SectionHeading
                    align="center"
                    eyebrow={t('eyebrow')}
                    title={t('title')}
                    description={t('description')}
                    className="mb-12"
                />

                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map(
                        ({ id, icon: Icon, accent, wide, skills }) => (
                            <Card
                                as="li"
                                key={id}
                                className={cn('p-6', wide && 'md:col-span-2')}
                            >
                                <div className="mb-4 flex items-center gap-2">
                                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-surface-base">
                                        <Icon
                                            aria-hidden
                                            className={cn(
                                                'size-5',
                                                accentClass[accent].text
                                            )}
                                        />
                                    </span>
                                    <div>
                                        <h3 className="text-headline-sm text-white">
                                            {t(`categories.${id}.title`)}
                                        </h3>
                                        <span className="font-mono text-[10px] text-on-surface-variant">
                                            {t(`categories.${id}.subtitle`)}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <TechBadge
                                            key={skill.name}
                                            label={skill.name}
                                            dot={skill.dot}
                                            lead={skill.lead}
                                        />
                                    ))}
                                </div>
                            </Card>
                        )
                    )}
                </ul>
            </Container>
        </section>
    )
}
