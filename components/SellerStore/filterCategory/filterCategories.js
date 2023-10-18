import Link from 'next/link';
import React, { useState } from 'react';


function FilterCategories({ categories, selectedCategory, onSelectCategory }) {

  // const [activeCategory, setActiveCategory] = useState('');

  // const handleClick = (categories) => {
  //   setActiveCategory(categories);
  //   console.log(categories.name);
  // };

  return (
    <div className="flex space-x-4">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`px-4 py-2 focus:outline-none ${
            selectedCategory === category.name ? 'border-b-2 border-skin-primary text-skin-primary' : 'bg-gray-200'
          }`}
          onClick={() => onSelectCategory(category.name)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default FilterCategories;
