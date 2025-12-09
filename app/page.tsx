import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="container-home-page flex flex-col justify-center items-center gap-y-[15px] w-full">
      <h2 className="relative">
          <span className="letra-d"></span>
          <span className="cursor-default text-[4em] tracking-[10px]">
              <span className="text-transparent">D</span>
              IW
          </span>
      </h2>

      <figure className="relative flex w-[300px] h-[300px]">
        <Image src="/mascote-react/mascote-react.png" alt="Mascote do React." fill></Image>
      </figure>

      <p className='italic'>
        "A minha primeira App React & Next.js!"
      </p>

      <Link href='\intro' className="px-[20px] py-[10px] mt-[20px] rounded-full text-white bg-blue-900 transition-transform hover:translate-y-[-3px]">Explore mais</Link>
    </div>
  )
}
