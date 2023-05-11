import React, { useState } from "react";
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Icard from '@site/src/components/icard';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
/* will get all the styles in styles folder */
import styles from '../css/custom.css';

const HomepageHeader = () => {
  // const [tip, setTip] = useState(Data);
  const  [tips, setTips] = useState([
                {
                  "title": "1: How To Upload A File",
                  "contentURl": "docs/how-to-upload-a-file/1-upload-a-file-ruby",
                  "level": 1,
                  "text": "Uploading a file is a common piece of functionality found on the web but when trying to automate it, you get prompted with a dialog box that is just out of reach for Selenium. In these cases people often look to a third-party tool to manipulate this window."
                },
                {
                  "title": "2: Download A File",
                  "contentUrl": "docs/download-a-file/2-download-a-file-ruby",
                  "level": 2,
                  "text": "Just like with uploading files we hit the same issue with downloading them a dialog box just out of Selenium's reach. With some additional configuration, we can side-step the dialog box."
                },
                {
                  "title": "3: Work With Frames",
                  "contentUrl": "docs/work-with-frames/3-work-with-frames-ruby",
                  "level": 1,
                  "text": "In this tip, you'll learn how to work with frames and write tests against them. On occasion, we may encounter relics of the front-end world, such as frames."
              }])
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
    <body>
      <h1 className='h1'>Make sure your code lands</h1>
      <p className='index'>A <i>free</i> weekly email of tips to help make Selenium one of the most robust browser automation tools out there.</p>
      <form>
        <input type="email" id="email" placeholder='email-address@send-me-tips.com'></input>
        <button className='button button--secondary button--lg'>Join the mailing list</button>
      </form>
      <a href='tips' className='link'>Skip it, take me to the tips</a>

      <div className="tip-cards">
      {tips.map((tip) => (
        <>
          <Icard
          contentUrl={tip.contentUrl}
          level={tip.level}
          title={tip.title}
          text={tip.text} />
          </>
      ))}
      </div>
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
      {/* <Icard tip={tip} /> */}

      
    </Layout>
  );
}
