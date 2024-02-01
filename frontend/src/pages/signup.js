import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import styles from "./pages.module.css";
import SignupForm from "../components/signupForm";

function Signup() {
    const context = useDocusaurusContext();
    const {siteConfig} = context;

    useEffect(() => {
        document.body.style.backgroundImage = 'url("./img/backgrounds/signup-footer.svg")';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'top center';
        document.body.style.backgroundAttachment = 'fixed';
    }, [])

    return (
        <Layout
            title={siteConfig.title}
            description="Join the mailing list!">
            <header className={clsx('hero', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">Want in?</h1>
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
                    </div>
                </div>
                {/*<img className='signup-footer' src='./img/backgrounds/signup-footer.svg' alt=''/>*/}
            </main>
        </Layout>
    );
}

export default Signup;
