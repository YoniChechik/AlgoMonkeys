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
            Some <PinkPart>Background</PinkPart>
          </Title>
          <p>
            {`My name is Yoni Chechik and I'm a consultant and freelancer, AlgoMonkeys is my one-man show.

            🏗️ I consider myself as an “AI Architect”- helping companies push algo, AI and computer vision pipelines to production.

            💪 I do everything hands-on but I talk about my company in the plural form because of my extensive web of connections that enhance the deliverables when needed: from MLOps & annotations to front-end.

            ⛳ I'm also a lecturer for Computer-Vision & AI at the Academic College of Tel-Aviv Yeffo, and in the past I've worked at Trigo, Microsoft, and Intel as an algo researcher. I hold B.Sc. & M.Sc. in electrical engineering from the Technion, both summa cum laude.`}
          </p>
        </div>
        <div className={styles.hero_img}>
          <Image className={styles.img} img={require("/img/yoni.png")} alt="Yoni Chechik image in AlgoMonkeys logo" />
        </div>
      </section>
    </header>
  );
}
