"use client"

import useSWR from 'swr'
import { useEffect, useState } from 'react'
import { Produto } from '@/models/interfaces'
import { Spinner } from "@/components/ui/spinner"
import Pesquisa from './Pesquisa'
import Card from './Card'



const url_api = "https://deisishop.pythonanywhere.com"
const url_api_produtos = `${url_api}/products/`;
const fetcher = async (url: string) => fetch(url).then(res => res.json())

export default function Produtos() {
    const {data, error, isLoading} = useSWR<Produto[]>(url_api_produtos, fetcher)
    const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>(() => {
        const produtosFiltradosStored = localStorage.getItem('produtosFiltrados')
        return produtosFiltradosStored ? JSON.parse(produtosFiltradosStored) : []
    })

    const produtos = data ? [... data] : []

    useEffect(() => {
        localStorage.setItem("produtosFiltrados", JSON.stringify(produtosFiltrados));
    }, [produtosFiltrados]);
    
    if (error) return <p>Erro ao carregar</p>;
    if (isLoading) 
        return (
            <>
                <p>
                    Carregando...
                </p>
                <Spinner className='size-8'></Spinner>
            </>
        );
    if (!data) return <p>Dados inexistente</p>;

    return (
        <>
            <section>
                <Pesquisa produtos={produtos} onFiltrar={setProdutosFiltrados} />
            </section>

            <section className='flex justify-center flex-wrap gap-x-[15px] gap-y-[30px]'>
                {produtosFiltrados.map((produto, index) => (
                    <Card key={`produto-${produto.id}`} produto={produto} url_api={url_api} index={index}/>
                ))}
            </section>
        </>
    )
}