import React, { useState } from "react";

import "../../styles/style.css";
import "../../styles/bootstrap-grid.css";
import "./_cash.css";


import PersonInfor from "./components/PersonInfor"; 
import CreditInfor from "./components/CreditInfor"; 
import Summary from "./components/Summary";


const Cash = (props) => {


 //定義 currentPage 這個 state，預設值是 OrderList
const [currentPage, setCurrentPage] = useState('PersonInfor');

return (
        <div className="cash-container">
            <div className="row">

                {currentPage === 'PersonInfor' && (
                <PersonInfor setCurrentPage={setCurrentPage}/>
                )}
                
                {currentPage === 'CreditInfor' && (
                <CreditInfor setCurrentPage={setCurrentPage}/>
                )} 

                <Summary /> 

            </div>
        </div>
    );
};



export default Cash;
