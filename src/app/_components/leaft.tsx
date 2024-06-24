"use client";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function Leaf({ isOpen, setIsOpen,getNavLinkClass }:any) {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    let timeoutId:any;
    if (isOpen) {
      setIsVisible(true);
    } else {
      timeoutId = setTimeout(() => setIsVisible(false), 500); // 500ms para que coincida con la duración de la animación
    }
    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    isVisible && (
      <div className={`fixed top-0 left-0 w-full h-full z-40 md:hidden ${isOpen ? "fade-in" : "fade-out"}`}>
        <div className="w-full h-full bg-black opacity-70 z-40" onClick={handleClose}></div>
        <div className={`bg-slate-100 min-w-[100px] w-3/4 z-50 top-0 h-full fixed p-3 text-black ${isOpen ? "slide-in" : "slide-out"}`}>
          <div className="flex justify-end cursor-pointer">
            <X onClick={handleClose} />
          </div>
          <div>
            <ul className="gap-y-7 pt-5 font-bold flex flex-col text-lg">
              <Link href="/">
                <li onClick={handleClose} className={`${getNavLinkClass('/')} cursor-pointer transition-colors duration-300`}>Inicio</li>
              </Link>
              <Link href="productos">
                <li onClick={handleClose} className={`${getNavLinkClass('/productos')} cursor-pointer transition-colors duration-300`}>Productos</li>
              </Link>
              <Link href="corporativo" >
                <li onClick={handleClose} className={`${getNavLinkClass('/corporativo')} cursor-pointer transition-colors duration-300`}>Corporativo</li>
              </Link>

              <Link href="contactos">
                <li onClick={handleClose} className={`${getNavLinkClass('/contactos')} cursor-pointer transition-colors duration-300`}>Contactos</li>
              </Link>
              
            </ul>
          </div>
        </div>
      </div>
    )
  );
}

export default Leaf;
