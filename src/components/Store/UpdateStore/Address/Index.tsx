import React, { Fragment } from 'react';
import CitySelect from "./CitySelect";
import DistrictSelect from "./DistrictSelect";
import Http from '../../../Api/https';

type Props = {}
type State = {
    districts: any[],
    districtId: any,
    cities: any[],
    cityId: number
}
class Address extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            districts: [],
            districtId: null,
            cities: [],
            cityId: 0
        };
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = async () => {
        Http.get('address')
            .then(result => {
                this.setState({
                    districts: result[0].districts,
                    cities: result[0].cities
                })
                console.log('Result address districts state: ', result[0])
            }).catch(error => { console.log(error) })
    }
    onSelectDistrict = (distId: number) => {
        const selCities = this.state.cities.filter((c: any) => c.districtId === distId);
        this.setState({
            districtId: distId,
            cities: selCities
        });
        console.log("đang test district");
    }

    onSelectCity = (city: any) => {
        this.setState({
            cityId: city.id
        })
        console.log("đang lay id city", city.id);
    }


    render() {
        return (
            <Fragment>
                <CitySelect
                    data={this.state.cities}
                    selectedId={this.state.cityId}
                    onSelect={this.onSelectCity}
                />
                <DistrictSelect
                    data={this.state.districts}
                    selectedId={this.state.districtId}
                    onSelect={this.onSelectDistrict}
                />
            </Fragment>
        );
    }
}
export default Address
