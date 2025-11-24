import Image from 'next/image'
import imagensTecnologias from '../Tecnologia/ImagensTecnologias'

interface TecnologiaProps {
    index: number
    title: string
    description: string
    rating: number
}

export default function Tecnologia({index, title, description, rating}: TecnologiaProps) {
    let estrelas = '⭐'.repeat(rating)
    
    return (
        <div className="flex py-[17px] my-[20px] border-l-[4px] border-black-900 hover:bg-blue-100 transition duration-400 ease-in-out">
            <div className='flex items-center mx-[10px]'>
                <Image src={imagensTecnologias[index]} alt={`Logo ${title}`} width={50} height={50}></Image>
            </div>
            
            <div>
                <h2>{title} <span className='ml-[10px]'>{estrelas}</span></h2>

                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}
