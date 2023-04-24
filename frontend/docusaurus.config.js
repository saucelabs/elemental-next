// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Elemental Selenium',
  tagline: 'The Place for Tips',
  favicon: 'img/ES.ico',

  // Set the production url of your site here
  url: 'https://opensource.saucelabs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/elemental-next',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'saucelabs', // Usually your GitHub org/user name.
  projectName: 'elemental-next', // Usually your repo name.
  deploymentBranch: 'gh-pages', // The branch that GitHub pages deploys from.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Elemental Selenium',
        // logo: {
        //   alt: 'Elemental Selenium Logo',
        //   src: 'img/ES.svg',
        // },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Tips',
          },
          {
            to: 'https://github.com/saucelabs/elemental-next',
            label: 'Contribute',
            position: 'right',
          },
          {
            to: 'https://github.com/facebook/docusaurus',
            label: 'External Resources',
            position: 'right',
          },
          {
            to: '/index',
            label: 'Sign In',
            position: 'right',
          },
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          {
            title: 'Tips Archive:',
            items: [
              {
                label: 'All Tips',
                to: '/tips',
              },
            ],
          },
          {
            title: 'Community:',
            items: [
              {
                label: 'Elemental Selenium on Github',
                to: 'https://github.com/saucelabs/elemental-next',
              },
            ],
          },
          {
            title: 'External Resources:',
            items: [
              {
                label: 'Selenium Docs',
                to: 'https://www.selenium.dev/documentation/',
              },
              {
                label: 'Selenium Slack',
                to: 'https://seleniumhq.slack.com/join/shared_invite/zt-1neaoa52v-FTzht5cd2eYKwSobbhQkEw#/shared-invite/email',
              },
              {
                label: 'Selenium Guidebook',
                to: 'https://seleniumguidebook.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Elemental Bromine, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['ruby'],
      },
    }),
};

module.exports = config;
