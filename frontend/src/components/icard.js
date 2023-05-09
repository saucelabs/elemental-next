import React from 'react';

const Icard = ({ tip }) => {
  return (
    <div className='cards-container'>
      {tip.map((Val) => {
        return (
          <div className='Icard' key={Val.id}>
            <h2>
              <a href={Val.contentUrl}>{Val.title}</a>
            </h2>
            <p> {Val.level}</p>
            <p> {Val.text} </p>
            <p> {Val.tags} </p>
          </div>
        );
      })}
    </div>
  );
};
export default iCard;