// 使用套件
import React, {useState} from "react";


//頁面用元件
// import EventList from "./pages/Event/EventList";


// 組合用基本元件
import Nav from "./components/Nav";
import BackgroundLight from "./components/BackgroundLight";  //亮色主題
// import BackgroundDark from "./components/BackgroundDark"; //暗色主題


import TestEvent from "./pages/Event/TestEvent";

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

            {/* <AppRouter  
                cartNumber={cartNumber} 
                setCartNumber={setCartNumber}/> */}
            
            <TestEvent/>

            {/* <EventList /> */}
            {/* <Cash/> */}

            {/* <Cart 
                cartNumber={cartNumber}
                setCartNumber={setCartNumber}
            />  */}

            {/* <EventCart /> */}

        </>
    );
}

export default App;
