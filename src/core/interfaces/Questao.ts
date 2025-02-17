import Resposta from "./Resposta"

export default interface Questao {
    id: number,
    enunciado: string
    categoria: string
    respostas: Resposta[]
    acertou: boolean
}