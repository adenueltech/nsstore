import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate to Add Property page
  const handleAddPropertyClick = () => {
    navigate('/add-property');
  };

  return (
    <nav className="bg-gray-800 bg-opacity-70 p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl"><span style={{color:'orange'}}>A</span>de's-Estates</h1>
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#home"
                onClick={handleNavClick}
                className="text-white hover:text-orange-500 transition duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#properties"
                onClick={handleNavClick}
                className="text-white hover:text-orange-500 transition duration-300 ease-in-out"
              >
                Properties
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={handleNavClick}
                className="text-white hover:text-orange-500 transition duration-300 ease-in-out"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="text-white hover:text-orange-500 transition duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
          <FaSearch className="text-white cursor-pointer" />
          <button
            onClick={handleAddPropertyClick} // Navigate to add-property route
            className="bg-orange-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-orange-600"
          >
            Add Property
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-70 p-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <a
                href="#home"
                onClick={handleNavClick}
                className="text-white hover:text-orange-500 transition duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#properties"
                onClick={handleNavClick}
                className="text-white hover:text-orange-500 transition duration-300 ease-in-out"
              >
                Properties
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={handleNavClick}
                className="text-white hover:text-orange-500 transition duration-300 ease-in-out"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="text-white hover:text-orange-500 transition duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
            <li>
              <button
                onClick={handleAddPropertyClick} // Navigate to add-property route
                className="bg-orange-500 text-white w-full px-4 py-2 rounded-md transition duration-300 hover:bg-orange-600"
              >
                Add Property
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;





