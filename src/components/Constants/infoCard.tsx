import React from "react";
interface Props {
  name: string;
  address: string;
  phone: string;
  title: string;
}

const InfoCard = (props: Props) => {
  const { name, address, phone, title } = props;
  return (
    <div className="infoCard ">
      <p className="nameInfo">{title}</p>
      <p className="itemInfo name">
        <span>Name:</span>
        {name}
      </p>
      <p className=" itemInfo address">
        <span>Address:</span>
        {address}
      </p>
      <p className="itemInfo phone">
        <span>Phone:</span>
        {phone}
      </p>
    </div>
  );
};
export default InfoCard;
