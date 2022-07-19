import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Testimonials from "../components/testimonials";
import ContactUs from "../components/contact_us";
import AMHero from "../components/am_hero";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={`${siteConfig.title}: ${siteConfig.tagline}`}>
      <AMHero />
      <main>
        <Testimonials />
        <ContactUs />
      </main>
    </Layout>
  );
}
