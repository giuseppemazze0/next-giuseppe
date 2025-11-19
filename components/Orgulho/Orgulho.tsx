import Link from 'next/link';

interface OrgulhoProps {
    nome: string
    link: string
}

export default function Orgulho({nome, link}: OrgulhoProps) {
    return (
        <div 
        className='
        hover:bg-purple-500
        p-2
        bg-purple-100
        '>
            <h2>O meu orgulho é {nome} que fiz, desponível neste <Link href={link} target='_blank'>{link}</Link></h2>
        </div>
    )
}