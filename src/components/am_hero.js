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
            We are passionate about providing cutting-edge solutions for our
            clients' needs in the fields of algorithms, neural networks and
            computer vision through freelance services or consulting.
          </p>
          <div className="am-hero-btns">
            <Button to={"/#contact_us"} type={"main-pink"}>
              Contact Us
            </Button>
            <Button to={"/docs/course_intro"} type={"main-yellow"}>
              Learn Computer Vision
            </Button>
          </div>
        </div>
        <div className="am-hero-img">
          <img src="/img/programer_monkey.svg" />
        </div>
      </section>
    </header>
  );
}
