import React, { useState } from "react";


import "../../styles/style.css";
import "../../styles/bootstrap-grid.css";
import "./_cart.css";


import OrderList from "./components/OrderList"; //因為是引用index.js所以後可省略
import Summary from "./components/Summary";
import CashA from "./components/CashA";

import products from "./data/products.json"; //為了計算totalPrice金額





// 計算一開始要useState[]裡要有幾個1([1,1,1]), 直接把products(原JSON值)新加count屬性後形成新Array 
const initState = (productArray) => {
    const state = []

    // 每多一項就push一個1進陣列
    for ( let i=0; i< productArray.length; i++){
        state.push({...productArray[i], count:1}) //複製array+多加count屬性進去
    }
    return state;
}






const Cart = (props) => {


    // count是目前購買了幾樣商品
    // 為了要達到不同商品數量(count)分開計，useState內放陣列[]
    const [productsInorder, setProductsInorder] = useState(initState(products)); //紀錄數量初始值，第一樣、第二樣商品逐筆紀錄


    // 計算總數量
    const calcTotalNumber = () => {
        let total = 0;
        for(let i=0;i<productsInorder.length;i++){
            total+=productsInorder[i].count;
            console.log(productsInorder[i].program_type);  //是有辦法顯示出來的
        }

        return total;
    }
    // 計算總金額
    const calcTotalPrice = () => {
        let total = 0;
        for(let i=0;i<productsInorder.length;i++){
            total+=productsInorder[i].count * productsInorder[i].price
        }
        return total
    }

    // 計算「贊助」總數量
    const calcDonateNumber = () => {
        let total = 0;
        for(let i=0;i<productsInorder.length;i++){
            productsInorder[i].program_type === '贊助' ? total+=productsInorder[i].count : total+=0
        }
        return total
    }
    // 計算「贊助」總金額
    const calcDonateTotalPrice = () => {
        let total = 0;
        for(let i=0;i<productsInorder.length;i++){
            productsInorder[i].program_type === '贊助' ? total+=productsInorder[i].count*productsInorder[i].price : total+=0
        }
        return total
    }

    // 計算「志工」總數量
    const calcVolunNumber = () => {
        let total = 0;
        for(let i=0;i<productsInorder.length;i++){
            productsInorder[i].program_type === '志工' ? total+=productsInorder[i].count : total+=0
        }
        return total
    }
    // 計算「志工」總金額
    const calcVolunTotalPrice = () => {
        let total = 0;
        for(let i=0;i<productsInorder.length;i++){
            productsInorder[i].program_type === '志工' ? total+=productsInorder[i].count*productsInorder[i].price : total+=0
        }
        return total;
    }

    // 待處理：Cart沒有在index.js裡面 數字就不會跳出來
    // 購物車 顯示商品總數量 
    const { cartNumber, setCartNumber } = props; 

    if (calcTotalNumber()>0){
        setCartNumber(calcTotalNumber());
    } else{
        setCartNumber('')
    }


    //定義 currentPage 這個 state，預設值是 OrderList
    const [currentPage, setCurrentPage] = useState('OrderList');






    return (
        <div className="cart-container">
            <div className="row">
                


                {currentPage === 'OrderList' && (
                <OrderList 
                    productsInorder={productsInorder} 
                    setProductsInorder={setProductsInorder}  
                    />
                )}

                {currentPage === 'CashA' && (
                    <CashA setCurrentPage={setCurrentPage}/> 
                )}
                
                
                <Summary 
                    totalNumber={calcTotalNumber()} 
                    totalPrice={calcTotalPrice()}
                    donateNumber={calcDonateNumber()}  
                    donatePrice={calcDonateTotalPrice()}
                    volunNumber={calcVolunNumber()} 
                    volunPrice={calcVolunTotalPrice()}
                    setCurrentPage={setCurrentPage}  
                    /> 
                {/* totalPrice先暫時寫300 */}
            </div>
        </div>
    );
};





export default Cart;
