// 使用套件
import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 版面頁面元件
import Layout from './layouts/Layout'

// Context元件( 會員登入狀況 + 背景變色 )
// import Container from "./layouts/Context/Container";

//其他子頁面
import Home from "./pages/Home";
import Event from "./pages/Event";
import EventList from "./pages/Event/EventList";
import EventDetail from "./pages/EventDetail/EventDetail"; 
import OrderSteps from "./pages/OrderSteps";



function Main() {

    const [cartNumber, setCartNumber] = useState('');

    return (
        <>

            <BrowserRouter>
                {/* <Container> */}
                    <Routes>

                        {/* <Container> */}
                            <Route path='/' element={<Layout />}>
                        
                                {/* 首頁 - 子頁 */}
                                <Route index element={<Home />} />

                                {/* 會員 - 子頁 */}
                                {/* <Route path='/members' element={<LoginForm />} />  */}

                                {/* 活動 - 子頁 */}
                                <Route path='/events' element={<Event />}>
                                    <Route index element={<EventList />} />
                                    <Route path=':eventSid' element={<EventDetail />} />
                                </Route>

                                {/* 購物車 - 子頁 */}
                                <Route 
                                    path='/ordersteps' 
                                    element={<OrderSteps    cartNumber={cartNumber}
                                                            setCartNumber={setCartNumber}
                                />} />

                            </Route>
                        {/* </Container> */}
                    </Routes>
                {/* </Container> */}
            </BrowserRouter>

        </>
    );
}

export default Main;
