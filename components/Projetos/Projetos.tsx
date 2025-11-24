import Link from 'next/link';
import Orgulho from '@/components/Orgulho/Orgulho';

export default function Projetos() {
    return (
        <>
            <h2>Projetos</h2>
            <p>Em DIW fizemos vários projetos usando diversas linguagens de front end.</p>
            <p>Os projetos estão disponíveis em <Link href ="/">AQUI</Link></p>
            <Orgulho nome="loja" link="https://giuseppemazze0.github.io/lab7/index.html" />
        </>
    )
}