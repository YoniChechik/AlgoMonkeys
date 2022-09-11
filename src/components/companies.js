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
import SimplexLogo from "@site/static/img/logos/simplex_black.svg";
import Link from "@docusaurus/Link";

export default function Companies() {
  return (
    <section className={styles.container}>
      <Title>
        Happy <PinkPart>Customers</PinkPart>
      </Title>
      <div className={styles.flex_list}>
        <Link className={styles.img} to="https://buildots.com/">
          <BuildotsLogo title="Buildots logo" aria-label="Buildots logo" role="img" />
        </Link>
        <Link className={styles.img} to="https://deepchecks.com/">
          <DeepchecksLogo title="DeepChecks logo" aria-label="DeepChecks logo" role="img" />
        </Link>
        <Link className={styles.img} to="https://www.classiq.io/">
          <ClassiqLogo title="Classiq logo" aria-label="Classiq logo" role="img" />
        </Link>
        <Link className={styles.img} to="https://www.applydesign.io/">
          <Image img={require("/img/logos/applydesign_black.png")} alt="ApplyDesign logo" />
        </Link>
        <Link className={styles.img} to="https://www.carevature.com/">
          <CarevatureLogo title="Carevature logo" aria-label="Carevature logo" role="img" />
        </Link>
        <Link className={styles.img} to="https://clarityo.com/">
          <ClarityoLogo title="Clarityo logo" aria-label="Clarityo logo" role="img" />
        </Link>
        <Link className={styles.img} to="https://www.linkedin.com/company/connected-fitness-startup-stealth/">
          <AresLogo title="Ares logo" aria-label="Ares logo" role="img" />
        </Link>
        <Image img={require("/img/logos/ador.png")} className={styles.img} alt="AdOr logo" />
        <Link className={styles.img} to="https://www.eyecontrol.co.il/">
          <EyeControlLogo title="EyeControl logo" aria-label="EyeControl logo" role="img" />
        </Link>
        <Link className={styles.img} to="https://www.firmus.ai/">
          <Image img={require("/img/logos/firmus_black.png")} alt="Firmus logo" />
        </Link>
        <Link className={styles.img} to="https://www.mdhair.co/">
          <MDHairLogo title="MDHair logo" aria-label="MDHair logo" role="img" />
        </Link>
        <Link className={styles.img} to="https://www.itc.tech/">
          <ITCLogo title="ITC logo" aria-label="ITC logo" role="img" />
        </Link>
        <Link className={styles.img} to="https://www.medhub-ai.com/">
          <Image img={require("/img/logos/medhub_black.png")} alt="MedHub logo" />
        </Link>
        <Link className={styles.img} to="https://www.simplex-mapping.com/">
          <SimplexLogo title="Simplex logo" aria-label="Simplex logo" role="img" />
        </Link>
      </div>
    </section>
  );
}
