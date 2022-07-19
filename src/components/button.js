import React from "react";
import "./button.css";
import Link from "@docusaurus/Link";

export default function Button(props) {
  return (
    <button className="custom-btn main-yellow">
      <Link className="custom-link" to="https://www.aiismath.com">
        {props.children}
      </Link>
    </button>
  );
}
