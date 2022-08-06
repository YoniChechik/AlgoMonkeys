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
          img="/img/logos/buildots_black.svg"
          alt="Buildots logo"
        />
        <Image
          className="amImg"
          img="/img/logos/deepchecks_black.svg"
          alt="DeepChecks logo"
        />
        <Image
          className="amImg"
          img="/img/logos/classiq_black.svg"
          alt="Classiq logo"
        />
        <Image
          className="amImg"
          img="/img/logos/applydesign_black.png"
          alt="ApplyDesign logo"
        />
        <Image
          className="amImg"
          img="/img/logos/carevature_black.svg"
          alt="Carevature logo"
        />
        <Image
          className="amImg"
          img="/img/logos/clarityo.svg"
          alt="ClarityO logo"
        />
        <Image className="amImg" img="/img/logos/ares.svg" alt="Ares logo" />
        <Image className="amImg" img="/img/logos/ador.png" alt="AdOr logo" />
        <Image
          className="amImg"
          img="/img/logos/eyecontrol_black.svg"
          alt="EyeControl logo"
        />
        <Image
          className="amImg"
          img="/img/logos/firmus_black.png"
          alt="Firmus logo"
        />
        <Image
          className="amImg"
          img="/img/logos/mdhair.svg"
          alt="MDHair logo"
        />
        <Image className="amImg" img="/img/logos/itc.svg" alt="ITC logo" />
        <Image
          className="amImg"
          img="/img/logos/medhub_black.png"
          alt="MedHub logo"
        />
      </div>
    </section>
  );
}
