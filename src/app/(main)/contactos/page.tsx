import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";

// Carga perezosa de los componentes
const Hero = dynamic(() => import("@/app/_components/hero"), {
  suspense: true,
});
const Contacts = dynamic(() => import("./_components/contacts"), {
  suspense: true,
});
const Loader = dynamic(() => import("@/app/_components/loader"), {
  suspense: true,
});

export default function Contactos() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Hero 
          id="corporativo" 
          pathImage="/bg-contactos.jpg"
          content={
            <>
              <h1 className="text-5xl md:text-6xl font-bold md:mt-16">Desde Nuestra Granja a tu Mesa</h1>
              <p className="text-lg">Ponte en contacto con nosotros y descubre cómo podemos colaborar para llevar lo mejor de la producción porcina a tu mesa.</p>
              <Link href="/contactos/#contactos" className="golden-button">Canales de Atención</Link>
            </>
          }
        />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <section id="contactos" className="parallax" style={{ backgroundImage: "url('/bg-contactos.jpg')" }}>
          <Contacts />
        </section>
      </Suspense>
    </>
  );
}
