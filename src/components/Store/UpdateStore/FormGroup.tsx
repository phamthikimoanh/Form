import React from "react";
import Form from "./Form";
import Button from "../../Constants/Button";

const FormGroup = () => {
  return (
    <div className="p-2 bd-highlight" style={{width:"70%"}}>
      <form>
        <Form />
        <div className="group-button">
          <Button title="Save" block="btn-block" type="success" name="save" />
          <Button title="Cancel" type="light" block="btn-block" name="remove" />
        </div>
      </form>
    </div>
  );
};
export default FormGroup;
