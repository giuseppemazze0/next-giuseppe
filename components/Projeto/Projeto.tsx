import Link from 'next/link';

interface ProjetoProps {
    index: number
    nome: string
    url: string
    descricao: string
}

export default function Projeto({index, nome, url, descricao}:ProjetoProps) {
    return (
        <div className='p-[10px] my-[25px] rounded-[5px] hover:bg-blue-100 transition duration-400 ease-in-out'>
            <h3 className='mb-[20px] font-bold text-[1.2em] text-center'>Laboratório {index} - {nome}</h3>

            <p className='indent-[30px] text-justify'>
                {descricao}
            </p>

            <p className='text-center mt-[15px] italic'>
                O projeto está disponível <Link className='hover:font-bold underline' target='_blank' href ={`${url}`}>AQUI</Link>
            </p>
        </div>
    )
}