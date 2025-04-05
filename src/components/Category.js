import React from 'react';
import { FaTshirt, FaLaptop, FaMobileAlt, FaHeadphones, FaGamepad } from 'react-icons/fa';

const categories = [
  { id: 1, name: 'Clothes', icon: <FaTshirt /> },
  { id: 2, name: 'Laptops', icon: <FaLaptop /> },
  { id: 3, name: 'Smartphones', icon: <FaMobileAlt /> },
  { id: 4, name: 'Headphones', icon: <FaHeadphones /> },
  { id: 5, name: 'Gaming', icon: <FaGamepad /> },
];

const Category = () => {
  return (
    <div className="bg-white p-4 md:p-6 my-4 md:my-6 shadow-lg rounded-md">
      <h2 className="text-xl md:text-2xl font-semibold mb-4"> Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:space-x-4 justify-center gap-4">
        {categories.map((category) => (
          <div key={category.id} className="text-center">
            <div className="text-2xl md:text-3xl mb-1 md:mb-2">{category.icon}</div>
            <p className="text-sm md:text-base">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
