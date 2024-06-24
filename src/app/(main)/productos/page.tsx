import Loader from "@/app/_components/loader";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";

// Carga perezosa de los componentes
const Hero = dynamic(() => import("@/app/_components/hero"), {
  suspense: true,
});
const Products = dynamic(() => import("./_components/products"), {
  suspense: true,
});

export default function Productos() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Hero 
          id="productos-hero" 
          pathImage="/bg-producto.jpg"
          content={
            <>
              <h1 className="text-5xl md:text-6xl font-bold md:mt-16">Sabores Únicos y Calidad Superior</h1>
              <p className="text-lg">Cada corte es seleccionado y preparado con dedicación para asegurarnos de que disfrutes de una experiencia culinaria única y deliciosa.</p>
              <Link href="/productos/#productos" className="golden-button">Nuestros Productos</Link>
            </>
          }
        />
      </Suspense>
      <Suspense fallback={<Loader/>}>
        <section id="productos" className="parallax" style={{ backgroundImage: "url('/bg-producto.jpg')" }}>
          <Products />
        </section>
      </Suspense>
    </>
  );
}
