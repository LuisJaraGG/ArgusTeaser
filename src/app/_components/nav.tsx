"use client"
import { Menu } from 'lucide-react';
import Image from "next/image"
import Leaf from './leaft';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = usePathname();
  const getNavLinkClass = (path:any) => {
    return router === path ? 'text-amber-600 md:text-amber-500' : 'hover:text-amber-500';
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Leaf isOpen={isOpen} setIsOpen={setIsOpen} getNavLinkClass={getNavLinkClass} />
      <nav className="fixed top-0 left-0 w-full z-30 p-3 px-8 bg-black flex justify-center transition-all duration-300">
        <div className=" w-full flex justify-between items-center">
          <Link href="/#inicio" className="cursor-pointer">
          <div id="left-side" className="fixed top-0" >
            <Image 
              src="/logo-argus.png" 
              alt="logo" 
              width={344} 
              height={392} 
              className="w-[100px] md:w-[180px] p-2 px-4 bg-black rounded-b-lg" 
            />
          </div>

          </Link>
          <div id="right-side" className="flex gap-2 text-white ml-auto">
            <Menu className="cursor-pointer md:hidden" onClick={handleToggle} />
            <ul className='hidden md:flex md:justify-between gap-12 text-lg  pr-10 font-semibold'>
              <Link href="/">
                <li className={`${getNavLinkClass('/')} cursor-pointer transition-colors duration-300`}>Inicio</li>
              </Link>

              <Link href="productos">
                <li className={`${getNavLinkClass('/productos')} cursor-pointer transition-colors duration-300`}>Productos</li>
              </Link>
              
              <Link href="corporativo">
                <li className={`${getNavLinkClass('/corporativo')} cursor-pointer transition-colors duration-300`}>Corporativo</li>
              </Link>
              
              <Link href="contactos">
                <li className={`${getNavLinkClass('/contactos')} cursor-pointer transition-colors duration-300`}>Contactos</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;
