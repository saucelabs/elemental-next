import React, { useState } from 'react';
import { MDXProvider } from '@mdx-js/react';

const DropdownMarkdown = ({ folderName }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const renderSelectedFile = () => {
    if (selectedFile) {
      const SelectedFile = require(`../../docs/${folderName}/${selectedFile}.md`).default;
      return (
        <MDXProvider>
          <SelectedFile />
        </MDXProvider>
      );
    }
    return null;
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.value);
  };

  return (
    <div>
      <select onChange={handleFileChange}>
        <option value=''>Select a file</option>
        <option value='file1'>File 1</option>
        <option value='file2'>File 2</option>
        <option value='file3'>File 3</option>
      </select>
      {renderSelectedFile()}
    </div>
  );
};

export default DropdownMarkdown;
