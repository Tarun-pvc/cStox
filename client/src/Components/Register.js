import { useEffect, useState } from 'react'
import "./Register.css"

export default function Register() {
    const [emailIsValid, setEmailIsValid] = useState(true)
    const handleEmailIsValid = () => setEmailIsValid(/^[a-z0-9_\.-]+\@[a-z0-9\-]+(\.[a-z]+){1,}/.test(email))

    const [email, setEmail] = useState("")
    const handleChangeEmail = (e) => {
        setEmail(e.target.value.trim())
        handleEmailIsValid()
    }
    console.log({
        email: email,
        isValid: emailIsValid
    })

    const [username, setUsername] = useState("")
    const handleChangeUsername = (e) => {
        setUsername(e.target.value.trim())
    }

    const [password, setPassword] = useState("")
    const handleChangePassword = (e) => {
        setPassword(e.target.value.trim())
    }

    const handleFormSubmit = (e) => {
        console.log(e)
    }

    const [text, setText] = useState("W")
    const [fullText, setFullText] = useState("elcome...")
    const [index, setIndex] = useState(0)
    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
            setText(text + fullText[index])
            setIndex(index + 1)
            }, 150)
        }
    }, [index])
    

    return (
        <b>
            <a href="#" style={{ "margin": '10px', "color": 'beige', "top": "10rem" }}><img src="backicon.png" alt="" style={{ "z-index": '2', "width": '25px', "height": '25px' }} /></a>
            <div id="video-background" class="left_section">
                <video src="night_timelapse_new.mp4" autoPlay loop muted></video>
                <h1 id="welcome-text" style={{ "z-index": '1', "color": 'white', "opacity": '85%', "fontSize": '600%', "position": 'relative', "right": '20%' ,"border":'None'}}>{text}</h1>
                
            </div>
            <div class="right_section">
                <form style={{"backgroundColor":'white' , "opacity":'85%' ,"borderRadius":'5%' , "padding":'5%'}}>
                    <label style={{ "margin": '50px'  , "fontSize":'150%'}}> Register as a new user</label>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Username</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email Address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            onChange={handleChangeEmail} 
                            value={email}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div id="emailHelp" class="form-text" style={{ "font-size": 'small' }}>*We'll never share your email with anyone else.</div>
                    <button 
                        type="submit" 
                        class="btn btn-primary" 
                        style={{ "margin": '5px' }} 
                        onSubmit={handleFormSubmit}
                        formMethod="POST"

                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </b>


    )
}
