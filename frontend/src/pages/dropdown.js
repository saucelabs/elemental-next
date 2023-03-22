import React from "react";
import Data from "@site/src/data";
import dropdownStyles from './dropdown.module.css';
 
const Dropdown = ({ filterItem, setTip, difficultyItems }) => {
  return (
    <>
    <div className={dropdownStyles.filterText}>Filter by:</div>  
      <div className={dropdownStyles.dropdown}>
      <button className={dropdownStyles.drop}
            onClick={() => setItem(Data)}
            >
            Difficulty
      </button>
        <div className={dropdownStyles.menu}>
            {difficultyItems?.map((Val, id) => {
            return (
                <button className='{dropdownStyles.content}'
                    onClick={() => filterItem(Val)}
                    key={id}
                >
                    <div className={dropdownStyles.drop}>
                        {/* <p>Hello World!</p> */}
                        {Val}
                    </div>
                </button>
            );
            })}
        </div>

        
        
            

     </div>
    </>
  );
};
 
export default Dropdown;