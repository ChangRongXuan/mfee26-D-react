import React from "react";
import ReactDOM from "react-dom/client"; //才可以做虛擬DOM(ReactVirtualDOM)

import Nav from "./components/Nav";
import Background from "./components/Background";
import EventList from "./components/EventList";

// import 'css'

function App() {
  return(
    <> 
      <Nav/>
      <Background /> 
      <EventList /> 
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
