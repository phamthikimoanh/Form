import React from "react";

type Props = {
    // data: any[],
    // selectedId: number,
    onSelect: () => void | null
}
const District = (props: Props) => {
    const { onSelect } = props;

    return (
        <div className="form-group flex-fill ml-2">
            <select className="form-control" onClick={onSelect}>
                <option>Select District</option>
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