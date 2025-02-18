'use client'
import Botao from "../botao/Botao"
import ComponenteQuestao from "../questao/ComponenteQuestao"
import Questao from "@/core/interfaces/Questao"
// import { embaralhar } from "@/functions/embaralharArray"
import Resposta from "@/core/interfaces/Resposta"
// import { useRef } from "react";
import { useEffect, useState } from "react";
import { listaDeQuestoes } from "@/app/api/bancoDeQuestoes"
import { embaralhar } from "@/functions/embaralharArray"

interface QuestionarioProps {
	categoria: string
}

export default function Questionario({ categoria }: QuestionarioProps) {


	const [indexQuestaoAtual, setIndexQuestaoAtual] = useState(0)
	// const BASE_URL = 'http://localhost:3000/api'
	const [arrayDeQuestoes, setArrayDeQuestoes] = useState<Questao[]>([])
	const [loading, setLoading] = useState(true)
	const [acertos, setAcertos] = useState(0)
	// const carregado = useRef(false);

	// async function carregarQuestao(id: number) {
	// 	const resp = await fetch(`${BASE_URL}/users/questoes/${id}`)
	// 	const questaoJson = await resp.json()
	// 	return questaoJson
	// }

	// useEffect(() => {
	// 	if (carregado.current) return

	// 	const carregarTudo = async () => {
	// 		const respIds = await fetch(`${BASE_URL}/users/questionarios/${categoria}`)
	// 		const ids = await respIds.json()

	// 		const questoes = await Promise.all(
	// 			ids.map((id: number) => carregarQuestao(id))
	// 		);

	// 		const questoesComRespostasEmbaralhadas = questoes.map(questao => ({
	// 			...questao,
	// 			respostas: embaralhar(questao.respostas),
	// 		}))

	// 		setArrayDeQuestoes(questoesComRespostasEmbaralhadas.slice(0, 10))
	// 		setLoading(false)
	// 	};

	// 	carregarTudo()
	// 	carregado.current = true
	// }, [])

	useEffect(() => {
		const questoes = embaralhar(listaDeQuestoes.filter(questao => questao.categoria == categoria))
		const questoesComRespostasEmbaralhadas = questoes.map(questao => {
			return {
				...questao,
				respostas: embaralhar(questao.respostas)
			}
		})
		setArrayDeQuestoes(questoesComRespostasEmbaralhadas)
		setLoading(false)
	}, [])

	function proximaQuestao() {
		// possibilidade de usar settimeout aqui
		if (indexQuestaoAtual < arrayDeQuestoes.length - 1) {
			setIndexQuestaoAtual(prev => prev + 1)
		}
	}

	const verificarResposta = (resposta: Resposta) => {
		if (resposta.certa) {
			setAcertos(prev => prev + 1)
		}
	}

	return (
		<div className="flex flex-col justify-center items-center min-h-[100vh]">
			{loading ? (
				<div className="h-[100vh] w-full flex justify-center items-center">
					<p className="text-2xl font-bold ">Carregando questões...</p>
				</div>
			) : (
				<>{arrayDeQuestoes.length > 0 && arrayDeQuestoes[indexQuestaoAtual] && (
					<div className="flex flex-col justify-center items-center">
						<ComponenteQuestao
							tempoPraResposta={10}
							valor={arrayDeQuestoes[indexQuestaoAtual]}
							verificarResposta={verificarResposta}
						></ComponenteQuestao>
						<Botao
							texto={indexQuestaoAtual < arrayDeQuestoes.length - 1 ? 'Próximo' : 'Terminar'}
							acertos={acertos}
							tamanhoQuestionario={arrayDeQuestoes.length}
							href={indexQuestaoAtual < arrayDeQuestoes.length - 1 ? '' : '/resultados'}
							onClick={() => { proximaQuestao() }}
						></Botao>
					</div>
				)}</>
			)}
		</div>
	)
}