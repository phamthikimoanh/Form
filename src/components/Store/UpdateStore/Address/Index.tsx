import React from 'react';
import CitySelect from "./CitySelect";
import DistrictSelect from "./DistrictSelect";
import Http from '../../../Api/https';


type State = {
    // data: any[]
}
type Props = {
    data: any[]
    districts: any[],
    districtId: number,
    cities: any,
    cityId: number
}
class Address extends React.Component<Props, State> {
    // constructor(props: Props) {
    //     super(props);
    //     this.state = {
    //         districts: [],
    //         districtId: 0,
    //         cities: [],
    //         cityId: 0
    //     };
    // }
    // componentDidMount() {
    //     this.fetchData()
    // }
    // fetchData = async () => {
    //     Http.get('address')
    //         .then(result => {
    //             console.log('Result', result)
    //             this.setState({ data: result })

    //         }).catch(error => { console.log(error) })
    // }
    // onSelectDistrict = (distId: number) => {
    //     const selCities = this.state.data.cities.filter((c: any) => c.provinceId === distId);
    //     this.setState({
    //         districtId: distId,
    //         cities: selCities
    //     });
    // }

    // onSelectCity = (city: any) => {
    //     this.setState({
    //         cityId: city.id
    //     });
    // }


    render() {
        return (
            <div>
                <DistrictSelect
                    data={this.props.districts}
                    selectedId={this.props.districtId}
                    onSelect="{this.onSelectDistrict}"
                />
                <CitySelect
                    data={this.props.cities}
                    selectedId={this.props.cityId}
                    onSelect="{this.onSelectCity}"
                />
            </div>
        );
    }
}
export default Address
const data = {
    districts: [
        { id: 1, name: 'Quan 1' },
        { id: 2, name: 'Quan 2' },
        { id: 3, name: 'Ba Ria' },
        { id: 4, name: 'Long Thanh' }
    ],
    cities: [
        { id: 1, name: 'Ho Chi Minh', districtId: 1 },
        { id: 2, name: 'Ba Ria', districtId: 3 },
        { id: 3, name: 'Dong Nai', districtId: 4 }
    ]
}