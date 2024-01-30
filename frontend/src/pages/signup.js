import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import styles from "./pages.module.css";
import SignupForm from "../components/signupForm";

function Signup() {
    const context = useDocusaurusContext();
    const {siteConfig} = context;

    return (
        <Layout
            title={siteConfig.title}
            description="A modern styling framework for content-driven websites">
            <header className={clsx('hero', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">Want in?</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                </div>
            </header>
            <main>
                <div>
                    <div className="container padding-vert--md">
                        <div className="row">
                            <div className="col col--8 col--offset-2">
                                <div className="margin-vert--lg text--center">
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
                    </div>
                </div>
                {/*<img className='signup-footer' src='./img/backgrounds/signup-footer.svg' alt=''/>*/}
            </main>
        </Layout>
    );
}

export default Signup;
