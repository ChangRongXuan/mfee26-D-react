import React, { useState } from "react";
import ".//../styles/_nav.css";
// const { useState } = React; //從react物件中取出usestate方法(解構賦值)

import nav_logo from "../imgs/nav_logo.svg";
import nav_soul from "../imgs/nav_soul.svg";

const Nav = () => {
    const [lightBox, setLightBox] = useState("lightbox_hidden"); //預設是隱藏

    return (
        <>
            {/* 這邊是光箱 */}
            <div className={lightBox}>
                <div className="wrap">
                    <div
                        className="close"
                        onClick={() => {
                            setLightBox("lightbox_hidden");
                        }}
                    ></div>
                    <p>投放所介紹</p>
                    <p>投胎速報</p>
                    <p>法喜充滿</p>
                    <p>來生形象</p>
                    <p>良辰吉地</p>
                    <p>交流分享</p>
                </div>
            </div>

            <nav className="nav-container">
                <div className="row">
                    <div className="col logo">
                        <img src={nav_logo} alt="" />
                    </div>
                    <div className="col">
                        <img src={nav_soul} alt="" />
                        <i className="fa-solid fa-cart-shopping"></i>
                        <i className="fa-solid fa-user"></i>
                        <i
                            className="fa-solid fa-bars"
                            onClick={() => {
                                setLightBox("lightbox_visible");
                            }}
                        ></i>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
