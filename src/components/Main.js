import React from "react";
import {ReactComponent as EmailLogo} from "./styles/icons/email.svg"
import { ReactComponent as LinkedInLogo } from "./styles/icons/linkedin.svg"
import {ReactComponent as GitHubLogo} from "./styles/icons/github.svg"


export default function Main(){
    return (
        <main className="bg-[#1A1B21]">
        
            <div className="flex flex-row justify-center items-centers content-center pt-5 space-x-5">
                <button class="inline-flex items-center h-10 px-5 text-[#1E1F26] rounded-lg transition ease-in-out bg-white hover:-translate-y-0.5 hover:scale-105	hover:bg-slate-400 duration-300" >
                <GitHubLogo />
                <a href="https://github.com/haivotrung" className="px-4">GitHub</a>
                </button>

                <button class="inline-flex items-center h-10 px-5 text-white bg-[#5093E2] rounded-lg transition ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:bg-blue-800 duration-300">
                <LinkedInLogo />    
                <a href="https://www.linkedin.com/in/hai-t-vo/" className="px-4">LinkedIn</a>
                </button>
            </div>


            <div className="p-10 text-white m-auto max-w-xl">
            <h3 className="font-bold text-2xl">About</h3>
            <p className="font-normal pt-2">problem-solving. everything that involves the technological side of the digital realm is his area of expertise. hai is always up for freelancing and consulting on additional projects specifically working with other queer and trans people of color.</p>
            
            <br></br>
                
            <h3 className="font-bold text-2xl">Interests</h3>
            <p className="font-normal pt-2">a pop music aficionado, coffee enthusiast, and moonlighting in learning more about vino.</p>
            </div>

        </main>
    )
}