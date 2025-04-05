import React from 'react';
import { FaHeart, FaEye, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../context/AuthContext'; // Import useAuth

const products = [
  { id: 1, name: 'Camera', price: '$360', rating: 4.5, image: '/images/camera.jpg' },
  { id: 2, name: 'Laptop', price: '$700', rating: 5, image: '/images/laptop.jpg' },
  { id: 3, name: 'Skin Care', price: '$500', rating: 4, image: '/images/skincare.jpg' },
  { id: 4, name: 'Toy Car', price: '$960', rating: 5, image: '/images/toycar.jpg', new: true },
  { id: 5, name: 'Sports Shoes', price: '$1160', rating: 5, image: '/images/shoes.jpg' },
  { id: 6, name: 'Gamepad', price: '$660', rating: 4.5, image: '/images/gamepad.jpg', new: true },
  { id: 7, name: 'Jacket', price: '$660', rating: 4.5, image: '/images/jacket.jpg' },
  { id: 8, name: 'Jacket', price: '$660', rating: 4.5, image: '/images/jacket.jpg' }
];

const Products = () => {
  const { user } = useAuth(); // Get the logged-in user
  const navigate = useNavigate(); // Initialize navigate function

  const handleViewAllProducts = () => {
    if (user) {
      navigate('/products'); // Navigate to the products page if logged in
    } else {
      navigate('/login'); // Redirect to the login page if not logged in
    }
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-xl font-semibold text-red-500 mb-4">Our Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white text-black p-4 rounded-lg relative">
            {product.new && <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">NEW</span>}
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            <div className="flex justify-between items-center mt-2">
              <h3 className="text-md font-semibold">{product.name}</h3>
              <div className="flex gap-1">
                <FaHeart className="text-gray-500 cursor-pointer" />
                <FaEye className="text-gray-500 cursor-pointer" />
              </div>
            </div>
            <p className="text-red-500 font-semibold">{product.price}</p>
            <div className="flex text-yellow-500 mt-1">
              {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
                <FaStar key={i} />
              ))}
              {product.rating % 1 !== 0 && <FaStar className="half-star" />}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button 
          onClick={handleViewAllProducts} // Use navigate to go to the products page
          className="px-4 sm:px-6 py-2 bg-red-500 text-white rounded hover:bg-blue-600 transition"
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Products;
