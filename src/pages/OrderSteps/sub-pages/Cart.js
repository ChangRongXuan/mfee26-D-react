import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../../styles/style.css";
import "../../../styles/bootstrap-grid.css";
import "../styles/_cart.css";

import OrderList from "../components/OrderList"; //因為是引用index.js所以後可省略
import Summary from "../components/Summary";


// 一個公式finction
// 計算一開始要useState[]裡要有幾個1([1,1,1])
const initState = (eventArray) => {
    const state = []
      // 每多一項就push一個1進陣列
    for ( let i=0; i< eventArray.length; i++){
          state.push({...eventArray[i], count:1}) //複製array+多加count屬性進去
    }
    return state;
    }





const Cart = (props) => {

    // 透過localStorage 取得登入會員sid 
    let memberinfor = JSON.parse(localStorage.getItem('auth'));
    let membersid = Object.values(memberinfor)[1] ;

    // 一進購物車頁面就跟MySQL拿購物車資訊(取得JSON)
    const  fetchEventShowCart = async () => {
        const events =await axios.get(`http://localhost:3600/eventcarts/showcart?member_sid=${membersid}`);
        setEventCart(initState(events.data));
    }

    // 避免無窮迴圈(DidMount)
    useEffect(() => {
    fetchEventShowCart();
    }, [])



    const [eventCart, setEventCart] = useState([]); 

            // 計算總數量
            const calcTotalNumber = () => {
                let total = 0;
                for(let i=0;i<eventCart.length;i++){
                    total+=eventCart[i].count;
                }

                return total;
            }
            // 計算總金額
            const calcTotalPrice = () => {
                let total = 0;
                for(let i=0;i<eventCart.length;i++){
                    total+=eventCart[i].count * eventCart[i].price
                }
                return total
            }

            // 計算「贊助」總數量(活動限定報名1次)
            const calcDonateNumber = () => {
                let total = 0;
                for(let i=0;i<eventCart.length;i++){
                    eventCart[i].program_type === '贊助' ? total+=eventCart[i].count : total+=0
                }
                return total
            }
            // 計算「贊助」總金額
            const calcDonateTotalPrice = () => {
                let total = 0;
                for(let i=0;i<eventCart.length;i++){
                    eventCart[i].program_type === '贊助' ? total+=eventCart[i].count*eventCart[i].price : total+=0
                }
                return total
            }

            // 計算「志工」總數量 (活動限定報名1次)
            const calcVolunNumber = () => {
                let total = 0;
                for(let i=0;i<eventCart.length;i++){
                    eventCart[i].program_type === '志工' ? total+=eventCart[i].count : total+=0
                }
                return total
            }
            // 計算「志工」總金額
            const calcVolunTotalPrice = () => {
                let total = 0;
                for(let i=0;i<eventCart.length;i++){
                    eventCart[i].program_type === '志工' ? total+=eventCart[i].count*eventCart[i].price : total+=0
                }
                return total;
            }


    //定義 currentPage 這個 state，預設值是 OrderList
    // const [currentPage, setCurrentPage] = useState('OrderList');

    // 待處理：Cart沒有在index.js裡面 數字就不會跳出來
    // 購物車 顯示商品總數量 
    const { cartNumber, setCartNumber, eventPick, setEventPick  } = props; 

    if (calcTotalNumber()>0){
    setCartNumber(calcTotalNumber());
    localStorage.setItem('event_cart_num',calcTotalNumber());
    } else{
    setCartNumber('')
    }



return (
    <>
        <div className="cart-container">
            <div className="row">
            
                <OrderList 
                    eventCart={eventCart}
                    setEventCart={setEventCart}
                    totalNumber={calcTotalNumber()} 
                    donateNumber={calcDonateNumber()}  
                    volunNumber={calcVolunNumber()} 
                    eventPick={eventPick}
                    setEventPick={setEventPick}
                    />
            
                <Summary 
                    totalNumber={calcTotalNumber()} 
                    totalPrice={calcTotalPrice()}
                    donateNumber={calcDonateNumber()}  
                    donatePrice={calcDonateTotalPrice()}
                    volunNumber={calcVolunNumber()} 
                    volunPrice={calcVolunTotalPrice()}
                    /> 
                
            </div>
        </div>
    </>
    )
}

export default Cart