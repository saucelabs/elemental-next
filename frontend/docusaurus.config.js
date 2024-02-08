// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// Reverse the sidebar items ordering (including nested category items)
function generateSidebarItems(items) {
    // Reverse items in categories
    const categories = items.filter((item) => item.type === 'category');
    const result = [
        {
            type: 'category',
            label: 'More Tips',
            collapsed: false,
            collapsible: false,
            items: [],
        },
    ];

    categories.forEach((category) => {
        category.items.forEach((item) => {
            result[0].items.push({type: item.type, label: item.label, id: item.id})
        })
    });
    return result;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Elemental Selenium',
    tagline: 'A free, once-weekly e-mail on how to do test automation like a Pro',
    favicon: 'img/favicon.svg',

    // Set the production url of your site here
    url: 'https://elementalselenium.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    trailingSlash: false,
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'saucelabs', // Usually your GitHub org/username.
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
    headTags: [
        {
            tagName: 'meta',
            attributes: {
                name: 'google-site-verification',
                content: 'googlee2afebcc27f8c950.html',
            },
        },
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
                        const sidebarItems = await defaultSidebarItemsGenerator(args);
                        return generateSidebarItems(sidebarItems);
                    },
                    path: 'tips',
                    routeBasePath: 'tips',
                    breadcrumbs: true,
                    editUrl: 'https://github.com/saucelabs/elemental-next/blob/main/frontend/',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    // Source: https://discord.com/channels/398180168688074762/867060369087922187/1193336693084934144
    // This plugin loops over all docs and collects the frontMatter from each one. Then it is set as global data.
    plugins: [
        function metadata(context, options) {
            return {
                name: 'metadata',
                async contentLoaded({content, actions, allContent}) {
                    const {setGlobalData} = actions;
                    let tempFrontMatter = []
                    allContent['docusaurus-plugin-content-docs'].default.loadedVersions[0].docs.map((doc) => {
                        tempFrontMatter.push(doc.frontMatter)
                    })
                    setGlobalData({aggregateFrontMatter: tempFrontMatter})
                }
            }
        }
    ],

    themeConfig:
    // /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        {
            image: 'img/elemental-selenium-social-media-card.jpeg',
            navbar: {
                hideOnScroll: false,
                logo: {
                    href: '/',
                    alt: 'Elemental Selenium Logo',
                    src: 'img/banner-light.png',
                    srcDark: 'img/banner-dark.png',
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
            docs: {
                sidebar: {
                    hideable: true,
                }
            },
            footer: {
                // style: 'dark',
                links: [
                    {
                        title: 'Tips by Level:',
                        items: [
                            {
                                label: 'Beginner',
                                to: '/tips?level=beginner',
                            },
                            {
                                label: 'Intermediate',
                                to: '/tips?level=intermediate',
                            },
                            {
                                label: 'Advanced',
                                to: '/tips?level=advanced',
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
                additionalLanguages: ['ruby', 'java', 'csharp'],
            },
            colorMode: {
                disableSwitch: false,
            },
        },
};

module.exports = config;
