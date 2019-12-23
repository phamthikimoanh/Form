import React from "react";
type Props = {
    // data: any[],
    // selectedId: number,
    onSelect: () => void | null
}
const City = (props: Props) => {
    const { onSelect } = props;
    // const onSelect = (event: any) => {
    //     onSelect(parseInt(event.target.value));
    // }
    return (
        <div className="form-group flex-fill ml-2">
            <select className="form-control" onClick={onSelect}>
                <option>Select city</option>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
                {/* {
                    data.map(city => (
                        <option
                            key={city.id}
                            value={city.id}
                            selected={selectedId === city.id}>
                            {city.name}
                        </option>
                    ))
                } */}
            </select>
        </div>
    );

}
export default City;