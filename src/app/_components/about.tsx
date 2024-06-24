import Image from "next/image";

export default function AboutInicio() {
    return (
    <section id="About" className="h-screen bg-black bg-opacity-80 flex flex-col justify-center text-center">
        <div className=" mx-auto space-y-4">
            <h1 className="">Conócenos</h1>
            <h2 className="text-5xl font-bold" >¿Quiénes Somos?</h2>
            <p className="max-w-[600px] p-5 ">En Argus, somos una empresa apasionada por ofrecer carne de cerdo premium de la más alta calidad. Desde nuestros comienzos, hemos mantenido un compromiso inquebrantable con la excelencia, seleccionando cada corte con cuidado y dedicación. Nuestro equipo está formado por profesionales que comparten la misma visión. Nos enorgullece ser una parte integral de tu mesa y trabajar continuamente para superar tus expectativas en cada bocado.</p>
            <Image src="/logo-argus-blanco.png" alt="logo" width={575} height={657} className="w-[200px] mx-auto"></Image>    
        </div>
    </section>
    )
}