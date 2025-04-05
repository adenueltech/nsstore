import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Adjust path if needed
import Footer from '../components/Footer'; // Adjust path if needed

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <div className="flex flex-col items-center justify-center flex-grow text-center px-4 py-12">
        <nav className="text-sm text-gray-500 mb-4">
          <span className="mr-1">Home</span> / <span className="ml-1 text-black">404 Error</span>
        </nav>

        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          Your visited page not found. You may go home page.
        </p>

        <Link
          to="/"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded"
        >
          Back to home page
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

