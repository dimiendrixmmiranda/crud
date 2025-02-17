export default function aplicarCorFundo(acertos: number, tamanhoQuestionario: number) {
    const porcentagem = (acertos / tamanhoQuestionario) * 100;

    if (porcentagem < 20) {
        return '#FF0000';
    } else if (porcentagem <= 40) {
        return '#CC5500';
    } else if (porcentagem <= 60) {
        return '#99AA00';
    } else if (porcentagem <= 80) {
        return '#4DFF00';
    } else {
        return '#106E2A';
    }
}