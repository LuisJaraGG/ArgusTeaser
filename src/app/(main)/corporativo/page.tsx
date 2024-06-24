import Loader from "@/app/_components/loader";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";

// Carga perezosa de los componentes
const Hero = dynamic(() => import("@/app/_components/hero"), {
  suspense: true,
});
const Comercializadora = dynamic(() => import("./_components/comercializadora"), {
  suspense: true,
});

export default function Corporativo() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Hero 
          id="corporativo" 
          pathImage="/footer-image.jpg"
          content={
            <>
              <h1 className="text-5xl md:text-6xl font-bold md:mt-16">Compromiso con la Excelencia Desde el Origen</h1>
              <p className="text-lg">En Argus Pigs, nuestra misión es ofrecer carne de cerdo premium de la más alta calidad, y todo comienza en CSA, nuestra granja dedicada a la cría de cerdos.</p>
              <Link href="/corporativo/#comercializadora" className="golden-button">Conoce CSA</Link>
            </>
          }
        />
      </Suspense>
      <Suspense fallback={<Loader/>}>
        <div id="comercializadora" className="parallax" style={{ backgroundImage: "url('/footer-image.jpg')" }}>
          <Comercializadora />
        </div>
      </Suspense>
    </>
  );
}
