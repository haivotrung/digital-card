import React from "react";
import {ReactComponent as TwitterLogo} from "./styles/icons/twitter.svg"
import {ReactComponent as FBLogo} from "./styles/icons/facebook.svg"
import {ReactComponent as InstagramLogo} from "./styles/icons/instagram.svg"
import {ReactComponent as GitLogo} from "./styles/icons/github.svg"


export default function Footer(){
    return <footer className="flex flex-row justify-center items-center space-x-4 p-5 bg-[#161619]">
        <button type="button"> <TwitterLogo/>
        </button>  

        <button type="button"> <FBLogo />
        </button> 

        <button type="button"> <InstagramLogo />
        </button> 

        <button type="button"> <GitLogo />
        </button> 
        
    </footer>
}