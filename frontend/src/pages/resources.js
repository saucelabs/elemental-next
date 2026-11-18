import React from 'react';
import Layout from '@theme/Layout';
import PageHero from "../components/pageHero";
import LinkCard from "../components/linkCard";
import ContributeBand from "../components/contributeBand";

const content = [
    {
        id: 1,
        title: 'Selenium Documentation',
        paragraph: 'The official Selenium documentation, maintained by the Selenium project.',
        link: 'https://www.selenium.dev/documentation/',
        img: 'img/resource_page/selenium.png',
        alt: 'Selenium Logo',
    },
    {
        id: 2,
        title: 'The Internet',
        paragraph: 'An open source web app perfect for writing tests against, you can find the-internet all over our tips.',
        link: 'https://github.com/saucelabs/the-internet/',
        img: 'img/resource_page/internet.png',
        alt: 'The Internet Logo',
    },
    {
        id: 3,
        title: 'Hands-On Selenium WebDriver with Java',
        paragraph: 'Written by one of the Selenium maintainers, Boni Garcia.',
        link: 'https://www.oreilly.com/library/view/hands-on-selenium-webdriver/9781098109998/',
        img: 'img/resource_page/guidebook.png',
        alt: 'Guidebook Logo',
    },
    {
        id: 4,
        title: 'Examples from Hands-On Selenium WebDriver',
        paragraph: 'All the listed examples from Hands-On Selenium WebDriver with Java by Boni Garcia.',
        link: 'https://github.com/bonigarcia/selenium-webdriver-java/',
        img: 'img/resource_page/github.png',
        alt: 'Github Logo',
    },
];

const Resources = () => {
    return (
        <Layout
            title={"External Resources"}
            description="External resources for test automation Pros">
            <PageHero
                crumb="External Resources"
                title="External resources"
                lead={'The goal of Elemental Selenium is to host information for testers and professionals to stay up '
                    + 'to date with the technology they use for their work. However, we can’t cover everything and '
                    + 'never will pretend otherwise.'}/>
            <main>
                <section className="es-block">
                    <div className="es-wrap es-linkgrid">
                        {content.map((item) => <LinkCard key={item.id} {...item}/>)}
                    </div>
                </section>
                <ContributeBand/>
            </main>
        </Layout>
    );
};

export default Resources;
