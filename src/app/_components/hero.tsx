import Link from "next/link";
import React from "react";

type Props = {
    id:string,
    pathImage:string,
    content:React.ReactElement
}
export default function Hero({id,pathImage,content}:Props) {
    return (
        <section id={id} className="h-screen w-full  overflow-hidden " style={{ backgroundImage: 'url("' + pathImage + '")', backgroundSize: "cover" }}>
             <div className="h-full w-full md:w-[650px]  bg-black bg-opacity-80 text-white flex flex-col align-center justify-center space-y-8 px-4 sm:px-10">
                {content}
             </div>
        </section>
    )
}