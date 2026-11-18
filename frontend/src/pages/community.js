import React from 'react';
import Layout from '@theme/Layout';
import Link from "@docusaurus/Link";
import PageHero from "../components/pageHero";
import LinkCard from "../components/linkCard";

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
            <PageHero
                crumb="Get Involved"
                title="Community"
                lead={<>Elemental Selenium extends beyond our <Link to="/tips">tips</Link>. We’re open for
                    contributions, all our content is open source!</>}>
                <Link className="es-btn es-btn--pop"
                      to="https://github.com/saucelabs/elemental-next/blob/main/CONTRIBUTING.md">Write a tip</Link>
                <Link className="es-btn es-btn--ghost-inv" to="https://github.com/saucelabs/elemental-next">
                    View on GitHub
                </Link>
            </PageHero>
            <main>
                <section className="es-block">
                    <div className="es-wrap es-linkgrid">
                        {content.map((item) => <LinkCard key={item.id} {...item}/>)}
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default Community;
