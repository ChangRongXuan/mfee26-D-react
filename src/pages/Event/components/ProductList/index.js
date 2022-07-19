import React from 'react'
// import ProductItem from './ProductItem'

function ProductList(props) {
  const { events } = props

  return (
    <>

        {events.map((v, i) => {
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
            )})}     

    </>
  )
}

export default ProductList;