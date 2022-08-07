import React from "react";
import styles from "./title.module.css";

export default function Title(props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {/* children is the data that comes between the opening and closing tags */}
        <h1>{props.children}</h1>
        <img className={styles.ThreeDots} src="/img/three_dots.svg" alt="title three dots" width="100%" height="100%" />
      </div>
    </div>
  );
}

export const PinkPart = (props) => {
  return <span>{props.children}</span>;
};
