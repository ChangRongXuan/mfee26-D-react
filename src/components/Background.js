import React from 'react';
import ".//../styles/_background.css";

import bg_left_down from "../imgs/bg-left-down.svg";
import bg_right_top from "../imgs/bg-right-top.svg";



const Background = () => {
    return (
      <div className="view" style={{position: 'relative', zIndex: -100}}>
        <img src={bg_left_down} alt=""  class="bg-left" />
        <img src={bg_right_top} alt=""  class="bg-right" />
      </div>
    );
};


export default Background;
