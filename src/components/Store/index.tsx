import React from "react";
import Card from "./Card"
import Title from "../constants/Title"
//import Form from "../constants/Form"

const storeInfo =()=>{
    return(
        <div className="container mt-5">
            <Title title="Store Infomation" />
            <Card/>   
        </div>
    );
}
export default storeInfo;