import React from 'react';
import Layout from '@theme/Layout';

const Community = () => {
  return (
    <body>
      <Layout title='Elemental Selenium Commmunity' description='Get involved as community or contributor'>
        <div className='community-wrapper'>
          <h1 className='community-header'>Community</h1>
          <p>
            Elemental Selenium extends beyond our weekly mailing list. We’re open on GitHub for contributions to the
            site and for the first time, our tips are fully open source!
          </p>
          <table>
            <tr>
              <td>
                <img src='img/resource_page/github.svg' alt='' />
              </td>
              <td>
                <a href='https://github.com/saucelabs/elemental-next' target='_blank' rel='noopener noreferrer'>
                  Elemental Selenium Repo
                </a>
                <br />
                <a
                  href='https://github.com/saucelabs/elemental-next/blob/main/CONTRIBUTING.md'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Contributors Guideline
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <img src='img/resource_page/selenium.png' alt='' />
              </td>
              <td>
                <a href='https://www.selenium.dev/support/' target='_blank' rel='noopener noreferrer'>
                  Selenium Community Channels
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <img src='img/resource_page/slack.svg' alt='' />
              </td>
              <td>
                <a href='https://saucelabs.com/resources/community/slack' target='_blank' rel='noopener noreferrer'>
                  Sauce Labs Community Slack
                </a>
              </td>
            </tr>
          </table>
        </div>
        <img className='community-footer' src='img/backgrounds/community-footer.svg' alt='' />
      </Layout>
    </body>
  );
};

export default Community;
