"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import caracteristicasDados from "@/data/caracteristicas.json"

export default function CaracteristicaDetailsCard() {
    const params = useParams()
    const index = Number(params.caracteristica)

    return (
        <>
            <Link href='/caracteristicas' className='flex w-fit py-[4px] px-[10px] mb-[20px] rounded-full bg-blue-100 hover:bg-blue-300 transitiom duration-200 ease-in-out'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"/></svg>
                <span>Voltar</span>
            </Link>

            <h2 className="font-bold text-[1.5em] text-center">
                {caracteristicasDados[index].titulo}
            </h2>

            <p className="mt-[40px] text-justify">
                {caracteristicasDados[index].apresentacao}
            </p>

            <div className="relative">
                <span className="absolute top-[5px] left-[10px] text-[.9em]">
                    Exemplo:
                </span>
                <pre className="flex justify-center py-[20px] px-[30px] my-[30px] bg-gray-300">
                    <code>
                        {caracteristicasDados[index].exemplo}
                    </code>
                </pre>
            </div>

            <div className="flex flex-col gap-y-[10px] my-[40px]">
                <h3 className="text-[1.2em]">
                    Característica Marcante
                </h3>
                <p className="text-justify">
                    {caracteristicasDados[index].explicacao}
                </p>
            </div>

            <div className="flex flex-col gap-y-[10px] my-[40px]">
                <h3 className="text-[1.3em]">
                    Vantagens:
                </h3>
                <ul className="list-inside">
                    {caracteristicasDados[index].vantagens.map((vantagem, i) => (
                        <li key={i} className="before:content-['-'] before:mr-2">{vantagem}</li>
                    ))}
                </ul>
            </div>


            <div className="flex flex-col gap-y-[10px] my-[40px]">
                <h3 className="text-[1.3em]">
                    Quando usar?
                </h3>
                <p className="">
                    {caracteristicasDados[index].quandoUsar}
                </p>
            </div>

            <div className="flex flex-col gap-y-[10px] my-[40px]">
                <h3 className="text-[1.3em]">
                    Dicas
                </h3>
                <ul className="list-[circle] list-inside">
                    {caracteristicasDados[index].dicas.map((dica, i) => (
                        <li key={i}>{dica}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}