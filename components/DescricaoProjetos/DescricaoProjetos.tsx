import Link from 'next/link';
import Orgulho from '@/components/Orgulho/Orgulho';
import Projeto from '../Projeto/Projeto';
import projetos from '@/data/projetos.json'

export default function DescricaoProjetos() {
    return (
        <div className='conteudo-main'>
            <h2>Projetos</h2>

            <p className='paragrafo-main'>
                Em DIW fizemos vários projetos usando diversas linguagens de front end.
            </p>

            <p>
                Os projetos estão disponíveis em <Link className='hover:font-bold underline' target='_blank' href ="https://giuseppemazze0.github.io/index.html">AQUI</Link>
            </p>

            <div className='my-[40px]'>
                {projetos.map((projeto, index) => (
                    <Projeto key={`projeto-${index}`} index={index} nome={projeto.nome} url={projeto.url} descricao={projeto.descricao}/>
                ))}
            </div>

            <Orgulho nome="loja" link="https://giuseppemazze0.github.io/lab7/index.html"/>
        </div>
    )
}