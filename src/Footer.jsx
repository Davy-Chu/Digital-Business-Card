import React from "react"
import Facebook from "./assets/facebook.png"
import Github from "./assets/github.png"
import Instagram from "./assets/instagram.png"
import Twitter from "./assets/twitter.png"
import './Footer.css'
export default function Footer() {
    return(
            <div className="footer">
                <div id="git">
                    <a href="https://github.com/Davy-Chu"><img src={Github}></img></a>
                </div>
                <div id="twit">
                    <a href="https://twitter.com/yDavidHu"><img src={Twitter}></img></a>
                    </div>
                <div id="insta">
                    <a href="https://www.instagram.com/ydavidhu/"><img src={Instagram}></img></a>
                </div>
                <div id="face">
                    <a href="https://www.facebook.com/profile.php?id=100089775344727"><img src={Facebook}></img></a>
                </div>
            </div>
    )
}