import React from 'react';
import Link from '@docusaurus/Link';

// The Pine hero of a page: breadcrumbs (Home / name), title, lead text, and optional buttons (children)
export default function PageHero({crumb, title, lead, children}) {
    return (
        <header className="es-hero es-hero--page es-on-dark">
            <div className="es-hero__plate">
                <div className="es-wrap">
                    <nav aria-label="Breadcrumbs">
                        <ol className="es-crumb">
                            <li><Link to="/">Home</Link></li>
                            <li aria-current="page">{crumb}</li>
                        </ol>
                    </nav>
                    <h1>{title}</h1>
                    {lead && <p className="es-lead">{lead}</p>}
                    {children && <div className="es-hero__ctas">{children}</div>}
                </div>
            </div>
        </header>
    );
}
