import React from "react";
import StoreName from "./StoreName";
import Form from "./Form";
import { useParams } from "react-router-dom";
import Title from "../../Constants/Title";
type Props = {
  //url: {};
  //urlImage:{};
  match: {
    params: {
      id: string;
    };
  };
};
type State = {
  value: string;
};
const Index = (props: Props) => {
  let { id } = useParams();
  //console.log(props.match);

  return (
    <div className="container mt-5">
      <Title title={id ? "Edit Store Profile" : ""} />

      <div className="d-flex flex-row align-self-start">
        <StoreName />
        <Form url={props.match.params.id} />
      </div>
    </div>
  );
};
export default Index;
