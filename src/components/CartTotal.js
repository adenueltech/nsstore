import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useCart } from '../context/CartContext'; // Import the cart context

const CartTotal = ({ subtotal }) => {
  const navigate = useNavigate(); // Initialize navigate
  const { cart } = useCart(); // Get the cart from context

  const shipping = subtotal > 0 ? 'Free' : '$0';

  return (
    <div className="p-4 border rounded-md">
      <h3 className="text-xl font-bold">Cart Total</h3>
      <p>Subtotal: ${subtotal}</p>
      <p>Shipping: {shipping}</p>
      <p>Total: ${subtotal}</p>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        onClick={() => navigate('/checkout', { state: { cart } })} // Navigate to checkout
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartTotal;
