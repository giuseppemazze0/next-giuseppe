import Tecnologia from '@/components/Tecnologia/Tecnologia'
import tecnologias from '@/data/tecnologias.json';

export default function TecnologiasPage() {
    return(
        <>
            <h2 className=' text-center mb-[30px] text-[1.5em]'>Tecnologias Exploradas</h2>

            {tecnologias.map((tecnologia, index) => (
                <Tecnologia key={`tecno-${index}`} index={index} title={tecnologia.title} description={tecnologia.description} rating={tecnologia.rating}/>
                )
            )}
        </>
    )
}