import React from 'react';
import Link from '@docusaurus/Link';
import useGlobalData from '@docusaurus/useGlobalData';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import ContentVisibility from '@theme/ContentVisibility';
import DocItemContent from '@theme/DocItem/Content';
import EditMetaRow from '@theme/EditMetaRow';

const LEVELS = {1: 'Beginner', 2: 'Intermediate', 3: 'Advanced'};

function plural(count, word) {
    return `${count} ${word}${count === 1 ? '' : 's'}`;
}

// The hero of a tip: breadcrumbs, title, description, and chips with its level, categories and number of tools
function TipHero({title, tip}) {
    const {frontMatter} = useDoc();
    const number = frontMatter.number;
    const categories = [].concat(frontMatter.category || []);
    const tools = new Set((tip?.languages || []).map(({tool}) => tool)).size;
    return (
        <header className="es-hero es-hero--page es-on-dark">
            <div className="es-hero__plate">
                <div className="es-wrap">
                    <nav aria-label="Breadcrumbs">
                        <ol className="es-crumb">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/tips">Tips</Link></li>
                            {number && <li aria-current="page">Tip {String(number).padStart(2, '0')}</li>}
                        </ol>
                    </nav>
                    <h1>{title}</h1>
                    {frontMatter.description && <p className="es-lead">{frontMatter.description}</p>}
                    <div className="es-tags-row">
                        {LEVELS[frontMatter.level] &&
                            <span className="es-chip es-chip--level">{LEVELS[frontMatter.level]}</span>}
                        {categories.map((category) => <span key={category} className="es-chip">{category}</span>)}
                        {tools > 0 && <span className="es-chip">{plural(tools, 'tool')}</span>}
                    </div>
                </div>
            </div>
        </header>
    );
}

// The contents list on the left: the second-level headings of the tip
function TipTOC() {
    const {toc} = useDoc();
    const headings = toc.filter(({level}) => level === 2);
    if (headings.length === 0) {
        return <div/>;
    }
    return (
        <nav className="es-toc" aria-labelledby="es-toc-title">
            <span id="es-toc-title" className="es-eyebrow">On this page</span>
            <ol>
                {headings.map(({id, value}) => (
                    <li key={id}><a href={`#${id}`} dangerouslySetInnerHTML={{__html: value}}/></li>
                ))}
            </ol>
        </nav>
    );
}

// The next tip (by number), or the previous one for the last tip
function NextTip({tips, number}) {
    const sorted = [...tips].sort((a, b) => a.number - b.number);
    const index = sorted.findIndex((tip) => tip.number === number);
    if (index < 0 || sorted.length < 2) {
        return null;
    }
    const isLast = index === sorted.length - 1;
    const other = sorted[isLast ? index - 1 : index + 1];
    return (
        <Link className="es-next" to={`/tips${other.slug}`}>
            <span>
                <span className="es-eyebrow">{isLast ? 'Previous tip' : 'Next tip'}</span>
                <span className="es-next__title">{other.title}</span>
            </span>
            <span className="es-btn es-btn--pop es-btn--sm">{isLast ? 'Read' : 'Read next'}</span>
        </Link>
    );
}

export default function DocItemLayout({children}) {
    const {metadata, frontMatter, contentTitle} = useDoc();
    const tips = useGlobalData().metadata.default.aggregateFrontMatter;
    const tip = tips.find((item) => item.number === frontMatter.number);
    const {editUrl, lastUpdatedAt, lastUpdatedBy, tags} = metadata;
    return (
        <>
            <ContentVisibility metadata={metadata}/>
            <TipHero title={contentTitle || metadata.title} tip={tip}/>
            <div className="es-wrap es-article">
                <TipTOC/>
                <article className="es-prose">
                    <DocItemContent>{children}</DocItemContent>
                    {tags.length > 0 && (
                        <ul className="es-tags-row" aria-label="Tags" style={{listStyle: 'none', padding: 0}}>
                            {tags.map(({label, permalink}) => (
                                <li key={permalink}>
                                    <Link className="es-chip es-chip--light" to={permalink}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                    {(editUrl || lastUpdatedAt) && (
                        <EditMetaRow className="es-meta-row" editUrl={editUrl} lastUpdatedAt={lastUpdatedAt}
                                     lastUpdatedBy={lastUpdatedBy}/>
                    )}
                    {tip && <NextTip tips={tips} number={tip.number}/>}
                </article>
            </div>
        </>
    );
}
