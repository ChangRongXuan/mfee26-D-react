import React from 'react';
import ".//../styles/_eventlist.css";



const EventList = () => {
    return (
      <div classNameName="event-container">
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
                  <div className="event-card">     </div>
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
