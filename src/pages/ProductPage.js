import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import AdminNav from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services'

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsArray = [];
        querySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProducts(productsArray);
        setFilteredProducts(productsArray);
      } catch (error) {
        setError('Error fetching products');
        console.error('Error fetching products: ', error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AdminNav />
      <div className="flex-grow p-6">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="border rounded px-3 py-2 w-full mb-4"
          />
        </div>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold mb-4">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredProducts.length === 0 ? (
                <div>No products found.</div>
              ) : (
                filteredProducts.map((product) => (
                  <div key={product.id} className="bg-gray-100 p-4 rounded shadow">
                    <img
                      src={`/images/${product.image}`}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded mb-2"
                    />
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-blue-600 font-bold">Price: ${product.price}</p>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="mt-4 bg-blue-500 hover:bg-red-500 text-white p-2 rounded"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default ProductPage;
