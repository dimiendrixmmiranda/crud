interface TituloProps{
    titulo: string
}

export default function Titulo({titulo}: TituloProps){
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-2 text-2xl uppercase font-bold">{titulo}</h1>
            <hr className="border-2 border-purple-500"/>
        </div>
    )
}