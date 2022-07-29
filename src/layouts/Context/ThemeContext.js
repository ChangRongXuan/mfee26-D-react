import React  from "react";

export const themes = {
  
  // 生者模式
  light:{
    name:'light',
    bgc: 'white',
  },

  // 亡者模式
  dark:{
    name:'dark',
    bgc: 'black',
  }
}

const themeContext = React.createContext(themes.light); //()內放預設值

export default themeContext;