import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Testimonials from "../components/carousel";
import Title, { PinkPart } from "../components/title";
import Button from "../components/button";
import ContactUs from "../components/contact_us";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={`${siteConfig.title}: ${siteConfig.tagline}`}>
      <header>
        <h1 className="hero__title">AlgoMonkeys</h1>
      </header>
      <main>
        <Title>
          test <PinkPart>tehfhgfh sghfhgft g bold</PinkPart> gdgfd
        </Title>
        <Button>Contact Us</Button>
        <Testimonials />
        <ContactUs />
      </main>
    </Layout>
  );
}
