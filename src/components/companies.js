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
        <img
          className={styles.img}
          src={"/img/logos/buildots_black.svg"}
          height="100%"
          width="100%"
          alt="Buildots logo"
        />
        <img
          className={styles.img}
          src={"/img/logos/deepchecks_black.svg"}
          height="100%"
          width="100%"
          alt="DeepChecks logo"
        />
        <img
          className={styles.img}
          src={"/img/logos/classiq_black.svg"}
          height="100%"
          width="100%"
          alt="Classiq logo"
        />
        <Image className={styles.img} img={require("/img/logos/applydesign_black.png")} alt="ApplyDesign logo" />
        <img
          className={styles.img}
          src={"/img/logos/carevature_black.svg"}
          height="100%"
          width="100%"
          alt="Carevature logo"
        />
        <img className={styles.img} src={"/img/logos/clarityo.svg"} height="100%" width="100%" alt="ClarityO logo" />
        <img className={styles.img} src={"/img/logos/ares.svg"} height="100%" width="100%" alt="Ares logo" />
        <Image className={styles.img} img={require("/img/logos/ador.png")} alt="AdOr logo" />
        <img
          className={styles.img}
          src={"/img/logos/eyecontrol_black.svg"}
          height="100%"
          width="100%"
          alt="EyeControl logo"
        />
        <Image className={styles.img} img={require("/img/logos/firmus_black.png")} alt="Firmus logo" />
        <img className={styles.img} src={"/img/logos/mdhair.svg"} height="100%" width="100%" alt="MDHair logo" />
        <img className={styles.img} src={"/img/logos/itc.svg"} height="100%" width="100%" alt="ITC logo" />
        <Image className={styles.img} img={require("/img/logos/medhub_black.png")} alt="MedHub logo" />
      </div>
    </section>
  );
}
