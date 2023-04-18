import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import resourcesStyles from './resources.module.css';
import Styles from '../css/custom.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import selenium from '../assets/resource_page/selenium.png';
import guidebook from '../assets/resource_page/guidebook.png';
import internet from '../assets/resource_page/internet.png';
import webdriver from '../assets/resource_page/webdriver.png';
import github from '../assets/resource_page/github.png';

function Resource() {
    return  (
        <>  
            <div className={resourcesStyles.container}>
              <span id={resourcesStyles.header}>External Resources</span>
              <div className={resourcesStyles.subtitle}>
              The goal of Elemental Selenium is to host information for testers and professionals using Selenium to <span id={resourcesStyles.bold}>stay up to date</span> with the technology they use for their work. However, <span id={resourcesStyles.bold}>we can’t cover everything</span> and never will pretend otherwise.{"\n"}</div>
              <span id={resourcesStyles.sentence}>Here’s a collection of external resources that we think are great. </span>
              <div className={resourcesStyles.flex_container}>
                <table>
                  <tr>
                    <td width="90px;" height="90px;">
                      <img src={selenium}/>
                    </td>
                    <td width="80px;">
          
                    </td>
                    <td>
                        <a href="https://www.selenium.dev/documentation/">Selenium Documentation</a>
                    </td>
                  </tr>
                  <tr>
                    <td width="90px;" height="90px;">
                      <img src={guidebook}/>
                    </td>
                    <td>
                      
                    </td>
                    <td>
                        <a href="https://seleniumguidebook.com/">Selenium Guidebook</a>
                    </td>
                  </tr>
                  <tr>
                    <td width="90px;" height="90px;">
                      <img src={guidebook}/>

                    </td>
                    <td>
                      
                    </td>
                    <td>
                        <a href="https://github.com/saucelabs/the-internet/">The Internet</a>
                    </td>
                  </tr>
                  <tr>
                    <td width="90px;" height="90px;">
                      <img src={internet}/>

                    </td>
                    <td>
                      
                    </td>
                    <td>
                        <a href="https://www.oreilly.com/library/view/hands-on-selenium-webdriver/9781098109998/">Hands-On Selenium WebDriver with Java</a>
                    </td>
                  </tr>
                  <tr>
                    <td width="90px;" height="90px;">
                      <img src={github}/>

                    </td>
                    <td>
                    
                    </td>
                    <td>
                        <a href="https://github.com/bonigarcia/selenium-webdriver-java/">Examples from Hands-On Selenium WebDriver with Java</a>
                    </td>
                  </tr>
                </table>
              </div>
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
  