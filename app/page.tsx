import TerminalWrapper from '@/components/terminal'
import Stacks from '../components/stacks'

export default function Home() {
    return (
        <main className="flex flex-col w-full max-w-6xl mx-auto flex-1 px-4 sm:px-8 pb-10 sm:pb-16">
            <div className="flex flex-col gap-4 mb-8 mt-10 sm:mt-20">
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                    Olá, mundo! Eu sou o
                </h2>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-linear-to-r from-violet-700 to-violet-400 bg-clip-text text-transparent leading-tight wrap-break-word">
                    Carlos Henrique.
                </h1>

                <TerminalWrapper title={'carlosh-dev'}>
                    <div className="flex items-center flex-wrap">
                        <p className="text-violet-500 font-semibold mr-1 text-lg">
                            {'>'}
                        </p>{' '}
                        <p>whoami</p>
                    </div>
                    <div className="flex items-center flex-wrap">
                        <p className="text-violet-500 font-semibold mr-1 text-lg">
                            {'>'}
                        </p>{' '}
                        <p className="break-all">software_eng_dev</p>
                    </div>
                </TerminalWrapper>

                <Stacks />
            </div>

            <div className="flex flex-col gap-4 mb-8 mt-10 sm:mt-20">
                <TerminalWrapper title={'about-me.txt'}>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 p-3 sm:p-5">
                        <div className="flex flex-col gap-4 w-full">
                            <p className="text-violet-300 p-2 sm:p-6 lg:p-10 w-full text-sm sm:text-base leading-relaxed">
                                Sou um desenvolvedor de software apaixonado por
                                tecnologia e inovação. Com experiência em
                                desenvolvimento web, estou sempre buscando
                                aprender novas tecnologias e aprimorar minhas
                                habilidades para criar soluções eficientes e
                                impactantes.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full md:w-fit">
                            <div className="bg-zinc-800 p-3 sm:p-4 rounded-lg flex flex-col min-w-32">
                                <p className="text-3xl sm:text-4xl font-bold text-violet-500">
                                    05+
                                </p>
                                <p className="max-w-50 text-xs sm:text-sm text-violet-300">
                                    YEARS_OF_EXPERIENCE
                                </p>
                            </div>
                            <div className="bg-zinc-800 p-3 sm:p-4 rounded-lg flex flex-col min-w-32">
                                <p className="text-3xl sm:text-4xl font-bold text-violet-500">
                                    10+
                                </p>
                                <p className="max-w-50 text-xs sm:text-sm text-violet-300">
                                    PROJECTS_COMPLETEDS
                                </p>
                            </div>
                            <div className="bg-zinc-800 p-3 sm:p-4 rounded-lg flex flex-col min-w-32 sm:col-span-2 md:col-span-1">
                                <p className="text-3xl sm:text-4xl font-bold text-violet-500">
                                    12k+
                                </p>
                                <p className="max-w-50 text-xs sm:text-sm text-violet-300">
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
