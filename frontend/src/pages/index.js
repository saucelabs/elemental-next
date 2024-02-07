import React, {useEffect} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './pages.module.css';
import SignupForm from '@site/src/components/signupForm';

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig} = context;

    return (
        <Layout
            title="Home"
            description="A free, once-weekly e-mail on how to do test automation like a Pro">
            <header className={clsx('hero', styles.heroBanner)}>
                <div className="container">
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
                                    <p className={"hero__subtitle margin-bottom--none"}>
                                        Join over 20k test automation Pros
                                    </p>
                                    <p className={"hero__subtitle"}>
                                        <small>
                                            One email every Tuesday. Unsubscribe anytime.
                                        </small>
                                    </p>
                                    {/* Drip Sign Up */}
                                    <SignupForm/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col--8 col--offset-2">
                                <div className="margin-top--sm margin-bottom-lg text--center">
                                    <Link
                                        style={{color: "var(--ifm-color-primary)"}}
                                        className={"hero__subtitle"}
                                        to={useBaseUrl('tips/')}>
                                        Skip it, take me to the tips!{' '}→
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<img className='home-footer' src='./img/backgrounds/home-footer.svg' alt=''/>*/}
            </main>
        </Layout>
    );
}

export default Home;
