import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useGlobalData from '@docusaurus/useGlobalData';
import Link from "@docusaurus/Link";
import {useLocation, useHistory} from "@docusaurus/router";
import BackToTopButton from '@theme/BackToTopButton';

// Three rows of three cards
const TIPS_PER_PAGE = 9;

function Pagination({page, pageCount, showAll, handlePageChange, handleShowAll}) {
    if (pageCount <= 1 && !showAll) {
        return null;
    }
    return (
        <nav className="tips-pagination" aria-label="Tips pages">
            {!showAll && (
                <>
                    <button
                        className="button button--outline button--primary"
                        disabled={page === 1}
                        onClick={() => handlePageChange(page - 1)}
                    >
                        ← Previous
                    </button>
                    <span className="tips-pagination__status">
                        Page {page} of {pageCount}
                    </span>
                    <button
                        className="button button--outline button--primary"
                        disabled={page === pageCount}
                        onClick={() => handlePageChange(page + 1)}
                    >
                        Next →
                    </button>
                </>
            )}
            <button className="button button--link" onClick={() => handleShowAll(!showAll)}>
                {showAll ? 'Show fewer tips' : 'Show all tips'}
            </button>
        </nav>
    );
}

function CardTags({tags, handleTagChange}) {
    return (
        <>
            {tags.sort().map((tag, index) => {
                return (
                    <button
                        key={index}
                        className="button button--outline button--secondary button--sm padding--xs margin--xs"
                        onClick={() => handleTagChange({target: {value: {tag}}})}
                    >
                        {tag}
                    </button>
                );
            })}
        </>
    );
}

function CardLevel({level, handleLevelChange}) {
    const buttonClass = clsx('button button--outline button--sm margin-right--xs');
    return (
        <>
            {(() => {
                switch (level) {
                    case 1:
                        return (
                            <button
                                className={clsx(buttonClass, "button--success")}
                                onClick={() => handleLevelChange({target: {value: 'Beginner'}})}
                            >
                                <small>BEGINNER</small>
                            </button>
                        );
                    case 2:
                        return (
                            <button
                                className={clsx(buttonClass, "button--info")}
                                onClick={() => handleLevelChange({target: {value: 'Intermediate'}})}
                            >
                                <small>INTERMEDIATE</small>
                            </button>
                        );
                    case 3:
                        return (
                            <button
                                className={clsx(buttonClass, "button--primary")}
                                onClick={() => handleLevelChange({target: {value: 'Advanced'}})}
                            >
                                <small>ADVANCED</small>
                            </button>
                        );
                }
            })()}
        </>
    );
}

function CardCategory({category, handleCategoryChange}) {
    const flattenedCategories = [];
    flattenedCategories.push(Array.isArray(category) ? category : [category]);
    return (
        <>
            {flattenedCategories.flat().map((flattenedCategory, index) => (
                <button
                    key={index}
                    className="button button--outline button--warning button--sm margin-right--xs"
                    onClick={() => handleCategoryChange({target: {value: flattenedCategory.toString()}})}
                >
                    <small>{flattenedCategory.toString().toUpperCase()}</small>
                </button>
            ))}
        </>
    );
}

