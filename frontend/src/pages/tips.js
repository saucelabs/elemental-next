import React, { useState } from "react";
import Layout from '@theme/Layout';
import Data from "@site/src/data";
import Card from "@site/src/components/card";
import tipsStyles from './tips.module.css';
import Dropdown from "./dropdown";


const Tips = () => {

  const [tip, setTip] = useState(Data);

  const difficultyItems = [...new Set(Data.map((Val) => Val.difficulty))];
  const tagItems = [...new Set(Data.map((Val) => Val.tags))];

  const filterItem = (curdif) => {
    const newTip = Data.filter((newVal) => {
      return newVal.difficulty === curdif;
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
              setTip={setTip}
              difficultyItems={difficultyItems}
            />
                <div>
                <Card tip={tip} />
                </div>
        </Layout>
    </>
  );
};
 
export default Tips;

