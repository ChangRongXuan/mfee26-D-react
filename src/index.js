import React from "react";
import ReactDOM from "react-dom/client"; //有引用ReactDOM才可進行render
// import Background from "./components/Background";
// import App from "./App";
// import Nav from "./components/Nav";
import Weather from "./WeatherApp";

// 沒寫相對路徑 會直接在node module裡找


function App() {
  return(
    <> 
      <Weather/>
      {/* <Nav/> */}
      {/* <Background /> */}
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
