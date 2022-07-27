function Summary(props) {


    const {
        calcPickNumber,
        calcPickPrice,
        calcPickDonateNumber,
        calcPickDonateTotalPrice,
        calcPickVolunNumber,
        calcPickVolunTotalPrice
    } = props; //從Cart.js傳來的props


    return (
        <>
            {/* 右側金額明細 */}
            <div className="col col-2">
                <div className="good-sum"></div>

                <div className="cart-cost">
                    <div>
                        <h5 className="subtitle">
                            活動明細(共{calcPickNumber}項)
                        </h5>
                    </div>

                    <div className="donate-cost">
                        <p className="caption">贊助({calcPickDonateNumber})</p>
                        <h5 className="subtitle">NT$ {calcPickDonateTotalPrice}</h5>
                    </div>

                    <div className="volunteer-cost">
                        <p className="caption">志工({calcPickVolunNumber})</p>
                        <h5 className="subtitle">NT$ {calcPickVolunTotalPrice}</h5>
                    </div>

                    <div className="total-cost">
                        <p className="caption">總計 Total</p>
                        <h5 className="subtitle">NT$ {calcPickPrice}</h5>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Summary;
