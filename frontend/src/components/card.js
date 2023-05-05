import React from 'react';

const Card = ({ tip }) => {
  return (
    <div className='cards-container'>
      {tip.map((Val) => {
        return (
          <div className='card' key={Val.id}>
            <h2>
              <a href={Val.contentUrl}>{Val.title}</a>
            </h2>
            <p> {Val.text} </p>
            <p> {Val.tags} </p>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
