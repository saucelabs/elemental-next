import React, { useState } from "react";
import Data from "@site/src/data";
import Card from "@site/src/components/card";
 
const Archive = () => {
  const [item, setItem] = useState(Data);
  return (
    <>
      <Layout
            title= "Elemental Selenium Archives"
            description="Elemental Selenium Archives">
            <div className={archiveStyles.tipsheader}>
                The Tips
            </div>
                <div className='Cards'>
                <Card item={item} />
                </div>
        </Layout>
    </>
  );
};
 
export default Archive;

