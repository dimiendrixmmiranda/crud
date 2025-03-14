interface BotaoProps {
    children: React.ReactNode
    className?: string
    cor?: 'green' | 'blue' | 'gray'
    onclick?: () => void
}

export default function Botao({ children, className, cor, onclick }: BotaoProps) {
    const definirCor = cor === 'green' ? 'bg-gradient-to-r from-green-400 to-green-600' :
    cor === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
    'bg-gradient-to-r from-gray-400 to-gray-600';

    return (
        <button onClick={onclick} className={`
            text-white
            px-4 py-2 rounded-lg mb-4
            whitespace-nowrap
            ${definirCor}
            ${className}
        `}>
            {children}
        </button>
    )
}