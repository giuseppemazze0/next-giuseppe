"use client"

import './style.css'
import Link from "next/link";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
    const [burguer, setBurguer] = useState<boolean>(() => {
        const burguerStored = localStorage.getItem('burguer')
        return burguerStored ? JSON.parse(burguerStored) : false
    });


    function ocultarMenuBurguer() {
        setTimeout(() => {
            setBurguer(false)
        }, 1000)
    }


    useEffect(() => {
        localStorage.setItem('burguer', JSON.stringify(burguer))
    }, [burguer])

    return (
        <header className='fixed z-[10] flex justify-between items-center w-screen h-[90px] pl-[20px] pr-[35px]'>
            <Link onClick={() => ocultarMenuBurguer()} href='\' className='relative z-[1] w-[60px] h-[60px]'>
                <Image src="/mascote-react/mascote-react-miniatura.png" alt="Mascote react em miniatura" fill style={{objectFit: 'contain'}}></Image>
            </Link>

            <nav className={`nav-links absolute top-0 left-0  ${burguer ? "flex" : "hidden"}  w-screen h-screen pl-[15px]`}>
                <ul className="flex flex-col justify-center items-left gap-[10px] w-screen px-[20px] text-[2.4em]">
                    <li><Link onClick={() => ocultarMenuBurguer()} href="/intro">Intro</Link></li>
                    <li><Link onClick={() => ocultarMenuBurguer()} href="/sobre">Sobre</Link></li>
                    <li><Link onClick={() => ocultarMenuBurguer()} href="/caracteristicas">Características</Link></li>
                    <li><Link onClick={() => ocultarMenuBurguer()} href="/tecnologias">Tecnologias</Link></li>
                    <li><Link onClick={() => ocultarMenuBurguer()} href="/projetos">Projetos</Link></li>
                    <li><Link onClick={() => ocultarMenuBurguer()} href="/contador">Contador</Link></li>
                    <li><Link onClick={() => ocultarMenuBurguer()} href="/input">Input</Link></li>
                </ul>
            </nav>

            <button onClick={() => setBurguer(!burguer)} className="cursor-pointer flex flex-col gap-[7px] p-3">
                <span className={`h-[4px] w-10 rounded bg-black transition-all duration-300 ${burguer ? "rotate-45 translate-y-[14.5px]" : ""}`}></span>
                <span className={`h-[4px] w-10 rounded bg-black transition-all duration-300 ${burguer ? "opacity-0" : ""}`}></span>
                <span className={`h-[4px] w-10 rounded bg-black transition-all duration-300 ${burguer ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
            </button>
        </header>
    )
}