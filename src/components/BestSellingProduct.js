import React from 'react';
import { Heart, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../context/AuthContext'; // Import useAuth

const products = [
  { id: 1, name: 'Jacket', price: '$260', rating: 5, image: '/images/jacket.jpg' },
  { id: 2, name: 'Bag', price: '$960', rating: 5, image: '/images/bag.jpg' },
  { id: 3, name: 'Cooler', price: '$160', rating: 5, image: '/images/cooler.jpg' },
  { id: 4, name: 'Table', price: '$360', rating: 5, image: '/images/table.jpg' }
];

const BestSellingProducts = () => {
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
    <div className="p-6 my-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-red-500">This Month</h2>
        <button 
          onClick={handleViewAllProducts} 
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          View All
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        {products.map((product) => (
          <div key={product.id} className="relative bg-gray-100 p-4 rounded-lg shadow-md w-64 min-w-[16rem]">
            <div className="absolute top-2 right-2 flex gap-1">
              <button className="p-1 bg-white rounded-full hover:bg-gray-200">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-1 bg-white rounded-full hover:bg-gray-200">
                <Eye className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
            <h3 className="mt-2 text-lg font-medium">{product.name}</h3>
            <p className="text-red-500 font-semibold">{product.price}</p>
            <div className="flex gap-1">
              {Array.from({ length: product.rating }).map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        className="h-64 bg-cover bg-center md:h-96 lg:h-[400px] mt-6"
        style={{ backgroundImage: "url('/images/commercehero1.jpg')" }}
      >
        <div className="h-full bg-black bg-opacity-50 flex items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Upgrade Your Setup!<br />
            Get Your Computer Hardware at<br />
            Up to 50% Off!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BestSellingProducts;
