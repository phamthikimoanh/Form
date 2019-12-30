import React from "react";
import Image from "../../Constants/Image";
import Button from "../../Constants/Button";
import Titleh4 from "../../Constants/TitleH4";
import { StateInit } from "../../Redux";
import { connect } from "react-redux";
import { State } from "./Form";

interface Props {
    companys: [];
    urlImage: {};
}
const avatar = (props: Props) => {
  return props.companys.map((item: State, index) => {
    if (index == props.urlImage) {
      return <Image src={item.avatar} alt={item.name} />
    } else {
      return (
        <Image src="https://via.placeholder.com/240" alt="image placeholder" />
      );
    }
  });
};
const Store = () => {
  return (
    <div className="mr-5 p-2 bd-highlight">
      <Titleh4 title="Store Image" />
      {avatar}
      <Image src="https://via.placeholder.com/240" alt="image placeholder" />

      <div className="d-flex flex-row-reverse bd-highlight">
        <Button title="Upload Image" type="secondary" name="save" />
        <Button title="Remove" type="light" name="remove" />
      </div>
    </div>
  );
};

const mapStateToProps = (state: StateInit) => {
  return {
    companys: state.store.companys
  };
};

export default connect(mapStateToProps)(Store);
