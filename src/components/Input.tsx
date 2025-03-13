interface InputProps {
    texto: string
    valor: string | number
    somenteLeitura?: boolean
    tipo?: 'text' | 'number'
    className?: string
    onchange?: (valor: any) => void
}

export default function Input({ texto, valor, tipo, somenteLeitura, className,onchange }: InputProps) {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <label>
                {texto}
            </label>
            <input
                className="border border-purple-500 rounded-lg focus:outline-none bg-gray-100 px-2 py-1 focus:bg-white"
                type={`${tipo ?? 'text'}`}
                value={valor}
                readOnly={somenteLeitura}
                onChange={(e) => {
                    if (onchange) {
                        return onchange(e.target.value)
                    }
                }} />
        </div>
    )
}