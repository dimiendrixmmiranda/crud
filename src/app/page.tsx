'use client'
import { useEffect, useRef, useState } from "react";
import Template from "@/components/template/Template";
import { listaDeCategorias } from "@/core/constants/listaDeCategorias";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

export default function Home() {
	const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);
	const [desabilitado, setDesabilitado] = useState(true);
	const audioBotaoRef = useRef<HTMLAudioElement | null>(null);
	const audioPlayRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		audioBotaoRef.current = new Audio("/audio/som-botao.mp3");
		audioPlayRef.current = new Audio("/audio/play.mp3");
	}, []);

	return (
		<Template>
			<div className="min-h-[80vh] flex flex-col justify-center items-center gap-6">
				<Image alt="Logo" src="/quiz.png" width={300} height={200} />
				<div className="flex flex-col gap-3 justify-items-center items-center">
					<h2 className="text-xl font-black md:text-2xl" style={{ textShadow: "1px 1px 2px black" }}>
						Selecione uma categoria:
					</h2>
					<ul className="flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-x-4">
						{listaDeCategorias.map((categoria) => (
							<li key={categoria.id}>
								<button
									className={`px-2 w-full text-lg font-bold py-1 rounded-lg transition-all ${categoriaSelecionada === categoria.id ? "scale-[1.05]" : ""
										}`}
									style={{
										textShadow: "1px 1px 2px black",
										boxShadow: "0 0 1px 2px black",
										backgroundColor: `${categoriaSelecionada === categoria.id ? "var(--azul)" : "var(--preto)"}`,
									}}
									onClick={() => {
										setCategoriaSelecionada(categoria.id);
										setDesabilitado(false);
										audioBotaoRef.current?.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
									}}
								>
									{categoria.nome}
								</button>
							</li>
						))}
					</ul>
				</div>

				<button className="bg-[--preto] py-2 rounded-lg w-full max-w-[200px]" style={{ boxShadow: "0 0 3px 2px black" }} disabled={desabilitado}>
					<Link
						href={desabilitado ? "" : `/questionario?categoria=${categoriaSelecionada}`}
						className="fonteEspecial text-3xl flex justify-center items-center gap-3"
						style={{ textShadow: "1px 1px 2px black" }}
						onClick={() => {
							audioPlayRef.current?.play().catch((error) => console.error("Erro ao reproduzir o áudio:", error));
						}}
					>
						Start <FaPlay className="text-2xl" />
					</Link>
				</button>
			</div>
		</Template>
	);
}
