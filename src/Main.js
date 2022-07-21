// 使用套件
import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 版面頁面元件
import Layout from './layouts/Layout'

//其他子頁面
import Home from "./pages/Home";
import Event from "./pages/Event";
import EventList from "./pages/Event/EventList";
import EventDetail from "./pages/EventDetail/EventDetail"; 


function Main() {

    const [cartNumber, setCartNumber] = useState('');

    return (
        <>

            <BrowserRouter>
                <Routes>

                    <Route path='/' element={<Layout />}>
                        
                         {/* 首頁 - 子頁 */}
                        <Route index element={<Home />} /> 

                        <Route path='/event' element={<Event />}>
                            <Route index element={<EventList />} />
                            <Route path=':eventSid' element={<EventDetail />} />
                        </Route>



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

export default Main;