interface MainProps {
    children: React.ReactElement
}

export default function Main({ children }: MainProps) {
    return (
        <main className="py-10 flex items-center justify-center md:py-0">
            {children}
        </main>
    )
}