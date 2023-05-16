import React from 'react';
import Data from '@site/src/scripts/data';
 


 const Dropdown = ({ filterItem, setTip, difficultyItems ,tagItems, tagFilters, catItems, catFilters, sortByDate, orderBy}) => {
   return (
     <>
     <div className='dropdown-container'>
      <p>Filter by:</p>  
       <div className='dropdown'>
       <button className='drop'
             onClick={() => {setItem(Data);}}
             >
             Difficulty
       </button>
         <div className='menu'>
             {difficultyItems?.map((Val, id) => {
             return (
                 <button className='difficulty-list'
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
                 <button className='content-tags'
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
                 <button className='cat-list'
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
       <div className='dropdownDate'>
         <button className='drop'
             onClick={() => setItem(Data)}>
             Order Posted
         </button>
         <div className='menu'>
             {orderBy?.map((Val, id) => {
             return (
                 <button className='date-list'
                     onClick={() => sortByDate(Val)}
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
       </div>
     </>
   );
 };
  
export default Dropdown;
