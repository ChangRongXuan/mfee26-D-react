import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../styles/_nav.css";

import { BsFillPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

import nav_logo from "../imgs/nav_logo.svg";
import nav_soul from "../imgs/nav_soul.svg";



const Nav = (props) => {

    const [lightBox, setLightBox] = useState("lightbox_hidden"); //預設是隱藏
    
    return (
        <>
            {/* Navbar光箱 */}
            <div className={lightBox}>
                <div className="wrap">
                    <div
                        className="close"
                        onClick={() => {
                            setLightBox("lightbox_hidden");
                        }}
                    ></div>
                    <p>
                        <a href="#/">投放所介紹</a>
                    </p>
                    <p>
                        <a href="#/">投胎速報</a>
                    </p>
                    <p>
                        <Link to="/events">功德撲滿</Link>
                    </p>
                    <p>
                        <a href="#/">來生形象</a>
                    </p>
                    <p>
                        <a href="#/">良辰吉地</a>
                    </p>
                    <p>
                        <a href="#/">交流分享</a>
                    </p>
                </div>
            </div>


            <nav className="nav-container">
                <div className="row">

                    <div className="col logo">
                        <Link to="/">
                            <img src={nav_logo} alt="" />
                        </Link>
                    </div>

                    <div className="col">
                        <img src={nav_soul} alt="" />


                        {/* 購物車icon數字 */}
                    <Link to="/ordersteps">
                        <div className="cart-icon">
                                <FaShoppingCart/>
                                <span>{localStorage.getItem('event_cart_num')}</span>
                        </div>
                    </Link>

                        {/* 會員中心 */}
                    <Link to="/members">
                        <BsFillPersonFill/>
                    </Link>

                        {/* 展開Bar */}
                        <FaBars onClick={() => {
                                setLightBox("lightbox_visible");
                        }}/>
                        
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
