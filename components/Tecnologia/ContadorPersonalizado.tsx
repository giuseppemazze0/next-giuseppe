"use client"

import { useEffect, useState } from "react"

interface ContadorLikeProps {
    title: string
}

export default function TecnologiaContadorLike({title}: ContadorLikeProps) {
    const [like, setLike] = useState<number>(() => {
        const likeStorage = localStorage.getItem(`likes-${title}`)
        return (likeStorage) ? JSON.parse(likeStorage) : 0
    })

    function mostrarLike() {
        return (like !== 0) ? like : ''
    }

    function incrementarLike() {
        setLike(like+1)
    }

    useEffect(() => {
        localStorage.setItem(`likes-${title}`, JSON.stringify(like))
    }, [like])

    return (
        <div className="absolute z-1 top-[26px] right-[24px] flex flex-col items-center">
            <button onClick={() => incrementarLike()} className="cursor-pointer hover:scale-110 active:scale-90 duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="red" overflow={'hidden'}>
                    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
                </svg>
            </button>

            <p className="text-[.7em] text-red-500">
                {mostrarLike()}
            </p>
        </div>
    )
}