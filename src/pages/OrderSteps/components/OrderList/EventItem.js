import delete_cross from "../../imgs/delete-cross.svg";
import '../../styles/sub-pages.css';



function EventItem(props) {

    // 定義每個商品物件
    // {
    //     sid: 1,
    //     act_title: '流浪狗認養活動',
    //     type_sid: 2,
    //     program_type: '贊助',
    //     price: 500,
    //     value: 50,
    //     start: 2022-06-18 22:24:00,
    //     npo_name: '喵喵' ,
    //     place_city: '台北市',
    //     place_other: '中正路一段',
    //     limit_num: 50
    // }

    // 部分屬性值是從{...v}裡取得
    const { 
        sid,
        act_title,
        program_type,
        price,
        start,
        npo_name,
        place_other,
        count, //因為活動限定選一件，所以不提供+-功能
        setCount, //因為活動限定選一件，所以不提供+-功能
        removeItem,
        eventPick,
        setEventPick
    } = props;

    

    // 之後可以直接把變數用{}方法放進DOM
    return (
        <>
            <div className="cart-list">

                <div className="cart-check">
                    <input 
                        type="checkbox" 
                        id="cbox"
                        checked={eventPick.includes(`${sid}`)}
                        value={sid}
                        onChange={(e) => {

                            //如果原本有(true)則從array移除 (拷貝後再用set方法設定回去)
                            if(eventPick.includes(e.target.value)){
                    
                                const newEventPick = eventPick.filter((v,i) => {
                                return v !== e.target.value
                                })
                                console.log('勾選的結帳項目', newEventPick);
                                setEventPick(newEventPick)


                            } else { 

                                //如果沒有(false)則新加入array中 ( 拷貝後加入進去) 
                                const newEventPick = [...eventPick, e.target.value]
                                console.log('勾選的結帳項目', newEventPick);
                                setEventPick(newEventPick)
                            }

                        }}

                        />

                </div>

                <div className="cart-img"></div>

                <div className="cart-intro">
                    <div className="cart-intro-title">
                        <span>{program_type}</span>
                        <h5 className="subtitle">{act_title}</h5>
                    </div>

                    <div className="time-location">
                        <p>{start}</p>
                        <p>{place_other}</p>
                    </div>

                    <p>{npo_name}</p>
                </div>


                {/* 活動/贊助限定1場，不提供+-功能 */}
                <div className="num-choose">
                    {/* <a href="#/" onClick={()=>{setCount(count - 1);}}> 
                    -</a> */}
                    {/* <a href="#/" className="border"> {count} </a> */}
                    {/* <a href="#/" onClick={()=>{ setCount(count + 1);}}>
                    +</a> */}
                </div>


                <div className="cost">
                    <h5 className="subtitle">NT${price}</h5>
                </div>


                {/* 建立刪除鍵功能 */}
                <div className="delete-cross" >
                    <img src={delete_cross} alt="" onClick={removeItem} />
                </div>
                
            </div>
        </>

    );
}

export default EventItem;
