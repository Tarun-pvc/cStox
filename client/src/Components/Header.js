import React from 'react';
import "./Header.css";

export default function Header() {
    const navigate = useNavigate()
    return (
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div>
                        <a class="navbar-brand" href="#"><img src='./Bull.png' height="50"/></a>
                    </div>
                    <div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">NSE</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">BSE</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Companies
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><span class="dropdown-item"><Chart company={"ASHOKLEY"} /></span></li>
                                        <li><span class="dropdown-item"><Chart company={"CIPLA"} /></span></li>
                                        <li><span class="dropdown-item"><Chart company={"EICHERMOT"} /></span></li>
                                        <li><span class="dropdown-item"><Chart company={"RELIANCE"} /></span></li>
                                        <li><span class="dropdown-item"><Chart company={"TATASTEEL"} /></span></li>
                                    </ul>
                                </li>
                                <li><button type="button" class="btn btn-success" onClick={() => navigate("/")}>Log Out</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
    )
}
