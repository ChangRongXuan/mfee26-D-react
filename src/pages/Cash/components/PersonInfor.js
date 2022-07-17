// import { useState } from 'react';
import '../_cash.css';
import cart_step_1 from "../imgs/cart-step-1.svg";
// import TWZipCode from './TWZipCode';
import PersonForm from './PersonForm';

function PersonInfor(props) {

    const {setCurrentPage} = props;


    // multiple State
    // const [myInfor, setMyInfor] = useState({
    //   fullname: "",
    //   mobile_city:"",
    //   mobile:"",
    //   email:"",
    //   gender:"",
    //   ID:"",
    //   birthday:"",
    //   address:""
    // })

    // const genderOptions = ['不提供','男','女']; //選性別使用
    // const mobileOptions = ['台灣 +886','中國 +86','香港 +852','澳門 +853'];


    // 共用onChange函式
    // const handleChange = (e) => {
    //   setMyInfor({...myInfor, [e.target.name]:e.target.value})
    // } 

    // const handleSubmit = (e) => {
    //   // 先阻擋預設送出行為
    //   e.preventDefault()
  
    //   // 這裡可以得到目前輸入的值
    //   // 第一種方式: 從狀態得到
    //   console.log(myInfor);
  
    //   // 第二種方式: 用FormData物件
    //   const formData = new FormData(e.target);
  
    //   console.log(
    //     formData.get('fullName'),
    //     formData.get('email'),
    //     formData.get('password')
    //   )
  
      // 作更多驗証
  
      // 送到伺服器(fetch/ajax)

    // }



    return (
        <>
          <div className="infor-container col col-10">
            
              {/* 流程圖片放這邊 */}
              <div className="cart-flow">
                    <img src={cart_step_1} alt="" />
              </div>

              {/* 填寫資訊放這邊 */}

              <div className='infor-wrap'>
                  <h4>填寫參加人資訊</h4>
                  <p className="caption">報名資料將用於主辦單位安排活動，活動票券相關資訊將寄至訂購人信箱</p>

                  <div className="infor">

                      <PersonForm setCurrentPage={setCurrentPage}/>

                  </div>
                

              </div>

          </div>


        </>
        )
    
    }
export default PersonInfor;
