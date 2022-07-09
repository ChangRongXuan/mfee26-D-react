import React from 'react';
import ".//../styles/style.css";
import ".//../styles/_eventlist.css";
// import ".//../styles/bootstrap.css"; //是否要用bs討論中
import event_photo1 from "../imgs/event-photo1.svg";


const EventList = () => {
    return (
        <div className="event-container">
            <div className="row">

                <div className="col col-2">
                    <ul>
                        <li><i className="fa-solid fa-magnifying-glass" ></i></li>
                        <li>排序：</li>
                        <li>方案選擇<i className="fa-solid fa-angle-down"></i></li>
                        <li>活動分類<i className="fa-solid fa-angle-down"></i></li>
                        <li>價格<i className="fa-solid fa-angle-down"></i></li>
                        <li>排序<i className="fa-solid fa-angle-down"></i></li>
                    </ul>
                </div>

                <div className="col col-10 event">

                    <div className="event-card">
                        <div className="event-img"></div>
                        <div className='title'>一起守護台灣</div>
                        <h4>財團法人桃園市 <br></br>
                            私立環境保育中心</h4>
                        <div className='event-time'>活動時間：2022.06.22</div>
                        <div className="event-cost">報名費：50元</div>
                    </div>


                    <div className="event-card">     </div>
                    <div className="event-card">     </div>
                    <div className="event-card">     </div>
                    <div className="event-card">     </div>
                    <div className="event-card">     </div>
                    <div className="event-card">     </div>
                    <div className="event-card">     </div>
                </div>
            </div>
        </div>
    );
};


export default EventList;
