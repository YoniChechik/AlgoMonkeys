import React from "react";
import styles from "./companies.module.css";
import Title, { PinkPart } from "./title";
import Image from "@theme/IdealImage";
import BuildotsLogo from "@site/static/img/logos/buildots_black.svg";
import DeepchecksLogo from "@site/static/img/logos/deepchecks_black.svg";
import ClassiqLogo from "@site/static/img/logos/classiq_black.svg";
import CarevatureLogo from "@site/static/img/logos/carevature_black.svg";
import ClarityoLogo from "@site/static/img/logos/clarityo.svg";
import AresLogo from "@site/static/img/logos/ares.svg";
import EyeControlLogo from "@site/static/img/logos/eyecontrol_black.svg";
import MDHairLogo from "@site/static/img/logos/mdhair.svg";
import ITCLogo from "@site/static/img/logos/itc.svg";

export default function Companies() {
  return (
    <section className={styles.container}>
      <Title>
        Happy <PinkPart>Costumers</PinkPart>
      </Title>
      <div className={styles.flex_list}>
        <BuildotsLogo title="Buildots logo" className={styles.img} />
        <DeepchecksLogo title="DeepChecks logo" className={styles.img} />
        <ClassiqLogo title="Classiq logo" className={styles.img} />
        <Image className={styles.img} img={require("/img/logos/applydesign_black.png")} alt="ApplyDesign logo" />
        <CarevatureLogo title="Carevature logo" className={styles.img} />
        <ClarityoLogo title="Clarityo logo" className={styles.img} />
        <AresLogo title="Ares logo" className={styles.img} />
        <Image className={styles.img} img={require("/img/logos/ador.png")} alt="AdOr logo" />
        <EyeControlLogo title="EyeControl logo" className={styles.img} />
        <Image className={styles.img} img={require("/img/logos/firmus_black.png")} alt="Firmus logo" />
        <MDHairLogo title="MDHair logo" className={styles.img} />
        <ITCLogo title="ITC logo" className={styles.img} />
        <Image className={styles.img} img={require("/img/logos/medhub_black.png")} alt="MedHub logo" />
      </div>
    </section>
  );
}
