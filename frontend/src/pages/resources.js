import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import resourcesStyles from './resources.module.css';
import Styles from '../css/custom.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Resource() {
    return  (
        <>  
            <div className={resourcesStyles.container}>
            <span id={resourcesStyles.header}>External Resources</span>
            <div className={resourcesStyles.subtitle}>
            The goal of Elemental Selenium is to host information for testers and professionals using Selenium to <span id={resourcesStyles.bold}>stay up to date</span> with the technology they use for their work. However, <span id={resourcesStyles.bold}>we can’t cover everything</span> and never will pretend otherwise.{"\n"}</div>
            <span id={resourcesStyles.sentence}>Here’s a collection of external resources that we think are great. </span>
            </div>
        </>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title={`${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <main>
          <Resource />
        </main>
      </Layout>
    );
  }
  