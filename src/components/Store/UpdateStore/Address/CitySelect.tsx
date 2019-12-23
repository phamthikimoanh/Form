import React from "react";
type Props = {
    data: any[],
    selectedId: number,
    onSelect:any
}
const City = (props: Props) => {
    const { data, selectedId, onSelect } = props;
    // const onSelect = (event: any) => {
    //     onSelect(parseInt(event.target.value));
    // }
    return (
        <div>
            <span>City: </span>
            <select onClick={onSelect}>
                <option>Select city</option>
                {
                    data.map(city => (
                        <option
                            key={city.id}
                            value={city.id}
                            selected={selectedId === city.id}>
                            {city.name}
                        </option>
                    ))
                }
            </select>
        </div>
    );

}
export default City;