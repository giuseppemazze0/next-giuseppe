"use client"

import { useEffect, useState } from "react"

export default function Relogio() {
    const [hora, setHora] = useState<Date>(new Date())

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHora(new Date());
        }, 1000);


        return () => clearInterval(intervalo);
    }, []);



    return (
        <div className="flex flex-col items-center not-italic">            
            <span>
                {hora.toLocaleTimeString()}
            </span>
        </div>
    )
}