'use client'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TemporizadorProps {
    duracao: number
    tempoEsgotado: () => void
    pausar: boolean
}

export default function Temporizador({ duracao, tempoEsgotado, pausar }: TemporizadorProps) {
    return (
        <div className='flex mx-auto justify-center items-center text-4xl font-bold'>
            <CountdownCircleTimer
                key={duracao}
                isPlaying={pausar}
                duration={duracao}
                onComplete={tempoEsgotado}
                size={120}
                colors={["#FFCC33", "#FE9900", "#FF6600", "#FE0000"]}
                colorsTime={[7, 5, 2, 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>

        </div>
    )
}