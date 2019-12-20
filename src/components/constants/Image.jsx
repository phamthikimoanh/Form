import React, { Fragment } from "react";
 const Image = (props) => {
    const {title, thumbnailUrl,alt}=props;
    return(
     <Fragment>
         <p>{title}</p>
         <img src={thumbnailUrl} alt={alt}/>
     </Fragment>   
    );
}
export default Image;