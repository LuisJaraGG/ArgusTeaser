import Image from "next/image";
import { Phone,Mail,MapPin } from "lucide-react";
export default function Contacts() {
    return (
        <div className=" h-screen bg-black bg-opacity-80 flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="flex flex-col gap-10">
                <Image className=" w-[110px] md:w-[180px] object-contain mx-auto" src="/logo-argus-blanco.png" alt="csa" width={575} height={657}></Image>
                <Image className=" w-[160px] md:w-[300px] object-contain mx-auto" src="/logo-csa.png" alt="csa" width={4419} height={1694}></Image>
            </div>
            <div className="flex flex-col text-lg md:text-3xl  font-bold  gap-16  ">
                <p className="flex gap-x-3 flex-col md:flex-row justify-center items-center md:justify-start">
                    <span><Phone className="text-amber-400 w-[40px] h-[40px] md:w-[60px] md:h-[60px] "/></span> +51 930-274-729
                </p>
                <p className="flex gap-x-3 flex-col md:flex-row justify-center items-center md:justify-start">
                    <span><Mail className="text-amber-400 w-[40px] h-[40px] md:w-[60px] md:h-[60px] "/></span> atencionalcliente@arguspigs.com
                </p>
                <p className="flex gap-x-3 flex-col md:flex-row justify-center items-center md:justify-start">
                    <span><MapPin className="text-amber-400 w-[40px] h-[40px] md:w-[60px] md:h-[60px] "/></span> Huanchaco- Trujillo
                </p>
            </div>

        </div>
    )
}