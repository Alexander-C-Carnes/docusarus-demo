import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Global Reach',
    Svg: require('@site/static/img/point 1 svg.svg').default,
    description: (
      <>
        Now you can reach millions of potential customers using our platform
        and global reach. With Firebolt®, your app is powered by RDK technology
        and the backing of our partners including Comcast, LGI, and Sky.
      </>
    ),
  },
  {
    title: 'Write Once, Run Anywhere',
    Svg: require('@site/static/img/point 2.svg').default,
    description: (
      <>
      Firebolt® delivers application solutions to fit your unique business needs.
      Whether it’s a web or Lightning App, native or hybrid,
      your team is empowered to create one-of-a-kind user experiences
      for any RDK-enabled device.
      </>
    ),
  },
  {
    title: 'Fast and powerful',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>  Build apps in a fraction of the time and cost using Firebolt™’s powerful and easy to use platform

- Supports rich media elements
- Modern WebKit browser engine with full feature set
- Cross-platform scalable apps
- Optimized for resource constrained embedded devices


      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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
