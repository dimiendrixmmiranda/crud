// src/pages/index.tsx
"use client";
import { excluirCliente, obterClientes, salvarCliente } from "@/backend/ClienteServico";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import { useEffect, useState } from "react";

export default function Home() {
	const [clientes, setClientes] = useState<Cliente[]>([]);
	const [cliente, setCliente] = useState<Cliente | null>(null);
	const [visible, setVisible] = useState<"tabela" | "formulario">("tabela");
	console.log(clientes)
	useEffect(() => {
		async function carregarClientes() {
			const lista = await obterClientes();
			setClientes(lista);
		}
		carregarClientes();
	}, []);

	async function clienteSelecionado(cliente: Cliente) {
		setCliente(cliente);
		setVisible("formulario");
	}

	async function clienteExcluido(cliente: Cliente) {
		if (!cliente.id) return;
		await excluirCliente(cliente.id);
		setClientes(await obterClientes());
	}

	async function salvar(cliente: Cliente) {
		await salvarCliente(cliente);
		setClientes(await obterClientes());
		setVisible("tabela");
	}

	function novoCliente() {
		setCliente(null);
		setVisible("formulario");
	}

	return (
		<div className="flex justify-center items-center min-h-screen min-w-screen bg-gradient-to-r from-blue-500 to-purple-500">
			<Layout titulo="Cadastro Simples">
				{visible === "tabela" ? (
					<div className={`flex ${clientes.length <= 0 ? 'flex-row': 'flex-col'}`}>
						<div className="flex justify-end">
							<Botao cor="green" onclick={novoCliente}>
								Novo Cliente
							</Botao>
						</div>
						<Tabela listaDeClientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
					</div>
				) : (
					<Formulario cliente={cliente} clienteAlterado={salvar} cancelado={() => setVisible("tabela")} />
				)}
			</Layout>
		</div>
	);
}
