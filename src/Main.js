// 使用套件
import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 版面頁面元件
import Layout from './layouts/Layout'


//頁面用元件
import EventDetail from "./pages/EventDetail/EventDetail"; 
import EventList from "./pages/Event/EventList";

// 組合用基本元件
import Nav from "./components/Nav";
import BackgroundLight from "./components/BackgroundLight";  //亮色主題
// import BackgroundDark from "./components/BackgroundDark"; //暗色主題


import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {

    const [cartNumber, setCartNumber] = useState('');

    return (
        <>


            <Nav 
                cartNumber={cartNumber}
                setCartNumber={setCartNumber}
            />
            <BackgroundLight />

            <BrowserRouter>
                <Routes>
                    <Route path="/eventlist" element={<EventList/>} />
                    <Route path="/eventdetail" element={<EventDetail/>} />
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;
