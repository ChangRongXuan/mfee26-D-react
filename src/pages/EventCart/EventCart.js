import React from 'react';
import "../../styles/style.css";
import "./_eventcart.css";

import delete_cross from "./imgs/delete-cross.svg";
import cart_step_1 from "./imgs/cart-step-1.svg";
import scroll_down from "./imgs/scroll-down.svg";



const Cart = () => {
  return (

  <div className="cart-container">

    <div className="row">

    {/* 左側購物清單 */}
      <div className="col col-10">

      {/* 勾選 + 結帳流程圖 */}
        <div className="all-select-delete">
          <input type="checkbox"  id="cbox"/>
          <p className="caption">全選(10)</p>

          <input type="checkbox"  id="cbox"/>
          <p className="caption">全部刪除(10)</p>

          <img src={cart_step_1} alt="" />
        </div>

        {/* 購物車條列放這邊 */}
        <div className="cart-list-window">
          <div className="cart-list-wrap">


              <div className="cart-list">
                <div className='cart-check'><input type="checkbox" id="cbox"/></div>
              
                <div className="cart-img"></div>

                <div className="cart-intro">
                  <div className="cart-intro-title">
                    <span>環境</span>
                    <h5 className="subtitle">流浪狗認養活動</h5>   
                  </div>
                
                  <div className='time-location'>
                    <p>2022/03/18(日)  14:00-15:00</p>
                    <p>新北市新莊體育場</p>
                  </div>
                  
                  <p>流浪動物花園</p>
                </div>

                <div className="cost"> <h5 className="subtitle">NT$500</h5>  </div>
                <div className='delete-cross'><img src={delete_cross} alt="" /></div>
                
              </div>

              <div className="cart-list">
                <div className='cart-check'><input type="checkbox" id="cbox"/></div>
              
                <div className="cart-img"></div>

                <div className="cart-intro">
                  <div className="cart-intro-title">
                    <span>環境</span>
                    <h5 className="subtitle">流浪狗認養活動</h5>   
                  </div>
                
                  <div className='time-location'>
                    <p>2022/03/18(日)  14:00-15:00</p>
                    <p>新北市新莊體育場</p>
                  </div>
                  
                  <p>流浪動物花園</p>
                </div>

                <div className="cost"> <h5 className="subtitle">NT$500</h5>  </div>
                <div className='delete-cross'><img src={delete_cross} alt="" /></div>
                
              </div>

              <div className="cart-list">
                <div className='cart-check'><input type="checkbox" id="cbox"/></div>
              
                <div className="cart-img"></div>

                <div className="cart-intro">
                  <div className="cart-intro-title">
                    <span>環境</span>
                    <h5 className="subtitle">流浪狗認養活動</h5>   
                  </div>
                
                  <div className='time-location'>
                    <p>2022/03/18(日)  14:00-15:00</p>
                    <p>新北市新莊體育場</p>
                  </div>
                  
                  <p>流浪動物花園</p>
                </div>

                <div className="cost"> <h5 className="subtitle">NT$500</h5>  </div>
                <div className='delete-cross'><img src={delete_cross} alt="" /></div>
                
              </div>

              <div className="cart-list">
                <div className='cart-check'><input type="checkbox" id="cbox"/></div>
              
                <div className="cart-img"></div>

                <div className="cart-intro">
                  <div className="cart-intro-title">
                    <span>環境</span>
                    <h5 className="subtitle">流浪狗認養活動</h5>   
                  </div>
                
                  <div className='time-location'>
                    <p>2022/03/18(日)  14:00-15:00</p>
                    <p>新北市新莊體育場</p>
                  </div>
                  
                  <p>流浪動物花園</p>
                </div>

                <div className="cost"> <h5 className="subtitle">NT$500</h5>  </div>
                <div className='delete-cross'><img src={delete_cross} alt="" /></div>
                
              </div>

          </div>
        </div>

        <div className="scroll-down">
          <img src={scroll_down} alt="" />
        </div>

      </div>


    {/* 右側金額明細 */}
      <div className="col col-2">
        
        <div className='good-sum'></div>
        
        <div className="cart-cost">
            <div> 
              <h5 className="subtitle">活動明細</h5> 
            </div>
          

            <div className="donate-cost">
              <p className="caption">贊助</p>
              <h5 className="subtitle">NT$ 500</h5> 
            </div> 

            <div className="volunteer-cost">
              <p className="caption">志工</p>
              <h5 className="subtitle">NT$ 1000</h5> 
            </div> 

            <div className="total-cost">
              <p className="caption">總計 Total</p>
              <h5 className="subtitle">NT$ 1500</h5> 
            </div>

        </div>

        <div className="cart-btn">
          <button className="btn-m btn-pri">繼續選購</button>
          <button className="btn-m btn-pri">前往結帳</button>
        </div>
        
      </div>


    </div>


  </div>
  );

}


export default Cart;