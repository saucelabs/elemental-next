import React, {useState, useEffect, lazy, Suspense} from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

/**
 * @typedef {Object} Language
 * @property {string} value - The name of the partial file (`_<value>.mdx`).
 * @property {string} label - The label of the tab (e.g., the programming language).
 * @property {string} [tool] - The tool the example uses (e.g., 'Playwright'). Defaults to 'Selenium'.
 */

// Partials that belong to another tool without saying so in main.mdx. Selenide is a framework of its own (in Java),
// so it gets its own tool tab, like Playwright or WebdriverIO.
const KNOWN_TOOLS = {
    selenide: {tool: 'Selenide', label: 'Java'},
};

/**
 * @typedef {Object} ContentComponent
 * @property {string} label - The label of the component.
 * @property {string} tool - The tool the example uses.
 * @property {React.LazyExoticComponent<React.ComponentType<any>>} component - The lazy-loaded component.
 */

/**
 * @param {Object} props
 * @param {ContentComponent[]} props.components - The examples to show as tabs.
 * @param {string} props.groupId - Tabs with the same groupId remember the same selection.
 */
function LanguageTabs({components, groupId}) {
    return (
        <Tabs groupId={groupId}>
            {components.map((ContentComponent) => (
                <TabItem key={ContentComponent.label} value={ContentComponent.label} label={ContentComponent.label}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <ContentComponent.component/>
                    </Suspense>
                </TabItem>
            ))}
        </Tabs>
    );
}

/**
 * Shows the examples of a tip as tabs. When the tip has examples for more than one tool, the first row of tabs is the
 * tool (Selenium, Playwright, ...) and the second row is the language.
 *
 * @param {Object} props - The props for the DisplayTips component.
 * @param {Language[]} props.languages - The languages for the content.
 */
function DisplayTips({languages}) {
    /** @type {ContentComponent[]} */
    const [ContentComponents, setContentComponents] = useState([]);
    // The partials live next to the page, so we load them from the page's own folder. The frontmatter id can
    // differ from the folder name (e.g., '13-work-with-basic-auth' in '13-how-to-access-basic-auth').
    const source = useDoc().metadata.source;
    const tipFolder = source.split('/').slice(-2, -1)[0];

    useEffect(() => {
        const fetchComponents = async () => {
            const components = await Promise.all(languages.map(async (lang) => {
                const component =
                    lazy(() => import(`@site/tips/${tipFolder}/_${lang.value}.mdx`));
                const known = KNOWN_TOOLS[lang.value];
                const label = lang.tool || !known ? lang.label : known.label;
                const tool = lang.tool || known?.tool || 'Selenium';
                return {label, tool, component};
            }));
            setContentComponents(components);
        };
        fetchComponents();
    }, [languages]);

    const tools = [...new Set(ContentComponents.map((component) => component.tool))];

    return (
        <div>
            {tools.length === 1 && (
                <LanguageTabs components={ContentComponents} groupId={"elemental-selenium-tabs"}/>
            )}
            {tools.length > 1 && (
                <Tabs groupId={"elemental-tool-tabs"}>
                    {tools.map((tool) => (
                        <TabItem key={tool} value={tool} label={tool}>
                            <LanguageTabs
                                components={ContentComponents.filter((component) => component.tool === tool)}
                                groupId={tool === 'Selenium' ? "elemental-selenium-tabs" : `elemental-${tool.toLowerCase()}-tabs`}/>
                        </TabItem>
                    ))}
                </Tabs>
            )}
        </div>
    );
}

export default DisplayTips;
