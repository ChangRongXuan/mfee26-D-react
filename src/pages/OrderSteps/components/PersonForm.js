import { useState } from 'react';
import TWZipCode from './TWZipCode';
import "../../../styles/style.css";
import "../../../styles/bootstrap-grid.css";
import '../styles/_cart.css';




function PersonForm(props) {

  const { myInfor, setMyInfor } = props; 


  // 透過localStorage 取得登入會員sid 
  let memberinfor = JSON.parse(localStorage.getItem('auth'));
  const membersid = Object.values(memberinfor)[1] ;


  // multiple State
//   const [myInfor, setMyInfor] = useState({
//   member_sid: `${membersid}`,
//   fullname: "",
//   mobile_city:"",
//   mobile:"",
//   email:"",
//   gender:"",
//   ID:"",
//   birthday:"",
//   address:""
// })


const genderOptions = ['不提供','男','女']; //選性別使用
const mobileOptions = ['台灣 +886','中國 +86','香港 +852','澳門 +853'];


const handleChange = (e) => {
  setMyInfor({...myInfor, [e.target.name]:e.target.value})
} 

const handleSubmit = (e) => {
    
    e.preventDefault() // 先阻擋預設送出行為(預設用GET URLencoded)

    // 這裡可以得到目前輸入的值
    // 第一種方式: 從狀態得到
    console.log(myInfor)

    // 第二種方式: 用FormData物件
    const formData = new FormData(e.target)

    console.log(
      formData.get('member_sid'),
      formData.get('fullname'),
      formData.get('email'),
      formData.get('mobile_city'),
      formData.get('mobile'),
      formData.get('email'),
      formData.get('gender'),
      formData.get('ID'),
      formData.get('birthday'),
      formData.get('address')
    )

    // 作更多驗証
    const fd = new FormData(document.form1); //建立一個formdata

    // 如果Router已有upload功能，可直接用formdata
    // 送到伺服器(fetch/ajax)
    fetch('http://localhost:3600/eventcarts/person', {
      method: 'POST',
      body: fd, //目前送出格式為multiple formdata
    })
      .then(r=>r.json())
      .then(obj=>{
      console.log('收到的res',obj);
    })
  
  }

  return (
    <>
      <div className="col col-10">
        <div className='person-infor-window'>
          <div className='person-infor-title'>

            <div className='title-left'>
              <h4>填寫參加人資訊</h4>
              <p className="caption">報名資料將用於主辦單位安排活動，活動票券相關資訊將寄至訂購人信箱</p>
            </div>
        
            <button className="btn-m btn-pri" style={{margin: 20+'px'}}>查看訂單明細</button>

          </div>

        
        

          <form onSubmit={handleSubmit} name="form1" className='personform'>

            <div className='infor-left'>

                        {/* 從localStorage獲得membersid，設一個隱藏欄位進fd一起送 */}
                          <input style={{display: "none"}}
                              className="input-text" 
                              name="member_sid" 
                              type="text" 
                              id="test-text" 
                              defaultValue={membersid}
                              />

                          <label htmlFor="test-text">姓名：</label>
                          <input 
                              className="input-text" 
                              name="fullname" 
                              type="text" 
                              id="test-text" 
                              placeholder="請輸入真實姓名"
                              value={myInfor.fullname}
                              onChange={handleChange}
                              />

                          <br />
                          
                          {/* mobileOptions */}
                          <label htmlFor="test-text">行動電話：</label>
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
                            className="input-text" 
                            name="mobile" 
                            type="text" 
                            id="test-text" 
                            placeholder="0912 345 678"
                            value={myInfor.mobile}
                            onChange={handleChange}
                            />

                          <br />

                          <label htmlFor="test-text">電子信箱：</label>
                          <input 
                            className="input-text" 
                            name="email" 
                            type="text" 
                            id="test-text" 
                            placeholder="請輸入電子信箱"
                            value={myInfor.email}
                            onChange={handleChange} 
                            />

                          <br /> 
                                      
                          <div className="gender-group">
                              <label htmlFor="test-text">性別：</label> 

                              {genderOptions.map((v,i)=>{
                                return(
                                <div key={i}  >
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

                          <label htmlFor="test-text">身分證字號：</label>
                          <input 
                            className="input-text" 
                            name="ID" 
                            type="text" 
                            id="test-text" 
                            placeholder=""
                            value={myInfor.ID}
                            onChange={handleChange}  
                            />

            </div>

            <div className="infor-right">
                <label htmlFor="test-text">出生日期：</label>
                <input className="input-text" name="birthday" type="date" id="test-text" placeholder=""/> 

                <br />

                <label htmlFor="test-text">地址：</label>
                  <TWZipCode/>
                <input className="input-text address-detail" name="address" 
                  type="textarea" id="test-text" placeholder="詳細地址" value={myInfor.address}
                  onChange={handleChange}  />
                  

                <button className="btn-m btn-sec" style={{margin:20+"px"}} type="submit">送出資料</button>
                <button className="btn-m btn-sec" style={{margin:20+"px"}}>重新填寫</button>
            </div>

          </form>

        </div>
      </div>
    </>
  )
}

export default PersonForm;