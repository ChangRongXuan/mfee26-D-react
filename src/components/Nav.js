import React from 'react';
import ".//../styles/_nav.css";

import nav_logo from "../imgs/nav_logo.svg";
import nav_soul from "../imgs/nav_soul.svg";


const Nav = () => {
    return (
        <nav className="nav-container">
            <div className="row">
                <div className="col">
                    <img src={nav_logo} alt="" />
                </div>
                <div className="col" >
                    <img src={nav_soul} alt="" />
                    <i className="fa-solid fa-cart-shopping"></i> 
                    <i className="fa-solid fa-user"></i>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </nav>
    );
};


export default Nav;
