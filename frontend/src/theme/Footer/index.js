import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useThemeConfig} from '@docusaurus/theme-common';

// The site footer: the Sauce Labs logo with a short description, the link columns of `themeConfig.footer.links`, and
// the copyright with a link to saucelabs.com.
export default function Footer() {
    const {footer} = useThemeConfig();
    const logo = useBaseUrl('/img/sauce/sauce-lockup-white.svg');
    return (
        <footer className="es-footer">
            <div className="es-wrap">
                <div className="es-footer__grid">
                    <div>
                        <img className="es-footer__logo" src={logo} alt="Sauce Labs" width="137" height="26"/>
                        <p>Elemental Selenium is a free, open-source library of tested automation tips, maintained by
                            Sauce Labs.</p>
                    </div>
                    {footer.links.map(({title, items}) => (
                        <nav key={title} aria-label={title}>
                            <h2>{title}</h2>
                            <ul>
                                {items.map(({label, to}) => (
                                    <li key={label}><Link to={to}>{label}</Link></li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>
                <div className="es-footer__legal">
                    <span>{footer.copyright}</span>
                    <Link to="https://saucelabs.com">saucelabs.com</Link>
                </div>
            </div>
        </footer>
    );
}
