import fazerEfeitosNasPontas from "./fazerEfeitosNasPontas"

export default function desenharElementoTarefa(visivel: boolean, opcao: string, corFundo: string, texto: string, editor:boolean, id: number, apagarTarefa: (id: number) => void, editarTarefa: (id: number) => void) {
    return (
        <div key={`tarefa-${id}`} className={`relative overflow-hidden ${visivel ? 'flex' : 'hidden'} flex-col justify-between items-center w-[260px] h-[120px] pb-[25px] mx-auto ${corFundo}`}>
            <h3 className="w-full p-[6px] border-b-[2px] border-black text-center font-bold">
                {opcao.toUpperCase()}
            </h3>
            <p>
                {texto}
            </p>
            <div className={`absolute top-[3px] left-[50%] ${editor ? 'flex' : 'hidden'} flex-row-reverse gap-x-[140px] transform -translate-x-[50%]`}>
                <button onClick={() => apagarTarefa(id)} className="cursor-pointer p-[3px] rounded-full bg-red-500 hover:bg-red-600 active:bg-red-800">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </button>
                <button onClick={() => editarTarefa(id)} className="cursor-pointer p-[3px] rounded-full bg-pink-200 hover:bg-pink-300 active:bg-pink-500">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                </button>
            </div>
            {fazerEfeitosNasPontas()}
        </div>
    )
}