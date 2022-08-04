import React from "react";
import "./companies.css";
import Title, { PinkPart } from "./title";
import Image from "@theme/IdealImage";

export default function Companies() {
  return (
    <section className="companies-container">
      <Title>
        Happy <PinkPart>Costumers</PinkPart>
      </Title>
      <div class="box">
        <Image
          className="amImg"
          img="/img/buildots_black.svg"
          alt="Buildots logo"
        />
        <Image
          className="amImg"
          img="/img/deepchecks_black.svg"
          alt="DeepChecks logo"
        />
        <Image className="amImg" img="/img/classiq.svg" alt="Classiq logo" />
        <Image
          className="amImg"
          img="/img/applydesign-logo.png"
          alt="ApplyDesign logo"
        />
        <Image
          className="amImg"
          img="/img/carevature_black.svg"
          alt="Carevature logo"
        />
        <Image className="amImg" img="/img/clarityo.svg" alt="ClarityO logo" />
        <Image className="amImg" img="/img/ares.svg" alt="Ares logo" />
        <Image className="amImg" img="/img/ador.png" alt="AdOr logo" />
        <Image
          className="amImg"
          img="/img/eyecontrol_black.svg"
          alt="EyeControl logo"
        />
        <Image className="amImg" img="/img/firmus.webp" alt="Firmus logo" />
        <Image className="amImg" img="/img/mdhair.svg" alt="MDHair logo" />
        <Image className="amImg" img="/img/itc.png" alt="ITC logo" />
        <Image className="amImg" img="/img/medhub.png" alt="MedHub logo" />
      </div>
    </section>
  );
}
