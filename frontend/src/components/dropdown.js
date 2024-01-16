import React from 'react';

// reusable component that renders the dropdown filters on tips page
const Dropdown = ({ options, selectedOption, onSelectChange }) => {
  return (
    <div className='dropdown'>
      <select value={selectedOption} onChange={onSelectChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value} ariaLabel={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
