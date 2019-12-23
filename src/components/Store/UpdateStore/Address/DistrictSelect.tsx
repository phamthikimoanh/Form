import React from "react";

type Props = {
    // data: any[],
    // selectedId: number,
    onSelect: (event: any) => void | null
}
const District = (props: Props) => {
    const { onSelect } = props;

    return (
        <div>
            <span>District: </span>
            <select onChange={onSelect} >
                <option>Select province</option>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
                {/* {
                    data.map(prov => (
                        <option
                            key={prov.id}
                            value={prov.id}
                            selected={selectedId === prov.id}>
                            {prov.name}
                        </option>
                    ))
                } */}
            </select>
        </div>
    );
}
export default District