import React from "react";
import StoreName from "./StoreName";
import FormGroup from "./FormGroup";
import { useParams } from "react-router-dom";
import Title from "../../constants/Title";

const Index = () => {
  let { id } = useParams();

  return (
    <div className="container mt-5">
      <Title title={id ? "Edit Store Profile" : ""} />

      <div className="d-flex flex-row align-self-start">
        <StoreName />
        <FormGroup />
      </div>
    </div>
  );
};
export default Index;
