"use client";

import { useEffect, useState } from "react";
import Questao from "@/core/interfaces/Questao";
import styles from "./style.module.css";
import definirLetraAlternativa from "@/functions/definirLetraAlternativa";
import Resposta from "@/core/interfaces/Resposta";
import Temporizador from "../temporizador/Temporizador";

interface QuestaoProps {
    valor: Questao;
    tempoPraResposta: number
    verificarResposta: (resposta: Resposta) => void
}

export default function ComponenteQuestao({ valor, tempoPraResposta, verificarResposta }: QuestaoProps) {
    const [respostaUsuario, setRespostaUsuario] = useState<Resposta | null>(null)
    const [respostaCerta, setRespostaCerta] = useState<Resposta | null>(null)
    const [tempoPausado, setTempoPausado] = useState(false);
    
    useEffect(() => {
        setRespostaUsuario(null)
        setRespostaCerta(null)
        setTempoPausado(true)
    }, [valor])


    function tempoEsgotado() {
        const correta = valor.respostas.find((r) => r.certa);
        if (correta) virarResposta(correta);
    }

    function virarResposta(resposta: Resposta) {
        if (!respostaUsuario) {
            setRespostaUsuario(resposta)
            setTempoPausado(false)
            verificarResposta(resposta)

            if (!resposta.certa) {
                const correta = valor.respostas.find((r) => r.certa)
                if (correta) setRespostaCerta(correta)
            }

            // Navegação automática precisa de ajustes
            // setTimeout(() => {
            //     proximaQuestao()
            //     setTempoPausado(false)
            // }, 5000)
        }
    }


    return (
        <div className={styles.questao}>
            <Temporizador
                key={valor.id}
                duracao={tempoPraResposta ?? 10}
                tempoEsgotado={tempoEsgotado}
                pausar={tempoPausado}
            />
            <h2 className="font-bold text-2xl leading-7">{valor.enunciado}</h2>
            <ul className="flex flex-col w-full gap-2">
                {valor.respostas.map((resposta, i) => {
                    const eRespostaUsuario = respostaUsuario?.valor === resposta.valor
                    const eRespostaCerta = respostaCerta?.valor === resposta.valor
                    const corretaSelecionada = resposta.certa && respostaUsuario

                    return (
                        <li key={i} className="w-full relative" style={{perspective: '1000px'}}>
                            <button
                                className={`relative bg-white text-black w-full flex justify-start items-center rounded-md h-[70px] transition-all  ${eRespostaUsuario || eRespostaCerta ? 'respostaRevelada' : ''}`}
                                style={eRespostaUsuario
                                    ? resposta.certa
                                        ? { backgroundColor: 'green', color: 'white' }
                                        : { backgroundColor: 'red', color: 'white' }
                                    : eRespostaCerta || corretaSelecionada
                                        ? { backgroundColor: 'green', color: 'white' }
                                        : {}
                                }
                                onClick={() => virarResposta(resposta)}
                            >
                                {/* Frente */}
                                <div className={`${respostaUsuario ? "hidden" : "grid"} items-center gap-2 absolute px-2 top-0 left-0 h-full w-full p-1`} style={{gridTemplateColumns: '40px 1fr'}}>
                                    <span
                                        className="bg-orange-400 text-white w-10 h-10 flex justify-center items-center text-xl rounded-full font-black"
                                        style={{ textShadow: "1px 1px 2px black" }}
                                    >
                                        {definirLetraAlternativa(i)}
                                    </span>
                                    <p className="font-bold text-lg text-start leading-6">{resposta.valor}</p>
                                </div>

                                {/* Verso */}
                                <div className={`${respostaUsuario ? "flex" : "hidden"} w-full h-full absolute top-0 left-0 justify-start items-center p-1`}>
                                    {resposta.certa ? (
                                        <div className="flex flex-col justify-center items-center w-full h-full gap-1">
                                            <p className="leading-6">A resposta certa é ...</p>
                                            <span className="text-xl font-bold leading-6">{resposta.valor}</span>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col justify-center items-center w-full h-full gap-1">
                                            <p className="leading-5">A resposta informada está errada ...</p>
                                            <span className="text-xl font-bold leading-6">{resposta.valor}</span>
                                        </div>
                                    )}
                                </div>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
