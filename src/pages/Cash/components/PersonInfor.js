import { useState } from 'react';
import '../_cash.css';
import cart_step_1 from "../imgs/cart-step-1.svg";
import TWZipCode from './TWZipCode';

function PersonInfor(props) {

    const {setCurrentPage} = props;


    // multiple State
    const [myInfor, setMyInfor] = useState({
      fullname: "",
      mobile_city:"",
      mobile:"",
      email:"",
      gender:"",
      ID:"",
      birthday:"",
      address:""
    })

    const genderOptions = ['不提供','男','女']; //選性別使用
    const mobileOptions = ['台灣 +886','中國 +86','香港 +852','澳門 +853'];


    // 共用onChange函式
    const handleChange = (e) => {
      setMyInfor({...myInfor, [e.target.name]:e.target.value})
    } 

    const handleSubmit = (e) => {
      // 先阻擋預設送出行為
      e.preventDefault()
  
      // 這裡可以得到目前輸入的值
      // 第一種方式: 從狀態得到
      console.log(myInfor);
  
      // 第二種方式: 用FormData物件
      const formData = new FormData(e.target);
  
      console.log(
        formData.get('fullName'),
        formData.get('email'),
        formData.get('password')
      )
  
      // 作更多驗証
  
      // 送到伺服器(fetch/ajax)

    }




    

    return (
        <>
        <form onSubmit={handleSubmit}>
          <div className="infor-container col col-10">
            
              {/* 流程圖片放這邊 */}
              <div className="cart-flow">
                    <img src={cart_step_1} alt="" />
              </div>

              {/* 填寫資訊放這邊 */}
              <div className='infor-wrap'>
                  <h4>填寫參加人資訊</h4>
                  <p class="caption">報名資料將用於主辦單位安排活動，活動票券相關資訊將寄至訂購人信箱</p>

                  <div className="infor">

                    <div className='infor-left'>
                      <label for="test-text">姓名</label>
                      <input 
                          class="input-text" 
                          name="fullname" 
                          type="text" 
                          id="test-text" 
                          placeholder="請輸入真實姓名"
                          value={myInfor.fullname}
                          onChange={handleChange}
                          />

                      <br />
                      
                      {/* mobileOptions */}
                      <label for="test-text">行動電話</label>
                      <select 
                        name="mobile_city"
                        value={myInfor.mobile_city}
                        onChange={handleChange}>
                        <option value="">請選擇</option> 
                          {mobileOptions.map((v,i)=>{
                          return(
                          <option key={i} value={v}>{v}</option>
                          )
                          })};
                      </select> 
                      
                      <input 
                        class="input-text" 
                        name="mobile" 
                        type="text" 
                        id="test-text" 
                        placeholder="0912 345 678"
                        value={myInfor.mobile}
                        onChange={handleChange}
                        />

                      <br />

                      <label for="test-text">電子信箱</label>
                      <input 
                        class="input-text" 
                        name="email" 
                        type="text" 
                        id="test-text" 
                        placeholder="請輸入電子信箱"
                        value={myInfor.email}
                        onChange={handleChange} 
                        />

                      <br /> 
                                  
                      <div className="gender-group">
                          <label for="test-text">性別</label> 
                          {genderOptions.map((v,i)=>{
                            return(
                            <div key={i} >
                              <input 
                                  name="gender"
                                  type="radio"
                                  checked={myInfor.gender===v}
                                  value={v}
                                  onChange={handleChange} />
                              <label>{v}</label>
                            </div>)
                          })}
                      </div>

                      <label for="test-text">身分證字號</label>
                      <input 
                        class="input-text" 
                        name="ID" 
                        type="text" 
                        id="test-text" 
                        placeholder=""
                        value={myInfor.ID}
                        onChange={handleChange}  
                        />

                    </div>

                    <div className="infor-right">

                      <label for="test-text">出生日期</label>
                      <input class="input-text" name="birthday" type="text" id="test-text" placeholder=""/> 

                      <br />

                      <label for="test-text">地址</label>
                      <TWZipCode/>
                      {/* <input class="input-text address" type="text" id="test-text" placeholder="台灣"/> */}
                      {/* <input class="input-text address" type="text" id="test-text" placeholder="台北市"/> */}
                      {/* <input class="input-text address" type="text" id="test-text" placeholder="選擇區域"/> */}
                      <input 
                        class="input-text address-detail" 
                        name="address" 
                        type="text" 
                        id="test-text" 
                        placeholder="詳細地址"
                        value={myInfor.address}
                        onChange={handleChange}  
                        />


                      <button class="btn-m btn-sec" style={{margin:20+"px"}} type="submit">送出資料</button>
                      <button class="btn-m btn-sec" style={{margin:20+"px"}}>重新填寫</button>
                      <button class="btn-m btn-sec" style={{margin:20+"px"}}
                      onClick={() => setCurrentPage('CreditInfor')}>下一步(</button>
                      <button class="btn-m btn-pri" style={{margin: 20+'px'}}>查看訂單明細</button>
                    </div>

                  </div>
                

              </div>

          </div>

        </form>

        </>
        )
    
    }
export default PersonInfor;
