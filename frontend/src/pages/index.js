import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
/* will get all the styles in styles folder */
import styles from '../css/custom.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
    <body>
      <h1 className='h1'>Make sure your code lands</h1>
      <p className='index'>A free weekly email of tips to help make Selenium one of the most robust browser automation tools out there.</p>
      <form>
        <input type="email" id="email" placeholder='email-address@send-me-tips.com'></input>
        <button className='button button--secondary button--lg'>Join the mailing list</button>
      </form>
      <a href='tips' className='link'>Skip it, take me to the tips</a>
    </body>
    
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description='Description will go into a meta tag in <head />'>
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
