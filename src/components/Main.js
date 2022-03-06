import React from "react";
import {ReactComponent as EmailLogo} from "./styles/icons/email.svg"
import {ReactComponent as LinkedInLogo} from "./styles/icons/linkedin.svg"

export default function Main(){
    return (
        <main className="bg-[#1A1B21]">
        
            <div className="flex flex-row justify-center items-centers content-center pt-5 space-x-4">
                <button class="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                <EmailLogo />
                <span className="px-6">Email</span>
                </button>

                <button class="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                <LinkedInLogo />    
                <span className="px-4">LinkedIn</span>
                </button>

            </div>

            <div className="p-10 text-white m-auto max-w-xl">
            <h3 className="font-bold text-2xl">About</h3>
            <p className="font-normal pt-2">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            
                <br></br>
                
            <h3 className="font-bold text-2xl">Interests</h3>
            <p className="font-normal pt-2">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>

        </main>
    )
}