"use client";

import Estatisca from "@/components/estatistica/Estatisca";
import Template from "@/components/template/Template";
import calcularPercentual from "@/functions/calcularPercentual";
import { useCorFundo } from "@/hooks/useCorDeFundo";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { IoReloadCircle } from "react-icons/io5";

function ResultadosContent() {
    const searchParams = useSearchParams();
    const acertos = searchParams.get("acertos") || 0;
    const tamanhoQuestionario = searchParams.get("tamanhoQuestionario") || 0;
    const cor = useCorFundo(+acertos, +tamanhoQuestionario);
    console.log(cor)

    return (
        <Template>
            <div className="bg-[--laranja] flex flex-col p-4 gap-4 text-center">
                <h2 className="text-3xl font-bold" style={{ textShadow: '1px 1px 2px black' }}>Resultado Final</h2>
                <div className="flex gap-3 justify-center items-center">
                    <Estatisca cor="#171717" texto="Perguntas" valor={tamanhoQuestionario.toString()}></Estatisca>
                    <Estatisca cor="#171717" texto="Certas" valor={acertos.toString()}></Estatisca>
                    <Estatisca cor={cor} texto="Percentual" valor={calcularPercentual(+acertos, +tamanhoQuestionario)}></Estatisca>
                </div>
                <button className="px-4 py-2 bg-[--preto] text-white rounded flex justify-center items-center max-w-[300px] mx-auto mt-6" style={{ boxShadow: '0 0 1px 2px black', textShadow: '1px 1px 2px black' }}>
                    <Link href="/" className="fonteEspecial text-2xl flex items-center gap-1">Recomeçar <IoReloadCircle className="text-3xl"/></Link>
                </button>
            </div>
        </Template>
    );
}

export default function Resultados() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <ResultadosContent />
        </Suspense>
    );
}
