import React from 'react';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-16">
        
        {/* Contact Form */}
        <form className="max-w-lg bg-white p-6 rounded-lg shadow-lg w-full border border-orange-500">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="mt-1 block w-full border border-orange-500 rounded-md p-2" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full border border-orange-500 rounded-md p-2" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="mt-1 block w-full border border-orange-500 rounded-md p-2" rows="4" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="flex flex-col items-center text-center space-y-4 w-full lg:w-auto">
          <p className="text-lg font-semibold">You can also contact us on:</p>
          <p className="text-lg font-semibold break-words">emmanueladewunmi51@gmail.com</p>
          <div className="flex space-x-4 text-gray-600 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition duration-300">
              <FaWhatsapp size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition duration-300">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


