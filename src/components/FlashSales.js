import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth

const products = [
    { id: 1, name: 'Gamepad', price: 20.00, discount: '15%', image: '/images/gamepad.jpg' },
    { id: 2, name: 'Keyboard', price: 50.00, discount: '25%', image: '/images/keyboard.jpg' },
    { id: 3, name: 'Monitor', price: 120.00, discount: '30%', image: '/images/monitor.jpg' },
    { id: 4, name: 'Chair', price: 75.00, discount: '20%', image: '/images/officechair.jpg' },
];

const FlashSales = () => {
  const { addToCart } = useCart();
  const { user } = useAuth(); // Access the user from context
  const navigate = useNavigate();

  const handleViewAllProducts = () => {
    if (user) {
      navigate('/products'); // Go to products page if user is logged in
    } else {
      navigate('/login'); // Redirect to login page if not logged in
    }
  };

  return (
    <div className="p-4 sm:p-6 my-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Flash Sales</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-100 p-3 sm:p-4 rounded-lg hover:shadow-md transition">
            <img src={product.image} alt={product.name} className="w-full h-30 sm:h-32 object-cover rounded" />
            <h3 className="mt-2 text-md sm:text-lg font-medium">{product.name}</h3>
            <p className="text-red-500">{product.discount} OFF</p>
            <p className="text-gray-700 font-semibold">${product.price.toFixed(2)}</p>
            <button 
              onClick={() => addToCart(product)}
              className="mt-2 px-3 sm:px-4 py-1 sm:py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button 
          onClick={handleViewAllProducts} 
          className="px-4 sm:px-6 py-2 bg-red-500 text-white rounded hover:bg-blue-600 transition"
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSales;
