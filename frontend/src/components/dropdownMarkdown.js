import React, { useState, useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';

const DropdownMarkdown = ({ folderName }) => {
  const [selectedFile, setSelectedFile] = useState('ruby');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.value);
  };

  const renderSelectedFile = () => {
    if (selectedFile) {
      const SelectedFile = require(`../../docs/${folderName}/${selectedFile}.md`).default;
      return (
        <MDXProvider>
          <div className='dropdown-markdown-content'>
           <SelectedFile />
          </div>
        </MDXProvider>
      );
    }
    return null;
  };

  useEffect(() => {
    renderSelectedFile();
  }, [selectedFile]);

  return (
    <div className='dropdown-markdown-wrapper'>
      <select className='dropdown-markdown' onChange={handleFileChange} value={selectedFile}>
        <option value='csharp'>CSharp</option>
        <option value='ruby'>Ruby</option>
        <option value='java'>Java</option>
        <option value='javascript'>JavaScript</option>
        <option value='python'>Python</option>
      </select>
      {renderSelectedFile()}
    </div>
  );
};

export default DropdownMarkdown;
