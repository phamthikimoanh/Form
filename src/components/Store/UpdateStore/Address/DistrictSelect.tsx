import React from "react";

type Props = {
    data: any[],
    selectedId: number,
    onSelect: (event: any) => void | null
}

class District extends React.Component<Props> {
    onSelect = (event: any) => {
        this.props.onSelect(parseInt(event.target.value));
    }
    render() {
        return (
            <div className="form-group flex-fill ml-2" >
                <select className="form-control" onChange={this.onSelect}>
                    <option>District</option>
                    {
                        this.props.data.map(dist => (
                            <option
                                key={dist.id}
                                value={dist.id}
                                selected={this.props.selectedId === dist.id}>
                                {dist.name}
                            </option>
                        ))
                    }
                </select>
            </div>
        );
    }
}
export default District