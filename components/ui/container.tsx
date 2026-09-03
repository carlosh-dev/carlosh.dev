import { cn } from '@/lib/cn'

export default function Container({
    className,
    children,
}: {
    className?: string
    children: React.ReactNode
}) {
    return (
        <div
            className={cn('mx-auto w-full max-w-page px-4 lg:px-8', className)}
        >
            {children}
        </div>
    )
}
