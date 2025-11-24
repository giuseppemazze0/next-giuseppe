import Link from 'next/link';
import Orgulho from '@/components/Orgulho/Orgulho';

export default function Projetos() {
    return (
        <div className='conteudo-main'>
            <h2>Projetos</h2>

            <p className='paragrafo-main'>
                Em DIW fizemos vários projetos usando diversas linguagens de front end.
            </p>

            <p>
                Os projetos estão disponíveis em <Link className='hover:font-bold underline' target='_blank' href ="https://giuseppemazze0.github.io/lab7/index.html">AQUI</Link>
            </p>

            <Orgulho nome="loja" link="https://giuseppemazze0.github.io/lab7/index.html"/>
        </div>
    )
}