import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Elemental Selenium was designed as a resource for Selenium tips, that are easily accesible through the docs or email.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Elemental Selenium lets you focus on your testing, and we&apos;ll do the chores. 
      </>
    ),
  },
  {
    title: 'Powered by Sauce Labs',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend your knowledge of Selenium by reading tips provided by experts in their area.
      </>
    ),
  },
];

function Feature({/*Svg,*/ title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/*<div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>*/}
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
