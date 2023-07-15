import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "FUN",
    Svg: require("@site/static/img/icon-mario.svg").default,
    description: <>Say goodbye to boring designs</>,
  },
  {
    title: "COLORFUL",
    Svg: require("@site/static/img/icon-mario.svg").default,
    description: (
      <>
        UI is designed to bring joy to your browsing experience with its vibrant
        colors
      </>
    ),
  },
  {
    title: "EASY TO USE",
    Svg: require("@site/static/img/icon-mario.svg").default,
    description: <>Easy to use!</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <div className="flex justify-center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
