import React from "react";

import '../../styles/bootstrap-grid.css';
import './_eventdetail.css';
// import ShadowScrollbars from './ShadowScrollbars';
import IntroScroll from './IntroScroll';
import CommentScroll from './CommentScroll';

const EventDetail = () =>  {

  return(
    <>
    <div className="eventdetail-container">
        <div className="row">



          {/* 左方活動內容 */}
          <div className="col-8">

              {/* 考慮不放麵包屑 */}
              {/* <div className="intro-bread">麵包屑放這邊</div> */}

              <div className="intro-box">

                  <div className="intro-img">
                    <img src="" alt="" />
                  </div>

                  <IntroScroll />
                
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

                  {/* <CommentScroll/> */}

                  {/* <div className="comment-item">
                    <p>評論內容</p>
                  </div>
                  <div className="comment-item">
                    <p>評論內容</p>
                  </div>
                  <div className="comment-item">
                    <p>評論內容</p>
                  </div> */}

                </div>
            </div>
          </div>
        
        
        </div>
        
    </div>


    </>
  )

}

export default EventDetail; 
