import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaBars, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <header className="bg-white text-black shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <h1 className="text-3xl font-bold">Ns-Store</h1>

        {/* Mobile Hamburger Menu */}
        <button className="lg:hidden flex items-center" onClick={toggleSidebar}>
          <FaBars className="text-2xl" />
        </button>

        {/* Sidebar for mobile */}
        <div
          className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transition-opacity ${
            sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleSidebar}
        ></div>

        <div
          className={`lg:hidden fixed top-0 left-0 bg-white w-64 h-full p-4 shadow-md transition-transform ${
            sidebarOpen ? 'transform-none' : 'transform -translate-x-full'
          } z-50`}
        >
          <nav className="space-y-4">
            <Link to="/" className={`block hover:text-gray-400 pb-1 ${isActive('/') ? 'border-b-2 border-black' : ''}`}>
              Home
            </Link>

            <Link to="/about" className={`block hover:text-gray-400 pb-1 ${isActive('/about') ? 'border-b-2 border-black' : ''}`}>
              About
            </Link>
            <Link to="/contact" className={`block hover:text-gray-400 pb-1 ${isActive('/contact') ? 'border-b-2 border-black' : ''}`}>
              Contact
            </Link>
           
            {!user && (
              <>
                <Link to="/login" className={`block hover:text-gray-400 pb-1 ${isActive('/login') ? 'border-b-2 border-black' : ''}`}>
                  Login
                </Link>
                <Link to="/register" className={`block hover:text-gray-400 pb-1 ${isActive('/register') ? 'border-b-2 border-black' : ''}`}>
                  Sign Up
                </Link>
              </>
            )}
            {user && (
              <>
                <Link to="/profile" className="flex items-center space-x-2">
                  <FaUser className="text-xl" />
                  <span>{user.firstName}</span>
                </Link>
                <button onClick={logout} className="block mt-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition">
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <Link to="/" className={`hover:text-gray-400 pb-1 ${isActive('/') ? 'border-b-2 border-black' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`hover:text-gray-400 pb-1 ${isActive('/about') ? 'border-b-2 border-black' : ''}`}>
            About
          </Link>
          <Link to="/contact" className={`hover:text-gray-400 pb-1 ${isActive('/contact') ? 'border-b-2 border-black' : ''}`}>
            Contact
          </Link>

          {!user && (
            <>
              <Link to="/login" className={`hover:text-gray-400 pb-1 ${isActive('/login') ? 'border-b-2 border-black' : ''}`}>
                Login
              </Link>
              <Link to="/register" className={`hover:text-gray-400 pb-1 ${isActive('/register') ? 'border-b-2 border-black' : ''}`}>
                Sign Up
              </Link>
            </>
          )}
          {user && (
            <button onClick={logout} className="ml-4 bg-red-600 text-white px-2 py-2 rounded-[30px] hover:bg-red-700 transition">
              Logout
            </button>
          )}
        </nav>

        {/* Icons */}
        <div className="flex space-x-4 sm:mr-[100px] relative">
          <FaHeart className="cursor-pointer hover:text-gray-400" />
          <Link to="/cart" className="relative">
            <FaShoppingCart className="cursor-pointer hover:text-gray-400" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
        </div>

        {user && location.pathname !== '/profile' && (
  <Link to="/profile" className="flex items-center space-x-2">
    <FaUser className="text-xl" />
    <span>{user.firstName}</span>
  </Link>
)}

      </div>
    </header>
  );
};

export default Header;
