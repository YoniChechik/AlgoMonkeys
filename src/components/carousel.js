import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./carousel.css";
import Image from "@theme/IdealImage";

const Testimonial = ({ name, job_title, text = "no text" }) => {
  return (
    <div className="testimonialBlock">
      <div className="myimg">
        <Image img={"/img/applydesign-logo.png"} alt={"ador"} />
      </div>

      <p>{text}</p>
      <h3>
        {name} - {job_title}
      </h3>
    </div>
  );
};

export default function Testimonials() {
  return (
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      useKeyboardArrows={true}
      interval={6000} // milliseconds between transitions
    >
      <Testimonial
        name="Shirley Fultz"
        job_title="CEO"
        text="I am so happy to be able to use AlgoMonkeys to help me with my business."
      />

      <Testimonial
        name="Shirley Fultz"
        job_title="Designer"
        text="It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site"
      />
      <Testimonial
        name="Daniel Keystone"
        job_title="Designer"
        text="The simple and intuitive design makes it easy for me use. I highly recommend Fetch to my peers."
      />
      <Testimonial
        name="Theo Sorel"
        job_title="Designer"
        text="I enjoy catching up with Fetch on my laptop, or on my phone when I'm on the go!"
      />
      <Testimonial
        name="Evgeni Machavariani"
        job_title="Project Manager & Senior System Engineer"
        text={`We worked with AlgoMonkeys on a Machine-Vision application for our surgical robot.
        With the help of AlgoMonkeys' knowledge, the process was very efficient. The first milestones we expected to take months were ready nearly instantly. AlgoMonkeys helped us foresee and avoid upcoming complications - providing significant insights regarding camera parameters, robust marker patterns, Illumination, etc.
        Im looking forward to working with AlgoMonkeys again.`}
      />
    </Carousel>
  );
}
