import Relogio from "@/components/Relogio/Relogio";

export default function Footer() {
    const data = new Date();
    
    return (
        <footer className="flex justify-between items-end font-bold w-[600px] px-[10px] py-[20px] italic text-[.7em]">
          <p className="text-left w-[33.3%]">
            Universidade Lusófona © {data.getFullYear()}
          </p>
          
          <div className="flex flex-col items-center w-[33.3%]">
            <Relogio />
            <p>Desenvolvimento de Interfaces Web</p>
          </div>

          <p className="text-right w-[33.3%]">
            Giuseppe Mazzeo
          </p>
        </footer>
    )
}