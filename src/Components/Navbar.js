import React from 'react'
import ReactDOM from 'react';
import './css/Navbar.css';
import Vectorlogo from '../image_resources/Vector.png';

export default function Navbar() {
    return (
        <nav id="main-nav">
            <div className="container">
                <h2 id="page-header">
                    <img src={Vectorlogo} className="logo" />
                </h2>
                <ul>
                    <li>
                        <a href="Login.js">Login</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
}