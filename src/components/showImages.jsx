import React, { Fragment } from "react";
import Button from "./constants/Button";
import Image from "./constants/Image"

const showImages = () =>{
    //const {title}=props;
    return(
        <Fragment>
            <div className="groupBtn">
            <Button nameBtn="Abum1"/>
            <Button nameBtn="Abum2"/>
            </div>
            <Image title="hình ảnh" thumbnailUrl="https://via.placeholder.com/150/2edde0" alt="hình ảnh"/>
        </Fragment>
    );
}
export default showImages;