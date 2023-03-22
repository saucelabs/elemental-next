import React, { useState } from "react";
import Layout from '@theme/Layout';
import Data from "@site/src/data";
import Card from "@site/src/components/card";
import tipsStyles from './tips.module.css';
import Dropdown from "./dropdown";


const Tips = () => {

  const [tip, setTip] = useState(Data);

  const difficultyItems = [...new Set(Data.map((Val) => Val.difficulty))];
  let tagItems = (Data.map((Val) => Val.tags));
  tagItems = [...new Set(Array.prototype.concat(...tagItems))];
  let catItems = (Data.map((Val) => Val.category));
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
    <>
        <Layout
            title= "Elemental Selenium Archives"
            description="Elemental Selenium Archives">
            <div className={tipsStyles.tipsheader}>
                The Tips
            </div>
            <Dropdown
              filterItem={filterItem}
              tagFilters={tagFilters}
              catFilters={catFilters}
              setTip={setTip}
              difficultyItems={difficultyItems}
              tagItems={tagItems}
              catItems={catItems}
            />
                <div>
                <Card tip={tip} />
                </div>
        </Layout>
    </>
  );
};
 
export default Tips;

