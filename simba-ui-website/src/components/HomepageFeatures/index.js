import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>Follow simple instructions to have everything set up in no time.</>
    ),
  },
  {
    title: "Developer Experience",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Guaranteed to boost your productivity when building your app or website.
      </>
    ),
  },
  {
    title: "Active Community",

    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        We're a team of active maintainers ready to help you whenever you need.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
