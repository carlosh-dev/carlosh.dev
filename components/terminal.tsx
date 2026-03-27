export default function TerminalWrapper({
    title,
    children,
}: {
    title: string
    children: React.ReactNode
}) {
    return (
        <div className="relative w-fit bg-zinc-950 rounded-xl p-2 overflow-hidden pt-8 pb-6 shadow-[0_0_10px_rgba(139,92,246,0.5)] shadow-violet-500/50 pr-20">
            <span className="absolute flex items-center top-0 left-0 right-0 p-2 gap-1 w-full h-6 bg-zinc-900">
                <div className="h-2 w-2 bg-red-400 rounded-full" />
                <div className="h-2 w-2 bg-yellow-400 rounded-full" />
                <div className="h-2 w-2 bg-green-400 rounded-full" />
                <p className="text-sm text-violet-300 ml-2">{title}</p>
            </span>
            {children}
        </div>
    )
}
