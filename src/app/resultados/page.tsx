"use client";

import Estatisca from "@/components/estatistica/Estatisca";
import calcularPercentual from "@/functions/calcularPercentual";
import { useCorFundo } from "@/hooks/useCorDeFundo";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense} from "react";

function ResultadosContent() {
    const searchParams = useSearchParams();
    const acertos = searchParams.get("acertos") || 0;
    const tamanhoQuestionario = searchParams.get("tamanhoQuestionario") || 0;
    const cor = useCorFundo(+acertos, +tamanhoQuestionario);


    return (
        <div className="flex flex-col justify-center gap-4 items-center h-screen w-full" style={{backgroundColor: cor}}>
            <h2 className="text-3xl font-bold" style={{textShadow: '1px 1px 2px black'}}>Resultado Final</h2>
            <div className="flex gap-3">
                <Estatisca cor="#079fc5" texto="Perguntas" valor={tamanhoQuestionario.toString()}></Estatisca>
                <Estatisca cor="#079fc5" texto="Certas" valor={acertos.toString()}></Estatisca>
                <Estatisca cor="#079fc5" texto="Percentual" valor={calcularPercentual(+acertos, +tamanhoQuestionario)}></Estatisca>
            </div>
            <button className="px-4 py-2 bg-[--preto] text-white rounded" style={{boxShadow: '0 0 1px 2px black', textShadow: '1px 1px 2px black'}}>
                <Link href="/">Recomeçar</Link>
            </button>
        </div>
    );
}

export default function Resultados() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <ResultadosContent />
        </Suspense>
    );
}
