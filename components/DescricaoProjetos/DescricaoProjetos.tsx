import Link from 'next/link';
import Orgulho from '@/components/Orgulho/Orgulho';
import Projeto from '../Projeto/Projeto';

const itens = []
const quantidadeLabs = 7;
const nomeProjetos = ["São Paulo", "São Paulo", "São Paulo", "Taberna DEISI", "JavaScript", "Lojinha.", "Lojinha,"]
const descricaoProjetos = [
  "No primeiro laboratório, escolhemos uma cidade para servir de base ao projeto. Foi aqui que tivemos nosso primeiro contato com a linguagem HTML e aprendemos a estruturar uma página web simples.",
  "No segundo laboratório, deixamos nossa página muito mais elegante com o uso de CSS. Exploramos seletores, estilização básica e começamos a construir um layout mais organizado.",
  "Para concluir essa trilogia da cidade, aprimoramos o projeto com todos os conhecimentos de HTML e CSS adquiridos ao longo do semestre, incluindo flexbox, grid, media queries e outras técnicas avançadas de layout.",
  "Após dominar HTML e CSS, desenvolvemos nosso primeiro projeto utilizando JavaScript. Este laboratório ficou repleto de eventos interativos, desde acariciar um cachorro ao passar o mouse até caçar ratos para trocar moedas e gastar em bebidas, criando uma experiência divertida e dinâmica.",
  "No laboratório seguinte, continuamos a trabalhar com JavaScript, mas desta vez de forma mais simples. Implementamos eventos básicos para reforçar os conceitos de manipulação do DOM e interação com o usuário.",
  "Neste laboratório, introduzimos o uso do LocalStorage. O objetivo era criar uma loja onde o utilizador pudesse visualizar produtos, selecionar itens e adicioná-los ao carrinho, mantendo esses dados armazenados localmente.",
  "Sendo o último laboratório antes de avançarmos para React e Next.js, aprimoramos a loja tanto visualmente quanto em desempenho. Agora, os produtos exibidos passam a ser obtidos de uma API externa, e o visitante pode efetivamente realizar compras dentro do site."
];

export default function Projetos() {
    let url =''
    for (let i = 0; i < quantidadeLabs; i++) {
        url = (i < 3) ? `https://giuseppemazze0.github.io/lab${i+1}/cidade/index.html` : `https://giuseppemazze0.github.io/lab${i+1}/index.html`

        itens.push(
            <Projeto key={i} index={i+1} nome={nomeProjetos[i]} url={url} descricao={descricaoProjetos[i]}/>
        )
    }

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
                {itens}
            </div>

            <Orgulho nome="loja" link="https://giuseppemazze0.github.io/lab7/index.html"/>
        </div>
    )
}