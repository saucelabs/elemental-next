import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import selenium from '../../static/img/resource_page/selenium.png';
import guidebook from '../../static/img/resource_page/guidebook.png';
import internet from '../../static/img/resource_page/internet.png';
import webdriver from '../../static/img/resource_page/webdriver.png';
import github from '../../static/img/resource_page/github.png';

const Resource = () => {
  return (
    <div className='resources-container'>
      <h1>External Resources</h1>
      <p>
        The goal of Elemental Selenium is to host information for testers and professionals using Selenium to{' '}
        <b>stay up to date</b> with the technology they use for their work. However, <b>we can’t cover everything</b>{' '}
        and never will pretend otherwise.{'\n'}
      </p>
      <p>Here’s a collection of external resources that we think are great. </p>
      <table>
        <tr>
          <td>
            <img src={selenium} />
          </td>
          <td></td>
          <td>
            <a href='https://www.selenium.dev/documentation/'>Selenium Documentation &#10132;</a>
            <br />
            <p>
              An open source web app perfect for writing tests against, you can find the-internet all over our tips.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <img src={guidebook} />
          </td>
          <td></td>
          <td>
            <a href='https://seleniumguidebook.com/'>Selenium Guidebook &#10132;</a>
            <br />
            <p>
              An open source web app perfect for writing tests against, you can find the-internet all over our tips.{' '}
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <img src={guidebook} />
          </td>
          <td></td>
          <td>
            <a href='https://github.com/saucelabs/the-internet/'>The Internet &#10132;</a>
            <br />
            <p>
              An open source web app perfect for writing tests against, you can find the-internet all over our tips.{' '}
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <img src={internet} />
          </td>
          <td></td>
          <td>
            <a href='https://www.oreilly.com/library/view/hands-on-selenium-webdriver/9781098109998/'>
              Hands-On Selenium WebDriver with Java &#10132;
            </a>
            <br />
            <p>Written by the original author of Elemental Selenium, Dave Haeffner</p>
          </td>
        </tr>
        <tr>
          <td>
            <img src={github} />
          </td>
          <td></td>
          <td>
            <a href='https://github.com/bonigarcia/selenium-webdriver-java/'>
              Examples from Hands-On Selenium WebDriver with Java &#10132;
            </a>
            <br />
            <p>All of the listed examples from Hands-On Selenium WebDriver with Java by Boni Garcia.</p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <body className='resources-background'>
      <Layout title={`${siteConfig.title}`} description='Description will go into a meta tag in <head />'>
        <Resource />
      </Layout>
    </body>
  );
}
