import React from "react";
import Data from "@site/src/data";
import dropdownStyles from './dropdown.module.css';
 
const Dropdown = ({ filterItem, setTip, difficultyItems ,tagItems, tagFilters, catItems, catFilters}) => {
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
        <div className={dropdownStyles.dropdownTags}>
        <button className={dropdownStyles.drop}
            onClick={() => setItem(Data)}
            >
            Tags
        </button>
        <div className={dropdownStyles.menu}>
            {tagItems?.map((Val, id) => {
            return (
                <button className='{dropdownStyles.content}'
                    onClick={() => tagFilters(Val)}
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
      <div className={dropdownStyles.dropdownCat}>
        <button className={dropdownStyles.drop}
            onClick={() => setItem(Data)}
            >
            Categories
        </button>
        <div className={dropdownStyles.menu}>
            {catItems?.map((Val, id) => {
            return (
                <button className='{dropdownStyles.content}'
                    onClick={() => catFilters(Val)}
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