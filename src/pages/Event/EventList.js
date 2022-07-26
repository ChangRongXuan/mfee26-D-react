import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Event_List_GET } from "../../config/ajax-path";
import { Link } from 'react-router-dom'


// CSS、圖片
import '../../styles/bootstrap-grid.css';
import './_eventlist.css'
import "../../styles/style.css";
// import page_soul from "./imgs/soul.svg"; //頁籤用圖片


// 改為資料夾方式中的index.js
import FilterBar from './components/FilterBar'
import ProductList from './components/ProductList'
import SearchBar from './components/SearchBar'
import SortBar from './components/SortBar';


function EventList() {


  // 活動用的資料
  // 1. 從伺服器來的原始資料
  const [eventRaw, setEventRaw] = useState([])

  // 2. 用於網頁上經過各種處理(排序、搜尋、過濾)後的資料
  const [displayEvent, setDisplayEvent] = useState([])




  // 下面四個狀態是對應到四種不同的表單元素

  // 活動種類 -> select多選 
  const [tags, setTags] = useState([])
  
  const tagTypes = ['環境', '動保', '長照', '兒少', '身心障礙', '其他']

  // 地區種類 -> select多選 
  const [areas, setAreas] = useState([])
  const areaTypes = ['北部', '中部', '南部', '東部', '離島']

  //搜尋功能 -> 文字篩選
  const [searchWord, setSearchWord] = useState('')

  // radio -> 金額
  const [priceRange, setPriceRange] = useState('所有')
  const priceRangeTypes = ['0-100', '100-500', '所有']

  // 排序條件 -> 下拉式選單
  const [sortBy, setSortBy] = useState('')

  // 載入指示的spinner動畫用的
  const [isLoading, setIsLoading] = useState(false)


  //x秒後自動關掉spinner(設定isLoading為false)
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [isLoading])

  

