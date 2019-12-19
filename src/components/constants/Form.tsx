// @flow
import * as React from "react";
import Titleh4 from "../constants/TitleH4";

const Form = () => {
  return (
    <React.Fragment>
      <Titleh4 title="Basic Info" />

      <div className="form-group">
        <label htmlFor="storeName">Store name</label>
        <input type="text" className="form-control" id="storeName" />
      </div>
      <div className="d-flex flex-row align-items-end">
        <div className="form-group">
          <label htmlFor="storeaddress">Store address</label>
          <input
            type="text"
            className="form-control"
            id="storeaddress"
            placeholder="Address"
          />
        </div>
        <div className="form-group">
          <select className="form-control">
            <option>District</option>
          </select>
        </div>
        <div className="form-group">
          <select className="form-control">
            <option>City</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone #</label>
        <input type="number" className="form-control" id="phone" />
      </div>
      <Titleh4 title="Red Invoice Info" />

      <div className="form-group">
        <label htmlFor="companyName">Company Name</label>
        <input type="text" className="form-control" id="companyName" />
      </div>
      <div className="d-flex flex-row align-items-end">
        <div className="form-group">
          <label htmlFor="storeaddress">Store Address</label>
          <input
            type="text"
            className="form-control"
            id="storeaddress"
            placeholder="Address"
          />
        </div>
        <div className="form-group">
          <select className="form-control">
            <option>District</option>
          </select>
        </div>
        <div className="form-group">
          <select className="form-control">
            <option>City</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="mst">MST</label>
        <input type="number" className="form-control" id="mst" />
      </div>
    </React.Fragment>
  );
};
export default Form;
