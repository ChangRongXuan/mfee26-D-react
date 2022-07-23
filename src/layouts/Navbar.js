import React, { useState } from "react";
import "../styles/_nav.css";

import { BsFillPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

// import AppRouter from "./AppRouter";

import nav_logo from "../imgs/nav_logo.svg";
import nav_soul from "../imgs/nav_soul.svg";
// import { Link } from "react-router-dom";

const Nav = (props) => {

    const [lightBox, setLightBox] = useState("lightbox_hidden"); //預設是隱藏
    // const { cartNumber, setCartNumber } = props; //購物車數字props
    
    return (
        <>
            {/* 這邊是Navbar光箱 */}
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
                        {/* <Link to="/eventlist">功德撲滿</Link> */}
                        <a href="#/">功德撲滿</a>
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

            {/* <AppRouter cartNumber={cartNumber} setCartNumber={setCartNumber} /> */}

            <nav className="nav-container">
                <div className="row">
                    <div className="col logo">
                        <img src={nav_logo} alt="" />
                    </div>

                    <div className="col"y>
                        <img src={nav_soul} alt="" />

                        {/* 這邊處理購物車icon跳數字 */}
                        <div className="cart-icon">
                            {/* <Link to="/cart"> */}
                                <FaShoppingCart/>
                                {/* <i className="fa-solid fa-cart-shopping"></i> */}
                                {/* <span>{cartNumber}</span> */}
                                <span>{localStorage.getItem('event_cart_num')}</span>
                            {/* </Link> */}
                        </div>

                        <BsFillPersonFill/>

                        <FaBars onClick={() => {
                                setLightBox("lightbox_visible");
                            }}/>
                        {/* <i
                            className="fa-solid fa-bars"
                            onClick={() => {
                                setLightBox("lightbox_visible");
                            }}
                        ></i> */}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
