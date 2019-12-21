import React, { Fragment } from "react";
import InfoCard from "../Constants/infoCard";
import Image from "../Constants/Image";
import { Links } from "../Router/Link";
import Http from "../Api/https";
import { connect } from "react-redux";
import { getStore } from "../Redux/actions/index";
import { StateInit } from "../Redux/index";
//import Store from '../Types/store';

interface Props {

}
interface State {
  companys: any[];
  isLoaded: boolean,
  error: any
}
class Card extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      companys: [],
      isLoaded: false,
      error: null
    };
  }
  async componentDidMount() {
    const datas = await Http.get("companys")
      .then((result) => {
        this.setState({
          isLoaded: true,
          companys: result.companys,
        });
        getStore(result);
      },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        })
  }
  StoreInfo = () => {
    console.log("get data từ state11", this.state.companys);
    const { companys } = this.state;
    if (companys) {
      return (
        companys.map((item, index) => (
          <div key={index}>
            <Image src={item.avatar} alt="ahihi" />
            <div className="card-body">
              <InfoCard
                title="STORE INFO."
                name={item.name}
                address={item.address1}
                phone={item.phone}
              />
              <InfoCard
                title="RED INVOID INFO."
                name={item.name_office}
                address={item.address2}
                phone={item.phone}
              />
              <Links
                url="edit"
                title="Edit Profile"
                type="light"
                block="btn-block"
              ></Links>
            </div>
          </div>
        ))
      )
    }
  }
  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="card" style={{ width: "18rem" }}>

          {
            this.StoreInfo()

          }
        </div>
      );
    }
  }
}
const mapStateToProps = (state: StateInit) => {
  console.log("data lấy từ store ", state.store.companys);
  return {
    companys: state.store.companys
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getStore: (datas: any) => {
    dispatch(getStore(datas));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
