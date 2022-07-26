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
};

export default Shipping;




