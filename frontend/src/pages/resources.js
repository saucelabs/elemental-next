import React from 'react';
import Layout from '@theme/Layout';

const content = [
  {
    id: 1,
    title: 'Selenium Documentation',
    paragraph: 'An open source web app perfect for writing tests against, you can find the-internet all over our tips.',
    link: 'https://www.selenium.dev/documentation/',
    img: 'img/resource_page/selenium.png',
  },
  {
    id: 2,
    title: 'The Internet',
    paragraph: 'An open source web app perfect for writing tests against, you can find the-internet all over our tips.',
    link: 'https://github.com/saucelabs/the-internet/',
    img: 'img/resource_page/internet.png',
  },
  {
    id: 3,
    title: 'Hands-On Selenium WebDriver with Java',
    paragraph: 'Written by one of the Selenium maintainers, Boni Garcia',
    link: 'https://www.oreilly.com/library/view/hands-on-selenium-webdriver/9781098109998/',
    img: 'img/resource_page/guidebook.png',
  },
  {
    id: 4,
    title: 'Examples from Hands-On Selenium WebDriver',
    paragraph: 'All of the listed examples from Hands-On Selenium WebDriver with Java by Boni Garcia.',
    link: 'https://github.com/bonigarcia/selenium-webdriver-java/',
    img: 'img/resource_page/github.png',
  },
];

const Resources = () => {
  return (
    <body>
      <Layout title='Elemental Selenium Resources' description='External resources for Selenium testers'>
        <div className='resources-container'>
          <div className='resources-header'>
            <h1>External Resources</h1>
            <p>
              The goal of Elemental Selenium is to host information for testers and professionals using Selenium to{' '}
              <b>stay up to date</b> with the technology they use for their work. However,{' '}
              <b>we can’t cover everything</b> and never will pretend otherwise.{'\n'}
            </p>
            <p>Here’s a collection of external resources that we think are great. </p>
          </div>
          <div className='resource-content-container'>
            {content.map((item) => (
              <div key={item.id} className='content-item'>
                <img src={item.img} alt='Content Image' className='content-image' />
                <div className='content-text'>
                  <h2>
                    <a href={item.link} target='_blank' rel='noopener noreferrer'>
                      {item.title} <span>&#10132;</span>
                    </a>
                  </h2>
                  <p className='content-paragraph'>{item.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img className='community-footer' src='img/backgrounds/resources-footer.svg' alt='' />
      </Layout>
    </body>
  );
};

export default Resources;
