import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import { Event_Detail_GET } from "../../config/ajax-path";

import '../../styles/bootstrap-grid.css';
import './_eventdetail.css';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const EventDetail = () =>  {

  const [eventDetail, setEventDetail] = useState([])

  const navigate = useNavigate(); 
  let { sid } = useParams(); //取得是哪個活動sid後發fetch


  // 跟MySQL拿活動資料
  const  fetchEventDetail = async () => {
    // const response =await axios.get('http://localhost:3600/events')
    const response =await axios.get(`http://localhost:3600/events/${sid}`);
    setEventDetail(response.data);
    console.log('有fetch成功')
    console.log(response.data)
}


  // 避免無窮迴圈
  useEffect(() => {
    fetchEventDetail();
    console.log('useEffect有被呼叫')
  }, [])



  return(
    <>
    <div className="eventdetail-container">
        <div className="row">



          {/* 左方活動內容 */}
          <div className="col-8">

              {/* 考慮不放麵包屑 */}
              <button className="intro-bread" onClick={()=>{
                navigate('/event', {replace: true})}
              }>  返回上一頁</button>

              <div className="intro-box">


                  <div className="intro-img">
                    <img src="" alt="" />
                  </div>


                  <SimpleBar style={{ maxHeight: 250 }}>

                  {eventDetail.map((v, i) => {
                  return (
                      <>
                      <p>活動評價：</p>
                      <p>活動時間：{v.start}</p>
                      <p>活動地點：{v.place_other}</p>
                      <p>招募人數：{v.limit_num}</p>
                      <p>主辦單位：{v.npo_name}</p>
                      <p>活動內容 & 注意事項：{v.intro}</p>
                      <p>主辦單位介紹：</p>
                      </>
                      )})}

                  </SimpleBar>

                
              </div>
          
          </div>


          {/* 右方按鈕+評論 */}
          <div className="col-4">
            <div className="btn-wrap">
                
                {/* 參加 group */}
                <div className="buy-btn">
                    <div className="cost-price">
                      <p>贊助費用</p>
                      <h2>150</h2>
                      <p>陰德值獎勵</p>
                      <h2>50</h2>
                    </div>

                    <div className="btn-group">
                      <button className="btn-m btn-pri" >來去贊助</button>
                      <button className="btn-m btn-pri" >加入購物車</button>
                      <button className="btn-m btn-pri" >繼續購物</button>
                    </div>

                </div>

                <div className="comment-group">

                  <SimpleBar style={{ maxHeight: 300 }}>

                    <div className="comment-item">
                      <p>評論內容</p>
                    </div>
                    <div className="comment-item">
                      <p>評論內容</p>
                    </div>
                    <div className="comment-item">
                      <p>評論內容</p>
                    </div>
                    <div className="comment-item">
                      <p>評論內容</p>
                    </div>
                    <div className="comment-item">
                      <p>評論內容</p>
                    </div>
                    <div className="comment-item">
                      <p>評論內容</p>
                    </div>

                  </SimpleBar>

                </div>
            </div>
          </div>
        
        
        </div>
        
    </div>


    </>
  )

}

export default EventDetail; 
