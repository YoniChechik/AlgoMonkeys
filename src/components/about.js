// based on: https://www.floatui.com/components/heroes/

import React from "react";
import styles from "./about.module.css";
import Title, { PinkPart } from "./title";
import Image from "@theme/IdealImage";

export default function About() {
  return (
    <header className={styles.hero_container}>
      <section className={styles.hero}>
        <div className={styles.hero_details}>
          <Title>
            About <PinkPart>Us</PinkPart>
          </Title>
          <p>I'm Yoni Chechik and I'm the owner of AlgoMonkeys.</p>
        </div>
        <div className={styles.hero_img}>
          <Image className={styles.img} img="/img/yoni.png" alt="Yoni Chechik image in AlgoMonkeys logo" />
        </div>
      </section>
    </header>
  );
}
