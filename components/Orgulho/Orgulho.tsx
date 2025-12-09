import Link from 'next/link';

interface OrgulhoProps {
    nome: string
    link: string
}

export default function Orgulho({nome, link}: OrgulhoProps) {
    return (
        <div className='w-full py-4 rounded-[10px] bg-blue-100 hover:bg-blue-400 transition'>
            <p className='flex flex-col items-center gap-y-[10px]'>
                O meu orgulho é {nome} que fiz, disponível neste <Link className='font-bold italic' href={link} target='_blank'>{link}</Link>
            </p>
        </div>
    )
}