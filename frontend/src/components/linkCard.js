import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

// A card that links to another site: icon, title, description and the host name of the link
export default function LinkCard({title, paragraph, link, img}) {
    const host = new URL(link).hostname.replace(/^www\./, '');
    return (
        <Link className="es-linkcard" to={link}>
            <span className="es-linkcard__icon"><img src={useBaseUrl(`/${img.replace(/^\//, "")}`)} alt="" width="40" height="40"/></span>
            <span>
                <h2>{title}</h2>
                <p>{paragraph}</p>
                <span className="es-linkcard__host">{host}</span>
            </span>
            <span className="es-linkcard__arrow" aria-hidden="true">↗</span>
        </Link>
    );
}
