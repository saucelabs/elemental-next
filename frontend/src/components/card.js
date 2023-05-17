import React from 'react';

const Card = ({ tip, tagItems, tagFilters }) => {
  const Tag = (word) => <button className='tags'>{word}</button>;

  return (
    <div className='cards-container'>
      {tip.map((Val) => {
        return (
          <div className='card' key={Val.id}>
            <h2>
              <a href={Val.contentUrl}>{Val.title}</a>
            </h2>
            <p> {Val.text}</p>
            <div className='tags-container'> {Val.tags.map(Tag)} </div>
            {/* // Self-invoking function */}
            <div className='level'>
              {(() => {
                switch (Val.level) {
                  case 1:
                    return <img src={'img/traffic_filter/level1.svg'} alt='Beginner' />;
                  case 2:
                    return <img src={'img/traffic_filter/level2.svg'} alt='Intermediate' />;
                  case 3:
                    return <img src={'img/traffic_filter/level3.svg'} alt='Advanced' />;
                }
              })()}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
