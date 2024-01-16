import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

import Data from '@site/src/scripts/data';
import Card from '@site/src/components/card';
import Dropdown from '@site/src/components/dropdown';

const Tips = () => {
  /* The following functions track the currently selected value for each filter */
  // useState hooks allow to store and update the selected filters and options
  // state variable that holds the currently selected value for each filter
  // setSelected<> function allows to update the value of selected<> and trigger a re-render of the component
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedOrder, setSelectedOrder] = useState('');

  /* The following functions store the available options for each filter */
  // state variable holds an array of options for the filter option dropdown
  // set<>Options function allows to update the value of <>Options and trigger a re-render of the component
  const [difficultyOptions, setDifficultyOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  // Store the filtered cards based on the selected difficulty, category, and order
  const [filteredCards, setFilteredCards] = useState([]);

  // useEffect hook updates the filtered cards whenever there is a change
  useEffect(() => {
    // Extract unique difficulty levels from the data and create difficulty options
    const uniqueDifficulties = [...new Set(Data.map((card) => card.level))];
    const difficultyOptions = [
      { value: '', label: 'Difficulty Level' },
      ...uniqueDifficulties.map((level) => ({
        value: level != null ? level.toString() : '',
        label: `Level ${level}`,
      })),
    ];
    setDifficultyOptions(difficultyOptions);

    // Extract unique categories from the data and create category options
    const uniqueCategories = [...new Set(Data.flatMap((card) => card.category))];
    const categoryOptions = [
      { value: '', label: 'Categories' },
      ...uniqueCategories.map((category) => ({
        value: category,
        label: category,
      })),
    ];
    setCategoryOptions(categoryOptions);
  }, []);

  /*
   * Dependencies:[selectedDifficulty, selectedCategory, selectedTags, selectedOrder]
   * effect will re-run whenever any of these dependencies changes
   * ensuring filtered cards are updated whenever the selected filters or options changes
   */
  useEffect(() => {
    let filtered = Data.filter((card) => {
      const difficultyMatch = selectedDifficulty === '' || card.level === parseInt(selectedDifficulty);
      const categoryMatch = selectedCategory === '' || card.category.includes(selectedCategory);
      const tagMatch = selectedTags.length === 0 || selectedTags.some((tag) => card.tags.includes(tag));
      return difficultyMatch && categoryMatch && tagMatch;
    });

    if (selectedOrder === 'oldest') {
      filtered = filtered.sort((a, b) => new Date(a.publish_date) - new Date(b.publish_date));
    } else if (selectedOrder === 'newest') {
      filtered = filtered.sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date));
    }

    setFilteredCards(filtered);
  }, [selectedDifficulty, selectedCategory, selectedTags, selectedOrder]);

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleOrderChange = (event) => {
    setSelectedOrder(event.target.value);
  };

  const handleTagClick = (tag) => {
    const isSelected = selectedTags.includes(tag);
    if (isSelected) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <body className='tips-background'>
      <Layout title='Elemental Selenium Archives' description='Elemental Selenium Archives'>
        <div className='tips-wrapper'>
          <h1 className='tips-header'>The Tips</h1>
          <div className='dropdown-container'>
            <div className='dropdown-container-left'>
              <p>Filters:</p>
              <Dropdown
                ariaLabel='Order Posted'
                options={[
                  { value: '', label: 'Order Posted' },
                  { value: 'oldest', label: 'Oldest First' },
                  { value: 'newest', label: 'Newest First' },
                ]}
                selectedOption={selectedOrder}
                onSelectChange={handleOrderChange}
              />
              <Dropdown
                ariaLabel='Category'
                options={categoryOptions}
                selectedOption={selectedCategory}
                onSelectChange={handleCategoryChange}
              />
              <Dropdown
                ariaLabel='Difficulty Level'
                options={difficultyOptions}
                selectedOption={selectedDifficulty}
                onSelectChange={handleDifficultyChange}
              />
            </div>
            <DocSearch appId='7W1XUFVKCS' indexName='elementalselenium1' apiKey='00cd55a788fdabb22f72cba843ff820a' />
          </div>
          {filteredCards.map((card) => (
            <Card
              tags={card.tags}
              contentUrl={card.contentUrl}
              publish_date={card.publish_date}
              level={card.level}
              text={card.text}
              title={card.title}
              selectedTags={selectedTags}
              handleTagClick={handleTagClick} // Pass the handleTagClick function as a prop
            />
          ))}
        </div>
        <img className='tips-footer' src='img/backgrounds/tips-footer.svg' alt='' />
      </Layout>
    </body>
  );
};

export default Tips;
