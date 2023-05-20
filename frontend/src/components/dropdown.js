import React from 'react';

const Dropdown = ({ options, selectedOption, onSelectChange }) => {
  return (
    <div className='dropdown'>
      <select value={selectedOption} onChange={onSelectChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
