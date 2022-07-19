import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./testimonials.css";
import Image from "@theme/IdealImage";
import Title, { PinkPart } from "./title";

const img = {
  maxWidth: "100%",
  maxHeight: "100%",
};

const Testimonial = ({ name, job_title, image_path, alt, text }) => {
  return (
    <div className="testimonialBlock">
      <p>{text}</p>
      <div className="logo">
        <Image
          img={image_path}
          alt={alt}
          style={img}
          width={"100%"}
          height={"100%"}
        />
      </div>
      <h3>
        {name} - {job_title}
      </h3>
      <img
        className="quotationStart"
        src="/img/quotation.svg"
        alt="quotation start"
      />
      <img
        className="quotationEnd"
        src="/img/quotation.svg"
        alt="quotation end"
      />
    </div>
  );
};

export default function Testimonials() {
  return (
    <div>
      <Title>
        Clients <PinkPart>React</PinkPart>
      </Title>

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
          name="Yaniv Knoll"
          job_title="CTO"
          image_path="/img/applydesign-logo.png"
          alt="Applydesign logo"
          text={`I had the pleasure of working with AlgoMonkeys this year as part of their computer vision and AI consulting services.
        AlgoMonkeys are at the cutting edge of the current research and tech. They provided an excellent infrastructure for a very complex computer vision algorithm encompassing computer graphics as well.
        Their communication throughout the project was always clear, quick, and professional; once they delivered the final version, they ensured everything was clear and ready for production.
        We plan to keep working with them on this project and more complex and ambitious objectives.`}
        />
        <Testimonial
          name="Tal Shulman"
          job_title="CTO"
          image_path="/img/ares.svg"
          alt="Ares logo"
          text={`Yoni (AlgoMonkeys) worked with us as part of our team for 6 months project. 
        He brings a lot of experience and knowledge to the team and integrates well with ongoing projects and new ones.
        Our Computer Vision research has progressed faster and better with Yoni on board.
        Highly Recommended.`}
        />
        <Testimonial
          name="Evgeni Machavariani"
          job_title="Senior Architect | Talpiot Graduate"
          image_path="/img/carevature.svg"
          alt="Carevature logo"
          text={`We worked with AlgoMonkeys on a Machine-Vision application for our surgical robot. 
        With the help of AlgoMonkeys' knowledge, the process was very efficient. The first milestones we expected to take months were ready nearly instantly. AlgoMonkeys helped us foresee and avoid upcoming complications - providing significant insights regarding camera parameters, robust marker patterns, Illumination, etc. 
        Looking forward to working with AlgoMonkeys again.`}
        />
      </Carousel>
    </div>
  );
}
