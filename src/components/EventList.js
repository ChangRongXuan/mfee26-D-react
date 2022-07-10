import React from "react";
import ".//../styles/style.css";
import ".//../styles/_eventlist.css";
import page_soul from "../imgs/soul.svg";
// import ".//../styles/bootstrap.css"; //是否要用bs討論中
// import event_photo1 from "../imgs/event-photo1.svg";

const EventList = () => {
    return (
        <div className="event-container">
            <div className="row">
                <div className="col col-2 event-selector">
                    <ul>
                        {/* 搜尋 */}
                        <li>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </li>
                        <li className="btn-m">排序：</li>
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
                    <div className="event-card ">
                        <div className="good-cost btn-s">陰德值：50</div>
                        <div className="event-type btn-s"> 環境 </div>
                        <div className="event-img">
                            {/* <img src={event_photo1} alt="" /> */}
                        </div>
                        <div class="title">一起守護台灣</div>
                        <h4 className="btn-m npo-name">
                            財團法人桃園市 <br></br>
                            私立環境保育中心
                        </h4>
                        <p className="event-time btn-m">活動時間：2022.06.22</p>
                        <div className="event-cost btn-m">報名費：50元</div>
                    </div>

                    <div className="event-card">
                        <div className="good-cost btn-s">陰德值：50</div>
                        <div className="event-type btn-s"> 環境 </div>
                        <div className="event-img"></div>
                        <div class="title">一起守護台灣</div>
                        <h4 className="btn-m npo-name">
                            財團法人桃園市 <br></br>
                            私立環境保育中心
                        </h4>
                        <p className="event-time btn-m">活動時間：2022.06.22</p>
                        <div className="event-cost btn-m">報名費：50元</div>
                    </div>
                    <div className="event-card">
                        <div className="good-cost btn-s">陰德值：50</div>
                        <div className="event-type btn-s"> 環境 </div>
                        <div className="event-img"></div>
                        <div class="title">一起守護台灣</div>
                        <h4 className="btn-m npo-name">
                            財團法人桃園市 <br></br>
                            私立環境保育中心
                        </h4>
                        <p className="event-time btn-m">活動時間：2022.06.22</p>
                        <div className="event-cost btn-m">報名費：50元</div>
                    </div>
                    <div className="event-card ">
                        <div className="good-cost btn-s">陰德值：50</div>
                        <div className="event-type btn-s"> 環境 </div>
                        <div className="event-img"></div>
                        <div class="title">一起守護台灣</div>
                        <h4 className="btn-m npo-name">
                            財團法人桃園市 <br></br>
                            私立環境保育中心
                        </h4>
                        <p className="event-time btn-m">活動時間：2022.06.22</p>
                        <div className="event-cost btn-m">報名費：50元</div>
                    </div>
                    <div className="event-card">
                        <div className="good-cost btn-s">陰德值：50</div>
                        <div className="event-type btn-s"> 環境 </div>
                        <div className="event-img"></div>
                        <div class="title">一起守護台灣</div>
                        <h4 className="btn-m npo-name">
                            財團法人桃園市 <br></br>
                            私立環境保育中心
                        </h4>
                        <p className="event-time btn-m">活動時間：2022.06.22</p>
                        <div className="event-cost btn-m">報名費：50元</div>
                    </div>
                    <div className="event-card">
                        <div className="good-cost btn-s">陰德值：50</div>
                        <div className="event-type btn-s"> 環境 </div>
                        <div className="event-img"></div>
                        <div class="title">一起守護台灣</div>
                        <h4 className="btn-m npo-name">
                            財團法人桃園市 <br></br>
                            私立環境保育中心
                        </h4>
                        <p className="event-time btn-m">活動時間：2022.06.22</p>
                        <div className="event-cost btn-m">報名費：50元</div>
                    </div>
                    <div className="event-card">
                        <div className="good-cost btn-s">陰德值：50</div>
                        <div className="event-type btn-s"> 環境 </div>
                        <div className="event-img"></div>
                        <div class="title">一起守護台灣</div>
                        <h4 className="btn-m npo-name">
                            財團法人桃園市 <br></br>
                            私立環境保育中心
                        </h4>
                        <p className="event-time btn-m">活動時間：2022.06.22</p>
                        <div className="event-cost btn-m">報名費：50元</div>
                    </div>
                    <div className="event-card">
                        <div className="good-cost btn-s">陰德值：50</div>
                        <div className="event-type btn-s"> 環境 </div>
                        <div className="event-img"></div>
                        <div class="title">一起守護台灣</div>
                        <h4 className="btn-m npo-name">
                            財團法人桃園市 <br></br>
                            私立環境保育中心
                        </h4>
                        <p className="event-time btn-m">活動時間：2022.06.22</p>
                        <div className="event-cost btn-m">報名費：50元</div>
                    </div>
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
