import React from "react";
import ReactDOM from "react-dom/client"; //才可以做虛擬DOM(ReactVirtualDOM)

import Nav from "./components/Nav";
// import BackgroundDark from "./components/BackgroundDark";  //暗色主題
import BackgroundLight from "./components/BackgroundLight";  //亮色主題
import EventList from "./components/EventList";


function App() {
  return(
    <> 
      <Nav/>
      <BackgroundLight /> 
      <EventList /> 
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
