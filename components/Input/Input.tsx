"use client"

import { useState } from "react"

function fazerEfeitosNasPontas() {
    const atributo = 'absolute w-[50px] h-[50px] bg-white rounded-full'
    return (
        <>
            <div className={`${atributo} top-[-25px] left-[-25px]`}></div>
            <div className={`${atributo} top-[-25px] right-[-25px]`}></div>
            <div className={`${atributo} bottom-[-25px] left-[-25px]`}></div>
            <div className={`${atributo} bottom-[-25px] right-[-25px]`}></div>
        </>    
    )
}



export default function Input() {
    const [texto, setTexto] = useState<string>('')

    return (
        <>
            <section className="relative overflow-hidden flex justify-between items-center px-[20px] py-[35px] bg-gray-300">
                <div className="flex flex-col">
                    <label htmlFor="campoTexto">
                        Escreva algo no campo abaixo
                    </label>
                    <input onChange={(e) => setTexto(e.target.value)} id="campoTexto" type="text" className="w-[300px] h-[50px] border-[2px] text-[.9em]"/>
                </div>

                <div>
                    <label htmlFor="TecCat">Lista de:</label>
                    <select id="TecCat">
                        <option value="">Escolha...</option>
                        <option value="">Tecnologia</option>
                        <option value="">Categorias</option>
                    </select>
                </div>
            </section>

            <div className="w-[100px] h-[100px] bg-blue-100">
                {texto}
                {fazerEfeitosNasPontas()}
            </div>
        </>
    )
}