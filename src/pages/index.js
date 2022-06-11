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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={"tab title"}
      description={`${siteConfig.title}: ${siteConfig.tagline}`}
    >
      <HomepageHeader />
      <main>
        <div className={clsx("hero shadow--lw", styles.heroBanner)}>
          <div className="container">
            <h1 className="hero__title">{"Building something new..."}</h1>
            {/* <p className="hero__subtitle">
              {"In the meantime you can shoot us "}
            </p>
            <Link className="hero__subtitle" to="/blog">
              an email
            </Link>
            <p className="hero__subtitle">{"OR"}</p>
            <p className="hero__subtitle">
              {"check out our older Computer Vision course site at: "}
            </p> */}
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--block"
                to="mailto:chechik.yoni@gmail.com"
              >
                Shoot us an email at: chechik.yoni@gmail.com
              </Link>
            </div>
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
      </main>
    </Layout>
  );
}
