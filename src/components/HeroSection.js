import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa'; // Import search icon
import './HeroSection.css'; // Import your CSS file for animations

const HeroSection = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [price, setPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State to hold error message

  useEffect(() => {
    // Fetch states from an API
    const fetchStates = async () => {
      try {
        const response = await axios.get('https://example.com/api/states'); // Replace with your API endpoint
        setStates(response.data);
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    if (selectedState) {
      // Fetch cities based on selected state
      const fetchCities = async () => {
        try {
          const response = await axios.get(`https://example.com/api/cities?state=${selectedState}`); // Replace with your API endpoint
          setCities(response.data);
        } catch (error) {
          console.error('Error fetching cities:', error);
        }
      };

      fetchCities();
    } else {
      setCities([]); // Reset cities when no state is selected
    }
  }, [selectedState]);

  const handleSearch = () => {
    if (!selectedState || !selectedCity) {
      setErrorMessage('Please select both a state and a city.'); // Set error message
      return;
    }

    // Clear the error message if the inputs are valid
    setErrorMessage('');
    
    // Construct search query
    const query = `real estate ${selectedState} ${selectedCity} ${propertyType} ${price} bedrooms: ${bedrooms} bathrooms: ${bathrooms}`;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    
    // Open search in a new tab
    window.open(googleSearchUrl, '_blank');
  };

  return (
    <section
      className="bg-cover h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/herobg.jpg')" }} // Correct way to reference the image
    >
      <div className="  p-8 rounded-md text-center float-animation">
        <h1 className="text-4xl text-white font-bold">Find Your Dream Home</h1>
        <p className="text-white font-bold mt-4">Explore our listings and find the perfect property for you.</p>
      </div>

      {/* Placeholders for Search Filters */}
      <div className="flex flex-wrap justify-center mt-8 float-animation space-x-4 space-y-4 md:space-y-0 md:space-x-4">
        {/* State Input */}
        <div className="border border-orange-500 ml-3 rounded-md p-2 w-11/12 md:w-1/5 max-w-xs">
          <input
            type="text"
            placeholder="State"
            className="w-full bg-transparent outline-none placeholder-white font-semibold text-white text-sm p-2"
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setCities([]); // Reset cities when state changes
              setErrorMessage(''); // Clear error message
            }}
          />
        </div>

        {/* City Input */}
        <div className="border border-white rounded-md p-2 w-11/12 md:w-1/5 max-w-xs">
          <input
            type="text"
            placeholder="City"
            className="w-full bg-transparent outline-none placeholder-white font-semibold text-white text-sm p-2"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!selectedState} // Disable if no state is entered
          />
        </div>

        {/* Property Type Dropdown */}
        <div className="border border-orange-500 w-full mx-auto rounded-md p-2 w-11/12 md:w-1/5 max-w-xs">
          <select
            className="w-full bg-white text-black font-semibold outline-none p-2"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="" disabled hidden>Property Type</option>
            <option value="duplex">Duplex</option>
            <option value="bungalow">Bungalow</option>
            <option value="skyscraper">Skyscraper</option>
            <option value="townhouse">Townhouse</option>
          </select>
        </div>

        {/* Price Input */}
        <div className="border border-white rounded-md p-2 w-11/12 md:w-1/5 max-w-xs">
          <input
            type="text"
            placeholder="Price"
            className="w-full bg-transparent outline-none placeholder-white font-semibold text-white text-sm p-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        {/* Bedrooms Dropdown */}
        <div className="border border-white rounded-md p-2 w-11/12 md:w-1/5 max-w-xs">
          <select 
            className="w-full bg-white text-black font-semibold outline-none p-2"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          >
            <option value="" disabled hidden>Bedrooms</option>
            {[...Array(5)].map((_, index) => (
              <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
          </select>
        </div>

        {/* Bathrooms Dropdown */}
        <div className="border border-orange-500 rounded-md p-2 w-11/12 md:w-1/5 max-w-xs">
          <select 
            className="w-full bg-white text-black font-semibold outline-none p-2"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
          >
            <option value="" disabled hidden>Bathrooms</option>
            {[...Array(3)].map((_, index) => (
              <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Error Message Display */}
      {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}

      {/* Search Button with Icon */}
      <div className="mt-4">
        <button 
          onClick={handleSearch}
          className={`flex items-center ${!selectedState || !selectedCity ? 'bg-gray-500' : 'bg-orange-500'} text-white px-4 py-2 rounded-md transition duration-300 hover:bg-orange-600`}
          disabled={!selectedState || !selectedCity} // Disable button if either state or city is not selected
        >
          <FaSearch className="mr-2" />
          Search
        </button>
      </div>
    </section>
  );
};

export default HeroSection;














