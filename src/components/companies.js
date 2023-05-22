import React from "react";
import styles from "./companies.module.css";
import Title, { PinkPart } from "./title";
import Image from "@theme/IdealImage";
import BuildotsLogo from "@site/static/img/logos/buildots_black.svg";
import DeepchecksLogo from "@site/static/img/logos/deepchecks_black.svg";
import ClassiqLogo from "@site/static/img/logos/classiq_black.svg";
import CarevatureLogo from "@site/static/img/logos/carevature_black.svg";
import ClarityoLogo from "@site/static/img/logos/clarityo.svg";
import AmpLogo from "@site/static/img/logos/amp.svg";
import EyeControlLogo from "@site/static/img/logos/eyecontrol_black.svg";
import MDHairLogo from "@site/static/img/logos/mdhair.svg";
import ITCLogo from "@site/static/img/logos/itc.svg";
import SimplexLogo from "@site/static/img/logos/simplex_black.svg";
import AgadoliveLogo from "@site/static/img/logos/agadolive_black.svg";
import Link from "@docusaurus/Link";

export default function Companies() {
  return (
    <section className={styles.container}>
      <Title>
        Happy <PinkPart>Customers</PinkPart>
      </Title>
      <div className={styles.flex_list}>
        <Link className={styles.img} aria-label="Buildots website" to="https://buildots.com/">
          <BuildotsLogo title="Buildots logo" aria-label="Buildots logo" role="img" />
        </Link>
        <Link className={styles.img} aria-label="Beewise website" to="https://www.beewise.ag/">
          <Image img={require("/img/logos/beewise_black.png")} alt="Beewise logo" />
        </Link>
        <Link className={styles.img} aria-label="Classiq website" to="https://www.classiq.io/">
          <ClassiqLogo title="Classiq logo" aria-label="Classiq logo" role="img" />
        </Link>
        <Link className={styles.img} aria-label="ApplyDesign website" to="https://www.applydesign.io/">
          <Image img={require("/img/logos/applydesign_black.png")} alt="ApplyDesign logo" />
        </Link>
        <Link className={styles.img} aria-label="Simplex website" to="https://www.simplex-mapping.com/">
          <SimplexLogo title="Simplex logo" aria-label="Simplex logo" role="img" />
        </Link>
        <Link className={styles.img} aria-label="DeepChecks website" to="https://deepchecks.com/">
          <DeepchecksLogo title="DeepChecks logo" aria-label="DeepChecks logo" role="img" />
        </Link>
        <Link className={styles.img} aria-label="Carevature website" to="https://www.carevature.com/">
          <CarevatureLogo title="Carevature logo" aria-label="Carevature logo" role="img" />
        </Link>
        <Link className={styles.img} aria-label="Clarityo website" to="https://clarityo.com/">
          <ClarityoLogo title="Clarityo logo" aria-label="Clarityo logo" role="img" />
        </Link>
        <Link className={styles.img} aria-label="Amp website" to="https://www.ampinteractive.io/">
          <AmpLogo title="Amp logo" aria-label="Amp logo" role="img" />
        </Link>
        <Image img={require("/img/logos/ador.png")} className={styles.img} alt="AdOr logo" />
        <Link className={styles.img} aria-label="EyeControl website" to="https://www.eyecontrol.co.il/">
          <EyeControlLogo title="EyeControl logo" aria-label="EyeControl logo" role="img" />
        </Link>
        <Link className={styles.img} aria-label="Firmus website" to="https://www.firmus.ai/">
          <Image img={require("/img/logos/firmus_black.png")} alt="Firmus logo" />
        </Link>
        <Link className={styles.img} aria-label="MDHair website" to="https://www.mdhair.co/">
          <MDHairLogo title="MDHair logo" aria-label="MDHair logo" role="img" />
        </Link>
        <Link className={styles.img} aria-label="ITC website" to="https://www.itc.tech/">
          <ITCLogo title="ITC logo" aria-label="ITC logo" role="img" />
        </Link>
        <Link className={styles.img} aria-label="MedHub website" to="https://www.medhub-ai.com/">
          <Image img={require("/img/logos/medhub_black.png")} alt="MedHub logo" />
        </Link>
        <Link className={styles.img} aria-label="Agado Live website" to="https://www.agadolive.com/">
          <AgadoliveLogo title="Agado Live logo" aria-label="Agado Live logo" role="img" />
        </Link>
        <Link className={styles.img} aria-label="Codiq website" to="https://codiq.io/">
          <Image img={require("/img/logos/codiq_black.png")} alt="Codiq logo" />
        </Link>
      </div>
    </section>
  );
}
