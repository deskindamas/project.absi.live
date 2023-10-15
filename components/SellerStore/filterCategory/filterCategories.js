import Link from 'next/link';
import React, { useState } from 'react';


function FilterCategories({ categories }) {

  const [activeCategory, setActiveCategory] = useState('');

  const handleClick = (categories) => {
    setActiveCategory(categories);
    console.log(categories.name);
  };

  return (

        <li
          key={categories.name}
          value={categories.name}
          className={`px-6 ${activeCategory === categories.name ? 'bg-black' : ''}`}
          onClick={() => handleClick(categories)}
        >
          <Link href="#">{categories.name}</Link>
        </li>

  );
}

export default FilterCategories;
