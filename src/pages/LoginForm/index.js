// // 這是測試會員登入頁面，目前是壞掉的Q___Q 無法跟 nodeJS 串接 
// // localStorage.setItem('auth', JSON.stringify(result.data)) 把登入後回傳的資料存進localstorage

// import React, { useState } from 'react'; 
// import './_loginform.css';
// import { LOGIN_API } from '../../config/ajax-path';

// export default function LoginForm(){

//   const [myform, setMyform] = useState({
//     account: "",
//     password: "",
//   });

//   const changeFields = (event) => {
//     const id = event.target.id;
//     const val = event.target.value;
//     console.log({ id, val });
//     setMyform({ ...myform, [id]: val });
//   };

//   const whenSubmit = (event) => {
//     event.preventDefault();
//     console.log(myform);
    
//     fetch(LOGIN_API, {
//       method: "POST",
//       body: JSON.stringify(myform), //把表格資料轉成JSON丟出去
//       headers: {
//           "Content-Type": "application/json",
//       },
//   })
//       .then((r) => r.json())
//       .then((result) => {
//           console.log(result);
//           if(result.success){
//               localStorage.setItem('auth', JSON.stringify(result.data));

//           } else {
//               alert('帳密錯誤');
//           }
//       });
//   }

//   return(
//     <>

//     <form name="form1" onSubmit={whenSubmit}>
//       <div className='login-wrap'>
//         <label htmlFor="account">帳號</label>
//         <input 
//           className="input-text" 
//           type="text" 
//           id="account" 
//           name="account" 
//           placeholder="輸入帳號"
//           value={myform.account}
//           onChange={changeFields}
//           ></input>

//         <br />

//         <label htmlFor="password">密碼</label>
//         <input 
//           className="input-text" 
//           type="text" 
//           id="password" 
//           name="password" 
//           placeholder="輸入密碼"
//           value={myform.password}
//           onChange={changeFields}
//           ></input>

//         <button type="submit" >Submit</button>
//       </div>
//     </form>
    
//     </>

//   )
// };