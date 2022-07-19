import React from "react";
import "./title.css";

export default function Title(props) {
  return (
    <div className="AMContainer">
      <div className="AMTitle">
        {/* children is the data that comes between the opening and closing tags */}
        <h1>{props.children}</h1>
        <img
          className="ThreeDots"
          src="/img/three_dots.svg"
          alt="title three dots"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export const PinkPart = (props) => {
  return <span>{props.children}</span>;
};
