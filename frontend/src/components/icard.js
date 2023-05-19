import React from 'react';

const Icard = ({ contentUrl, title, level, text }) => {
  return (
    <div className='icard'>
      <h2>
        <a href={contentUrl}>{title}</a>
      </h2>
      <p> {level}</p>
      <p> {text} </p>
    </div>
  );
};
export default Icard;
