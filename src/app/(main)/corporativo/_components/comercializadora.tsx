import Image from "next/image";

export default function Comercializadora() {
    return (
    <div className="bg-black bg-opacity-80 h-screen flex flex-col items-center justify-center">
        <div className="text-center max-w-[800px] space-y-10 p-4">
            <h1 className="text-3xl md:text-6xl font-bold p-3">¿Qué es CSA Comercializadora?</h1>
            <p className="px-5">CSA Comercializadora es una empresa agrícola ubicada en Trujillo-Huanchaco, especializada en la crianza y venta de cerdos y lechones. Esta granja se dedica a producir cerdos de alta calidad, garantizando el bienestar animal y siguiendo prácticas sostenibles y responsables. CSA Comercializadora se distingue por su compromiso con la excelencia en la producción porcina, ofreciendo productos frescos y saludables a sus clientes.</p>
            <Image className=" w-[250px] md:w-[400px] object-contain mx-auto" src="/logo-csa.png" alt="csa" width={4419} height={1694}></Image>
        </div>
    </div>
    )
}