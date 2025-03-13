import Cliente from "@/core/Cliente"
import { FaRegEdit, FaTrashAlt } from "react-icons/fa"

interface TabelaProps {
    listaDeClientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela({ listaDeClientes, clienteSelecionado, clienteExcluido }: TabelaProps) {

    const exibirAcoes = clienteSelecionado || clienteExcluido

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {
                    exibirAcoes ? (<th className="text-center p-4">Ações</th>) : false
                }
            </tr>
        )
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="text-left p-2 flex">
                {
                    clienteSelecionado ? (
                        <button className="flex justify-center items-center text-green-600 rounded-full p-2 hover:bg-green-600 hover:text-zinc-200" onClick={() => clienteSelecionado(cliente)}>
                            <FaRegEdit />
                        </button>

                    ) : false
                }
                {
                    clienteExcluido ? (
                        <button className="flex justify-center items-center text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-zinc-200" onClick={() => clienteExcluido(cliente)}>
                            <FaTrashAlt />
                        </button>
                    ) : false
                }
            </td>
        )
    }
    function renderizarDados() {
        return (
            listaDeClientes?.map((cliente, i) => {
                return (
                    <tr key={cliente.id} className={`${i % 2 == 0 ? 'bg-purple-100' : 'bg-purple-300'}`}>
                        <td className="text-left p-2">{cliente.id}</td>
                        <td className="text-left p-2">{cliente.nome}</td>
                        <td className="text-left p-2">{cliente.idade}</td>
                        {
                            exibirAcoes ? renderizarAcoes(cliente) : false
                        }
                    </tr>
                )
            })
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="
                text-gray-200
                bg-gradient-to-r from-purple-500 to-purple-800
            ">
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}