import Image from 'next/image'
import Link from 'next/link'
import { Produto } from '@/models/interfaces'
import './style.css'

interface CardProps {
    produto: Produto,
    url_api: string,
    index: number
}


export default function Card({produto, url_api, index}: CardProps) {
    return (
        <Link href={`/produtos/${index}`} className='produto overflow-hidden relative flex flex-col justify-center items-center w-[170px] px-[2px] border-y-[2px] border-transparent hover:border-blue-300 duration-500'>
            <h2 className='z-[2] h-[40px] font-medium text-center'>
                {produto.title}
            </h2>

            <figure className='relative w-[120px] h-[120px] my-[10px]'>
                <Image src={`${url_api}${produto.image}`} alt={`Imagem do produto: ${produto.title}`} fill style={{objectFit: 'contain'}}></Image>
            </figure>

            <span className='z-[1]'>
                {Number(produto.price).toFixed(2)}€
            </span>
        </Link>
    )
}