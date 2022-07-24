
import cart_step_1 from "../../imgs/cart-step-1.svg";  //先暫時用老師的
import scroll_down from "../../imgs/scroll-down.svg";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


import EventItem from "./EventItem";


function OrderList(props) {

    // const { productsInorder, setProductsInorder, eventCart, setEventCart } = props //從Cart.js裡傳來的props
    const { eventCart, setEventCart } = props //從Cart.js裡傳來的props


    return (
        <>
            {/* 左側購物清單 */}
            <div className="col col-10">
                {/* 勾選 + 結帳流程圖 */}
                <div className="all-select-delete">
                    <input type="checkbox" id="cbox" />
                    <p className="caption">全選({eventCart.length})</p>

                    <input type="checkbox" id="cbox" />
                    <p className="caption">清空({eventCart.length})</p>

                    {/* <img src={cart_step_1} alt="" /> */}
                </div>



            <SimpleBar style={{ maxHeight: 400, maxWidth:1000 }}>
            
                {/* 購物車條列放這邊 */}
                <div className="cart-list-window">
                    <div className="cart-list-wrap">

                    {/* products來自於JSON檔案 */}
                    {eventCart.map((v,i)=>{


                        return (
                    
                        <EventItem  
                            
                            key = {v.sid} 
                            {...v}

                            setCount = {(newCount)=>{
                                // 處理Array資料三步驟


                                // 1.從目前的狀態拷貝出一個新的變數值(Array/Object)
                                //const newEventCart = [...eventCart]; //[1,1]等不同商品金額array
                                
                                // 因為是陣列裡的物件所以要用map(?????)，原本的JSON檔就不是嗎?
                                const newEventCart = eventCart.map((v2,i2)=>{
                                    if (i2 === i){ 
                                         return { ...v2, count: newCount <1 ? 1: newCount} //點到哪列，該列count才會跳，其他列不被影響
                                    }
                                    return v2;
                                });
                                
                                
                                // 2.在新的變數值(Array/Object)上做處理
                                // 限制最少買一件
                                // newProductsInorder[i]=newCount<1 ? 1: newCount //更改array中該筆項目數量
                                
                                

                                // 3.設定回原本的狀態中
                                
                                setEventCart(newEventCart)  //新array取代舊array
                            }}


                            // 刪除功能
                            removeItem={()=>{
                                const newEventCart = eventCart.filter((v2,i2) => {
                                    return v.id !== v2.id
                                });
                                setEventCart(newEventCart);
                            }}

                            />
                        )

                        
                    })}

                    </div>
                </div>
            </SimpleBar>

            </div>
        </>
    );
}





export default OrderList;
