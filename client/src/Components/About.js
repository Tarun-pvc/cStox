import React from 'react'
import "./About.css"

export default function About() {
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
              <button type="button" class="btn btn-success" style={{"margin": '10px'}}>Log in</button> 
              <button type="button" class="btn btn-primary" style={{"margin": '10px'}}>Register</button>
            </span>
          </div>
        </div>
      </nav>

    <div class="cards">

      <div class="card" style={{"width": '18rem'}}>
        <img src="./chandra.jpeg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Chandra Adhikarla</h5>
          <hr/>
          <p class="card-text"> Frontend </p>
          <a href="https://www.linkedin.com/in/chandra-sai-teja-adhikarla-a88929251/" class="btn btn-outline-success"> LinkedIn </a>
        </div>
      </div>

      <div class="card" style={{"width": '18rem'}}>
        <img src="./sreevallabh.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Sreevallabh Karanam</h5>
          <hr/>
          <p class="card-text">Backend </p>
          <a href="https://www.linkedin.com/in/notryuk/" class="btn btn-outline-success">LinkedIn</a>
        </div>
      </div>

      <div class="card" style={{"width": '18rem'}}>
        <img src="./tarun.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Tarun Patibandla</h5>
          <hr/>
          <p class="card-text"> Design <br/> Frontend</p> 
          <a href="https://www.linkedin.com/in/tarun-patibandla-47987a246/" class="btn btn-outline-success">LinkedIn</a>
        </div>
      </div>

      <div class="card" style={{"width": '18rem'}}>
        <img src="./poojyanth.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Poojyanth Reddy</h5>
          <hr/>
          <p class="card-text">Design <br/> Deployment</p>
          <a href="https://www.linkedin.com/in/poojyanthreddy/" class="btn btn-outline-success">LinkedIn</a>
        </div>
      </div>
    </div>

    </>
  )
}
