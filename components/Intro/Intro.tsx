import MagiaDoJSX from "../MagiaDoJSX/MagiaDoJSX"

export default function Intro() {
    return (
      <>
        <h1 className="font-bold text-[2em] text-center">
          Veja o modelo das <span className="italic">Interfaces Modernas</span>
        </h1>

        <p className="mt-[30px] mb-[50px] text-justify">
          Bem vindo à minha primeira app em React e Next.js. Este é o meu primeiro componente React. Digo desde já que JSX faz magia.
        </p>

        <MagiaDoJSX/>
      </>
    )
}