import React from "react";

export default function Header(){
    return (
        <nav className="bg-[#1A1B21] p-5">
            <img className="rounded-lg w-fit h-auto sm:w-1/3 sm:h-auto md:w-1/3 md:h-auto mx-auto" src={require('./styles/Avatar Hai Vo.jpeg')} alt="Profile" />
            <div className="flex flex-col justify-center items-center">
                <h1 className="pt-5 font-bold text-4xl text-white">Hai Vo</h1>
                <p className="p-2 font-regular text-l text-[#F3BF99]">Frontend Developer</p>
                <a href="mailto: hai@ediciones.nyc" className="text-white">hai@ediciones.nyc</a>
            </div>
        </nav>
    )
}