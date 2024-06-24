import Image from "next/image";

export default function Footer() {
    return (
        <div style={{ backgroundImage: 'url("/footer-image.jpg")', backgroundSize: "cover" }}>
            <div className="flex p-10 md:p-20 items-center justify-center gap-10 bg-black bg-opacity-90 backdrop-blur-md">
                <div className="max-w-[800px] flex flex-col md:flex-row gap-10 items-center">
                    <div className="flex flex-col gap-5 w-full md:w-[60%] text-center md:text-left">
                        <h1 className="text-3xl font-bold">¿USTED ES MAYORISTA O TIENE NEGOCIO DE RUBRO ALIMENTICIO?</h1>
                        <p>En CSA Comercializadora, nos especializamos en la venta de chanchos y lechones de alta calidad, ofreciendo productos frescos y saludables al gancho y al por mayor.</p>
                        <a className="golden-button mx-auto md:m-0" target="_blank" href="https://api.whatsapp.com/send?text=Estoy interesado en Argus,quiero una cotización&phone=+51930274729">Solicitar Cotización</a>
                    </div>
                    <Image className="w-full md:w-[300px] rounded-xl" src="/footer-image.jpg" alt="csa" width={6000} height={4000}></Image>
                </div>
            </div>
        </div>
    );
}
