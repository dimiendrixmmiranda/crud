import Questao from "@/core/interfaces/Questao";

// Função para verificar a resposta do usuário
export function verificarResposta(questao: Questao, respostaUsuario: string) {
  // Itera sobre as respostas e revela a resposta do usuário, bem como a correta
  questao.respostas = questao.respostas.map(resposta => {
    if (resposta.valor === respostaUsuario) {
      // Se a resposta do usuário for correta, marque-a como revelada
      resposta.revelada = true;
    } else if (resposta.certa) {
      // Se a resposta for a certa, revele-a
      resposta.revelada = true;
    } else {
      // Caso contrário, mantenha a resposta como não revelada
      resposta.revelada = false;
    }
    return resposta;
  });

  // Marque se o usuário acertou ou não
  questao.acertou = questao.respostas.some(resposta => resposta.valor === respostaUsuario && resposta.certa);

  return questao;
}
