import '../_cash.css';
import { useState } from 'react';
import cart_step_1 from "../imgs/cart-step-1.svg";
import CreditApp from "./CreditApp";


function CreditInfor(props) {


  // multiple State
  const [myInfor, setMyInfor] = useState({
    bill:'',
    cardnum:'',
    cardname:'',
    datevalid:'',
    CVC:''
  })

  const billOptions = ['二聯式','三聯式','不開立']; //選發票使用

  const handleChange = (e) => {
    setMyInfor({...myInfor, [e.target.name]:e.target.value})
  } 

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
                  {billOptions.map((v,i)=>{
                            return(
                            <div key={i} >
                              <input 
                                  name="bill"
                                  type="radio"
                                  checked={myInfor.gender===v}
                                  value={v}
                                  onChange={handleChange} />
                              <label>{v}</label>
                            </div>)
                          })}

                  <div className="infor">
                    <CreditApp />

                    <button className="btn-m btn-sec" style={{margin:20+"px"}} type="submit">送出資料</button>
                    <button className="btn-m btn-sec" style={{margin:20+"px"}}>重新填寫</button>
                    <button className="btn-m btn-sec" style={{margin:20+"px"}}
                    onClick={() => setCurrentPage('PersonInfor')}>上一步</button>
                    <button className="btn-m btn-pri" style={{margin: 20+'px'}}>查看訂單明細</button>
                  </div>
                

              </div>

          </div>



        </>
        )
    
    }
export default CreditInfor;
