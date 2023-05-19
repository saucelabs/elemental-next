import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Data from '@site/src/scripts/data';
import Card from '@site/src/components/card';
import Dropdown from '@site/src/components/dropdown';

const Tips = () => {
  const [tip, setTip] = useState(Data);

  const difficultyItems = [...new Set(Data.map((Val) => Val.level))];
  let tagItems = Data.map((Val) => Val.tags);
  tagItems = [...new Set(Array.prototype.concat(...tagItems))];
  let catItems = Data.map((Val) => Val.category);
  catItems = [...new Set(Array.prototype.concat(...catItems))];

  // const orderBy = ["Oldest_First", "Newest_First"]
  const orderBy = ["Newest First", "Oldest First"]
  const filterItem = (curdif) => {
    const newTip = Data.filter((newVal) => {
      return newVal.level === curdif;
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

  const sortByDate = (cursort) => {
    const sortedData = [...Data];
    console.log(sortedData)
    if (cursort == "Oldest First") {

      let newest = sortedData.sort((a, b) => new Date(a.publish_date) - new Date(b.publish_date));
      console.log(newest)
      setTip(newest);
      

    } else {
      let oldest = [...Data].sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date));
      // console.log(oldest)
      setTip(oldest);

    }
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
            difficultyItems={difficultyItems}
            tagItems={tagItems}
            catItems={catItems}
            orderBy = {orderBy}
            sortByDate = {sortByDate}
          />
          <Card 
            tip={tip}
            tagFilters={tagFilters}
            tagItems={tagItems}
           />
        </div>
        <img className='tips-footer' src='img/backgrounds/tips-footer.svg' alt='' />
      </Layout>
    </body>
  );
};

export default Tips;
