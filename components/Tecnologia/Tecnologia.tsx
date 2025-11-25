import TecnologiaCard from '../TecnologiaCard/TecnologiaCard'

interface TecnologiaProps {
    image: string
    title: string
    description: string
    rating: number
}

export default function Tecnologia({image, title, description, rating}: TecnologiaProps) {
    let estrelas = '⭐'.repeat(rating)
    
    return (
        <div className="overflow-hidden relative z-1 flex flex-col justify-between items-start w-[160px] h-[160px] p-[17px] m-[10px] rounded-[10px] shadow-[3px_3px_2px_rgb(0,0,0,0.2)] bg-blue-100 active:bg-blue-500 hover:bg-blue-300 transition-bg duration-200 ease-in-out">
            <TecnologiaCard image={image} title={title}/>

            <span className='z-1'>{estrelas}</span>

            <div className='absolute top-[-10px] right-[-20px] w-[100px] h-[100px] rounded-full bg-white/27'></div>
            <div className='absolute top-[70px] right-[-10px] w-[120px] h-[120px] rounded-full bg-white/27'></div>
        </div>
    )
}
