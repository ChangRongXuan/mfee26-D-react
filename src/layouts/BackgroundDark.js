import React from 'react';
import "./../styles/_backgroundDark.css";


import bg_D_left_down from "../imgs/bg-D-left-down.svg";
import bg_D_right_top from "../imgs/bg-D-right-top.svg";
import bg_D_right_star from "../imgs/bg-D-right-star.svg";
import bg_D_left_star from "../imgs/bg-D-left-star.svg";
import bg_elf from "../imgs/elf.svg";


const Background = () => {
    return (
      <>
        <img src={bg_D_left_down} alt=""  className="bg-D-left-wave" />
        <img src={bg_D_right_top} alt=""  className="bg-D-right-wave" />
        <img src={bg_D_left_star} alt=""  className="bg-D-left-star" />
        <img src={bg_D_right_star} alt=""  className="bg-D-right-star" />
        <img src={bg_elf} alt=""  className="bg-elf" />
      </>
    );
};


export default Background;
