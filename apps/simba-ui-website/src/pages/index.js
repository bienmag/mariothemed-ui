import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { MyButton } from "tailwind-simba-ui";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Tailwind Simba UI - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <MyButton size="sm">Small</MyButton>
        <MyButton size="md">Std</MyButton>
        <MyButton size="lg">Large</MyButton>
        <MyButton variant="outline">Outline</MyButton>
        <MyButton variant="solid">Solid</MyButton>
        <MyButton variant="ghost">Ghost</MyButton>
        <MyButton variant="link">Link</MyButton>
      </main>
    </Layout>
  );
}
