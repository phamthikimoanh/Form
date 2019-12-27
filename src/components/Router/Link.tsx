import React from "react";
import { Link } from "react-router-dom";
interface Props {
  url?: any;
  title: string;
  type: string;
  block?: string;
}
export const Links = (props: Props) => {
  const { title, url, type, block } = props;
  return (
    <Link to={url} className={"mt-3 btn btn-" + type + " " + block}>
      {title}
    </Link>
  );
};
