import delete_cross from "../../imgs/delete-cross.svg";


function EventItem(props) {
    // 定義每個商品物件

    // {
    //     sid: 1,
    //     act_title: '流浪狗認養活動',
    //     type_sid: 2,
    //     program_type: 2,
    //     price: 500,
    //     value: 50,
    //     start: 2022-06-18 22:24:00,
    //     npo_name: '喵喵' ,
    //     place_city: '台北市',
    //     place_other: '中正路一段',
    //     limit_num: 50
    // }

    // JSON檔案其實可以直接在這個檔案再引用？
    // 解構從index.js傳來的props
    const {
        sid,
        act_title,
        program_type,
        price,
        start,
        npo_name,
        place_other,
        count,
        setCount,
        removeItem
    } = props;

    // 之後可以直接把變數用{}方法放進DOM
    return (
        <>
            <div className="cart-list">
                <div className="cart-check">
                    <input type="checkbox" id="cbox" />
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

                <div className="num-choose">
                    <a
                        href="#/"
                        onClick={() => {
                            setCount(count - 1);
                        }}
                    >
                        -
                    </a>
                    <a href="#/" className="border">
                        {count}
                    </a>
                    <a
                        href="#/"
                        onClick={() => {
                            setCount(count + 1);
                        }}
                    >
                        +
                    </a>
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
