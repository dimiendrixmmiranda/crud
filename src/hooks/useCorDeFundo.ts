import aplicarCorFundo from "@/functions/aplicarCorDeFundo";
import { useState, useEffect } from "react";

export function useCorFundo(acertos: number, tamanhoQuestionario: number) {
    const [cor, setCor] = useState<string>("");

    useEffect(() => {
        setCor(aplicarCorFundo(acertos, tamanhoQuestionario));
    }, [acertos, tamanhoQuestionario]);

    return cor;
}
