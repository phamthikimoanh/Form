import React from "react";

type Props = {
    data: any[],
    selectedId: number,
    onSelect: any
}
const District = (props: Props) => {
    const { data, selectedId, onSelect } = props;
    
    return (
        <div>
            <span>District: </span>
            <select onChange={onSelect} >
                <option>Select province</option>
                {
                    data.map(prov => (
                        <option
                            key={prov.id}
                            value={prov.id}
                            selected={selectedId === prov.id}>
                            {prov.name}
                        </option>
                    ))
                }
            </select>
        </div>
    );
}
export default District