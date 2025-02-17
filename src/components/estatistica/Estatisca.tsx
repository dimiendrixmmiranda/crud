interface EstatiscaProps{
    texto: string
    valor: string
    cor: string
}

export default function Estatisca({texto, valor, cor}: EstatiscaProps){
    return(
        <div className="flex flex-col justify-center items-center gap-1">
            <div className="w-20 h-20 rounded-full flex justify-center items-center" style={{backgroundColor: cor, boxShadow: '0 0 1px 2px black'}}>
                <p className="text-2xl font-bold" style={{textShadow: '1px 1px 2px black'}}>{valor}</p>
            </div>
            <h2 className="text-center" style={{textShadow: '1px 1px 2px black'}}>{texto}</h2>
        </div>
    )
}