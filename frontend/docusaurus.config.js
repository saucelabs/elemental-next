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
  url: 'https://elementalselenium.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  trailingSlash: false,
  baseUrl: '/',

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
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          sidebarItemsGenerator: async function () {
            return await import('./sidebars.js');
          },
          path: 'docs',
          breadcrumbs: true,
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    // /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: null,
        hideOnScroll: false,
        logo: {
          href: '/',
          alt: 'Elemental Selenium Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'Tips',
            to: '/tips',
            position: 'right',
          },
          {
            label: 'External Resources',
            to: '/resources',
            position: 'right',
          },
          {
            label: 'Get Involved',
            to: '/community',
            position: 'right',
          },

          {
            to: '/signup',
            position: 'right',
            label: 'Join the mailing list',
            className: 'nav-button',
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
                label: 'Beginner tips',
                to: '/',
              },
              {
                label: 'Fundamentals',
                to: '/',
              },
              {
                label: 'Troubleshooting',
                to: '/',
              },
            ],
          },
          {
            title: 'Get Involved:',
            items: [
              {
                label: 'Elemental Selenium on Github',
                to: 'https://github.com/saucelabs/elemental-next',
              },
              {
                label: 'Elemental Selenium Team on Slack',
                to: 'https://saucelabs.com/resources/community/slack',
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
                label: 'Selenium Community',
                to: 'https://www.selenium.dev/support/',
              },
              {
                label: 'The Team Behind',
                to: 'https://saucelabs.com/resources/topic-hub/open-source-fellowship',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Sauce Labs Inc., all rights reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['ruby'],
      },
      colorMode: {
        disableSwitch: true,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'RO95H65NEO',

        // Public API key: it is safe to commit it
        apiKey: '8d249abc4671e5554fe8f451ffa5db50',

        indexName: 'Elemental Selenium',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
      },
    },
};

module.exports = config;
