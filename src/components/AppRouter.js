// import React from "react";
// // import ReactDOM from "react-dom/client"; //才可以做虛擬DOM(ReactVirtualDOM)

// //處理切換頁面問題
// import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"; 
// import EventList from "../pages/Event/EventList";
// import Cart from "../pages/Cart/Cart";


// function AppRouter(props) {

//   const { cartNumber, setCartNumber } = props; 
//   return(
//     <Router>

//       <Routes>
//           <Route 
//               path="/eventList" 
//               element={<EventList/>}/>
          
//           <Route 
//               path="/cart" 
//               element={<Cart cartNumber={cartNumber}
//               setCartNumber={setCartNumber}/>}/>

//       </Routes>
//   </Router>
//   )
// }

// export default AppRouter;