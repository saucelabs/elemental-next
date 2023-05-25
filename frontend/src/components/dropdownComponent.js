import React, { useState } from 'react';
import { MDXProvider } from '@mdx-js/react';

const DropdownComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (event) => {
    setSelectedFile(event.target.value);
  };

  const renderSelectedFile = () => {
    if (selectedFile) {
      const SelectedFile = require(`/docs/dropdown/${selectedFile}.md`).default;
      return (
        <MDXProvider>
          <SelectedFile />
        </MDXProvider>
      );
    }
    return null;
  };

  return (
    <div>
      <label htmlFor='file-dropdown'>Choose a file:</label>
      <select id='file-dropdown' onChange={handleChange}>
        <option value=''>Select a file</option>
        <option value='file1'>File 1</option>
        <option value='file2'>File 2</option>
        <option value='file3'>File 3</option>
      </select>
      {renderSelectedFile()}
    </div>
  );
};

export default DropdownComponent;

/*
import React from 'react';

const DropdownComponent = ({ options, handleChange }) => {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    handleChange(selectedValue);
  };

  return (
    <div>
      <select onChange={handleSelectChange}>
        <option value=''>Select a file</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownComponent;
*/
