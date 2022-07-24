import PersonForm from '../components/PersonForm';
import Summary from "../components/Summary";

function Shipping(props) {

  // const { shipping, setShippingData } = props

  // const handleFieldChange = (e) => {
  //   const newShipping = { ...shipping, [e.target.name]: e.target.value }
  //   setShippingData(newShipping)

  //   console.log(newShipping)
  // }

  return (
    <>

      <div className="personinfor-container">
            <div className="row">

                  <PersonForm/>

                  <Summary />

            </div>
      </div>


    </>
  )
}


    {/* <div className="infor-container col col-10"> */}
            
            {/* 流程圖片放這邊 */}
            {/* <div className="cart-flow"> */}
                  {/* <img src={cart_step_1} alt="" /> */}
            {/* </div> */}

            {/* 填寫資訊放這邊 */}

            {/* <div className='infor-wrap'>
                <h4>填寫參加人資訊</h4>
                <p className="caption">報名資料將用於主辦單位安排活動，活動票券相關資訊將寄至訂購人信箱</p>

                <div className="infor">

                    <PersonForm/>

                </div>
              

            </div>

        </div> */}



 {/* <h1>運送資訊 - Shipping</h1> */}
      {/* <div>
        <label>姓名</label>
        <input
          type='text'
          name='name'
          value={shipping.name}
          onChange={handleFieldChange}
        />
      </div>
      <div>
        <label>住址</label>
        <input
          type='text'
          name='address'
          value={shipping.address}
          onChange={handleFieldChange}
        />
      </div>
      <div>
        <label>電話</label>
        <input
          type='text'
          name='phone'
          value={shipping.phone}
          onChange={handleFieldChange}
        />
      </div> */}

export default Shipping;




