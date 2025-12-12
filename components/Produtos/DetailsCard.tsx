"use client"

import { useParams } from "next/navigation"
import useSWR from "swr"
import Image from "next/image"
import Link from "next/link"
import { Produto } from "@/models/interfaces"



const fetcher = async (url: string) => fetch(url).then(res => res.json())

export default function DetailsCard() {
    const params = useParams()
    const index = Number(params.produto) + 1
    const url = 'https://deisishop.pythonanywhere.com'
    const url_produto = `${url}/products/${index}`

    const {data, error, isLoading} = useSWR<Produto>(url_produto, fetcher)

    if (error) return <p>Erro ao carregar</p>;
    if (isLoading) 
        return (
            <>
                <p>
                    Carregando...
                </p>
            </>
        );
    if (!data) return <p>Dados inexistente</p>;

    return (
        <div>
            <Link href='/produtos'>
                voltaa
            </Link>

            <h2 className="font-bold text-[2em] text-center">
                { data.title }
            </h2>

            <p>
                { data.category }
            </p>

            <figure className="relative flex items-center w-full h-[250px]">
                <Image src={`${data.image}`} alt={`Imagem do produto '${data.title}'`} fill style={{objectFit: 'contain'}}></Image>
            </figure>

            <p>
                { data.rating.rate } 
                { data.rating.count }
            </p>

            <p className="indent-[20px]">
                { data.description }
            </p>

            <p className="">
                { Number(data.price).toFixed(2) } €
            </p>
        </div>
    )
}