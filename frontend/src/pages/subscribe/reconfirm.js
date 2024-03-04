import React from 'react';
import Layout from '@theme/Layout';

function Reconfirm() {
    return (
        <Layout
            title='Thank you for reconfirming your subscription!'
            description='Reconfirmation message for signing up to our newsletter'
        >
            <header className={"hero padding-bottom--md"}>
                <div className="container">
                    <h1 className="hero__title">Thank you!</h1>
                    <p className="hero__subtitle">
                        Thanks for reconfirming your subscription. Elemental Selenium began as a mailing list shipping
                        tips and tricks to over 20,000 testers world wide, and we remain true to that vision.
                    </p>
                    <p className="hero__subtitle text--italic">
                        We’re so glad you’ve decided to stay with us.
                    </p>
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="row ">
                        <div className="col">
                            <div className="card">
                                <div className="card__header">
                                    <h1>What's next?</h1>
                                </div>
                                <div className="card__body">
                                    <p className={"hero__subtitle"}>
                                        Every Tuesday you’ll get an email containing one tip or trick in the coding
                                        language you’ve selected. If you’d like more, head on over to the{' '}
                                        <a href='/tips'>tips page</a> and read them all at any time!
                                    </p>
                                </div>
                                <div className="card__footer">
                                    <p className={"hero__subtitle"}>
                                        While you’re there, consider{' '} <a href='/community'>joining our
                                        community</a> and maybe next Tuesday the tip in everyone’s inbox will be yours!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Reconfirm;
