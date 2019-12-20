import React from "react";
import Form from "../../Constants/Form";
import Button from "../../Constants/Button";

const FormGroup = () => {
  return (
    <form>
      <div className="p-2 bd-highlight">
        <Form />
        <div className="group-button">
                <Button title="Save" block="btn-block" type="success"  name="save"/>
                <Button title="Cancel" type="light"  block="btn-block" name="remove"/>
            </div>
      </div>
    </form>
  );
};
export default FormGroup;
