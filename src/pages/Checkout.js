import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services'
  // rttwr
const Checkout = () => {
  const location = useLocation();
  const cart = location.state?.cart || []; // Get cart data from state
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white text-gray-800">
        <main className="p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Billing Details Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Billing Details</h2>
            <form className="space-y-4 bg-gray-100 p-6 rounded-md">
              <input className="w-full p-3 border rounded" type="text" placeholder="First Name*" required />
              <input className="w-full p-3 border rounded" type="text" placeholder="Company Name" />
              <input className="w-full p-3 border rounded" type="text" placeholder="Street Address*" required />
              <input className="w-full p-3 border rounded" type="text" placeholder="Apartment, floor, etc. (optional)" />
              <input className="w-full p-3 border rounded" type="text" placeholder="Town/City*" required />
              <input className="w-full p-3 border rounded" type="tel" placeholder="Phone Number*" required />
              <input className="w-full p-3 border rounded" type="email" placeholder="Email Address*" required />
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Save this information for faster check-out next time</span>
              </div>
            </form>
          </div>

          {/* Order Summary Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Order Summary</h2>
            <div className="bg-gray-100 p-6 rounded-md">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b pb-3 mb-3">
                  <img src={`/images/${item.image}`} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price} x {item.quantity}</p>
                  </div>
                </div>
              ))}
              <div className="text-lg font-semibold flex justify-between border-t pt-3 mt-3">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="text-lg font-semibold flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="text-xl font-bold flex justify-between mt-3">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="mt-4">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="payment" className="mr-2" /> <span>Bank</span>
                </label>
                <label className="flex items-center space-x-2 mt-2">
                  <input type="radio" name="payment" className="mr-2" checked /> <span>Cash on delivery</span>
                </label>
              </div>
              <input className="w-full p-3 border rounded mt-4" type="text" placeholder="Coupon Code" />
              <button className="w-full p-3 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 mt-2">
                Apply Coupon
              </button>
              <button className="w-full p-3 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 mt-4">
                Place Order
              </button>
            </div>
          </div>
        </main>
      </div>
      <Services />
      <Footer />
    </>
  );
};

export default Checkout;