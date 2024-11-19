import React, {useState, useEffect, lazy, Suspense} from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

/**
 * @typedef {Object} Language
 * @property {string} value - The value of the language.
 * @property {string} label - The label of the language.
 */

/**
 * @typedef {Object} ContentComponent
 * @property {string} label - The label of the component.
 * @property {React.LazyExoticComponent<React.ComponentType<any>>} component - The lazy-loaded component.
 */

/**
 * @param {Object} props - The props for the DisplayTips component.
 * @param {Language[]} props.languages - The languages for the content.
 */
function DisplayTips({languages}) {
    /** @type {ContentComponent[]} */
    const [ContentComponents, setContentComponents] = useState([]);
    const tipId = useDoc().frontMatter.id;

    useEffect(() => {
        const fetchComponents = async () => {
            const components = await Promise.all(languages.map(async (lang) => {
                const component =
                    lazy(() => import(`@site/tips/${tipId}/_${lang.value}.mdx`));
                return {label: lang.label, component};
            }));
            setContentComponents(components);
        };
        fetchComponents();
    }, [languages]);

    return (
        <div>
            {ContentComponents.length > 0 && (
                <Tabs groupId={"elemental-selenium-tabs"}>
                    {ContentComponents.map((ContentComponent, index) => (
                        <TabItem key={index} value={ContentComponent.label} label={ContentComponent.label}>
                            <Suspense fallback={<div>Loading...</div>}>
                                <ContentComponent.component/>
                            </Suspense>
                        </TabItem>
                    ))}
                </Tabs>
            )}
        </div>
    );
}

export default DisplayTips;
