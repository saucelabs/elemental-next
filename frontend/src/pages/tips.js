import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';

import Data from '@site/src/scripts/data';
import Card from '@site/src/components/card';
import Dropdown from '@site/src/components/dropdown';

const Tips = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedOrder, setSelectedOrder] = useState('');
  const [difficultyOptions, setDifficultyOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    // Extract unique difficulty levels from the data and create difficulty options
    const uniqueDifficulties = [...new Set(Data.map((card) => card.level))];
    const difficultyOptions = [
      { value: '', label: 'Difficulty Level' },
      ...uniqueDifficulties.map((level) => ({
        value: level.toString(),
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

  useEffect(() => {
    let filtered = Data.filter((card) => {
      const difficultyMatch = selectedDifficulty === '' || card.level === parseInt(selectedDifficulty);
      const categoryMatch = selectedCategory === '' || card.category.includes(selectedCategory);
      return difficultyMatch && categoryMatch;
    });

    if (selectedOrder === 'oldest') {
      filtered = filtered.sort((a, b) => new Date(a.publish_date) - new Date(b.publish_date));
    } else if (selectedOrder === 'newest') {
      filtered = filtered.sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date));
    }

    setFilteredCards(filtered);
  }, [selectedDifficulty, selectedCategory, selectedOrder]);

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleOrderChange = (event) => {
    setSelectedOrder(event.target.value);
  };

  return (
    <body className='tips-background'>
      <Layout title='Elemental Selenium Archives' description='Elemental Selenium Archives'>
        <div className='tips-wrapper'>
          <h1 className='tips-header'>The Tips</h1>
          <div className='dropdown-container'>
            <p>Filter by:</p>
            <Dropdown
              className='dropdown-options'
              options={difficultyOptions}
              selectedOption={selectedDifficulty}
              onSelectChange={handleDifficultyChange}
            />
            <Dropdown
              options={categoryOptions}
              selectedOption={selectedCategory}
              onSelectChange={handleCategoryChange}
            />
            <Dropdown
              options={[
                { value: '', label: 'Order Posted' },
                { value: 'oldest', label: 'Oldest First' },
                { value: 'newest', label: 'Newest First' },
              ]}
              selectedOption={selectedOrder}
              onSelectChange={handleOrderChange}
            />
          </div>
          {filteredCards.map((card) => (
            <Card
              tags={card.tags}
              contentUrl={card.contentUrl}
              publish_date={card.publish_date}
              level={card.level}
              text={card.text}
              title={card.title}
            />
          ))}
        </div>
        <img className='tips-footer' src='img/backgrounds/tips-footer.svg' alt='' />
      </Layout>
    </body>
  );
};

export default Tips;
