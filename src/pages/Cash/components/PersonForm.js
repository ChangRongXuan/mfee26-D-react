import { useState } from 'react';
import TWZipCode from './TWZipCode';
import '../_cash.css';

function PersonForm(props) {

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
      formData.get('fullName'),
      formData.get('email'),
      formData.get('password'),
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


    //轉成JSON格式方法(先轉obj再轉JSON.stringify) //適用於送少量參數
      // 之前有設top-middle-Ware會協助處理此種格式
    // const dataObj = {};
    // for(let i of fd.entries()){
    //   dataObj[i[0]] = i[1];
    // }
    // console.log(dataObj);  //轉換成物件
    // fetch('http://localhost:3600/cart/personInfor', {
    //   method: 'POST',
    //   body: JSON.stringify(dataObj), //從物件轉成JSON
    //   headers: {
    //     'Content-Type':'application/json'
    //   } 
    // })
    //   .then(r=>r.json())
    //   .then(obj=>{
    //   console.log(obj)
    // })



    // 轉成URLencoded方法(要設contentType不然會視為一般文字) //適用於現有表單不用上傳檔案
    // 之前有設top-middle-Ware會協助處理此種格式
    // const usp = new URLSearchParams(fd);
    // console.log(usp.toString()); //轉換成URLencoded
    // fetch('http://localhost:3600/cart/personInfor', {
    //   method: 'POST',
    //   body: usp.toString(),
    //   headers: {
    //     'Content-Type':'application/x-www-form-urlencoded'
    //   } 
    // })
    //   .then(r=>r.json())
    //   .then(obj=>{
    //   console.log(obj)
    // })



    // 如果Router已有upload功能，可直接用formdata
    // 送到伺服器(fetch/ajax)
    fetch('http://localhost:3600/eventcarts/person', {
      method: 'POST',
      body: fd, //目前送出格式為multiple formdata
    })
      .then(r=>r.json())
      .then(obj=>{
      console.log(obj)
    })
  
  }

  // bootstrap indetermine 


  return (
    <>
      <form onSubmit={handleSubmit}  name="form1" className='personform' >
        <div className='infor-left'>
                      <label htmlFor="test-text">姓名</label>
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
                      <label htmlFor="test-text">行動電話</label>
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

                      <label htmlFor="test-text">電子信箱</label>
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
                          <label htmlFor="test-text">性別</label> 
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

                      <label htmlFor="test-text">身分證字號</label>
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

          <label htmlFor="test-text">出生日期</label>
          <input className="input-text" name="birthday" type="date" id="test-text" placeholder=""/> 

          <br />

          <label htmlFor="test-text">地址</label>
          <TWZipCode/>
          {/* <input class="input-text address" type="text" id="test-text" placeholder="台灣"/> */}
          {/* <input class="input-text address" type="text" id="test-text" placeholder="台北市"/> */}
          {/* <input class="input-text address" type="text" id="test-text" placeholder="選擇區域"/> */}
          <input 
            className="input-text address-detail" 
            name="address" 
            type="textarea" 
            id="test-text" 
            placeholder="詳細地址"
            value={myInfor.address}
            onChange={handleChange}  
            />
            
          <button className="btn-m btn-sec" style={{margin:20+"px"}} type="submit">送出資料</button>
          <button className="btn-m btn-sec" style={{margin:20+"px"}}>重新填寫</button>
          <button className="btn-m btn-sec" style={{margin:20+"px"}}
          onClick={() => setCurrentPage('CreditInfor')}>下一步</button>
          <button className="btn-m btn-pri" style={{margin: 20+'px'}}>查看訂單明細</button>
        </div>
      </form>
    </>
  )
}

export default PersonForm;