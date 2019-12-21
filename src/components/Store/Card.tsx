import React from "react";
import InfoCard from "../Constants/infoCard";
import Image from "../Constants/Image";
import { Links } from "../Router/Link";
import Http from "../Api/https";
import { connect } from "react-redux";
import { loadStore, loadStoreError, loadStoreSuccess, Company } from "../Redux/actions/index";
import { StateInit } from "../Redux/index";

interface Props {
  companys: any[],
  dispatch: any,
  error: any,
  isLoaded: boolean
}

class Card extends React.Component<Props> {
  componentDidMount() {
    this.fecthData()
  }

  fecthData = async () => {
    const { dispatch } = this.props
    dispatch(loadStore)
    Http.get('companys')
      .then(result => {
        console.log('result', result)
        dispatch(loadStoreSuccess(result.companys))
      }).catch(error => { dispatch(loadStoreError(error)) })
  }

  StoreInfo = () => {
    const { companys } = this.props;
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
                url={"edit"+index}
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
    const { error, isLoaded, companys } = this.props;
    console.log(companys)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoaded === true) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="card" style={{ width: "18rem" }}>
          {this.StoreInfo()}
        </div>
      );
    }
  }
}
const mapStateToProps = (state: StateInit) => {
  return {
    companys: state.store.companys,
    isLoaded: state.store.isLoaded,
    error: state.store.error
  };
};


export default connect(mapStateToProps)(Card);
