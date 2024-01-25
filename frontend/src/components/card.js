import React from 'react';

const Card = ({contentUrl, level, tags, text, title, selectedTags, handleTagClick}) => {
    function formatDate(date) {
        const options = {day: 'numeric', month: 'long', year: 'numeric'};
        return new Date(date).toLocaleDateString(undefined, options);
    }

    return (
        <div className='cards-container'>
            <div className='card'>
                <h2>
                    <a href={contentUrl}>{title}</a>
                </h2>
                <p>{text}</p>
                <div className='card-level-tags-container'>
                    {/* Display traffic light = tip difficulty level */}
                    <div className='level'>
                        {(() => {
                            switch (level) {
                                case 1:
                                    return <img src={'img/traffic_filter/level1.svg'} alt='Beginner'/>;
                                case 2:
                                    return <img src={'img/traffic_filter/level2.svg'} alt='Intermediate'/>;
                                case 3:
                                    return <img src={'img/traffic_filter/level3.svg'} alt='Advanced'/>;
                            }
                        })()}
                    </div>
                    {/* Display and filter tags */}
                    <div className='tags-container'>
                        {tags.map((tag) => (
                            <div
                                key={tag}
                                className={`tags ${selectedTags.includes(tag) ? 'selected' : ''}`}
                                onClick={() => handleTagClick(tag)}
                            >
                                {tag + ' '}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
