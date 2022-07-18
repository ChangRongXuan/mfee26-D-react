// 使用套件
import React, {useState} from "react";
import ReactDOM from "react-dom/client"; //才可以做虛擬DOM(ReactVirtualDOM)
// import {
//     BrowserRouter as Router,
//     Route,
//     Routes,
//     Link
// } from "react-router-dom"; 


//頁面用元件
import EventList from "./pages/Event/EventList";
// import EventDetail from "./pages/EventDetail/EventDetail";
// import Cart from "./pages/Cart/Cart";
// import Cash from "./pages/Cash/Cash";
// import EventList from "./pages/Event/EventList";


// 組合用基本元件
import Nav from "./components/Nav";
import BackgroundLight from "./components/BackgroundLight";  //亮色主題
// import BackgroundDark from "./components/BackgroundDark"; //暗色主題


import "@fortawesome/fontawesome-free/css/all.min.css";
// import AppRouter from "./components/AppRouter";


function App() {

    const [cartNumber, setCartNumber] = useState('');

    return (
        <>


            <Nav 
                cartNumber={cartNumber}
                setCartNumber={setCartNumber}
            />
            <BackgroundLight />

            {/* <AppRouter  
                cartNumber={cartNumber} 
                setCartNumber={setCartNumber}/> */}
            
            <EventList />
            {/* <Cash/> */}

            {/* <Cart 
                cartNumber={cartNumber}
                setCartNumber={setCartNumber}
            />  */}

            {/* <EventCart /> */}

        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
