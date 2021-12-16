
import React, { Component } from 'react'
import ReactDOM from 'react';
import './css/Navbar.css';
import Vectorlogo from '../image_resources/Vector.png';
import Login from './Login';
import { useHistory } from 'react-router-dom';





class Navbar extends React.Component {
    // let RouteChange = () => {
    //     let path = './Login.js';
    //     let history = useHistory();
    //     history.push(path);
    // }
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(value) {
        this.props.history.push('/Login.js');
    }

    render() {
        return (

            <nav id="main-nav" >
                <div className="container">
                    <h2 id="page-header">
                        <img src={Vectorlogo} className="logo" />
                    </h2>
                    <ul>
                        <li>
                            <button type="button" onClick={this.handleClick}>Login</button>

                        </li>
                    </ul>
                </div>
            </nav>


        );
    }
}
export default Navbar;