const Tips = () => {
    const tipLevels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
    const orderPosted = ['Newest', 'Oldest'];
    const globalData = useGlobalData();
    const [originalMetadata, setOriginalMetadata] = useState([]);
    const [metadata, setMetadata] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [selectedOrder, setSelectedOrder] = useState('Newest');
    const [selectedTag, setSelectedTag] = useState({tag: 'All'});
    const [page, setPage] = useState(1);
    const [showAll, setShowAll] = useState(false);
    const location = useLocation();
    const history = useHistory();

    const handleCategoryChange = (event) => {
        setSelectedTag({tag: 'All'});
        setSelectedCategory(event.target.value);
    };

    const handleLevelChange = (event) => {
        setSelectedTag({tag: 'All'});
        setSelectedLevel(event.target.value);
    };

    const handleOrderChange = (event) => {
        setSelectedOrder(event.target.value);
    }

    const handleTagChange = (event) => {
        setSelectedTag(event.target.value);
    }

    // Keeps the page in the URL (?page=2 or ?page=all), so the back button and shared links work
    const updatePageParam = (value) => {
        const urlParams = new URLSearchParams(location.search);
        if (value === 1) {
            urlParams.delete("page");
        } else {
            urlParams.set("page", value);
        }
        history.replace({search: urlParams.toString()});
    }

    const handlePageChange = (newPage) => {
        setPage(newPage);
        updatePageParam(newPage);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const handleShowAll = (all) => {
        setShowAll(all);
        setPage(1);
        updatePageParam(all ? 'all' : 1);
    }

    useEffect(() => {
        let globalMetadata = globalData.metadata.default.aggregateFrontMatter;
        const uniqueCategories = [...new Set(globalMetadata.flatMap(card => card.category))];
        uniqueCategories.push("All");
        globalMetadata = globalMetadata.sort((a, b) => b.number - a.number);
        setMetadata(globalMetadata);
        setOriginalMetadata(globalMetadata);
        setCategories(uniqueCategories.sort());

        if (location.search) {
            const urlParams = new URLSearchParams(location.search);
            const paramLevel = urlParams.get("level");
            const matchedLevel = tipLevels.find(level => level.toLowerCase() === paramLevel?.toLowerCase());
            if (matchedLevel) {
                setSelectedLevel(matchedLevel);
            }
            const paramPage = urlParams.get("page");
            if (paramPage === "all") {
                setShowAll(true);
            } else if (Number(paramPage) > 1) {
                setPage(Number(paramPage));
            }
            urlParams.delete("level");
            history.replace({
                search: urlParams.toString(),
            })
        }

    }, []); // Empty dependency array ensures this runs only on mount

    useEffect(() => {
        if (originalMetadata.length === 0) {
            return;
        }
        let filteredMetadata = originalMetadata.filter(card => {
            const categoryMatch = selectedCategory === "All" || card.category.includes(selectedCategory);
            const levelMatch = selectedLevel === "All" || card.level === tipLevels.indexOf(selectedLevel);
            const tagMatch = selectedTag.tag === "All" || card.tags.includes(selectedTag.tag);
            return categoryMatch && levelMatch && tagMatch;
        });
        if (selectedOrder === "Newest") {
            filteredMetadata = filteredMetadata.sort((a, b) => b.number - a.number);
        } else {
            filteredMetadata = filteredMetadata.sort((a, b) => a.number - b.number);
        }
        setMetadata(filteredMetadata);
    }, [selectedCategory, selectedLevel, selectedOrder, selectedTag]);

    // A new filter or order starts again from the first page
    const isFirstFilter = React.useRef(true);
    useEffect(() => {
        if (isFirstFilter.current) {
            isFirstFilter.current = false;
            return;
        }
        if (page !== 1) {
            setPage(1);
            updatePageParam(showAll ? 'all' : 1);
        }
    }, [selectedCategory, selectedLevel, selectedOrder, selectedTag]);

    const pageCount = Math.max(1, Math.ceil(metadata.length / TIPS_PER_PAGE));
    const currentPage = Math.min(page, pageCount);
    const visibleTips = showAll
        ? metadata
        : metadata.slice((currentPage - 1) * TIPS_PER_PAGE, currentPage * TIPS_PER_PAGE);
    const pagination = (
        <Pagination
            page={currentPage}
            pageCount={pageCount}
            showAll={showAll}
            handlePageChange={handlePageChange}
            handleShowAll={handleShowAll}
        />
    );

    return (
        <Layout
            title='Tips'
            description='Tips for test automation Pros'
        >
            <header className={"hero padding-bottom--md"}>
                <div className="container">
                    <h1 className="hero__title">The Tips</h1>
                </div>
            </header>
            <main>
                <div className="container padding-bottom--lg">
                    <div className="row padding-bottom--md">
                        <div className="col col--12 center-filters">
                            <span
                                className="hero__subtitle"
                                style={{color: "var(--ifm-color-content)"}}
                            >
                                Filters:
                            </span>
                            <div className="dropdown dropdown--hoverable margin-horiz--sm margin-vert--xs">
                                <button className="button button--primary">
                                    Order Posted{' '}↓
                                </button>
                                <ul className="dropdown__menu">
                                    {orderPosted.map((order, index) => (
                                        <li key={index}>
                                            <a
                                                className="dropdown__link"
                                                onClick={() => handleOrderChange({target: {value: order}})}
                                                href="#"
                                            >
                                                {order}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="dropdown dropdown--hoverable margin-horiz--sm margin-vert--xs">
                                <button className="button button--primary">
                                    Categories{' '}↓
                                </button>
                                <ul className="dropdown__menu">
                                    {categories.map((category, index) => (
                                        <li key={index}>
                                            <a
                                                className="dropdown__link"
                                                onClick={() => handleCategoryChange({target: {value: category}})}
                                                href="#"
                                            >
                                                {category}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="dropdown dropdown--hoverable margin-horiz--sm margin-vert--xs">
                                <button className="button button--primary">
                                    Levels{' '}↓
                                </button>
                                <ul className="dropdown__menu">
                                    {tipLevels.map((level, index) => (
                                        <li key={index}>
                                            <a
                                                className="dropdown__link"
                                                onClick={() => handleLevelChange({target: {value: level}})}
                                                href="#"
                                            >
                                                {level}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {visibleTips.map((card, index) => (
                            <div key={index} className="col col--4 col--12@xs padding-vert--sm">
                                <div className="card card--full-height shadow--md">
                                    <div className="card__header">
                                        <h3>
                                            <Link to={`tips${card.slug}`}>
                                                {`${card.number} - ${card.title}`}
                                            </Link>
                                        </h3>
                                        <div className="row">
                                            <div className={clsx("col col--12")}>
                                                <CardLevel
                                                    level={card.level}
                                                    handleLevelChange={handleLevelChange}
                                                />
                                                <CardCategory
                                                    category={card.category}
                                                    handleCategoryChange={handleCategoryChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card__body">
                                        <p>
                                            {card.description}
                                        </p>
                                    </div>
                                    <div className="card__footer">
                                        <CardTags
                                            tags={card.tags}
                                            handleTagChange={handleTagChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {pagination}
                </div>
                <BackToTopButton/>
            </main>
        </Layout>
    );
};

export default Tips;
