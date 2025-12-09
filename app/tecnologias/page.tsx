import Tecnologia from '@/components/Tecnologia/Tecnologia'
import tecnologiaDados from '@/data/tecnologias.json'

export default function TecnologiasPage() {
    return(
        <>
            <h1 className='font-bold text-[2em] text-center'>
                Tecnologias Exploradas
            </h1>

            <p className='mt-[30px] mb-[60px] text-justify'>
                <span className='block indent-[20px]'>
                    Durante este semestre, tive a oportunidade de explorar um conjunto de tecnologias fundamentais para o desenvolvimento web moderno. Cada uma delas contribuiu para ampliar minha compreensão sobre como aplicações são estruturadas, estilizadas, dinamizadas e publicadas.
                </span>
                <span className='block indent-[20px]'>
                    Através do estudo de linguagens de marcação, estilos, programação, APIs, ferramentas de versionamento e frameworks avançados, desenvolvi uma base sólida para criar projetos mais completos, organizados e profissionais.
                </span>
                <span className='block indent-[20px]'>
                    A seguir, apresento as principais tecnologias que estudei ao longo deste período, juntamente com uma breve descrição e o nível de domínio alcançado em cada uma.
                </span>
            </p>

            <div className='flex flex-wrap justify-center'>
                {tecnologiaDados.map((tecnologia, index) => (
                    <Tecnologia key={`tecno-${index}`} image={tecnologia.image} title={tecnologia.title} rating={tecnologia.rating} index={index}/>
                ))}
            </div>
        </>
    )
}