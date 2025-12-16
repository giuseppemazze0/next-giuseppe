"use client"

import { Produto } from "@/models/interfaces"
import { useEffect, useState } from "react"
import Card from './Card'
import Link from "next/link"


interface DadosCompra {
    totalCost: string
    reference: string
    message: string
    error: string
}



const url_api = "https://deisishop.pythonanywhere.com"

export default function Carrinho() {    
    const [carrinho, setCarrinho] = useState<Produto[]>([])
    const [estudanteDEISI, setEstudanteDEISI] = useState<boolean>(false)
    const [nomeEstudante, setNomeEstudante] = useState<string>("")
    const [cupom, setCupom] = useState<string>("")
    const [dadosCompra, setDadosCompra] = useState<DadosCompra | null>(null)

    useEffect(() => {
    const carrinhoStored = localStorage.getItem('carrinho')
    if (carrinhoStored) setCarrinho(JSON.parse(carrinhoStored))

    const estudanteDEISIStored = localStorage.getItem('estudanteDEISI')
    if (estudanteDEISIStored) setEstudanteDEISI(JSON.parse(estudanteDEISIStored))

    const nomeEstudanteStored = localStorage.getItem('nomeEstudante')
    if (nomeEstudanteStored) setNomeEstudante(JSON.parse(nomeEstudanteStored))

    const cupomStored = localStorage.getItem('cupom')
    if (cupomStored) setCupom(JSON.parse(cupomStored))

    const dadosCompraStored = localStorage.getItem('dadosCompra')
    if (dadosCompraStored) setDadosCompra(JSON.parse(dadosCompraStored))
    }, [])

    const total = carrinho.reduce((soma, produto) => {
        return soma + Number(produto.price)
    }, 0)

    async function comprar() {
        try {
            const response = await fetch("https://deisishop.pythonanywhere.com/buy/", {
                method: "POST",

                body: JSON.stringify({
                    products: carrinho.map(product => product.id),
                    name: nomeEstudante,
                    student: estudanteDEISI,
                    coupon: cupom
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const dataResposta = await response.json();

            setDadosCompra(dataResposta)
            console.log(dadosCompra)
            setCarrinho([]);
        } catch (e: any) {
            console.error('Erro ao comprar', e);
        }
    }

    useEffect(() => {
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
    }, [carrinho])
    useEffect(() => {
        localStorage.setItem("estudanteDEISI", JSON.stringify(estudanteDEISI))
    }, [estudanteDEISI])
    useEffect(() => {
        localStorage.setItem("nomeEstudante", JSON.stringify(nomeEstudante))
    }, [nomeEstudante])
    useEffect(() => {
        localStorage.setItem("cupom", JSON.stringify(cupom))
    }, [cupom])
    useEffect(() => {
        localStorage.setItem("dadosCompra", JSON.stringify(dadosCompra))
    }, [dadosCompra])

    
    return (
        <>
            <Link href='/produtos' className="block py-[13px] mb-[30px] rounded-[10px] bg-blue-600 text-center hover:bg-blue-500">
                Voltar a ver os produtos
            </Link>
            {carrinho.map((produto, index) => (
                <Card key={`carrinho-${index}`} produto={produto} url_api={url_api} index={index} vaiAdicionar={false} carrinho={carrinho} onAlterarCarrinho={setCarrinho}/>
            ))}

            <p className="text-center py-[10px] my-[50px] bg-gray-300">
                Total: {total.toFixed(2)} €
            </p>

            <button onClick={() => comprar()} className="cursor-pointer w-full p-[10px] rounded-[5px] bg-blue-500 hover:bg-blue-400">
                Comprar
            </button>

            <div>
                <span className="flex gap-x-[20px]">
                    <p>É estudante DEISI?</p>
                    <input id="estudante" type="checkbox" checked={estudanteDEISI} onChange={(e) => setEstudanteDEISI(e.target.checked)}/>
                </span>
                <span className="flex gap-x-[20px]">
                    <p>Aplicar código de cupom</p>
                    <input id="cupom" type="text" maxLength={15} autoComplete="off" placeholder="black-friday" value={cupom} onChange={(e) => setCupom(e.target.value)} className="pl-[10px] border-[1px] border-black rounded-[5px]"/>
                </span>
                <span className="flex gap-x-[20px]">
                    <p>A compra ficará no nome de</p>
                    <input id="nome" type="text" maxLength={30} autoComplete="off" value={nomeEstudante} onChange={(e) => setNomeEstudante(e.target.value)} className="pl-[10px] border-[1px] border-black rounded-[5px]"/>
                </span>
            </div>

            <div className="flex flex-col p-[10px] mt-[50px] bg-green-100 text-center">
                <span>Falta pagar {dadosCompra?.totalCost ?? 0} €</span>
                <span>Referência: {dadosCompra?.reference ?? '—'}</span>
            </div>
        </>
    )
}