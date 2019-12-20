import React from "react";
//import Button from "../constants/Button";
import InfoCard from "../Constants/infoCard";
import Image from "../Constants/Image";
import { Links } from "../Router/Link";
import Http from "../Api/https";
import { connect } from "react-redux";
import { getStore } from "../Redux/actions/index";
import {State} from "../Redux/index";
//import Store from '../Types/store';

interface Props {
  companys: any[];
}

class Card extends React.Component<Props> {
  //const button='<Button c name="edit" type="light" block="btn-block"/>';
  constructor(props: Props) {
    super(props);
    this.state = {
      companys: []
    };
  }
  async componentDidMount() {
    const datas = await Http.get("companys");
    getStore(datas);
    console.log("get data ",datas);
  }
  render() {
    //const { companys } = this.props;

    return (
      <div className="card" style={{ width: "18rem" }}>
        <Image src="https://via.placeholder.com/240/4e557c" alt="ahihi" />
        <div className="card-body">
          <InfoCard
            title="STORE INFO."
            name="K.O.I The"
            address=" 123 Ho Tung Mau"
            phone="0123456789"
          />
          <InfoCard
            title="RED INVOID INFO."
            name="K.O.I The International Company"
            address=" 123 Ho Tung Mau"
            phone="0102344532"
          />
          <Links
            url="edit"
            title="Edit Profile"
            type="light"
            block="btn-block"
          ></Links>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: State) => {
  console.log("data lấy từ store ",state.store.companys);
  return {
    companys: state.store.companys
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getStore: (datas:[]) => {
    dispatch(getStore(datas));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
