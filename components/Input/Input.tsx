"use client"

import { count } from "console"
import { useEffect, useState } from "react"



interface Tarefa {
    id: number
    opcao: string
    texto: string
    corFundo: string
}


function fazerEfeitosNasPontas() {
    const atributo = 'absolute w-[50px] h-[50px] bg-white rounded-full'
    return (
        <>
            <div className={`${atributo} top-[-30px] left-[-30px]`}></div>
            <div className={`${atributo} top-[-30px] right-[-30px]`}></div>
            <div className={`${atributo} bottom-[-30px] left-[-30px]`}></div>
            <div className={`${atributo} bottom-[-30px] right-[-30px]`}></div>
        </>    
    )
}



export default function Input() {
    const [texto, setTexto] = useState<string>('')
    const [tarefas, setTarefas] = useState<Tarefa[]>(() => {
        const tarefasStored = localStorage.getItem('tarefas')
        return (tarefasStored) ? JSON.parse(tarefasStored) : []
    })
    const [opcao, setOpcao] = useState<string>('')
    const [corFundo, setCorFundo] = useState<string>('')
    const [visivel, setVisivel] = useState<boolean>(false)
    const [idTarefa, setIdTarefa] = useState<number>(tarefas.length)

    function alterarCorFundo(e) {
        const valor = e.target.value

        switch(valor) {
            case 'tecnologia':
                setVisivel(true)
                setCorFundo('bg-purple-500')
                setOpcao(valor.toUpperCase())
                break

            case 'categorias':
                setVisivel(true)
                setCorFundo('bg-orange-300')
                setOpcao(valor.toUpperCase())
                break

            default:
                setVisivel(false)
        }
    }

    function desenharElementoTarefa(visivel: boolean, opcao: string, corFundo: string, texto: string, editor:boolean, id: number) {
    return (
        <div className={`relative overflow-hidden ${visivel ? 'flex' : 'hidden'} flex-col justify-between items-center w-[260px] h-[120px] pb-[25px] mx-auto ${corFundo}`}>
            <h3 className="w-full p-[6px] border-b-[2px] border-black text-center font-bold">
                {opcao}
            </h3>
            <p>
                {texto}
            </p>
            <div className={`absolute top-[3px] left-[50%] ${editor ? 'flex' : 'hidden'} flex-row-reverse gap-x-[140px] transform -translate-x-[50%]`}>
                <button onClick={() => apagarTarefa(id)} className="cursor-pointer p-[3px] rounded-full bg-red-500 hover:bg-red-600 active:bg-red-800">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </button>
                <button className="cursor-pointer p-[3px] rounded-full bg-pink-200 hover:bg-pink-300 active:bg-pink-500">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                </button>
            </div>
            {fazerEfeitosNasPontas()}
        </div>
    )
}
    function adicionarTarefa() {
        if (!visivel) {
            return
        }

        let id = idTarefa + 1
        setIdTarefa(id)
        setTarefas((tarefas) => [
            ...tarefas,
            {
                id: id,
                opcao: opcao,
                texto: texto,
                corFundo: corFundo
            }
        ])
    }
    function apagarTarefa(id: number) {
        setIdTarefa(id-1)

        setTarefas(_ => (
            _.filter((tarefa) => tarefa.id !== id)
        ))
    }



    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
        console.log(idTarefa)
    }, [tarefas])


    return (
        <>
            <section className="relative overflow-hidden flex justify-between items-center px-[20px] py-[35px] bg-gray-300">
                <div className="flex flex-col">
                    <label htmlFor="campoTexto">
                        Escreva algo no campo abaixo
                    </label>
                    <input onChange={(e) => setTexto(e.target.value)} id="campoTexto" type="text" maxLength={28} className="w-[300px] h-[50px] border-[2px] text-[.9em]"/>
                </div>

                <div className="flex flex-col gap-y-[20px]">
                    <div>
                        <label htmlFor="TecCat">Lista de</label>
                        <select onChange={alterarCorFundo} id="TecCat" className="cursor-pointer">
                            <option value="">...</option>
                            <option value="tecnologia">Tecnologia</option>
                            <option value="categorias">Categorias</option>
                        </select>
                    </div>

                    <button onClick={adicionarTarefa} className="cursor-pointer py-[5px] rounded-full bg-green-400 hover:bg-green-500 active:bg-green-600">
                        Adicionar Tarefa
                    </button>
                </div>
            </section>

            <div className="my-[20px]">
                <h2 className={`${visivel ? 'flex' : 'hidden'} justify-center my-[20px] text-[1.5em]`}>
                    Editando...
                </h2>
                {desenharElementoTarefa(visivel, opcao, corFundo, texto, false, 0)}
            </div>

            <section className="flex flex-col gap-y-[20px]">
                <h2 className={`${(tarefas.length > 0) ? 'flex' : 'hidden'} justify-center mt-[20px] text-[1.5em]`}>
                    Todas as Tarefas
                </h2>

                <div className="flex flex-wrap gap-[10px]">
                    {tarefas.map((tarefa) => (
                        desenharElementoTarefa(true, tarefa.opcao, tarefa.corFundo, tarefa.texto, true, tarefa.id)
                    ))}
                </div>
            </section>
        </>
    )
}