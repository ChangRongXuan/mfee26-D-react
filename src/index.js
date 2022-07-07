import React from "react";
import ReactDOM from "react-dom/client"; //有引用ReactDOM才可進行render

import Nav from "./components/Nav";
import Background from "./components/Background";
import EventList from "./components/EventList";


function App() {
  return(
    <> 
      <EventList /> 
      <Nav/>
      <Background /> 
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
