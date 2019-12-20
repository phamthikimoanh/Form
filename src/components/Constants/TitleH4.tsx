import React from "react";

interface Props{
    title:string
}
const Title =(props:Props)=>{
    const {title}=props;
    return(
        <div className="title d-flex flex-row bd-highlight mb-3 align-items-center">
            <h4 className="titleH4">{title}</h4>
        </div>       
    );
}
export default Title;

