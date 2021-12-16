import "./Contact.scss"
import {useState} from 'react'

function Contact() {

    const [message,setMessage]= useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true);

    }
    return (
        <div className = "contact" id = "contact">
            <div className = "left">
                <img src = "assets/emailMe.png" alt = '' />
            </div>
            <div className = "right">
                <ul>
                    <li>
                        <a href = "https://www.github.com/matthewkeplinger" target="_blank" rel="noreferrer"><img src = "assets/GitHub-logo.png" title="View my Github" alt = ''/></a> 
                    </li>
                    <li>
                        <a href = "https://www.linkedin.com/in/matthew-keplinger" target="_blank" rel="noreferrer"><img src = "assets/linkedin.png" title="View my LinkedIn" alt = "" /></a>
                    </li>
                    <li>
                        <a href = "mailto:matthew.keplinger85@gmail.com?subject-=Mail from Your Portfolio" target="_blank"><img className = "img2" src = "assets/email.png" title="Email Me!" alt = "" /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact


