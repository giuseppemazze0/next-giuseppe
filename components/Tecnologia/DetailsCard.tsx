"use client"

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import tecnologiasDados from '@/data/tecnologias.json'

export default function TecnologiaPage() {
    const params = useParams()
    const index = Number(params.tecnologia)
    let estrelas = '⭐'.repeat(tecnologiasDados[index].rating)

    return (
        <>
            <div className='flex justify-between items-center mb-[40px]'>
                <Link href='/tecnologias' className='flex py-[4px] px-[10px] rounded-full bg-blue-100 hover:bg-blue-300 transitiom duration-200 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"/></svg>
                    <span>Voltar</span>
                </Link>

                <h2 className='font-bold text-center text-[2em]'>
                    Tecnologia {tecnologiasDados[index].title}
                </h2>

                <span>{estrelas}</span>
            </div>

            <figure className='relative w-full w-[100px] h-[100px]'>
                <Image src={tecnologiasDados[index].image} alt={`Logo ${tecnologiasDados[index].title}`} fill style={{objectFit: 'contain'}}></Image>
            </figure>
            
            <p className='my-[50px] text-center'>
                {tecnologiasDados[index].description}
            </p>
        </>
    )
}