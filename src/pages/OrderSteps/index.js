import { useState } from 'react';
import { useNavigate } from "react-router-dom";


// 子頁面(區域)
import Cart from './sub-pages/Cart'; //購物車明細
import Shipping from './sub-pages/Shipping'; //填寫地址姓名
import Payment from './sub-pages/Payment'; //信用卡付款
import OrderDetail from './sub-pages/OrderDetail';  //已付款清單

// 進度條
import ProgressBar from './components/ProgressBar';



function OrderSteps(props) {


    // 透過localStorage 取得登入會員sid 
    let memberinfor = JSON.parse(localStorage.getItem('auth'));
    let membersid = Object.values(memberinfor)[1] ;

    //取得 勾選要結帳的清單array
    const [ eventPick, setEventPick ] = useState([]); 

    //按下「下一步」後在MySQL建立一個新的訂單(綜合體)
    const fetCreateOrder =  async() =>{
      fetch('http://localhost:3600/eventcarts/addorder' ,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: `event_order_detail=${eventPick}&member_sid=${membersid}`
        })
        .then(r=>r.json())
        .then(obj=>{
        console.log(obj)
        })
      }; 
      


    // multiple State  填寫報名活動資訊變數(放最上層，按上下頁時資料才會保留)
    const [myInfor, setMyInfor] = useState({
      member_sid: `${membersid}`,
      fullname: "",
      mobile_city:"",
      mobile:"",
      email:"",
      gender:"",
      ID:"",
      birthday:"",
      address:""
  })




    const navigate = useNavigate(); 

    const { cartNumber, setCartNumber } = props; //購物車數字props

    const maxSteps = 4
    const [step, setStep] = useState(1)
    const [errors, setErrors] = useState([])
    const [cartData, setCartData] = useState([])
    const [shipping, setShippingData] = useState({
      name: '',
      address: '',
      phone: '',
    })

    // 動態元件語法
    const components = [Cart, Shipping, Payment, OrderDetail]
    const BlockComponent = components[step - 1]

    // 進度條使用
    const progressNames = ['購物車', '訂購人資訊', '付款', '報名完成']

    // 上一步 下一步按鈕
    const next = () => {
      // 運送表單用檢查
      if (step === 2) {
        const { name, address, phone } = shipping

        // 有錯誤訊息會跳出警告，不會到"下一步"
        const errors = []

        // if (!name) errors.push('姓名沒填~ ')

        // if (!address) errors.push('住址沒填~ ')

        // if (!phone) errors.push('電話沒填~ ')

        if (errors.length > 0) {
          alert(errors.join(','))
          return
        }
      }

      // 沒錯誤才會到下一步
      if (step < maxSteps) setStep(step + 1)
    }

    // 上一步按鈕
    const prev = () => {
      if (step > 1) setStep(step - 1)
    }



  return (
    <>
      {/* <h1>訂購流程</h1> */}
      
      {/* 進度條 */}
      <div>
        <ProgressBar
          maxSteps={maxSteps}
          step={step}
          progressNames={progressNames}
        />
      </div>
      
      {/* 子頁面區域 */}
      <div className='order-steps'>
        <BlockComponent
          shipping={shipping}
          setShippingData={setShippingData}
          cartNumber={cartNumber}
          setCartNumber={setCartNumber}
          eventPick={eventPick}
          setEventPick={setEventPick}
          myInfor={myInfor}
          setMyInfor={setMyInfor}
        />
      </div>

      {/* 按鈕 */}
      <div className='cart-btn'>

        { step===1 ? (
          <button 
            className="btn-m btn-pri" 
            onClick={()=>{navigate('/events', {replace: true})}
        } >繼續選購</button>
        ):(
          <button 
            className="btn-m btn-pri" 
            onClick={prev} 
            disabled={step === 1}>
            上一步
          </button>
        ) }
      

        
        { step===3 ? (

        //填寫完付款資訊後，才會把資訊送進MySQL
        
        <button className="btn-m btn-pri" disabled={step === maxSteps} onClick={()=>{
            next() //進到下一階段
            fetCreateOrder() //把勾選項目存進MySQL
        }}>
          下一步
        </button>
        ):(

        <button className="btn-m btn-pri" disabled={step === maxSteps} onClick={()=>{
            next() //進到下一階段 
        }}>
          下一步
        </button>
        )}
      </div>
    </>
  )
}

export default OrderSteps