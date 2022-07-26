import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        A zero dependency application platform to build apps for RDK powered connected home devices so you can reach millions.
      </>
    ),
  },
  {
    title: 'Reach Customers Globally',
    Svg: require('@site/static/img/global.svg').default,
    description: (
      <>
        Now you can reach millions of potential customers using our platform and global reach. With Firebolt®, your app is powered by RDK technology and the backing of our partners including Comcast, LGI, and Sky.
      </>
    ),
  },
  {
    title: 'Flexibile Development',
    Svg: require('@site/static/img/flexible.svg').default,
    description: (
      <>
        Firebolt® delivers application solutions to fit your unique business needs. Whether it’s a web or Lightning App, native or hybrid, your team is empowered to create one-of-a-kind user experiences for any RDK-enabled device.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
