import React from 'react';
import CitySelect from "./CitySelect";
import DistrictSelect from "./DistrictSelect";
import Http from '../../../Api/https';


type Props = {
    data: any[],
    distId: number
}
type State = {
    data: Data,
    districts: any[],
    districtId: number,
    cities: any,
    cityId: number
}
type Data = {
    districts: [
        { id: number, name: string },
    ],
    cities: [
        { id: number, name: string, districtId: number },
    ]
}
class Address extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            data: {
                districts: [
                    { id: 0, name: "" },
                ],
                cities: [
                    { id: 0, name: "", districtId: 0 },
                ]
            },
            districts: [],
            districtId: 0,
            cities: [],
            cityId: 0
        };
    }
    // componentDidMount() {
    //     this.fetchData()
    // }
    // fetchData = async () => {
    //     Http.get('address')
    //         .then(result => {
    //             console.log('Result address: ', result)
    //             this.setState({ data: result })

    //         }).catch(error => { console.log(error) })
    // }
    onSelectDistrict = (distId: number) => {
        // const selCities = this.state.data.cities.filter((c: any) => c.provinceId === distId);
        // this.setState({
        //     districtId: distId,
        //     cities: selCities
        // });
        console.log("đang test district");

    }

    onSelectCity = (city: any) => {
        // this.setState({
        //     cityId: city.id
        // });
        console.log("đang test city");

    }


    render() {
        return (
            <div>
                <DistrictSelect

                    onSelect={this.onSelectDistrict}
                />
                <CitySelect

                    onSelect={this.onSelectCity}
                />
            </div>
        );
    }
}
export default Address
