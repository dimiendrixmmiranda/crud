import { NextResponse } from "next/server";
import { embaralhar } from "@/functions/embaralharArray";
import { listaDeQuestoes } from "@/app/api/bancoDeQuestoes";

export async function GET() {
	const ids = listaDeQuestoes.filter(questao => questao.categoria == 'esportes').map(questao => questao.id)
	return NextResponse.json(embaralhar(ids))
}