import React from "react";
interface Props{
    title?:string,
    src:string,
    alt:string
}

const Image=(props:Props)=>{
    const {title, src, alt}=props;
    return(
        <div className="image">
            <p>{title}</p>
            <img src={src} alt={alt} className="img-card img-fluid rounded mx-auto d-block"/>
        </div>
    );
}
export default Image;