import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Loader from "./_components/loader";

// Carga perezosa de los componentes
const Hero = dynamic(() => import("./_components/hero"), {
  suspense: true,
});
const AboutInicio = dynamic(() => import("./_components/about"), {
  suspense: true,
});
const Mision = dynamic(() => import("./_components/mision"), {
  suspense: true,
});

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Hero 
          id="inicio" 
          pathImage="/bg-inicio-1.jpg" 
          content={
            <>
              <h1 className="text-5xl md:text-6xl font-bold md:mt-16">Excelencia en Cada Corte</h1>
              <p className="text-lg">En Argus, nuestra carne de cerdo premium es el resultado de un compromiso profundo con la calidad y la integridad. Desde la selección cuidadosa de nuestros criadores hasta los estrictos estándares de alimentación y bienestar animal.</p>
              <Link href="#About" className="golden-button">Descubre Argus</Link>
            </>
          }
        />
        <div className="parallax" style={{ backgroundImage: "url('/bg-inicio-2.jpg')" }}>
          <AboutInicio />
          <Mision />
        </div>
      </Suspense>
    </>
  );
}
