import React from "react";
import styles from "./button.module.css";
import Link from "@docusaurus/Link";

export default function Button(props) {
  return (
    <Link className={styles.custom_link} to={props.to} tabindex="-1">
      <button className={`${styles.btn} ${styles[props.type]}`}>{props.children}</button>
    </Link>
  );
}
