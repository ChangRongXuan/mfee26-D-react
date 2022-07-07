import React from 'react';
import ".//../styles/_background.css";

import bg_left_down from "../imgs/bg-left-down.svg";
import bg_right_top from "../imgs/bg-right-top.svg";
import bg_right_star from "../imgs/bg-right-star.svg";
import bg_left_star from "../imgs/bg-left-star.svg";
import bg_elf from "../imgs/elf.svg";


const Background = () => {
    return (
      <div className="view" style={{position: 'relative', zIndex: -100}}>
        <img src={bg_left_down} alt=""  class="bg-left-wave" />
        <img src={bg_right_top} alt=""  class="bg-right-wave" />
        <img src={bg_left_star} alt=""  class="bg-left-star" />
        <img src={bg_right_star} alt=""  class="bg-right-star" />
        <img src={bg_elf} alt=""  class="bg-elf" />
      </div>
    );
};


export default Background;
