import Cliente from "@/core/Cliente";
import Input from "./Input";
import { useState } from "react";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente | null
    cancelado?: () => void
    clienteAlterado?: (cliente: Cliente) => void
}

export default function Formulario({ cliente, cancelado, clienteAlterado }: FormularioProps) {
    const id = cliente?.id ?? null
    const [nome, setNome] = useState(cliente?.nome ?? '')
    const [idade, setIdade] = useState(cliente?.idade ?? '0')

    return (
        <div>
            {
                id ? (
                    <Input
                        texto="Código"
                        somenteLeitura={true}
                        valor={id}
                        className="mb-4"
                    />
                ) : (null)
            }
            <Input
                texto="Nome"
                valor={nome}
                onchange={(valor: string) => setNome(valor)}  // Especificando o tipo correto para setNome
                className="mb-4"
            />
            <Input
                texto="Idade"
                valor={idade}
                onchange={(valor: string) => setIdade(valor)}  // Especificando o tipo correto para setIdade
                className="mb-4"
            />

            <div className="mt-3 flex justify-end gap-3">
                <Botao cor="blue" onclick={() => {
                    if (clienteAlterado) {
                        clienteAlterado({ nome, idade, id })
                    }
                }}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onclick={cancelado}>Cancelar</Botao>
            </div>
        </div>
    )
}