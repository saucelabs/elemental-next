import React from 'react';
import Data from '@site/src/scripts/data';
 


 const Dropdown = ({ filterItem, setTip, difficultyItems ,tagItems, tagFilters, catItems, catFilters}) => {
   return (
     <>
     <div className='filterText'>Filter by:</div>  
       <div className='dropdown'>
       <label htmlFor="menu_arrow"></label>
       <button type="checkbox" className='drop'
             onClick={() => {setItem(Data);}}
             >
             Difficulty
       </button>
         <div className='menu'>
             {difficultyItems?.map((Val, id) => {
             return (
                 <button className='content'
                     onClick={() => filterItem(Val)}
                     key={id}
                 >
                     <div>
                         {/* <p>Hello World!</p> */}
                         {Val}
                     </div>
                 </button>
             );
             })}
         </div>
         </div>
         <div className= 'dropdownTags'>
         <button className='drop'
             onClick={() => setItem(Data)}
             >
             Tags
         </button>
         <div className='menu'>
             {tagItems?.map((Val, id) => {
             return (
                 <button className='content'
                     onClick={() => tagFilters(Val)}
                     key={id}
                 >
                     <div>
                         {/* <p>Hello World!</p> */}
                         {Val}
                     </div>
                 </button>
             );
             })}

         </div>
       </div>
       <div className='dropdownCat'>
         <button className='drop'
             onClick={() => setItem(Data)}
             >
             Categories
         </button>
         <div className='menu'>
             {catItems?.map((Val, id) => {
             return (
                 <button className='content'
                     onClick={() => catFilters(Val)}
                     key={id}
                 >
                     <div>
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
