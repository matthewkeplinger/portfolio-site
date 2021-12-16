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
                <h2>Contact Me</h2>
                <form onSubmit = {handleSubmit}>
                    <input type = "text" placeholder = "Email" />
                    <textarea placeholder = "Message"></textarea>
                    <button type = "submit">Send</button>
                    {message && <span>Thanks, I will reply as soon as possible!</span>}
                    
                </form>

            </div>
        </div>
    )
}

export default Contact


