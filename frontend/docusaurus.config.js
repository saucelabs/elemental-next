// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes} from 'prism-react-renderer';
import fs from 'fs';
import path from 'path';

// Replaces the colors of a Prism theme that don't have enough contrast with its background (WCAG AA, 4.5:1),
// and removes the opacity of the faded tokens (e.g., namespaces in Java imports), which lowers their contrast too
function withColors(theme, replacements) {
    return {
        ...theme,
        styles: theme.styles.map((style) => {
            const {opacity, ...rest} = style.style;
            const color = replacements[rest.color];
            return {...style, style: color ? {...rest, color} : rest};
        }),
    };
}

const codeTheme = withColors(themes.github, {
    '#999988': '#636c76', // comments
    '#e3116c': '#b3135a', // strings
    '#36acaa': '#0a7d7b', // numbers, booleans, constants
    '#00a4db': '#005cc5', // keywords
    '#d73a49': '#cf222e', // functions, tags
});

const darkCodeTheme = withColors(themes.dracula, {
    'rgb(98, 114, 164)': '#8b9bc8', // comments
});

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
        category.items.filter(item => item.type === 'doc').forEach((item) => {
            result[0].items.push({type: item.type, label: item.label, id: item.id})
        })
    });
    return result;
}

// Reads the entries of the <DisplayTips> block of a tip (e.g., {label: 'C#', value: 'playwright-csharp', tool:
// 'Playwright'}). Returns them as `languages` ({tool, label, value}; Selenide is a tool of its own, and the default
// tool is Selenium), and the first code file each partial (_<value>.mdx) shows as `examples` ({value: {codePath,
// language}}).
function tipLanguages(file) {
    const entry = /\{\s*label:\s*'([^']+)',\s*value:\s*'([^']+)'(?:,\s*tool:\s*'([^']+)')?/g;
    const entries = [...fs.readFileSync(file, 'utf8').matchAll(entry)];
    const examples = {};
    entries.forEach(([, , value]) => {
        const partial = path.join(path.dirname(file), `_${value}.mdx`);
        const code = fs.existsSync(partial)
            && fs.readFileSync(partial, 'utf8').match(/codePath=\{"([^"]+)"\}\s+language=\{"([^"]+)"\}/);
        if (code) {
            examples[value] = {codePath: code[1], language: code[2]};
        }
    });
    return {
        languages: entries.map(([, label, value, tool]) => value === 'selenide'
            ? {tool: 'Selenide', label: 'Java', value}
            : {tool: tool || 'Selenium', label, value}),
        examples,
    };
}

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Elemental Selenium',
    tagline: 'A free collection of tips to do test automation like a Pro',
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
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'warn',
        },
    },

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
                    include: ['**/*.mdx'],
                    exclude: ['**/_*.mdx', 'cards/**/*'],
                    breadcrumbs: true,
                    editUrl: 'https://github.com/saucelabs/elemental-next/blob/main/frontend/',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                blog: false,
                theme: {
                    // The fonts of saucelabs.com that are free (Fraunces stands in for its serif), served by the site
                    customCss: [
                        require.resolve('@fontsource-variable/fraunces/index.css'),
                        require.resolve('@fontsource-variable/atkinson-hyperlegible-next/index.css'),
                        require.resolve('@fontsource-variable/atkinson-hyperlegible-mono/index.css'),
                        require.resolve('./src/css/custom.css'),
                    ],
                },
                gtag: {
                    trackingID: 'G-QY5T3BLYC5',
                }
            }),
        ],
    ],

    // Source: https://discord.com/channels/398180168688074762/867060369087922187/1193336693084934144
    // This plugin loops over all docs and collects the frontMatter from each one. Then it is set as global data.
    // It also adds the date of the last update and the tools and languages of the <DisplayTips> block of each tip,
    // which the home page uses.
    plugins: [
        function metadata(context, options) {
            return {
                name: 'metadata',
                async allContentLoaded({actions, allContent}) {
                    const {setGlobalData} = actions;
                    let tempFrontMatter = []
                    allContent['docusaurus-plugin-content-docs']
                        .default
                        .loadedVersions[0]
                        .docs
                        .filter(doc => doc.frontMatter.id !== undefined)
                        .map((doc) => tempFrontMatter.push({
                            ...doc.frontMatter,
                            lastUpdatedAt: doc.lastUpdatedAt,
                            ...tipLanguages(path.join(context.siteDir, doc.source.replace('@site/', ''))),
                        }))
                    setGlobalData({aggregateFrontMatter: tempFrontMatter})
                }
            }
        },
    ],

    themeConfig:
    // /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        {
            image: 'img/social-card.png',
            navbar: {
                hideOnScroll: false,
                logo: {
                    href: '/',
                    alt: 'Elemental Selenium Logo',
                    src: 'img/banner-light.svg',
                    srcDark: 'img/banner-dark.svg',
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
                                label: 'GitHub',
                                to: 'https://github.com/saucelabs/elemental-next',
                            },
                            {
                                label: 'Discussions',
                                to: 'https://github.com/saucelabs/elemental-next/discussions',
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
                        ],
                    },
                ],
                copyright: `© ${new Date().getFullYear()} <a href="https://saucelabs.com" target="_blank"
                    rel="noopener noreferrer" aria-label="Sauce Labs Inc. (opens in a new tab)">Sauce Labs Inc.</a>, all
                    rights reserved`,
            },
            prism: {
                theme: codeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['ruby', 'java', 'csharp', 'json'],
            },
            colorMode: {
                disableSwitch: false,
            },
        },
};

module.exports = config;
