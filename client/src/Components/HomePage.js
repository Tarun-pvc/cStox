import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./HomePage.css"

export default function HomePage() {
    const navigate = useNavigate()
    const fadeImages = [
        {
            url: './slideshow_img1.png',
            caption: 'Slide 1'
        },
        {
            url: './slideshow_img2.png',
            caption: 'Slide 2'
        },
        {
            url: './slideshow_img3.png',
            caption: 'Slide 3'
        },
    ];

    const [isChecked, setIsChecked] = React.useState(false);



    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
                <div class="container-fluid">
                    <b><a class="navbar-brand" href="#">cStox.</a></b>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">About Us</a>
                            </li>
                        </ul>


                        <span class="navbar-text">
                            <button 
                                type="button" 
                                class="btn btn-success" 
                                style={{ "margin": '10px' }}
                                onClick={() => navigate("/login")}
                            >
                                Log in
                            </button>
                            <button 
                                type="button" 
                                class="btn btn-success" 
                                style={{ "margin": '10px' }}
                                onClick={() => navigate("/register")}
                            >
                               Sign Up
                            </button>
                        </span>

                    </div>
                </div>
            </nav>


            <div className="slide-container">

                <Fade in={isChecked} style={{ transitionDelay:'100ms'}}>
                

                    {fadeImages.map((fadeImage, index) => (
                        <div className="each-fade" key={index}>
                            <div className="image-container">
                                <img src={fadeImage.url} width="1500px" height="650px" />
                            </div>
                            <div class="text-middle">
                                <h1>Welcome to the<span style={{ "color": 'magenta' }}> cStox</span>  app.
                                    <br /> Register to get started.</h1>

                                <button 
                                    type="button" 
                                    class="btn btn-success"
                                    onClick={() => navigate("/register")}
                                >
                                    <b>Get Started!</b> 
                                </button>

                            </div>
                        </div>
                    ))}
                </Fade>

            </div>





        </>
    )
}
