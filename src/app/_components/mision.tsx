
import { Wine,Eye } from "lucide-react"
export default function Mision() {
    return (
        <div className="h-screen bg-black bg-opacity-80 flex">
            <div className=" px-10 md:p-0 max-w-[900px] mx-auto gap-10 flex flex-col md:flex-row  items-center justify-center ">
                <div className="text-center space-y-5">
                    <h1>Nuestra</h1>
                    <h2 className="text-5xl font-bold">Misión</h2>
                    <p>Somos una granja productora porcina dedicada a la comercialización y distribución al por mayor y menor de carnes de primera calidad, preocupándonos por el cuidado ecológico de nuestros productos.</p>
                    <Wine className="mx-auto w-16 h-16"/>
                </div>
                <div className="hidden md:block h-[400px] w-[15px] bg-amber-500"></div>
                <div className="text-center space-y-5">
                    <h1>Una sola</h1>
                    <h2 className="text-5xl font-bold">Vision</h2>
                    <p>Ser líderes en el mercado de productos porcinos y vacunos, innovando y generando buenas prácticas basadas en la confianza, con el objetivo de ofrecer siempre lo mejor a nuestros clientes.</p>
                    <Eye className="mx-auto w-16 h-16"/>
                </div>
            </div>
        </div>
    )
}