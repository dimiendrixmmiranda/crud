"use client";

import Estatisca from "@/components/estatistica/Estatisca";
import Template from "@/components/template/Template";
import calcularPercentual from "@/functions/calcularPercentual";
import { useCorFundo } from "@/hooks/useCorDeFundo";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";
import { IoReloadCircle } from "react-icons/io5";

function ResultadosContent() {
    const searchParams = useSearchParams();
    const acertos = searchParams.get("acertos") || 0;
    const tamanhoQuestionario = searchParams.get("tamanhoQuestionario") || 0;
    const cor = useCorFundo(+acertos, +tamanhoQuestionario);

    const audioBotaoRef = useRef<HTMLAudioElement | null>(null);
    const audioPlayRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (+acertos >= 5) {
            audioBotaoRef.current = new Audio("/audio/aplausos.mp3");
        } else {
            audioBotaoRef.current = new Audio("/audio/booo.mp3");
        }
        audioPlayRef.current = new Audio("/audio/play.mp3");
        audioBotaoRef.current?.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));

    }, []);
    return (
        <Template>
            <div className="bg-[--laranja] flex flex-col p-4 gap-4 text-center">
                <h2 className="text-3xl font-bold" style={{ textShadow: '1px 1px 2px black' }}>Resultado Final</h2>
                <div className="flex gap-3 justify-center items-center">
                    <Estatisca cor="#171717" texto="Perguntas" valor={tamanhoQuestionario.toString()}></Estatisca>
                    <Estatisca cor="#171717" texto="Certas" valor={acertos.toString()}></Estatisca>
                    <Estatisca cor={cor} texto="Percentual" valor={calcularPercentual(+acertos, +tamanhoQuestionario)}></Estatisca>
                </div>
                <button className="px-4 py-2 bg-[--preto] text-white rounded flex justify-center items-center max-w-[300px] mx-auto mt-6" style={{ boxShadow: '0 0 1px 2px black', textShadow: '1px 1px 2px black' }} onClick={() => {
                    audioPlayRef.current?.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
                }}>
                    <Link href="/" className="fonteEspecial text-2xl flex items-center gap-1">Recomeçar <IoReloadCircle className="text-3xl" /></Link>
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
