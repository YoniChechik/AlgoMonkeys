import React from "react";
import styles from "./companies.module.css";
import Title, { PinkPart } from "./title";
import Image from "@theme/IdealImage";

export default function Companies() {
  return (
    <section className={styles.container}>
      <Title>
        Happy <PinkPart>Costumers</PinkPart>
      </Title>
      <div className={styles.flex_list}>
        <Image className={styles.img} img={"/img/logos/buildots_black.svg"} alt="Buildots logo" />
        <Image className={styles.img} img={"/img/logos/deepchecks_black.svg"} alt="DeepChecks logo" />
        <Image className={styles.img} img={"/img/logos/classiq_black.svg"} alt="Classiq logo" />
        <Image className={styles.img} img={require("/img/logos/applydesign_black.png")} alt="ApplyDesign logo" />
        <Image className={styles.img} img={"/img/logos/carevature_black.svg"} alt="Carevature logo" />
        <Image className={styles.img} img={"/img/logos/clarityo.svg"} alt="ClarityO logo" />
        <Image className={styles.img} img={"/img/logos/ares.svg"} alt="Ares logo" />
        <Image className={styles.img} img={require("/img/logos/ador.png")} alt="AdOr logo" />
        <Image className={styles.img} img={"/img/logos/eyecontrol_black.svg"} alt="EyeControl logo" />
        <Image className={styles.img} img={require("/img/logos/firmus_black.png")} alt="Firmus logo" />
        <Image className={styles.img} img={"/img/logos/mdhair.svg"} alt="MDHair logo" />
        <Image className={styles.img} img={"/img/logos/itc.svg"} alt="ITC logo" />
        <Image className={styles.img} img={require("/img/logos/medhub_black.png")} alt="MedHub logo" />
      </div>
    </section>
  );
}
