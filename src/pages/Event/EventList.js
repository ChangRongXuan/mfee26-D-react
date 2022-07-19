import React, { useState, useEffect } from "react";
import "../../styles/style.css";
import "./_eventlist.css";
import page_soul from "./imgs/soul.svg";
import axios from "axios";
// import { render } from "@testing-library/react";


const EventList = () => {


// act_title: "浪貓中途送養"
// end: "2022-08-17T16:00:00.000Z"
// img: "6c124c50c7896a42846c0f0961e224c4.jpg"
// intro: "設立多元認養機制，提供民眾便利的認養地點與管道，增加收容動物認養機會。"
// limit_num: 70
// npo_name: "財團法人桃園市私立寶貝潛能發展中心"
// place_city: 15
// place_other: "松山區動保處"
// price: 600
// program_type: 1
// sid: 21
// start: "2022-07-15T16:00:00.000Z"
// type_sid: 2
// value: 50

    const act_type_Options = ['環保','動保','長照', '兒少','身心障礙','其他'];
    const area_name_Options = ['北部','中部','南部', '東部','離島'];


    const [eventRaw, setEventRaw] = useState([]); //原始資料，不去做更動    
    const [eventDisplay, setEventDisplay] = useState([]); //依照篩選條件隨時做變動
    
    // 搜尋(search)用
    const [searchWord, setSearchWord] = useState('');

    // 載入資料指示狀態
    const [isLoading, setIsLoading] = useState(false)



    const  fetchEvent = async () => {
        const response =await axios.get('http://localhost:3600/events')
        setEventDisplay(response.data);
        setEventRaw(response.data);
    }

    // // 取得npo_act資料
    // const fetchEvent = () => {
    //     // data直接傳出去會是promise物件 不能直接被用Q___Q
    //     fetch('http://localhost:3600/events') 
    //     .then((r) => r.json())
    //     .then((data) => {
    //         console.log(data);
    //         setCurrentEventRaw(data);
    //         setCurrentEventDisplay(data);
    //     })
    // };


    // 防止無窮迴圈
    useEffect(() => {
        setIsLoading(true);
        fetchEvent();

    },[]); //只會取值一次，不會即時更新MySQL
    

    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
            setIsLoading(false)
            }, 2000)
        }
        }, [isLoading])


        const spinner = (
            <>
                <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </>
            )

        
        const displayTable = (
                <>
                    {eventDisplay.map((v, i) => {
                    return (
                        <div className="event-card" key={v.sid}>
                            <div className="good-cost btn-s">陰德值：{v.value}</div>
                            <div className="event-type btn-s"> {v.name} </div>
                            <div className="event-img"></div>
                            <div className="title">{v.act_title}</div>
                            <h4 className="btn-m npo-name">
                                {v.npo_name}
                            </h4>
                            <p className="event-time btn-m">活動時間：{v.start}</p>
                            <div className="event-cost btn-m">報名費：{v.price}</div>
                        </div>    
                    )})};        
                
                </>
        )


    // debug測試用
    async function renderNew(e) {
        await setSearchWord(e.target.value);
        if(searchWord===''){ //searchWord是空字串
            setEventDisplay(eventRaw);
            console.log('search', searchWord);
            console.log('Raw', eventRaw);
        }else{ 
            console.log('search', searchWord);
            const newEventDisplay = eventRaw.filter((v,i)=>v.act_title.includes(searchWord));
            setEventDisplay(newEventDisplay);  //這時候還讀不到當前的 EventRaw
            console.log('new', newEventDisplay);
        }

    }

    
    return (
        <div className="event-container">
            <div className="row">
                <div className="col col-2 event-selector">
                    <ul>
                        
                        {/* 搜尋 */}
                        <li >
                            {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                            <input 
                                type="text" 
                                placeholder="輸入活動名稱" 
                                value={searchWord} 
                                
                                onChange={ (e)=>{
                                    setSearchWord(e.target.value);
                                }}
                            />

                        

                        </li>

                        {/* <button className="btn-m btn-sec" style={{margin:20+"px"}} type="submit">送出資料</button> */}


                        <li className="btn-m">排序：評價最高</li>
                        
                            {/*name要一樣才能單選  */}
                            <input type="radio" name="123" id="rbox"/>
                            <label htmlFor="rbox" className="checkbox">
                            熱門活動</label>

                            <input type="radio" name="123" id="rbox"/>
                            <label htmlFor="rbox" className="checkbox">
                            評價最高</label>                           
                            
                            <input type="radio" name="123" id="rbox"/>
                            <label htmlFor="rbox" className="checkbox" >
                            價格(由低至高)</label>
                            
                            <input type="radio" name="123" id="rbox"/>
                            <label htmlFor="rbox" className="checkbox" 
                            >
                            時間(由近到遠)</label>
                            
                            <input type="radio" name="123" id="rbox" />
                            <label htmlFor="rbox" className="checkbox">
                            陰德值(由低到高)</label>

                    
                        
                        <li className="btn-m">
                            方案選擇<i className="fa-solid fa-angle-down"></i>
                        </li>

                            <input type="checkbox" name="" id="cbox" />
                            <label htmlFor="cbox" className="checkbox">
                            參與志工</label>
                            <input type="checkbox" name="" id="cbox" />
                            <label htmlFor="cbox" className="checkbox">
                            公益贊助</label>
                        
                        
                        
                        
                        <li className="btn-m">
                            活動分類<i className="fa-solid fa-angle-down"></i>
                        </li>


                        {act_type_Options.map((v,i)=>{
                            return(

                            <div key={i} >
                                <input 
                                    type="checkbox" 
                                    name="act_type" 
                                    id="cbox" 
                                    // checked=""
                                    value={v}    
                                    />
                                <label htmlFor="cbox" className="checkbox">
                                {v}</label>
                            </div>)
                        })}




                        <li className="btn-m">
                            價格範圍<i className="fa-solid fa-angle-down"></i>
                        </li>


                        <li className="btn-m">
                            地區<i className="fa-solid fa-angle-down"></i>
                        </li>
            
                            {area_name_Options.map((v,i)=>{
                            return(

                            <div key={i} >
                                <input 
                                    type="checkbox" 
                                    name="area_name" 
                                    id="cbox" 
                                    // checked=""
                                    value={v}    
                                    />
                                <label htmlFor="cbox" className="checkbox">
                                {v}</label>
                            </div>)
                            })}

                    </ul>
                </div>



                <div className="col col-10 event">

                {isLoading ? spinner  : displayTable}

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
