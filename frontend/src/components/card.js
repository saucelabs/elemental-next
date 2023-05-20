import React from 'react';

const Card = ({ contentUrl, level, publish_date, tags, text, title }) => {
  function formatDate(date) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }

  return (
    <div className='cards-container'>
      <div className='card'>
        <h2>
          <a href={contentUrl}>{title}</a>
        </h2>
        <p>{text}</p>
        {/* Display traffic light = tip difficulty level */}
        <div className='level'>
          {(() => {
            switch (level) {
              case 1:
                return <img src={'img/traffic_filter/level1.svg'} alt='Beginner' />;
              case 2:
                return <img src={'img/traffic_filter/level2.svg'} alt='Intermediate' />;
              case 3:
                return <img src={'img/traffic_filter/level3.svg'} alt='Advanced' />;
            }
          })()}
        </div>
        {/* Display tags */}
        <div className='tags-container'>
          {tags.map((tag) => {
            return <div className='tags'>{tag + ' '}</div>;
          })}{' '}
        </div>
        <p>First published: {formatDate(publish_date)}</p>
      </div>
    </div>
  );
};

export default Card;
