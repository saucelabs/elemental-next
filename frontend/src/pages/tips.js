import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useGlobalData from '@docusaurus/useGlobalData';
import Link from "@docusaurus/Link";

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

    useEffect(() => {
        let globalMetadata = globalData.metadata.default.aggregateFrontMatter;
        const uniqueCategories = [...new Set(globalMetadata.flatMap(card => card.category))];
        uniqueCategories.push("All");
        globalMetadata = globalMetadata.sort((a, b) => b.number - a.number);
        setMetadata(globalMetadata);
        setOriginalMetadata(globalMetadata);
        setCategories(uniqueCategories.sort());
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
                <div className="container">
                    <div className="row padding-bottom--md">
                        <div className="col col--12 center-filters">
                            <span className="hero__subtitle">Filters:</span>
                            <div className="dropdown dropdown--hoverable margin-horiz--sm">
                                <button className="button button--success button--outline">
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
                            <div className="dropdown dropdown--hoverable margin-horiz--sm">
                                <button className="button button--success button--outline">
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
                            <div className="dropdown dropdown--hoverable margin-horiz--sm">
                                <button className="button button--success button--outline">
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
                        {metadata.map((card, index) => (
                            <div key={index} className="col col--12 col--12@xs">
                                <div className="card shadow--md margin-vert--xs">
                                    <div className="card__header">
                                        <h3>
                                            <Link to={`tips${card.slug}`}>
                                                {`${card.number} - ${card.title}`}
                                            </Link>
                                        </h3>
                                        <div className="row">
                                            <div className={clsx("col col--6")}>
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
                                            {card.text}
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
                </div>
            </main>
            {/*<img className='tips-footer' src='img/backgrounds/tips-footer.svg' alt=''/>*/}
        </Layout>
    );
};

export default Tips;
