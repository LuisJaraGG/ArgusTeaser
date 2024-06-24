'use client'
import { products } from "@/app/data/products.data"
import Image from "next/image"
import { useState } from "react"
export default  function Products() {

    const [product, setProducts] = useState(0)

    const showProduct = (productIndex:number) => {
        return product===productIndex? " fade-in flex mx-auto md:m-0":"hidden"
    }

    const activateButton = (productIndex:number) => {
        return product===productIndex? "text-black  bg-amber-400 border border-amber-400":" border hover:bg-amber-400 hover:text-black hover:border-amber-400"
    }

    return (
    <div className=" py-28 flex flex-col  justify-center items-center bg-black bg-opacity-80">
        <h1 className="text-6xl text-center text-amber-400 font-bold mb-10 text-gold">Nuestros productos</h1>
        <div className="flex flex-col md:flex-row gap-10 md:w-[900px]  md:h-[550px] ">
            <div className="flex mx-auto md:w-[300px]  flex-wrap md:flex-col gap-3 md:gap-5  items-center justify-center px-2">
                {products.map((product, index) => (
                    <button key={index} onClick={() => setProducts(index)} className={`text-center font-bold  p-2 px-3 md:px-5 md:w-[110px]  rounded-xl transition-colors duration-300 ${activateButton(index)} `} >{product.tiitle}</button>
                ))}
            </div>
            <div className="px-5 md:p-0 w-full text-center md:text-left">
                {products.map((product, index) => (
                    <div key={index} className={`${showProduct(index)} flex flex-col gap-4 max-w-[500px]`}>
                        <h1 className="text-5xl text-amber-400 font-bold">{product.tiitle}</h1>
                        <hr />
                        <Image className=" rounded-lg w-[400px] h-[300px] object-cover mx-auto md:m-0" src={product.image} alt={product.tiitle} width={product.imageWidth} height={product.imageHeight}></Image>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>

        </div>
    </div>
    )
}