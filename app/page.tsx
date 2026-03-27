import { useTranslations } from 'next-intl'
import TerminalWrapper from '@/components/terminal'

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

                <div className="flex gap-4  flex-wrap">
                    <span className="w-fit bg-transparent font-semibold p-2 rounded-lg  transition-colors cursor-default border border-violet-500 hover:bg-zinc-600 text-violet-500 hover:text-white">
                        NextJS
                    </span>

                    <span className="w-fit bg-transparent font-semibold p-2 rounded-lg  transition-colors cursor-default border border-violet-500 hover:bg-zinc-600 text-violet-500 hover:text-white">
                        TypeScript
                    </span>

                    <span className="w-fit bg-transparent font-semibold p-2 rounded-lg  transition-colors cursor-default border border-violet-500 hover:bg-zinc-600 text-violet-500 hover:text-white">
                        TailwindCSS
                    </span>

                    <span className="w-fit bg-transparent font-semibold p-2 rounded-lg  transition-colors cursor-default border border-violet-500 hover:bg-zinc-600 text-violet-500 hover:text-white">
                        NodeJS
                    </span>

                    <span className="w-fit bg-transparent font-semibold p-2 rounded-lg  transition-colors cursor-default border border-violet-500 hover:bg-zinc-600 text-violet-500 hover:text-white">
                        SQL
                    </span>

                    <span className="w-fit bg-transparent font-semibold p-2 rounded-lg  transition-colors cursor-default border border-violet-500 hover:bg-zinc-600 text-violet-500 hover:text-white">
                        AI
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-4 mb-8 mt-20">
                <TerminalWrapper title={'about-me.txt'}>
                    <p className="text-violet-300 p-10">
                        Sou um desenvolvedor de software apaixonado por
                        tecnologia e inovação. Com experiência em
                        desenvolvimento web, estou sempre buscando aprender
                        novas tecnologias e aprimorar minhas habilidades para
                        criar soluções eficientes e impactantes.
                    </p>
                </TerminalWrapper>
            </div>
        </main>
    )
}
