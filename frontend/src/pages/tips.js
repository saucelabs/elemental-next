import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Data from '@site/src/scripts/data';
import Card from '@site/src/components/card';
import Dropdown from '@site/src/components/dropdown';

const Tips = () => {
  const [tip, setTip] = useState(Data);

  const difficultyItems = [...new Set(Data.map((Val) => Val.difficulty))];
  let tagItems = Data.map((Val) => Val.tags);
  tagItems = [...new Set(Array.prototype.concat(...tagItems))];
  let catItems = Data.map((Val) => Val.category);
  catItems = [...new Set(Array.prototype.concat(...catItems))];

  const filterItem = (curdif) => {
    const newTip = Data.filter((newVal) => {
      return newVal.difficulty === curdif;
    });
    setTip(newTip);
  };

  const tagFilters = (curtag) => {
    const newTip = Data.filter((newVal) => {
      return newVal.tags.includes(curtag);
    });
    setTip(newTip);
  };

  const catFilters = (curcat) => {
    const newTip = Data.filter((newVal) => {
      return newVal.category.includes(curcat);
    });
    setTip(newTip);
  };

  return (
    <body className='tips-background'>
      <Layout title='Elemental Selenium Archives' description='Elemental Selenium Archives'>
        <div className='tips-wrapper'>
          <h1 className='tips-header'>The Tips</h1>
          <Dropdown
            filterItem={filterItem}
            tagFilters={tagFilters}
            catFilters={catFilters}
            setTip={setTip}
            s
            difficultyItems={difficultyItems}
            tagItems={tagItems}
            catItems={catItems}
          />
          <Card tip={tip} />
        </div>
        <img className='tips-footer' src='img/backgrounds/tips-footer.svg' alt='' />
      </Layout>
    </body>
  );
};

export default Tips;
