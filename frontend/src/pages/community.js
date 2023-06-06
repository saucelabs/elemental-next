import React from 'react';
import Layout from '@theme/Layout';

const content = [
  {
    id: 1,
    title: 'Elemental Selenium Repo',
    paragraph:
      'This project is open source. In the repository you enter all tips in a transparent way to be audited, fixed, copied and distributed, following the freedoms of the free software movement.',
    link: 'https://github.com/saucelabs/elemental-next',
    img: 'img/resource_page/github.svg',
  },
  {
    id: 2,
    title: 'Contributors Guideline',
    paragraph:
      'Your contributions are highly welcome and encouraged, as this is a community project. Find how to contribute here.',
    link: 'https://github.com/saucelabs/elemental-next/blob/main/CONTRIBUTING.md',
    img: 'img/resource_page/selenium.png',
  },
  {
    id: 3,
    title: 'Selenium Community Channels',
    paragraph:
      'If you find any problems using Selenium, there are several places where you can search for help and where volunteers like you and me will spend their time trying to help you save yours.',
    link: 'https://www.selenium.dev/support/',
    img: 'img/resource_page/chat-room.png',
  },
  {
    id: 4,
    title: 'Sauce Labs Community Slack',
    paragraph:
      'In the Sauce Labs community you can find core maintainers of this project, and automation experts to help you with the challenges of creating code that you and others can trust.',
    link: 'https://saucelabs.com/resources/community/slack',
    img: 'img/resource_page/slack.svg',
  },
];

const Community = () => {
  return (
    <body>
      <Layout title='Elemental Selenium Commmunity' description='Get involved as community or contributor'>
        <div className='community-wrapper'>
          <div className='community-header'>
            <h1>Community</h1>
            <p>
              Elemental Selenium extends beyond <a href='https://elementalselenium.com/signup'>our weekly mailing list</a>
              . We’re open on GitHub for contributions to the site and for the first time, our tips are fully open source!
            </p>
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
        <img className='community-footer' src='img/backgrounds/community-footer.svg' alt='' />
      </Layout>
    </body>
  );
};

export default Community;
