import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useGlobalData from '@docusaurus/useGlobalData';
import {useHistory, useLocation} from '@docusaurus/router';
import PageHero from '../components/pageHero';
import styles from './tips.module.css';

// Three rows of three cards
const TIPS_PER_PAGE = 9;
const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const ORDERS = ['Newest', 'Oldest'];

// A row of pill buttons, one pressed at a time
function FilterGroup({label, options, selected, onSelect}) {
    return (
        <div className={styles.group} role="group" aria-label={label}>
            <span className={styles.label} aria-hidden="true">{label}</span>
            {options.map((option) => (
                <button key={option} type="button" aria-pressed={option === selected}
                        onClick={() => onSelect(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
}

function TipCard({tip}) {
    const categories = [].concat(tip.category || []);
    return (
        <Link className={styles.card} to={`/tips${tip.slug}`}>
            <span className={styles.top}>
                <span className={styles.number} aria-hidden="true">{String(tip.number).padStart(2, '0')}</span>
                <span className={styles.meta}>
                    <span className={clsx(styles.tag, styles.level)}>{LEVELS[tip.level]}</span>
                    {categories.map((category) => <span key={category} className={styles.tag}>{category}</span>)}
                </span>
            </span>
            <h2>{tip.title}</h2>
            <p>{tip.description}</p>
            {tip.tags?.length > 0 && <span className={styles.keywords}>{[...tip.tags].sort().join(' · ')}</span>}
        </Link>
    );
}

export default function Tips() {
    const allTips = useGlobalData().metadata.default.aggregateFrontMatter;
    const categories = ['All', ...[...new Set(allTips.flatMap((tip) => tip.category || []))].sort()];
    const [level, setLevel] = useState('All');
    const [category, setCategory] = useState('All');
    const [order, setOrder] = useState('Newest');
    const [page, setPage] = useState(1);
    const [showAll, setShowAll] = useState(false);
    const location = useLocation();
    const history = useHistory();

    // Keeps the page in the URL (?page=2 or ?page=all), so the back button and shared links work
    const updatePageParam = (value) => {
        const params = new URLSearchParams(location.search);
        if (value === 1) {
            params.delete('page');
        } else {
            params.set('page', value);
        }
        history.replace({search: params.toString()});
    };

    // Reads the level (e.g., ?level=beginner, from the footer) and the page from the URL
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const matchedLevel = LEVELS.find((item) => item.toLowerCase() === params.get('level')?.toLowerCase());
        if (matchedLevel) {
            setLevel(matchedLevel);
        }
        const paramPage = params.get('page');
        if (paramPage === 'all') {
            setShowAll(true);
        } else if (Number(paramPage) > 1) {
            setPage(Number(paramPage));
        }
        if (params.has('level')) {
            params.delete('level');
            history.replace({search: params.toString()});
        }
    }, []);

    // A new filter or order starts again from the first page
    const isFirstFilter = useRef(true);
    useEffect(() => {
        if (isFirstFilter.current) {
            isFirstFilter.current = false;
            return;
        }
        if (page !== 1) {
            setPage(1);
            updatePageParam(showAll ? 'all' : 1);
        }
    }, [level, category, order]);

    const tips = allTips
        .filter((tip) => level === 'All' || tip.level === LEVELS.indexOf(level))
        .filter((tip) => category === 'All' || [].concat(tip.category || []).includes(category))
        .sort((a, b) => (order === 'Newest' ? b.number - a.number : a.number - b.number));
    const pageCount = Math.max(1, Math.ceil(tips.length / TIPS_PER_PAGE));
    const currentPage = Math.min(page, pageCount);
    const visibleTips = showAll ? tips : tips.slice((currentPage - 1) * TIPS_PER_PAGE, currentPage * TIPS_PER_PAGE);

    const changePage = (newPage) => {
        setPage(newPage);
        updatePageParam(newPage);
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    const toggleShowAll = () => {
        setShowAll(!showAll);
        setPage(1);
        updatePageParam(showAll ? 1 : 'all');
    };

    return (
        <Layout title="Tips" description="Tips for test automation Pros">
            <PageHero
                crumb="Tips"
                title="The tips"
                lead={`${allTips.length} short, tested tips. Each one automates one use case, in every framework we `
                    + 'cover, and CI runs every example.'}/>
            <main className="es-wrap">
                <div className={styles.filters}>
                    <FilterGroup label="Level" options={LEVELS} selected={level} onSelect={setLevel}/>
                    <FilterGroup label="Category" options={categories} selected={category} onSelect={setCategory}/>
                    <FilterGroup label="Order" options={ORDERS} selected={order} onSelect={setOrder}/>
                </div>
                {visibleTips.length > 0
                    ? <div className={styles.grid}>
                        {visibleTips.map((tip) => <TipCard key={tip.number} tip={tip}/>)}
                    </div>
                    : <p className={styles.empty}>No tips match these filters.</p>}
                <nav className={styles.pager} aria-label="Tips pages">
                    <span className="es-mono">
                        {showAll ? `All ${tips.length} tips` : `Page ${currentPage} of ${pageCount}`}
                        {' · '}{order} first
                    </span>
                    <span className={styles.pagerButtons}>
                        {!showAll && currentPage > 1 && (
                            <button type="button" className="es-btn es-btn--ghost es-btn--sm"
                                    onClick={() => changePage(currentPage - 1)}>
                                Previous page
                            </button>
                        )}
                        <button type="button" className="es-btn es-btn--ghost es-btn--sm" onClick={toggleShowAll}>
                            {showAll ? 'Show fewer tips' : 'Show all tips'}
                        </button>
                        {!showAll && currentPage < pageCount && (
                            <button type="button" className="es-btn es-btn--primary es-btn--sm"
                                    onClick={() => changePage(currentPage + 1)}>
                                Next page
                            </button>
                        )}
                    </span>
                </nav>
            </main>
        </Layout>
    );
}
