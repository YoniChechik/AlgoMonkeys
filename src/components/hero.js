// based on: https://www.floatui.com/components/heroes/

import React from "react";
import styles from "./hero.module.css";
import Title, { PinkPart } from "./title";
import Button from "./button";

export default function AMHero() {
  return (
    <header className={styles.hero_container}>
      <section className={styles.hero}>
        <div className={styles.hero_details}>
          <Title>
            Your <PinkPart>Algo Team</PinkPart> for Hire
          </Title>
          <p>
            We are passionate about providing cutting-edge solutions for our clients' needs in the fields of algorithms,
            neural networks and computer vision through freelance services or consulting.
          </p>
          <div className={styles.hero_btns}>
            <Button to={"/#contact_us"} type={"main_pink"}>
              Contact Us
            </Button>
            <Button to={"/docs/course_intro"} type={"main_yellow"}>
              Learn Computer Vision
            </Button>
          </div>
        </div>
        <div className={styles.hero_mg}>
          <img src="/img/programer_monkey.svg" alt="programer monkey" width="100%" height="100%" />
        </div>
      </section>
    </header>
  );
}
