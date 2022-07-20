// 使用套件
import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 版面頁面元件
import Layout from './layouts/Layout'

//其他子頁面
import Home from "./pages/Home";
import EventList from "./pages/Event/EventList";
import EventDetail from "./pages/EventDetail/EventDetail"; 
import Cart from "./pages/Cart/Cart"; 


function Main() {

    const [cartNumber, setCartNumber] = useState('');

    return (
        <>

            <BrowserRouter>
                <Routes>

                    <Route path='/' element={<Layout />}>
                        
                         {/* 首頁：index代表此路由中的預設子頁 */}
                        <Route index element={<Home />} /> 





                    </Route>
                </Routes>
            </BrowserRouter>




            {/* 舊的 但要記得cartnumber!!!! */}
            {/* <Nav 
                cartNumber={cartNumber}
                setCartNumber={setCartNumber}
            />
            <BackgroundLight />

            <BrowserRouter>
                <Routes>
                    <Route path="/eventlist" element={<EventList/>} />
                    <Route path="/eventdetail" element={<EventDetail/>} />
                </Routes>
            </BrowserRouter> */}

        </>
    );
}

export default App;
