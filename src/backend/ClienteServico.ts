// src/services/clienteService.ts
import { collection, getDocs, doc, setDoc, deleteDoc, addDoc } from "firebase/firestore";
import Cliente from "@/core/Cliente";
import { db } from "@/lib/firebase";

const COLLECTION_NAME = "clientes";

export async function obterClientes(): Promise<Cliente[]> {
    const snapshot = await getDocs(collection(db, COLLECTION_NAME));
    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) as Cliente[];
}

export async function salvarCliente(cliente: Cliente) {
    try {
      if (cliente.id) {
        // Atualiza um cliente existente
        await setDoc(doc(db, "clientes", cliente.id), cliente);
      } else {
        // Adiciona um novo cliente e obtém o ID gerado
        const docRef = await addDoc(collection(db, "clientes"), cliente);
        
        // Atualiza o cliente com o ID gerado
        await setDoc(doc(db, "clientes", docRef.id), { ...cliente, id: docRef.id });
  
        console.log("Novo cliente salvo com ID:", docRef.id);
      }
    } catch (error) {
      console.error("Erro ao salvar cliente:", error);
    }
  }

export async function excluirCliente(clienteId: string): Promise<void> {
    await deleteDoc(doc(db, COLLECTION_NAME, clienteId));
}
