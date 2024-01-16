import React from 'react';

const Icard = ({ contentUrl, title, level, text }) => {
  return (
    <div className='icard'>
      <h2>
        <a href={contentUrl}>{title}</a>
      </h2>
      {/* // Self-invoking function */}
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
      <p> {text} </p>
    </div>
  );
};
export default Icard;
