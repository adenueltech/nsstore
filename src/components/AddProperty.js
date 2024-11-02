import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddProperty = () => {
  const navigate = useNavigate();

  return (
    <section id="add-property" className="py-16 bg-gray-100 flex justify-center items-center">
      <button 
        onClick={() => navigate('/add-property')}
        className="px-10 py-5 bg-blue-800 text-white font-bold border-2 border-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-600 hover:border-orange-600 shadow-lg"
      >
        Add Your Property for Sale or Rent
      </button>
    </section>
  );
};

export default AddProperty;


