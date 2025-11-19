import tecnologias from '@/data/tecnologias.json';
import Tecnologia from '@/components/Tecnologia/Tecnologia'

export default function TecnologiasPage() {
    return(
        <>
            {tecnologias.map((tecnologia, index) => (
                <Tecnologia 
                    key={`tecno-${index}`}
                    title={tecnologia.title}
                    description={tecnologia.description}
                />
                )
            )}
        </>
    )
}