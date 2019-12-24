import React from "react";
type Props = {
    data: any[],
    selectedId: number,
    onSelect: (event: any) => void | null
}
class City extends React.Component<Props> {
    onSelect = (event: any) => {
        this.props.onSelect(parseInt(event.target.value));
        console.log("id city: ", event.target.value);
    }
    render() {
        return (
            <div className="form-group flex-fill ml-2">
                <select className="form-control" onClick={this.onSelect}>
                    <option>City</option>
                    {
                        this.props.data.map(city => {
                            console.log("selectedId truyền về: ",this.props.selectedId);

                            return (
                                <option
                                    key={city.id}
                                    value={city.id}
                                    selected={this.props.selectedId === city.id}>
                                    {city.name}
                                </option>
                            )
                        }

                        )
                    }
                </select>
            </div>
        );
    }
}
export default City;