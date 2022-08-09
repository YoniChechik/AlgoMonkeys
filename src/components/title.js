import React from "react";
import styles from "./title.module.css";

export default function Title(props) {
  let style_flex_line;
  let style_h1;
  if (props.is_main) {
    style_flex_line = `${styles.flex_line} ${styles.main}`;
    style_h1 = `${styles.h1} ${styles.main}`;
  } else {
    style_flex_line = styles.flex_line;
    style_h1 = styles.h1;
  }

  return (
    <div className={styles.container}>
      <div className={style_flex_line}>
        {/* children is the data that comes between the opening and closing tags */}
        {/* <h1 className={`${styles.h1} ${props.h1_css}`}>{props.children}</h1> */}
        <h1 className={style_h1}>{props.children}</h1>
        <img className={styles.ThreeDots} src="/img/three_dots.svg" alt="title three dots" width="100%" height="100%" />
      </div>
    </div>
  );
}

export const PinkPart = (props) => {
  return <span>{props.children}</span>;
};
