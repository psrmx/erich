import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Reliable Information',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We offer reliable and accurate information in real-time for refugees arriving at various
        European countries; as much as possible under the constraints of the changing situation.
      </>
    ),
  },
  {
    title: 'Focus on the People',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We have seen people ready to support and people in need, but often the two ends do not meet.
        <code>erich</code> is a space in which communities and networks can be build.
      </>
    ),
  },
  {
    title: 'Powered by Humans',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We are a group of friends ready to support in whatever way we can; we want to listen and
        challenge our ideas about <i>what</i> supporting means in times of crisis.
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
