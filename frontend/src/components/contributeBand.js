import React from 'react';
import Link from '@docusaurus/Link';

// The lime band that invites readers to contribute
export default function ContributeBand() {
    return (
        <section className="es-band" aria-labelledby="es-band-title">
            <div className="es-wrap es-band__grid">
                <div>
                    <span className="es-eyebrow">Get involved</span>
                    <h2 id="es-band-title">Know a better way?</h2>
                </div>
                <div>
                    <p>Write a tip, add your language or framework to an existing one, or fix an example. We review
                        every pull request.</p>
                    <Link className="es-btn es-btn--primary"
                          to="https://github.com/saucelabs/elemental-next/blob/main/CONTRIBUTING.md">
                        Read the contributing guide
                    </Link>
                </div>
            </div>
        </section>
    );
}
