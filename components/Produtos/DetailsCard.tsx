"use client"

import { useParams } from "next/navigation"
import useSWR from "swr"
import { Produto } from "@/models/interfaces"



const params = useParams()
const index = Number(params.produto)
const url_produto = `https://deisishop.pythonanywhere.com//products/${index}`

const fetcher = async (url: string) => fetch(url).then(res => res.json())

export default function DetailsCard() {
    const {produto, error, isLoading} = useSWR<Produto>(url_produto, fetcher)

    return (
        <>
            { produto }
        </>
    )
}