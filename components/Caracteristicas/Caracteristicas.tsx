import Link from "next/link"
import './style.css'

interface CaracteristicasProps {
    index:number,
    titulo: string,
    apresentacao: string,
    exemplo: string,
    explicacao: string,
    vantagens: string[],
    quandoUsar: string,
    dicas: string[]
}

export default function Caracteristicas({index, titulo, apresentacao, exemplo, explicacao, vantagens, quandoUsar, dicas}: CaracteristicasProps) {
    return (
        <Link href={`/caracteristicas/${index}`} className="group overflow-hidden relative flex justify-center w-full py-[25px] px-[20px] mt-[20px] rounded-[10px] shadow-[3px_3px_3px_rgb(0,0,0,0.6)] bg-gradient-to-l from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 active:from-blue-800 active:to-blue-800">
            <p className="z-[1] text-[1.1em]">
                {titulo}
            </p>
            
            <span className="texto-estilizado absolute top-[50%] left-[20px] translate-y-[-50%] text-[4em] text-blue-600 group-hover:text-blue-700 group-active:text-blue-800">
                {index+1}
            </span>

            <div className="absolute top-[-25px] left-[14%] w-[5px] h-[120px] bg-[rgb(255,255,255,0.2)] rotate-[35deg]"></div>
            <div className="absolute top-[-25px] left-[16.5%] w-[20px] h-[120px] bg-[rgb(255,255,255,0.2)] rotate-[35deg]"></div>
        </Link>
    )
}