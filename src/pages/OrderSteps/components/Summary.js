function Summary(props) {


    const {
        totalNumber,
        totalPrice,
        donateNumber,
        donatePrice,
        volunNumber,
        volunPrice,
    } = props; //從Cart.js傳來的props

    return (
        <>
            {/* 右側金額明細 */}
            <div className="col col-2">
                <div className="good-sum"></div>

                <div className="cart-cost">
                    <div>
                        <h5 className="subtitle">
                            活動明細(共{totalNumber}項)
                        </h5>
                    </div>

                    <div className="donate-cost">
                        <p className="caption">贊助({donateNumber})</p>
                        <h5 className="subtitle">NT$ {donatePrice}</h5>
                    </div>

                    <div className="volunteer-cost">
                        <p className="caption">志工({volunNumber})</p>
                        <h5 className="subtitle">NT$ {volunPrice}</h5>
                    </div>

                    <div className="total-cost">
                        <p className="caption">總計 Total</p>
                        <h5 className="subtitle">NT$ {totalPrice}</h5>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Summary;
