"use client"

import { useEffect, useState } from "react"

interface HistoricoContador {
    atual: number
    horario: string
    corFundo: string
}

export default function Contador() {
    const [contador, setContador] = useState<number>(() => {
        const contadorStored = localStorage.getItem('contador')
        return contadorStored ? Number(contadorStored) : 0
    })
    const [corFundo, setCorFundo] = useState<string>('')
    const [historico, setHistorico] = useState<HistoricoContador[]>(() => {
        const historicoStored = localStorage.getItem('historico')
        return (historicoStored) ? JSON.parse(historicoStored) : []
    })
    const limiteMin = 0
    const limiteMax = 10


    function definirCorFundo (cont: number) {
        if (cont <= 3) return 'bg-red-500'
        if (cont <= 7) return 'bg-yellow-500'
        return 'bg-green-500'
    }

    function aumentarContador () {
        if (contador >= limiteMax) {
            alert('Atingiu o limite máximo')
            return
        }
        let cont = contador+1
        setContador(cont)
        acrescentarHistorico(cont)
    }
    function diminuirContador () {
        if (contador <= limiteMin) {
            alert('Atingiu o limite mínimo')
            return
        }
        let cont = contador-1
        setContador(cont)
        acrescentarHistorico(cont)
    }
    function resetarContador () { 
        setContador(0)
        acrescentarHistorico(0)
    }


    function acrescentarHistorico (cont: number) {
        const data = new Date()
        const corFundoAtual = definirCorFundo(cont)

        setHistorico(historico => [
            ...historico, 
            { 
                atual: cont,
                horario: `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`,
                corFundo: `${corFundoAtual}`
            }
        ])
    }
    function resetarHistorico () { setHistorico([]) }



    useEffect(() => {
        const corFundoAtual = definirCorFundo(contador)

        setCorFundo(corFundoAtual)

        localStorage.setItem('contador', `${contador}`)
    }, [contador])

    useEffect(() => {
        localStorage.setItem('historico', JSON.stringify(historico))
    }, [historico])



    return (
        <div className="relative">
            <p className={`flex justify-center items-center w-[170px] h-[80px] m-auto rounded-full text-[2em] font-bold ${corFundo} transition duration-500 ease-in-out`}>
                {contador}
            </p>

            <div className="absolute top-[64px] left-[50%] flex justify-center gap-x-[20px] transform -translate-x-[50%]">
                <button onClick={aumentarContador} className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] rounded-full text-[1.2em] bg-gray-300 active:bg-gray-400">
                    +
                </button>
                <button onClick={diminuirContador} className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] rounded-full text-[1.2em] bg-gray-300 active:bg-gray-400">
                    -
                </button>
                <button onClick={resetarContador} className="cursor-pointer flex justify-center items-center w-[40px] h-[30px] rounded-full  bg-gray-300 active:bg-gray-400">
                    = 0
                </button>
            </div>

            <div className="flex flex-col items-center gap-y-[20px] py-[20px] mt-[50px] rounded-[20px] bg-gray-200">
                <div className="relative">
                    <h2 className="text-center text-[1.2em]">
                        Histórico
                    </h2>
                    <button onClick={resetarHistorico} className="absolute cursor-pointer top-[50%] right-[-80px] hover:underline transform -translate-y-[50%]">
                        esvaziar
                    </button>
                </div>

                <ul className="flex flex-col items-center gap-y-[10px]">
                    {historico.map((historicoAtual) => (
                        <li className={`w-fit px-[20px] py-[5px] rounded-[5px] ${historicoAtual.corFundo}`}>
                            <span className="block text-[.9em] italic">
                                {historicoAtual.horario}
                            </span>
                            <span className="text-[1.2em]">
                                {historicoAtual.atual}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}