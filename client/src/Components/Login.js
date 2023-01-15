import { useEffect, useState } from 'react'
import "./Login.css"

export default function Login() {

    const [text, setText] = useState("W")
    const [fullText, setFullText] = useState("elcome Back...")
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
                <video src="Login_Background.mp4" autoPlay loop muted></video>
                <h1 id="welcome-text" style={{ "z-index": '1', "color": 'white', "opacity": '85%', "fontSize": '400%', "position": 'relative', "right": '20%' ,"border":'None'}}>{text}</h1>
                
            </div>

            <div id="expand-on-small" class="right_section">
                <form 
                    style={{"backgroundColor":'white' , "opacity":'85%' ,"borderRadius":'5%' , "padding":'5%'}}
                    action="/singIn"
                    method='post'
                >
                    <h2 style={{ "font-family": 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}>login.</h2>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>  
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" name='password' class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div id="emailHelp" class="form-text" style={{ "font-size": 'small' }}>*We'll never share your email with anyone else.</div>
                    <input 
                        type="submit" 
                        class="btn btn-primary" 
                        style={{ "margin": '5px' }}
                        
                    >
                        Submit
                    </input>
                </form>
            </div>
        </b>
    )
}
