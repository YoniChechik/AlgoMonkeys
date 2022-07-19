// based on: https://www.floatui.com/components/heroes/

import React from "react";
import "./am_hero.css";
import Title, { PinkPart } from "./title";
import Button from "../components/button";

export default function AMHero() {
  return (
    <header className="am-hero-container">
      <section className="am-hero">
        <div className="am-hero-details">
          <Title>
            Your <PinkPart>Algo Team</PinkPart> for Hire
          </Title>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
          <div className="am-hero-btns">
            <Button to={"/#contact_us"}>Contact Us</Button>
            <Button to={"/#contact_us"}>Learn Computer Vision</Button>
          </div>
        </div>
        <div className="am-hero-img">
          <img src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png" />
        </div>
      </section>
    </header>
  );
}
