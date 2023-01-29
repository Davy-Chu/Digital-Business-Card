import React from "react"
import './Header.css'
import './App.css'
import './index.css'
import Linkedin from "./assets/LinkedIn.jpg"
import linked from "./assets/linkedin.png"
import Mail from "./assets/mail.png"
export default function Header() {
    return(
        <div className="header">
            <div className="fill">
                <img src={Linkedin}></img>
            </div>
            <h1 id="name">David Hu</h1>
            <h5 id="role">Computer Science Student</h5>
            <div className="contacts">
                <a href="mailto:ydavidhu@gmail.com" target="_blank" rel="noreferrer">
                    <button id="email">
                        <img src={Mail}></img>
                        Email
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/david-hu-b677b0259/" target="_blank" rel="noreferrer">
                    <button id="linkedin">
                        <img src={linked}></img>
                        LinkedIn
                    </button>
                </a>
            </div>
        </div>
    )
}