export default function fazerEfeitosNasPontas() {
    const atributo = 'absolute w-[50px] h-[50px] bg-white rounded-full'
    return (
        <>
            <div className={`${atributo} top-[-30px] left-[-30px]`}></div>
            <div className={`${atributo} top-[-30px] right-[-30px]`}></div>
            <div className={`${atributo} bottom-[-30px] left-[-30px]`}></div>
            <div className={`${atributo} bottom-[-30px] right-[-30px]`}></div>
        </>    
    )
}