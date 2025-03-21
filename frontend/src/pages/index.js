import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './pages.module.css';
import SignupForm from '@site/src/components/signupForm';
import DisplayLogo from "../components/displayLogo";

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig} = context;
    return (
        <Layout
            title="Home"
            description="A free collection of tips to do test automation like a Pro">
            <header className={clsx('hero', styles.heroBanner)}>
                <div className="container">
                    <DisplayLogo/>
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                </div>
            </header>
            <main>
                <div>
                    <div className="container padding-vert--md">
                        <div className="row padding-bottom--none">
                            <div className="col col--8 col--offset-2">
                                <div className="text--center">
                                    <a href="/tips">
                                        <button className="button button--lg button--primary">
                                            Take me to the tips! {' '}→
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Home;
