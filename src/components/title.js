import React from "react";
import styles from "./title.module.css";
import ThreeDots from "@site/static/img/three_dots.svg";

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
        <h1 className={style_h1}>{props.children}</h1>
        <ThreeDots title="title three dots" aria-label="title three dots" className={styles.ThreeDots} role="img" />
      </div>
    </div>
  );
}

export const PinkPart = (props) => {
  return <span className={styles.span}>{props.children}</span>;
};
