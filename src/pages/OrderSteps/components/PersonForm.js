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
const mobileOptions = ['台灣 +886','中國 +86','香港 +852','澳門 +853',"Malaysia +60", "Singapore +65", "日本 +81", "South Korea +82"
,"United States +1", "Canada +1", "Thailand +66", "Philippines +63", "Vietnam +84", "Indonesia +62", "Afghanistan +93", "Albania +355", "Algeria +213", "Andorra +376", "Angola +244", "Argentina +54", "Armenia +374", "Aruba +297", "Ascension +247", "Australia +61", "Austria +43"]; //電話區域代碼


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


  // 此段處理表單驗證/錯誤訊息
  // 紀錄表單每個欄位有錯誤時的訊息
  const [ inputErrors, setInputErrors] = useState({
    fullname: "",
    mobile_city:"", //select
    mobile:"",
    email:"",
    gender:"",
    ID:"",
    birthday:"",
    add_city: "", //select
    add_town: "", //select
    address:""
  })

  // 表單用，有錯誤驗證時會觸發
  const handleInvalid = (e) =>{
    e.preventDefault(); //阻擋HTML5原生錯誤訊息

    // 把原生泡泡訊息改放console
    console.log(e.target.validationMessage);

    // 把原生錯誤泡泡訊息填入
    setInputErrors({
      ...inputErrors,
      [e.target.name]: e.target.validationMessage,
    })

  }

  // 當使用者重新輸入時，先把錯誤訊息拿掉
  // 等填完按下sunmit後再檢查一次
  const handleFormChange = (e) =>{
    setInputErrors({
      ...inputErrors,
      [e.target.name]: "",
    })

  }


  // <input class="input-text error" type="text" id="test-error" placeholder="輸入文字">
  // 公版錯誤訊息的 Input 差別在於 input-text error  id="test-error"




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

        
        
          {/* 當表單input有錯誤時，就會觸發 onInvalid 事件 */}
          <form 
            onSubmit={handleSubmit} 
            onInvalid={handleInvalid} 
            onChange={handleFormChange}
            name="form1" 
            className='personform'>

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
                              required
                              />

                          <br />
                          <span className="error-text">{inputErrors.fullname}</span>
                          <br />
                          
                          {/* mobileOptions */}
                          <label htmlFor="test-text">行動電話：</label>

                          <select 
                            value={myInfor.mobile_city}
                            name="mobile_city"
                            onChange={handleChange} 
                            required
                            >
                            <option value="">請選擇</option> 

                              {mobileOptions.map((v,i)=>{
                              return(
                              <option key={i} value={v} >{v}</option>
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
                            required
                            />

                          <br />
                          <span className="error-text">{inputErrors.mobile_city}</span>
                          <span className="error-text">{inputErrors.mobile}</span>
                          <br />

                          <label htmlFor="test-text">電子信箱：</label>
                          
                          {/* 此處有bug，type要是email才有檢查，但CSS會跑掉 */}
                          <input 
                            className="input-text" 
                            name="email" 
                            type="email" 
                            id="test-text" 
                            placeholder="請輸入電子信箱"
                            value={myInfor.email}
                            onChange={handleChange} 
                            required
                            />

                          <br /> 
                          <span className="error-text">{inputErrors.email}</span>
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
                                      onChange={handleChange}
                                      required />
                                  <label>{v}</label>
                                </div>)
                              })}

                            <br />
                            <span className="error-text">{inputErrors.gender}</span>
                            
                          </div>


            </div>

            <div className="infor-right">

                
                <label htmlFor="test-text">身分證字號：</label>
                  <input 
                    className="input-text" 
                    name="ID" 
                    type="text" 
                    id="test-text" 
                    placeholder=""
                    value={myInfor.ID}
                    onChange={handleChange} 
                    required 
                    />

                <br />
                <span className="error-text">{inputErrors.ID}</span>
                <br />


                <label htmlFor="test-text">出生日期：</label>
                <input className="input-text" name="birthday" type="date" id="test-text" placeholder="" required/> 
                
                <br />
                <span className="error-text">{inputErrors.birthday}</span>
                <br />

                <label htmlFor="test-text">地址：</label>
                  <TWZipCode/>
                <br />

                <input 
                  className="input-text address-detail" 
                  name="address" 
                  type="text" 
                  id="test-text" 
                  placeholder="詳細地址" 
                  value={myInfor.address}
                  onChange={handleChange}
                  required  />

                <br />
                <span className="error-text">{inputErrors.address}</span>
                <br />
                  

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