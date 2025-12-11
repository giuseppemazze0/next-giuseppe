"use client"

import { useEffect, useState } from "react"
import { Produto } from "@/models/interfaces"

interface PesquisaProps {
    produtos: Produto[]
    onFiltrar: (produtos: Produto[]) => void
}

export default function Pesquisa({produtos, onFiltrar}: PesquisaProps) {
    const [pesquisa, setPesquisa] = useState<string>(() => {
        const pesquisaStored = localStorage.getItem('pesquisa')
        return pesquisaStored ? JSON.parse(pesquisaStored) : ''
    })

    function pesquisar(texto: string) {
        const produtosFiltrados = produtos.filter((produto) =>
            produto.title.toLowerCase().includes(texto.toLowerCase())
        )

        setPesquisa(texto)
        onFiltrar(produtosFiltrados)
    }
    

    useEffect(() => {
        localStorage.setItem('pesquisa', JSON.stringify(pesquisa))
    }, [pesquisa])

    return (
        <div>
            <input type="text" value={pesquisa} onChange={(e) => pesquisar(e.target.value)} maxLength={50} placeholder="Pesquise por produtos" className="bg-blue-300"/>
        </div>


    )
}