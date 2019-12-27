import * as React from "react";
import Titleh4 from "../../Constants/TitleH4";
import Address from "../UpdateStore/Address/Index";
import { redInvoice } from "../../Types/store";
import Button from "../../Constants/Button";
import { isVNPhoneMobile } from "../../Constants/Regex";
import { connect } from "react-redux";
import { StateInit } from "../../Redux";

interface State {
  //userStore:StoreJson
  id: string;
  avatar: string;
  name: string;
  address: string;
  district: string;
  city: string;
  phone: string;
  redInvoice: redInvoice;
}
interface Props {
  companys: State;
}
class Form extends React.Component<Props, State> {
  //const { address, phone, name, taxCode, } = props;
  constructor(props: Props) {
    super(props);
    this.state = {
      id: "",
      avatar: "",
      name: "",
      address: "",
      district: "",
      city: "",
      phone: "",
      redInvoice: {
        taxCode: "",
        address: "",
        district: "",
        city: "",
        name_office: ""
      }
      // userStore:{
      //   id: "",
      //   avatar: "",
      //   name: "",
      //   address: "",
      //   district: "",
      //   city: "",
      //   phone: "",
      //   redInvoice: {
      //       taxCode: "",
      //       address: "",
      //       district: "",
      //       city: "",
      //       name_office: "",
      //   }
      // }
    };
  }
  handleSubmit = (event: any) => {
    //alert('Your favorite flavor is: ' + this.state.name);
    event.preventDefault();
    this.handleValidate();
  };

  handleValidate = () => {
    if (
      this.state.name === "" ||
      this.state.address === "" ||
      this.state.phone === "" ||
      this.state.redInvoice.name_office === "" ||
      this.state.redInvoice.taxCode === "" ||
      this.state.redInvoice.address === ""
    ) {
      alert("Please, Điền đầy đủ thông tin");
    } else if (
      this.state.phone === "" ||
      this.state.phone.length < 10 ||
      this.state.phone.length > 12 ||
      isVNPhoneMobile.test(this.state.phone) === false
    ) {
      alert("Vui lòng nhập đúng số điện thoại");
    }
  };
  render() {
    console.log("log ra toàn bộ prop",this.props);
    
    const { companys } = this.props;
    console.log("this.props.companys:",companys)
    return (
      <React.Fragment>
        <Titleh4 title="Basic Info" />
        <div className="p-2 bd-highlight" style={{ width: "70%" }}>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="storeName">Store name</label>
              {companys ? (
                <input
                  type="text"
                  className="form-control"
                  id="storeName"
                  value={"" + companys.name + ""}
                />
              ) : (
                <input
                  type="text"
                  className="form-control"
                  id="storeName"
                  onChange={event =>
                    this.setState({ name: event.target.value })
                  }
                />
              )}
              {/* <input
                type="text"
                className="form-control"
                id="storeName"
                onChange={event => this.setState({ name: event.target.value })}
              /> */}
            </div>
            <div className="d-flex flex-row align-items-end">
              <div className="form-group flex-fill">
                <label htmlFor="storeaddress">Store address</label>
                <input
                  type="text"
                  className="form-control"
                  id="storeaddress"
                  placeholder="Address"
                  onChange={event =>
                    this.setState({ address: event.target.value })
                  }
                />
              </div>
              <Address />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone #</label>
              <input
                type="number"
                className="form-control"
                id="phone"
                onChange={event => this.setState({ phone: event.target.value })}
              />
            </div>
            <Titleh4 title="Red Invoice Info" />

            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                onChange={event =>
                  this.setState({
                    redInvoice: {
                      taxCode: this.state.redInvoice.taxCode,
                      address: this.state.redInvoice.address,
                      district: this.state.redInvoice.district,
                      city: this.state.redInvoice.city,
                      name_office: event.target.value
                    }
                  })
                }
              />
            </div>
            <div className="d-flex flex-row align-items-end">
              <div className="form-group flex-fill">
                <label htmlFor="storeaddress">Store Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="storeaddress"
                  placeholder="Address"
                  onChange={event =>
                    this.setState({
                      redInvoice: {
                        taxCode: this.state.redInvoice.taxCode,
                        address: event.target.value,
                        district: this.state.redInvoice.district,
                        city: this.state.redInvoice.city,
                        name_office: this.state.redInvoice.name_office
                      }
                    })
                  }
                />
              </div>
              <Address />
            </div>
            <div className="form-group">
              <label htmlFor="mst">MST</label>
              <input
                type="number"
                className="form-control"
                id="mst"
                onChange={event =>
                  this.setState({
                    redInvoice: {
                      taxCode: this.state.redInvoice.taxCode,
                      address: this.state.redInvoice.address,
                      district: event.target.value,
                      city: this.state.redInvoice.city,
                      name_office: this.state.redInvoice.name_office
                    }
                  })
                }
              />
            </div>
            <div className="group-button">
              <input type="submit" value="Submit" />
              {/* <Button title="Save" block="btn-block" type="success" name="save" /> */}
              <Button
                title="Cancel"
                type="light"
                block="btn-block"
                name="remove"
              />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state: StateInit) => {
  console.log("companys lấy từ store redux:", state.store.companys);

  return {
    companys: state.store.companys
  };
};

export default connect(mapStateToProps)(Form);
