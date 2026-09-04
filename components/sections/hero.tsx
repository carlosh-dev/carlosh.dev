import Image from 'next/image'
import { ArrowDown, Terminal } from 'lucide-react'
import { useTranslations } from 'next-intl'

import PixelBlast from '@/components/hero/pixel-blast'
import ButtonLink from '@/components/ui/button-link'
import Container from '@/components/ui/container'
import { heroStats } from '@/lib/content'
import { cn } from '@/lib/cn'
import { richTags } from '@/lib/rich-tags'
import { siteConfig } from '@/lib/site-config'

export default function Hero() {
    const t = useTranslations('hero')

    /* Provas medidas primeiro, disponibilidade por último. Só a última linha
       muda de cor: texto de status é um dos usos que o verde tem reservados
       nesta paleta, e não há valor numérico para separar do rótulo. */
    const proof = [
        ...heroStats.map((id) => ({
            key: id,
            value: t(`stats.${id}.value`),
            label: t(`stats.${id}.label`),
            tone: 'text-on-surface-variant',
        })),
        {
            key: 'availability',
            value: null,
            label: t('stats.availability'),
            tone: 'text-tertiary',
        },
    ]

    return (
        <section
            id="inicio"
            className="relative w-full overflow-hidden py-16 lg:py-24"
        >
            {/* ---------- O campo ----------
                Violet-intense é o único emissor do sistema, então é ele que a
                trama acende — não o lilás pálido do componente, que aqui é cor
                de texto. Os orbes atrás são o piso: valem sozinhos sem WebGL2
                e apagam quando o campo assume. */}
            <div aria-hidden className="hero-field absolute inset-0 -z-10">
                <div className="hero-ambient-orb pointer-events-none absolute left-1/2 top-1/4 h-[360px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-intense/15 blur-[130px]" />
                <div className="hero-ambient-orb pointer-events-none absolute -right-20 -top-12 size-[420px] rounded-full bg-primary-container/10 blur-[140px]" />

                <PixelBlast
                    className="hero-pixel-field pointer-events-none absolute inset-0 size-full"
                    variant="circle"
                    color="#7c3aed"
                    pixelSize={5}
                    patternScale={3}
                    patternDensity={1.05}
                    pixelSizeJitter={0.45}
                    enableRipples
                    rippleSpeed={0.34}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.4}
                    liquid
                    liquidStrength={0.1}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={4.5}
                    speed={0.45}
                    edgeFade={0.28}
                    maxPixelRatio={1.5}
                    transparent
                />

                <div className="hero-scrim pointer-events-none absolute inset-0" />
            </div>

            <Container>
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                    {/* ---------- Coluna de texto ----------
                        Quatro blocos, e o ritmo é declarado bloco a bloco em
                        vez de sair de um `space-y` com remendos de padding em
                        cima: 24px prende o parágrafo ao título, 32px solta a
                        ação, 40px solta a prova. São três degraus, e é o que
                        dá a hierarquia numa coluna sem separador nenhum. */}
                    <div className="flex flex-col items-start lg:col-span-7">
                        <h1 className="text-balance text-display-hero-mobile text-white lg:text-display-hero">
                            {t.rich('headline', richTags)}
                        </h1>

                        <p className="mt-6 max-w-2xl text-pretty text-body-lg text-on-surface-variant">
                            {t.rich('subheadline', richTags)}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            {/* Pela "Regra do Único Nó Aceso", o CTA primário
                                continua sendo o ponto mais brilhante da região
                                — inclusive contra a trama. */}
                            <ButtonLink href="#experiencia">
                                <span>{t('ctaPrimary')}</span>
                                <ArrowDown
                                    aria-hidden
                                    className="size-[18px]"
                                />
                            </ButtonLink>
                            <ButtonLink href="#contato" variant="ghost">
                                <Terminal
                                    aria-hidden
                                    className="size-[18px] text-primary"
                                />
                                <span>{t('ctaSecondary')}</span>
                            </ButtonLink>
                        </div>

                        {/* Linha de provas.
                            Os números que ficavam em cartões de vidro sobre o
                            retrato voltam para a coluna de leitura como o que
                            sempre foram: dados. Mono porque são medida, não
                            prosa. O `::` é o separador que a faixa de shell
                            usava — a faixa saiu, o idioma dela fica.
                            O padding no separador existe para o vão antes e
                            depois dele bater em 14px dos dois lados; sem isso
                            o gap da lista mede um lado só. */}
                        <ul className="mt-10 flex flex-wrap items-center gap-2 font-mono text-label-code">
                            {proof.map(({ key, value, label, tone }, index) => (
                                <li
                                    key={key}
                                    className="flex items-center gap-2"
                                >
                                    {index > 0 ? (
                                        <span
                                            aria-hidden
                                            className="px-1.5 text-outline"
                                        >
                                            ::
                                        </span>
                                    ) : null}
                                    {/* Só o rótulo vai em caixa alta. O valor
                                        fica como escrito, senão `100k+` viraria
                                        `100K+` e `−50%` perderia o sinal de
                                        menos tipográfico. */}
                                    {value ? (
                                        <span className="text-white">
                                            {value}
                                        </span>
                                    ) : null}
                                    <span className={cn('uppercase', tone)}>
                                        {label}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ---------- Retrato ----------
                        Uma forma só, sem moldura aninhada e sem vidro: a foto
                        cobre 100% da silhueta, então tint e `backdrop-filter`
                        embaixo dela seriam invisíveis. Quem define a borda é a
                        aresta interna de 1px; quem dá profundidade é a aura,
                        que carrega a MESMA curva em percentuais e por isso
                        cresce proporcional em vez de virar um halo de cantos
                        retos atrás de uma forma que não os tem. */}
                    <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
                        <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
                            <div
                                aria-hidden
                                className="portrait-organic absolute -inset-6 bg-gradient-to-tr from-violet-intense via-secondary to-accent-pink opacity-40 blur-2xl"
                            />

                            <div className="portrait-organic relative aspect-[4/5] overflow-hidden bg-surface-lowest">
                                {/* A foto atual é quadrada, então num quadro
                                    4:5 o corte é só lateral e o eixo Y não tem
                                    para onde correr — `30%` é inerte aqui, e
                                    está declarado para o dia em que entrar uma
                                    foto mais alta que 4:5, quando o padrão
                                    `center` cortaria a testa. */}
                                <Image
                                    src={siteConfig.portrait}
                                    alt={t('portraitAlt')}
                                    fill
                                    priority
                                    quality={90}
                                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                                    className="object-cover object-[center_30%] brightness-[1.04] contrast-[1.06] grayscale-[15%]"
                                />

                                {/* Aresta e vinheta na mesma camada, por cima
                                    da foto — `box-shadow: inset` no contêiner
                                    pintaria abaixo do conteúdo e a imagem o
                                    cobriria inteiro.
                                    A vinheta é centrada no rosto e devolve a
                                    periferia da foto (o espelho aceso à
                                    esquerda, o sofá) para o obsidiano da
                                    página. É o mesmo recurso do `.hero-scrim`
                                    algumas linhas acima: um poço radial que
                                    protege o que precisa ser lido, aqui
                                    aplicado ao que precisa ser visto. */}
                                <div
                                    aria-hidden
                                    className="portrait-organic pointer-events-none absolute inset-0 bg-[radial-gradient(64%_54%_at_52%_34%,transparent_28%,rgb(10_10_12/0.7)_100%)] shadow-[inset_0_0_0_1px_rgb(255_255_255/0.12)]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
