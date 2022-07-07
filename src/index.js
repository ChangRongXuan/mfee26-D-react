import React from "react";
import ReactDOM from "react-dom/client"; //有引用ReactDOM才可進行render

import Background from "./components/Background";
import Nav from "./components/Nav";


function App() {
  return(
    <> 
      <Nav/>
      <Background /> 
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
