export default function calcularPercentual(acertos: number, tamanhoQuestionario: number): string {
    const porcentagem = (acertos / tamanhoQuestionario) * 100
    return `${porcentagem.toFixed(0)}%`
}