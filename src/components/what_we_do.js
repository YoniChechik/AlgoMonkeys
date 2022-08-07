import React from "react";
import styles from "./what_we_do.module.css";
import Title, { PinkPart } from "./title";
import Image from "@theme/IdealImage";

const DoBlock = ({ title, image_path, alt, text }) => {
  return (
    <div className={styles.block}>
      <div className={styles.title_and_icon}>
        <Image className={styles.icon} img={image_path} alt={alt} />
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default function WhatWeDo() {
  return (
    <section className={styles.container}>
      <Title>
        What We <PinkPart>Do Best</PinkPart>
      </Title>
      <div className={styles.box}>
        <DoBlock title="Computer Vision" image_path="/img/icon.svg" alt="icon" text={`test text.`} />
        <DoBlock title="Computer Vision" image_path="/img/icon.svg" alt="icon" text={`test text.`} />
        <DoBlock title="Computer Vision" image_path="/img/icon.svg" alt="icon" text={`test text.`} />
        <DoBlock title="Computer Vision" image_path="/img/icon.svg" alt="icon" text={`test text.`} />
      </div>
    </section>
  );
}
