import React from "react";
interface Props{
    name:string,
    title:string,
    type:string,
    block?:string
}
const Button=(props:Props)=>{

    const {name,title,type,block}=props;
    return(
        <button type="button" className={"mt-3 btn btn-"+type+" "+  block} name={name} >{title}</button>       
    );
}
export default Button;