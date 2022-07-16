import React, { useState } from "react";
import "../../styles/style.css";
import "./_eventlist.css";
import page_soul from "./imgs/soul.svg";
// import ".//../styles/bootstrap.css"; //是否要用bs討論中

const EventList = () => {




    const [currentEvent, setCurrentEvent] = useState([]);    
    
    // data直接傳出去會是promise物件 不能直接被用Q___Q
    fetch(
        "/event"
    ) 
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setCurrentEvent(data);
        })



    return (
        <div className="event-container">
            <div className="row">
                <div className="col col-2 event-selector">
                    <ul>
                        {/* 搜尋 */}
                        <li >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </li>
                        <li className="btn-m">排序：評價最高</li>
                        <li className="btn-m">
                            方案選擇<i className="fa-solid fa-angle-down"></i>
                        </li>
                        <li className="btn-m">
                            活動分類<i className="fa-solid fa-angle-down"></i>
                        </li>
                        <li className="btn-m">
                            價格範圍<i className="fa-solid fa-angle-down"></i>
                        </li>
                        <li className="btn-m">
                            地區<i className="fa-solid fa-angle-down"></i>
                        </li>
                    </ul>
                </div>




                <div className="col col-10 event">

                {/* 處理活動卡片迴圈 */}{/* 現在這邊是無窮迴圈!!! 待改 */}
                    {currentEvent.map((v, i) => {
                        return (
                            <div className="event-card" key={v.sid}>
                                <div className="good-cost btn-s">陰德值：{v.value}</div>
                                <div className="event-type btn-s"> {v.type_sid} </div>
                                <div className="event-img"></div>
                                <div class="title">{v.act_title}</div>
                                <h4 className="btn-m npo-name">
                                    {v.npo_name}
                                </h4>
                                <p className="event-time btn-m">活動時間：{v.start}</p>
                                <div className="event-cost btn-m">報名費：{v.cost}</div>
                            </div>
                            )
                    })};

                </div>
            </div>

            <div className="page-soul col-10">
                <div >
                    <img src={page_soul} alt="" />
                    <img src={page_soul} alt="" />
                    <img src={page_soul} alt="" />
                    <img src={page_soul} alt="" />
                </div>
            </div>
        </div>
    );
};

export default EventList;
