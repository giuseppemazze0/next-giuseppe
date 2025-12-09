"use client"

import { useEffect, useState } from "react"
import desenharElementoTarefa from "./desenharElementoTarefa"

interface Tarefa {
    id: number
    opcao: string
    texto: string
    corFundo: string
}

export default function Input() {
    const [opcao, setOpcao] = useState<string>('')
    const [texto, setTexto] = useState<string>('')
    const [corFundo, setCorFundo] = useState<string>('')
    const [visivel, setVisivel] = useState<boolean>(false)
    const [tarefas, setTarefas] = useState<Tarefa[]>(() => {
        const tarefasStored = localStorage.getItem('tarefas')
        return (tarefasStored) ? JSON.parse(tarefasStored) : []
    })
    const [idTarefa, setIdTarefa] = useState<number>(tarefas.length)


    function alterarCorFundo(e: any) {
        switch(e) {
            case 'tecnologia':
                setVisivel(true)
                setCorFundo('bg-purple-500')
                setOpcao(e)
                break

            case 'categorias':
                setVisivel(true)
                setCorFundo('bg-orange-300')
                setOpcao(e)
                break

            default:
                setOpcao("")
                setVisivel(false)
        }
    }

    
    function adicionarTarefa() {
        if (!visivel || !texto.trim()) {
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
        setTexto("")
        setOpcao("")
        setVisivel(false)
    }


    function apagarTarefa(id: number) {
        setIdTarefa(id-1)

        setTarefas(_ => (
            _.filter((tarefa) => tarefa.id !== id)
        ))
    }


    function editarTarefa(id: number) {
        const tarefaAtual = tarefas.find((tarefa) => tarefa.id === id)
        
        if (tarefaAtual) {
            setTexto(tarefaAtual.texto)
            setOpcao(tarefaAtual.opcao.toLowerCase())
            setIdTarefa(tarefaAtual.id)
            setCorFundo(tarefaAtual.corFundo)
            setVisivel(true)
        }
        apagarTarefa(id)
    }


    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }, [tarefas])


    return (
        <>
            <h1>Crie tarefas</h1>

            <section className="relative overflow-hidden flex justify-between items-center px-[20px] py-[35px] bg-gray-300">
                <h2 className="">

                </h2>
                
                <div className="flex flex-col gap-y-[20px]">
                    <div className="flex flex-col">
                        <label htmlFor="campoTexto">
                            Escreva o conteúdo
                        </label>
                        <input onChange={(e) => setTexto(e.target.value)} value={texto} id="campoTexto" placeholder="Digite alguma coisa..." type="text" maxLength={28} className="w-[300px] h-[50px] px-[10px] border-[2px] text-[.9em]"/>
                    </div>
                    <div>
                        <label htmlFor="TecCat">Lista de</label>
                        <select onChange={(e) => alterarCorFundo(e.target.value)} value={opcao} id="TecCat" className="cursor-pointer">
                            <option value="">...</option>
                            <option value="tecnologia">Tecnologia</option>
                            <option value="categorias">Categorias</option>
                        </select>
                    </div>
                </div>

                <div>
                    <button onClick={adicionarTarefa} className="cursor-pointer py-[5px] rounded-full bg-green-400 hover:bg-green-500 active:bg-green-600">
                        Adicionar Tarefa
                    </button>
                </div>
            </section>

            <div className="my-[20px]">
                <h2 className={`${visivel ? 'flex' : 'hidden'} justify-center my-[20px] text-[1.5em]`}>
                    Editando...
                </h2>
                {desenharElementoTarefa(visivel, opcao, corFundo, texto, false, 0, apagarTarefa, editarTarefa)}
            </div>

            <section className="flex flex-col gap-y-[20px]">
                <h2 className={`${(tarefas.length > 0) ? 'flex' : 'hidden'} justify-center mt-[20px] text-[1.5em]`}>
                    Todas as Tarefas
                </h2>

                <div className="flex flex-wrap gap-[10px]">
                    {tarefas.map((tarefa) => (
                        desenharElementoTarefa(true, tarefa.opcao, tarefa.corFundo, tarefa.texto, true, tarefa.id, apagarTarefa, editarTarefa)
                    ))}
                </div>
            </section>
        </>
    )
}