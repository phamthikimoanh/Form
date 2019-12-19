import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'

interface Props{
    title:string
}
const Title =(props:Props)=>{
    const {title}=props;
    return(
        <div className="title d-flex flex-row bd-highlight mb-3 align-items-center">
            <FontAwesomeIcon icon={faStore}/>
            <h3 className="titleH3">{title}</h3>
        </div>       
    );
}
export default Title;