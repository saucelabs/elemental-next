import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import ContentCard from "../components/contentCard";

const content = [
    {
        id: 1,
        title: 'Elemental Selenium Repo',
        paragraph:
            'This project is open source. In the repository you enter all tips in a transparent way to be audited, fixed, copied and distributed, following the freedoms of the free software movement.',
        link: 'https://github.com/saucelabs/elemental-next',
        img: 'img/resource_page/github.svg',
        alt: 'Github Logo',
    },
    {
        id: 2,
        title: 'Contributors Guideline',
        paragraph:
            'Your contributions are highly welcome and encouraged, as this is a community project. Find how to contribute here.',
        link: 'https://github.com/saucelabs/elemental-next/blob/main/CONTRIBUTING.md',
        img: 'img/resource_page/selenium.png',
        alt: 'Selenium Logo',
    },
    {
        id: 3,
        title: 'Selenium Community Channels',
        paragraph:
            'If you find any problems using Selenium, there are several places where you can search for help and where volunteers like you and me will spend their time trying to help you save yours.',
        link: 'https://www.selenium.dev/support/',
        img: 'img/resource_page/chat-room.png',
        alt: 'Chat Room Logo',
    },
    {
        id: 4,
        title: 'Sauce Labs Community Slack',
        paragraph:
            'In the Sauce Labs community you can find core maintainers of this project, and automation experts to help you with the challenges of creating code that you and others can trust.',
        link: 'https://saucelabs.com/resources/community/slack',
        img: 'img/resource_page/slack.svg',
        alt: 'Slack Logo',
    },
];

const Community = () => {
    return (
        <Layout
            title={"Community"}
            description="Get involved as community or contributor">
            <header className={"hero padding-bottom--md"}>
                <div className="container">
                    <h1 className="hero__title">Community</h1>
                    <p className="hero__subtitle">
                        Elemental Selenium extends beyond <a href='/signup'>our weekly mailing list</a>.
                        We’re open for contributions, all our content is open source!
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
            {/*<img className='community-footer' src='img/backgrounds/community-footer.svg' alt=''/>*/}
        </Layout>
    );
};

export default Community;
