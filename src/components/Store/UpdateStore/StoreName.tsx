import React from 'react';
import Image from '../../Constants/Image';
import Button from "../../Constants/Button";
import Titleh4 from '../../Constants/TitleH4';

// interface Props{
//     title?:string,
//     src:string,
//     alt:string
// }
const Store = () => {
    return(
        <div className="mr-auto p-2 bd-highlight">
            <Titleh4 title="Store Image"/>

            <Image src="https://via.placeholder.com/240/4e557c"  alt="officia porro"/>
            <div className="d-flex flex-row-reverse bd-highlight">
                <Button title="Upload Image" type="secondary"  name="save"/>
                <Button title="Remove" type="light"  name="remove"/>
            </div>
        </div>
    );
}
export default Store;