import Caracteristicas from '@/components/Caracteristicas/Caracteristicas'
import caracteristicaDados from "@/data/caracteristicas.json"

export default function CaracteristicasPage() {
    return (
        <>
            <h1 className='font-bold text-[2em] text-center'>
                Características do React e Next.js
            </h1>

            <p className='indent-[20px] text-justify mt-[30px] mb-[50px]'>
                Este guia resume as principais características do React e Next.js, explicando conceitos como JSX, componentes, hooks, roteamento, renderização e TypeScript, com exemplos, vantagens e dicas para uso prático em projetos modernos.
            </p>

            {caracteristicaDados.map((caracteristica, index) => (
                <Caracteristicas
                    key={`caracteristica-${index}`}
                    index={index}
                    titulo={caracteristica.titulo}
                    apresentacao={caracteristica.apresentacao}
                    exemplo={caracteristica.exemplo}
                    explicacao={caracteristica.explicacao}
                    vantagens={caracteristica.vantagens}
                    quandoUsar={caracteristica.quandoUsar}
                    dicas={caracteristica.dicas}/>
            ))}
        </>
    )
}