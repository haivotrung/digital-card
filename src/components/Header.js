import React from "react";

export default function Header(){
    return (
        <nav className="flex flex-col justify-center items-center bg-[#1A1B21]">
            <img className="max-w-md" src={require('./styles/Avatar.png')} alt="Profile" />
            <h1 className="pt-5 font-bold text-4xl text-white">Laura Smith</h1>
            <p className="p-2 font-regular text-l text-[#F3BF99]">Frontend Developer</p>
            <p className="text-white">laurasmith.website</p>
        </nav>
    )
}