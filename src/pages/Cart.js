import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext'; // Import Cart context

import CartTotal from '../components/CartTotal';
import Nav from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services'

const Cart = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { cart, setCart } = useCart(); // Access the cart from context
  const [coupon, setCoupon] = useState('');

  // Redirect to login if the user is not logged in
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // Calculate the subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Update item quantity
  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Remove an item from the cart
  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-grow p-8">
        <h2 className="text-3xl font-bold mb-4">Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border-b">
                <img
                  src={`/images/${item.image}`} // Ensure image path is correct
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center mt-6">
          <button
            className="border px-4 py-2 rounded"
            onClick={() => navigate('/products')}
          >
            Return To Shop
          </button>
          <button
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={() => localStorage.setItem('cart', JSON.stringify(cart))} // Save the cart
          >
            Update Cart
          </button>
        </div>

        <div className="mt-6 flex justify-between">
          <div>
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Coupon Code"
              className="border p-2 rounded"
            />
            <button className="ml-2 bg-red-500 text-white py-2 px-4 rounded">
              Apply Coupon
            </button>
          </div>
          <CartTotal subtotal={subtotal} />
        </div>
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default Cart;
