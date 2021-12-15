import "./Intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay:1500,
            backSpeed:60,
            strings:["Developer","Analyst", "Lifelong Learner", "Problem Solver", "Military Veteran"],
        });
    },[])


    return (
        <div className = "intro" id = "intro">
            <div className="left">
                <div className="imgContainer">
                    <img src = "./assets/webdev.png" alt = ''/>
                </div>
            </div>
            <div className = "right">
                <div className = "wrapper">
                    <h2>Hello! I'm</h2>
                    <h1>Matt Keplinger</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio" alt = "">
                    <img src = "assets/down.png" alt = ""/>
                </a>
            </div>
        </div>
    )
}

export default Intro
