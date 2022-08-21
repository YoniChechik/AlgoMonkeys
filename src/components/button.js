import React from "react";
import styles from "./button.module.css";
import Link from "@docusaurus/Link";

export default function Button(props) {
  return (
    <div className={`${styles.btn} ${styles[props.type]}`}>
      <Link className={styles.custom_link} to={props.to}>
        {props.children}
      </Link>
    </div>
  );
}
