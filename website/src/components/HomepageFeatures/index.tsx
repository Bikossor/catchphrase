import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Scalable",
    Svg: require("@site/static/img/undraw_stepping_up.svg").default,
    description: <>Catchphrase can be used for projects of any size.</>,
  },
  {
    title: "Typesafe",
    Svg: require("@site/static/img/undraw_code_typing.svg").default,
    description: (
      <>
        Catchphrase is fully typed so you can use your translations with
        confidence.
      </>
    ),
  },
  {
    title: "Maintainable",
    Svg: require("@site/static/img/undraw_maintenance.svg").default,
    description: (
      <>
        Catchphrase is built with maintainability in mind. It's easy to manage
        and update your translations.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
