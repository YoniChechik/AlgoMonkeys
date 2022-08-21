// based on: https://www.floatui.com/components/heroes/

import React from "react";
import styles from "./hero.module.css";
import Title, { PinkPart } from "./title";
import Button from "./button";
import ProgramerMonkey from "@site/static/img/programer_monkey.svg";

export default function Hero() {
  return (
    <header className={styles.hero_container}>
      <section className={styles.hero}>
        <div className={styles.hero_details}>
          <Title is_main={true}>
            Your <PinkPart>Algo Team</PinkPart> for Hire
          </Title>
          <p>
            🚀 Providing cutting-edge solutions for our clients' needs in the fields of algorithms, neural networks and
            computer vision through freelance services or consulting.
          </p>
          <p>Oh, and we also teach Computer Vision! 🙊🙉🙈</p>
          <div className={styles.hero_btns}>
            <Button to={"/#contact_us"} type={"main_pink"}>
              Contact Us
            </Button>
            <Button to={"/docs/intro"} type={"main_yellow"}>
              Learn Computer Vision
            </Button>
          </div>
        </div>
        <div className={styles.hero_img}>
          <ProgramerMonkey title="programer monkey" aria-label="programer monkey" role="img" />
        </div>
      </section>
    </header>
  );
}
