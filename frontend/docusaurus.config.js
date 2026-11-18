// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import fs from 'fs';
import path from 'path';

// Code colors of the Sauce Labs brand, on the Pine code blocks. Every color has enough contrast with the background
// (WCAG AA, 4.5:1).
const codeTheme = {
    plain: {color: '#E6E6DE', backgroundColor: '#192319'},
    styles: [
        {types: ['comment', 'prolog', 'doctype', 'cdata'], style: {color: '#8F948D', fontStyle: 'italic'}},
        {types: ['keyword', 'boolean', 'important', 'atrule', 'selector'], style: {color: '#ABE082'}},
        {types: ['string', 'char', 'attr-value', 'template-string', 'regex', 'url'], style: {color: '#F1E082'}},
        {types: ['function', 'class-name', 'maybe-class-name', 'tag', 'builtin', 'property'], style: {color: '#EBEDB8'}},
        {types: ['number', 'constant', 'symbol', 'annotation', 'decorator', 'attr-name'], style: {color: '#FFB098'}},
        {types: ['punctuation', 'operator'], style: {color: '#B0B3AD'}},
        {types: ['deleted'], style: {color: '#FFB098'}},
        {types: ['inserted'], style: {color: '#ABE082'}},
    ],
};

// Gives a paragraph that starts with a bold "NOTE:" (e.g., `__NOTE:__ We are using ...`) the `note` class, so it
// shows as a callout.
function remarkNote() {
    const visit = (node) => {
        const first = node.children?.[0];
        if (node.type === 'paragraph' && first?.type === 'strong'
            && /^note:?$/i.test(first.children?.[0]?.value?.trim() || '')) {
            node.data = {...node.data, hProperties: {className: ['note']}};
        }
        (node.children || []).forEach(visit);
    };
    return (tree) => visit(tree);
}

// Puts each run of <DefaultAvatar> elements (the contributors of a tip) in a <div className="es-people">, so they show
// two per row.
function remarkPeople() {
    const isAvatar = (node) => node.type === 'mdxJsxFlowElement' && node.name === 'DefaultAvatar';
    const visit = (node) => {
        if (!node.children) {
            return;
        }
        const children = [];
        node.children.forEach((child) => {
            const last = children[children.length - 1];
            if (isAvatar(child) && last?.data?.people) {
                last.children.push(child);
            } else if (isAvatar(child)) {
                children.push({
                    type: 'mdxJsxFlowElement',
                    name: 'div',
                    attributes: [{type: 'mdxJsxAttribute', name: 'className', value: 'es-people'}],
                    children: [child],
                    data: {people: true},
                });
            } else {
                visit(child);
                children.push(child);
            }
        });
        node.children = children;
    };
    return (tree) => visit(tree);
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
    favicon: 'img/sauce/sauce-mark.svg',

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
                    // The tip pages show their own contents list instead of a sidebar
                    sidebarPath: false,
                    remarkPlugins: [remarkNote, remarkPeople],
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
                    // The fonts of the Sauce Labs brand: Atkinson Hyperlegible for text and labels, JetBrains Mono for
                    // code, and P22 Mackinac for headings (in static/fonts, loaded by custom.css)
                    customCss: [
                        require.resolve('@fontsource-variable/jetbrains-mono/index.css'),
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
                title: 'Elemental Selenium',
                logo: {
                    href: '/',
                    alt: 'Sauce Labs',
                    src: 'img/sauce/sauce-lockup.svg',
                    width: 116,
                    height: 22,
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
                        label: 'Browse the tips',
                        to: '/tips',
                        position: 'right',
                        className: 'navbar__cta',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Tips by level',
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
                        title: 'Get involved',
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
                        title: 'External resources',
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
                copyright: `© ${new Date().getFullYear()} Sauce Labs Inc., all rights reserved`,
            },
            prism: {
                theme: codeTheme,
                additionalLanguages: ['ruby', 'java', 'csharp', 'json'],
            },
            // The Sauce Labs brand has a single, light color scheme
            colorMode: {
                defaultMode: 'light',
                disableSwitch: true,
                respectPrefersColorScheme: false,
            },
        },
};

module.exports = config;
