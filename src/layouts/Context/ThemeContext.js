import React  from "react";

export const themes = {
  dark:{
    name:'dark',
    bgc: 'black',
    fc: 'white',
  },
  light:{
    name:'light',
    bgc: 'white',
    fc: 'black',
  }

}


const themeContext = React.createContext(themes.dark); //()內放預設值
// 目前取得的是dark { } 內的物件

export default themeContext;