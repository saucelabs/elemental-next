import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useGlobalData from '@docusaurus/useGlobalData';
import Link from "@docusaurus/Link";
import styles from './pages.module.css';

function CardTags({tags}) {
    return (
        <>
            {tags.sort().map((tagObject, index) => {
                // const id = `showcase_card_tag_${tagObject.tag}`;
                return (
                    <button
                        key={index}
                        className="button button--outline button--secondary button--sm padding--xs margin--xs"
                    >
                        {tagObject}
                    </button>
                );
            })}
        </>
    );
}

function CardLevel({level}) {
    return (
        <>
            {(() => {
                switch (level) {
                    case 1:
                        return <button className="button button--outline button--success button--sm">beginner</button>;
                    case 2:
                        return <button className="button button--outline button--info button--sm">intermediate</button>;
                    case 3:
                        return <button className="button button--outline button--primary button--sm">advanced</button>;
                }
            })()}
        </>
    );
}

const Tips = () => {
    /* The following functions track the currently selected value for each filter */
    // useState hooks allow to store and update the selected filters and options
    // state variable that holds the currently selected value for each filter
    // setSelected<> function allows to update the value of selected<> and trigger a re-render of the component
    const [selectedDifficulty, setSelectedDifficulty] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedOrder, setSelectedOrder] = useState('');

    /* The following functions store the available options for each filter */
    // state variable holds an array of options for the filter option dropdown
    // set<>Options function allows to update the value of <>Options and trigger a re-render of the component
    const [difficultyOptions, setDifficultyOptions] = useState([]);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);

    // Store the filtered cards based on the selected difficulty, category, and order
    const [filteredCards, setFilteredCards] = useState([]);

    const globalData = useGlobalData();
    const metadata = globalData.metadata.default.aggregateFrontMatter

    // useEffect hook updates the filtered cards whenever there is a change
    useEffect(() => {
        // Extract unique difficulty levels from the data and create difficulty options
        const uniqueDifficulties = [...new Set(metadata.map((card) => card.level))];
        const difficultyOptions = [
            {value: '', label: 'Difficulty Level'},
            ...uniqueDifficulties.map((level) => ({
                value: level != null ? level.toString() : '',
                label: `Level ${level}`,
            })),
        ];
        setDifficultyOptions(difficultyOptions);

        // Extract unique categories from the data and create category options
        const uniqueCategories = [...new Set(metadata.flatMap((card) => card.category))];
        const categoryOptions = [
            {value: '', label: 'Categories'},
            ...uniqueCategories.map((category) => ({
                value: category,
                label: category,
            })),
        ];
        setCategoryOptions(categoryOptions);
    }, []);

    /*
     * Dependencies:[selectedDifficulty, selectedCategory, selectedTags, selectedOrder]
     * effect will re-run whenever any of these dependencies changes
     * ensuring filtered cards are updated whenever the selected filters or options changes
     */
    useEffect(() => {
        let filtered = metadata.filter((card) => {
            const difficultyMatch = selectedDifficulty === '' || card.level === parseInt(selectedDifficulty);
            const categoryMatch = selectedCategory === '' || card.category.includes(selectedCategory);
            const tagMatch = selectedTags.length === 0 || selectedTags.some((tag) => card.tags.includes(tag));
            return difficultyMatch && categoryMatch && tagMatch;
        });

        if (selectedOrder === 'oldest') {
            filtered = filtered.sort((a, b) => a.number - b.number);
        } else if (selectedOrder === 'newest' || selectedOrder === '') {
            filtered = filtered.sort((a, b) => b.number - a.number);
        }

        setFilteredCards(filtered);
    }, [selectedDifficulty, selectedCategory, selectedTags, selectedOrder]);

    const handleDifficultyChange = (event) => {
        setSelectedDifficulty(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleOrderChange = (event) => {
        setSelectedOrder(event.target.value);
    };

    const handleTagClick = (tag) => {
        const isSelected = selectedTags.includes(tag);
        if (isSelected) {
            setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

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
                    <div className="row">
                        {filteredCards.map((card, index) => (
                            <div key={index} className="col col--4 col--6@md col--12@xs">
                                <div className="card">
                                    <div className="card__header">
                                        <h3>
                                            <Link to={`tips${card.slug}`}>
                                                {`${card.number} - ${card.title}`}
                                            </Link>
                                        </h3>
                                        <div className="row">
                                            <div className={clsx("col col--6", styles.centerCardAttribute)}>
                                                <CardLevel level={card.level}/>
                                            </div>
                                            <div className={clsx("col col--6", styles.centerCardAttribute)}>
                                                <button
                                                    className="button button--outline button--warning button--sm"
                                                >
                                                    {card.category}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card__body">
                                        <p>
                                            {card.text}
                                        </p>
                                    </div>
                                    <div className="card__footer">
                                        <CardTags tags={card.tags}/>
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
