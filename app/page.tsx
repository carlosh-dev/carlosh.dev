import { useTranslations } from 'next-intl'
import TerminalWrapper from '@/components/terminal'
import Stacks from '../components/stacks'

export default function Home() {
    // const t = useTranslations('HomePage')
    return (
        <main className="flex flex-col w-full max-w-[90%] flex-1 p-">
            <div className="flex flex-col gap-4 mb-8 mt-20">
                <h2 className="text-3xl font-bold">Olá, mundo! Eu sou o </h2>
                <h1 className="text-7xl font-bold bg-linear-to-r from-violet-700 to-violet-400  bg-clip-text text-transparent">
                    Carlos Henrique.
                </h1>

                <TerminalWrapper title={'carlosh-dev'}>
                    <div className="flex items-center">
                        <p className="text-violet-500 font-semibold mr-1 text-lg">
                            {'>'}
                        </p>{' '}
                        <p>whoami</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-violet-500 font-semibold mr-1 text-lg">
                            {'>'}
                        </p>{' '}
                        <p>software_eng_dev</p>
                    </div>
                </TerminalWrapper>

                <Stacks />
            </div>

            <div className="flex flex-col gap-4 mb-8 mt-20">
                <TerminalWrapper title={'about-me.txt'}>
                    <div className="grid grid-cols-[1fr_auto] gap-4 p-5">
                        <div className="flex flex-col gap-4 w-full">
                            <p className="text-violet-300 p-10 w-full">
                                Sou um desenvolvedor de software apaixonado por
                                tecnologia e inovação. Com experiência em
                                desenvolvimento web, estou sempre buscando
                                aprender novas tecnologias e aprimorar minhas
                                habilidades para criar soluções eficientes e
                                impactantes.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 w-fit">
                            <div className="bg-zinc-800 p-4 rounded-lg flex flex-col ">
                                <p className="text-4xl font-bold text-violet-500">
                                    05+
                                </p>
                                <p className="max-w-50 text-sm text-violet-300">
                                    YEARS_OF_EXPERIENCE
                                </p>
                            </div>
                            <div className="bg-zinc-800 p-4 rounded-lg flex flex-col ">
                                <p className="text-4xl font-bold text-violet-500">
                                    10+
                                </p>
                                <p className="max-w-50 text-sm text-violet-300">
                                    PROJECTS_COMPLETEDS
                                </p>
                            </div>
                            <div className="bg-zinc-800 p-4 rounded-lg flex flex-col ">
                                <p className="text-4xl font-bold text-violet-500">
                                    12k+
                                </p>
                                <p className="max-w-50 text-sm text-violet-300">
                                    COMMITS_LOGGED
                                </p>
                            </div>
                        </div>
                    </div>
                </TerminalWrapper>
            </div>
        </main>
    )
}
