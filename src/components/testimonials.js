import React from "react";
import Image from "@theme/IdealImage";
import Title, { PinkPart } from "./title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./testimonials.css";

const Testimonial = ({ name, job_title, image_path, alt, text }) => {
  return (
    <div className="testimonialBlock">
      <p>{text}</p>
      <Image className="amImg" img={image_path} alt={alt} />
      <h2>
        {name} - {job_title}
      </h2>
      <img className="quotationStart" src="/img/quotation.svg" alt="quotation start" />
      <img className="quotationEnd" src="/img/quotation.svg" alt="quotation end" />
    </div>
  );
};

export default function Testimonials() {
  var settings = {
    dots: true,
    // infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    draggable: false,
    swipe: false,
    touchMove: false,
    // speed: 700,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  };
  return (
    <div>
      <Title>
        Clients <PinkPart>React</PinkPart>
      </Title>
      <Slider {...settings}>
        <Testimonial
          name="Yaniv Knoll"
          job_title="CTO"
          image_path="/img/logos/applydesign.png"
          alt="Applydesign logo"
          text={`I had the pleasure of working with AlgoMonkeys this year as part of their computer vision and AI consulting services.
        AlgoMonkeys are at the cutting edge of the current research and tech. They provided an excellent infrastructure for a very complex computer vision algorithm encompassing computer graphics as well.
        Their communication throughout the project was always clear, quick, and professional; once they delivered the final version, they ensured everything was clear and ready for production.
        We plan to keep working with them on this project and more complex and ambitious objectives.`}
        />
        <Testimonial
          name="Tal Shulman"
          job_title="CTO"
          image_path="/img/logos/ares.svg"
          alt="Ares logo"
          text={`Yoni (AlgoMonkeys) worked with us as part of our team for 6 months project. 
        He brings a lot of experience and knowledge to the team and integrates well with ongoing projects and new ones.
        Our Computer Vision research has progressed faster and better with Yoni on board.
        Highly Recommended.`}
        />
        <Testimonial
          name="Evgeni Machavariani"
          job_title="Senior Architect | Talpiot Graduate"
          image_path="/img/logos/carevature.svg"
          alt="Carevature logo"
          text={`We worked with AlgoMonkeys on a Machine-Vision application for our surgical robot. 
        With the help of AlgoMonkeys' knowledge, the process was very efficient. The first milestones we expected to take months were ready nearly instantly. AlgoMonkeys helped us foresee and avoid upcoming complications - providing significant insights regarding camera parameters, robust marker patterns, Illumination, etc. 
        Looking forward to working with AlgoMonkeys again.`}
        />
        <Testimonial
          name="Ofek Kirzner"
          job_title="VP R&D"
          image_path="/img/logos/classiq_black.svg"
          alt="Classiq logo"
          text={`Yoni consulted me in the past and I have found his pieces of advice priceless. From the right package for our use, to an algorithmic junction or properties of relevant employees.
         Yoni's vast experience, open mindedness and willingness to help are key. I am lucky to have him in my network, and I believe you should too.`}
        />
      </Slider>
    </div>
  );
}
