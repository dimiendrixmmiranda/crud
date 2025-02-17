import Link from "next/link"

interface BotaoProps {
    texto: string
    acertos: number
    tamanhoQuestionario: number
    href?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Botao({ texto, href, onClick, acertos, tamanhoQuestionario}: BotaoProps) {
    const url = href ? `${href}?acertos=${acertos}&tamanhoQuestionario=${tamanhoQuestionario}` : ''

    return (
        href ? (
            <Link href={url}>
                <button onClick={onClick} className="bg-[--preto] font-bold text-3xl px-8 py-3 rounded-lg fonteEspecial tracking-widest" style={{textShadow: '1px 1px 2px black', boxShadow: '0 0 3px 2px black'}}>
                    {texto}
                </button>
            </Link>
        ) : (
            <button onClick={onClick} className="bg-[--preto] font-bold text-3xl px-8 py-3 rounded-lg fonteEspecial tracking-widest" style={{textShadow: '1px 1px 2px black', boxShadow: '0 0 3px 2px black'}}>
                {texto}
            </button >
        )
    )
}