import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function ContactUs() {
  return (
    <div className={clsx("hero shadow--lw", styles.heroBanner)}>
      <div className="container">
        {/* <ContactForm /> */}
        <h1 id="contact_us" name="contact_us" className="hero__title">
          {"Contact Us"}
        </h1>

        <form
          id="form"
          // action="https://formsubmit.co/contact@algomonkeys.io"
          action="https://formsubmit.co/269a11a5adee914f7e68e46593a13291"
          method="POST"
        >
          <input type="text" name="name" placeholder="Name*" required />
          <input type="email" name="email" placeholder="Email*" required />
          <textarea
            placeholder="Your Message (Not Mandatory)"
            name="message"
            rows="5"
          />
          <button type="submit">Send</button>
          <input
            type="hidden"
            name="_next"
            value="https://www.algomonkeys.io"
          />
        </form>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={`${siteConfig.title}: ${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <div className={clsx("hero shadow--lw", styles.heroBanner)}>
          <div className="container">
            <h1 className="hero__title">{"Building something new..."}</h1>
            <p />
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--block"
                to="https://www.aiismath.com"
              >
                Check our old Computer Vision course
              </Link>
            </div>
          </div>
        </div>
        <ContactUs />
      </main>
    </Layout>
  );
}
