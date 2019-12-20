import React, { Fragment } from "react";
 const Button = (props) => {
    const {nameBtn}=props;
    return(
     <Fragment>
        <Button>{nameBtn}</Button>
     </Fragment>   
    );
}
export default Button;