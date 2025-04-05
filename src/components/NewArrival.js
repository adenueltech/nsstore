import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const NewArrival = () => {
  const { user } = useAuth(); 
  const navigate = useNavigate();

  // Navigate to the products page
  const handleViewAllProducts = () => {
    if (user) {
      navigate('/products');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="text-black p-4 sm:p-8">
      <h2 className="text-red-500 text-lg font-bold mb-4">Featured</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        
        {/* PlayStation 5 */}
        <div className="relative col-span-1 sm:col-span-2">
          <img
            src="/images/playstation.jpg"
            alt="PlayStation 5"
            className="w-full rounded-md h-64 sm:h-auto opacity-90"
          />
          <div className="mt-2 sm:absolute sm:bottom-6 sm:left-6">
            <h3 className="text-lg sm:text-xl text-red-500 font-bold">PlayStation 5</h3>
            <p className="text-black font-bold sm:text-lg text-[14px]">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button 
              onClick={handleViewAllProducts} 
              className="text-red-500 underline mt-2 inline-block"
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Women's Collection */}
        <div className="relative p-4 sm:p-6 rounded-md">
          <img
            src="/images/womencollection.jpg"
            alt="Women's Collection"
            className="w-full h-56 sm:h-[400px] object-cover rounded-md opacity-90"
          />
          <div className="mt-2 sm:absolute sm:bottom-6 sm:left-6">
            <h3 className="text-lg sm:text-xl font-bold">Women’s Collections</h3>
            <p className="text-black font-bold text-sm sm:text-base">
              Featured woman collections that give you another vibe.
            </p>
            <button 
              onClick={handleViewAllProducts} 
              className="text-red-500 underline mt-2 inline-block"
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Speakers */}
        <div className="relative p-4 sm:p-6 rounded-md">
          <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
          <img
            src="/images/speaker.jpg"
            alt="Speakers"
            className="w-full h-30 sm:h-48 object-cover rounded-md opacity-70"
          />
          <div className="mt-2 sm:absolute sm:bottom-6 sm:left-6 z-10">
            <h3 className="text-lg sm:text-xl text-red-500 sm:text-white font-bold">Speakers</h3>
            <p className="sm:text-white text-black text-[16px] sm:text-[20px] font-bold">
              Amazon wireless speakers
            </p>
            <button
              onClick={handleViewAllProducts}
              className="sm:text-white text-red-500 underline mt-2 inline-block"
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Gucci Perfume */}
        <div className="relative p-4 sm:p-6 rounded-md">
          <img
            src="/images/gucciperfume.jpg"
            alt="Gucci Perfume"
            className="w-full h-40 sm:h-48 object-cover rounded-md opacity-90"
          />
          <div className="mt-2 sm:absolute sm:bottom-6 sm:left-6">
            <h3 className="text-lg sm:text-xl text-black font-bold">Gucci Intense Oud</h3>
            <p className="text-black text-[16px] sm:text-[15px] font-bold">
              Luxury fragrance for a bold statement.
            </p>
            <button 
              onClick={handleViewAllProducts} 
              className="text-red-500 underline mt-2 inline-block"
            >
              Shop Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewArrival;
