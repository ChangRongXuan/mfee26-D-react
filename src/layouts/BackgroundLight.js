import React from "react";
import "./../styles/_backgroundLight.css";

import bg_L_left_top from "../imgs/bg-L-left-top.svg";
import bg_L_right_top from "../imgs/bg-L-right-top.svg";
import bg_L_right_bottom from "../imgs/bg-L-right-bottom.svg";
import bg_elf from "../imgs/elf.svg";

const Background = () => {
    return (
        <>
            <img src={bg_L_left_top} alt="" className="bg-L-left-top" />
            <img src={bg_L_right_top} alt="" className="bg-L-right-top" />
            <img src={bg_L_right_bottom} alt="" className="bg-L-right-bottom" />
            <img src={bg_elf} alt="" className="bg-elf" />
        </>
    );
};

export default Background;
