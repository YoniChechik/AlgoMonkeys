import React from "react";
import "./button.css";
import Link from "@docusaurus/Link";

export default function Button(props) {
  return (
    <button className={`custom-btn ${props.type}`}>
      <Link className="custom-link" to={props.to}>
        {props.children}
      </Link>
    </button>
  );
}
