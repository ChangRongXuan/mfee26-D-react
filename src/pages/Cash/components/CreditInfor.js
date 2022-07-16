import '../_cash.css';
import cart_step_1 from "../imgs/cart-step-1.svg";



function CreditInfor(props) {

  const {setCurrentPage} = props;

    return (
        <>
          <div className="infor-container col col-10">
            
              {/* 流程圖片放這邊 */}
              <div className="cart-flow">
                    <img src={cart_step_1} alt="" />
              </div>

              {/* 填寫資訊放這邊 */}
              <div className='infor-wrap'>
                  <h4>開立發票(參加者可選擇二聯式或三聯式發票)</h4> 
                  {/* 二聯式 / 三聯式 / 不開立 */}

                  <div className="infor">

                    {/* value="input裡的值"; onChange=value是否有被更動 */}
                    <div className='infor-left'>
                      <label for="test-text">姓名</label>
                      <input class="input-text" type="text" id="test-text" placeholder="輸入真實姓名" />

                      <br />
                      
                      <label for="test-text">行動電話</label>
                      
                      <input class="input-text" type="text" id="test-text" placeholder="0912 345 678"/>

                      <br />

                      <label for="test-text">電子信箱</label>
                      <input class="input-text" type="text" id="test-text" placeholder="請輸入電子信箱"/>
                    

                    </div>

                    <div className="infor-right">
                      <label for="test-text">地址</label> <br />
                      <input class="input-text address" type="text" id="test-text" placeholder="台灣"/>
                      <input class="input-text address" type="text" id="test-text" placeholder="台北市"/>
                      <input class="input-text address" type="text" id="test-text" placeholder="選擇區域"/>
                      <input class="input-text address-detail" type="text" id="test-text" placeholder="詳細地址"/>


                      <button class="btn-m btn-sec" style={{margin:20+"px"}}>重新填寫</button>
                      <button class="btn-m btn-sec" style={{margin:20+"px"}}
                      onClick={() => setCurrentPage('PersonInfor')}>上一步</button>
                      <button class="btn-m btn-pri" style={{margin: 20+'px'}}>查看訂單明細</button>
                    </div>

                  </div>
                

              </div>

          </div>



        </>
        )
    
    }
export default CreditInfor;
