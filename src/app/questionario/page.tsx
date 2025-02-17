'use client';
import { Suspense } from "react";
import Questionario from "@/components/questionario/Questionario";
import { useSearchParams } from "next/navigation";

function PageQuestionario() {
    const searchParams = useSearchParams();
    const categoria = searchParams.get("categoria") || '';

    return (
        <Questionario categoria={categoria} />
    );
}

export default function Page() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <PageQuestionario />
        </Suspense>
    )
}
