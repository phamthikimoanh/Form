import React from "react";
//import Button from "../constants/Button";
import InfoCard from "../constants/infoCard";
import Image from '../constants/Image';
import {Links} from "../Router/Link"

const Card = () => {
    //const button='<Button c name="edit" type="light" block="btn-block"/>';
    return(
        <div className="card" style={{width: "18rem"}}>
            <Image src="https://via.placeholder.com/240/4e557c"  alt="officia porro"/>
            <div className="card-body">
                <InfoCard title="STORE INFO." name="K.O.I The" address=" 123 Ho Tung Mau" phone="0123456789"/>
                <InfoCard title="RED INVOID INFO." name="K.O.I The International Company" address=" 123 Ho Tung Mau" phone="0102344532"/>
                <Links url="edit" title="Edit Profile" type="light" block="btn-block"></Links>
            </div>
        </div>
    );
}

export default  Card;