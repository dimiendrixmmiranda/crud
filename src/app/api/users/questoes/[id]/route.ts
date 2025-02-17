import { listaDeQuestoes } from "@/app/api/bancoDeQuestoes";

export async function GET(req: Request) {
  const url = new URL(req.url)
  const id = url.pathname.split('/').pop()
  const questao = listaDeQuestoes.find(q => q.id === Number(id))

  if (!questao) {
    return new Response(JSON.stringify({ message: "Questão não encontrada" }), { status: 404 })
  }

  return new Response(JSON.stringify(questao))
}