// 跟MySQL拿活動資料(目前暫時限8筆)
  const  fetchEvent = async () => {
    const response =await axios.get(Event_List_GET)
    setDisplayEvent(response.data); //讓component進入DidUpdate階段
    setEventRaw(response.data); //讓component進入DidUpdate階段
}


  // 初始化資料-didMount
  useEffect(() => {
    // 先開起載入指示器
    setIsLoading(true)

    // 模擬和伺服器要資料
    // 最後設定到狀態中
    fetchEvent();

  }, [])


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


  //搜尋功能 -> 文字篩選
  const handleSearch = (eventRaw, searchWord) => {
    let newEvent = [...eventRaw]

    if (searchWord.length) {
      newEvent = eventRaw.filter((event) => {
        // includes -> String API
        return event.act_title.includes(searchWord); //活動標題含有searchWord
      })
    } 

    return newEvent
  }

  const handleSort = (eventRaw, sortBy) => {
    let newEvent = [...eventRaw]

    // 熱門活動(暫時以活動人數來排序) 
    if (sortBy === '1') {
      newEvent = [...newEvent].sort((a, b) => a.limit_num - b.limit_num)
    }
    // 評價最高 (暫不處理)
    if (sortBy === '2') {
      newEvent = [...newEvent].sort((a, b) => b.price - a.price)
    }
    // 價格(由低至高) OK 
    if (sortBy === '3') {
      newEvent = [...newEvent].sort((a, b) => a.price - b.price)
    }
    // 時間(由近到遠) (暫不處理)
    if (sortBy === '4') {
      newEvent = [...newEvent].sort((a, b) => b.price - a.price)
    }
    // 陰德值(由低到高) OK
    if (sortBy === '5') {
      newEvent = [...newEvent].sort((a, b) => a.value - b.value)
    }


    // 預設(請選擇)：用id小至大
    if (sortBy === '' && newEvent.length > 0) {
      newEvent = [...newEvent].sort((a, b) => a.sid - b.sid)
    }


    return newEvent
  }

  const handleTags = (eventRaw, tags) => {
    let newEvent = [...eventRaw]

    // tags = 代表使用者目前勾選的標籤陣列
    //console.log(tags)


    // const [tags, setTags] = useState([])
    // const tagTypes = ['環境', '動保', '長照', '兒少', '身心障礙', '其他']


    // 處理勾選標記
    if (tags.length > 0) {
      newEvent = [...newEvent].filter((event) => {
        let isFound = false

        // 原本資料裡的tags字串轉為陣列
        // const eventTags = event.name.split('')

        // 用目前使用者勾選的標籤用迴圈找，有找到就回傳true
        for (let i = 0; i < tags.length; i++) {
          // includes -> Array api
          if (event.name.includes(tags[i])) {
            isFound = true // 找到設為true
            break // 找到一個就可以，中斷迴圈
          }
        }

        return isFound
      })
    }

    return newEvent
  }


  // 處理area
  const handleAreas = (eventRaw, areas) => {
    let newEvent = [...eventRaw]

    // 處理勾選標記
    if (areas.length > 0) {
      newEvent = [...newEvent].filter((event) => {
        let isFound = false

        // 原本資料裡的tags字串轉為陣列
        // const eventAreas = event.areas.split(',')

        // 用目前使用者勾選的標籤用迴圈找，有找到就回傳true
        for (let i = 0; i < areas.length; i++) {
          // includes -> Array api
          if (event.area_name.includes(areas[i])) {
            isFound = true // 找到設為true
            break // 找到一個就可以，中斷迴圈
          }
        }

        return isFound
      })
    }

    return newEvent;
  }



  const handlePriceRange = (eventRaw, priceRange) => {
    let newEvent = [...eventRaw]

    // 處理價格區間選項
    switch (priceRange) {
      case '0-100':
        newEvent = eventRaw.filter((p) => {
          return p.price<=100
        })
        break
      case '100-500':
        newEvent = eventRaw.filter((p) => {
          return p.price > 100 && p.price <= 500
        })
        break
      // 指所有的產品都出現
      default:
        break
    }

    return newEvent
  }

  // 當四個過濾表單元素有更動時
  // componentDidUpdate + didMount
  // ps. 一開始也會載入
  useEffect(() => {
    
    // 搜尋字串太少不需要搜尋(如果想要限最低搜尋字數)
    // if (searchWord.length < 3 && searchWord.length !== 0)
    // return 
    
    // 先開起載入指示器
    setIsLoading(true)

    let newEvent = []

    // 處理搜尋
    newEvent = handleSearch(eventRaw, searchWord)

    // 處理排序
    newEvent = handleSort(newEvent, sortBy)

    // 處理勾選標記
    newEvent = handleTags(newEvent, tags)
    newEvent = handleAreas(newEvent, areas)

    // 處理價格區間選項
    newEvent = handlePriceRange(newEvent, priceRange)

    setDisplayEvent(newEvent)

  }, [searchWord, eventRaw, sortBy, tags, areas, priceRange])



  // bootstrap 的spinner
  const spinner = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )


  // 真正要呈現的資料
  return (
    <>

        <div className="event-container">
            <div className="row">

                {/* 篩選欄位 */}
                <div className="col col-2 event-selector">

                    <SearchBar
                      searchWord={searchWord}
                      setSearchWord={setSearchWord}
                    />

                    <SortBar sortBy={sortBy} setSortBy={setSortBy} />

                    <FilterBar

                      // price radio
                      priceRangeTypes={priceRangeTypes}
                      priceRange={priceRange}
                      setPriceRange={setPriceRange}

                      // type select 
                      tagTypes={tagTypes}
                      tags={tags}
                      setTags={setTags}

                      // area select
                      areaTypes={areaTypes}
                      areas={areas}
                      setAreas={setAreas}
                    />

                </div>



                <div className="col col-10 event">

                  {isLoading ? (
                        spinner
                      ) : (
                        <ProductList events={displayEvent} />
                  )}

                </div>
                
            </div>

            {/* 頁籤 */}
            <div className="page-soul col-10">
            
                    {/* <img src={page_soul} alt="" />
                    <img src={page_soul} alt="" />
                    <img src={page_soul} alt="" />
                    <img src={page_soul} alt="" /> */}


                  {/* {data && data.totalPages ? (
                    <div aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#/">
                                    Previous
                                </a>
                            </li>
                            {Array(10)
                                .fill(1)
                                .map((v, i) => (
                                    <li className="page-item" key={'pagi' + i}>
                                        <a className="page-link" href="#/">
                                            {i + 1}
                                        </a>
                                    </li>
                                ))}

                            <li className="page-item">
                                <a className="page-link" href="#/">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </div>
                ) : null} */}


              
            </div>
        </div>

    </>
  )
}

export default EventList;