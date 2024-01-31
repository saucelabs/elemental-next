import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import ContentCard from "../components/contentCard";

const content = [
    {
        id: 1,
        title: 'Selenium Documentation',
        paragraph: 'An open source web app perfect for writing tests against, you can find the-internet all over our tips.',
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
        paragraph: 'Written by one of the Selenium maintainers, Boni Garcia',
        link: 'https://www.oreilly.com/library/view/hands-on-selenium-webdriver/9781098109998/',
        img: 'img/resource_page/guidebook.png',
        alt: 'Guidebook Logo',
    },
    {
        id: 4,
        title: 'Examples from Hands-On Selenium WebDriver',
        paragraph: 'All of the listed examples from Hands-On Selenium WebDriver with Java by Boni Garcia.',
        link: 'https://github.com/bonigarcia/selenium-webdriver-java/',
        img: 'img/resource_page/github.png',
        alt: 'Github Logo',
    },
];

const Resources = () => {
    useEffect(() => {
        document.body.style.backgroundImage = 'url("./img/backgrounds/community-footer.svg")';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'top center';
        document.body.style.backgroundAttachment = 'fixed';
    }, [])

    return (
        <Layout
            title={"External Resources"}
            description="External resources for test automation Pros">
            <header className={"hero padding-bottom--md"}>
                <div className="container">
                    <h1 className="hero__title">External Resources</h1>
                    <p className="hero__subtitle">
                        The goal of Elemental Selenium is to host information for testers and professionals to{' '}
                        <b>stay up to date</b> with the technology they use for their work. However,{' '}
                        <b>we can’t cover everything</b> and never will pretend otherwise.{'\n'}
                    </p>
                </div>
            </header>
            <main>
                <div className="padding-vert--md">
                    <div className="container">
                        <div className="row">
                            <div className="col col--10">
                                <div className="row">
                                    {content.map((item) => (
                                        <ContentCard key={item.id} content={item}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/*<img className='community-footer' src='img/backgrounds/resources-footer.svg' alt=''/>*/}
        </Layout>
    );
};

export default Resources;
