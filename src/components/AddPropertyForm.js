import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const AddPropertyForm = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Handle form submission logic here, like sending data to the backend

    // Navigate to the home page or another route after form submission
    navigate('/'); // Replace with the desired route
  };

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/propimg.jpg')" }}> {/* Set background image */}
      <div className="absolute inset-0 bg-black opacity-30" /> {/* Adjusted opacity */}
      <section className="py-16 flex flex-col justify-center items-center flex-grow"> {/* Main section */}
        <div className="max-w-lg w-full p-8 rounded-lg border border-white z-10"> {/* Added z-10 */}
          <h2 className="text-3xl font-bold text-white text-center mb-8">Add Property Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white font-bold">Property Title</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black" required />
            </div>
            <div className="mb-4">
              <label className="block text-white font-bold">Price</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black" required />
            </div>
            <div className="mb-4">
              <label className="block text-white font-bold">Bedrooms</label>
              <input type="number" className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black" required />
            </div>
            <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded-md font-bold">
              Submit Property
            </button>
          </form>
          <button
            onClick={() => navigate('/')} // Navigate to home page
            className="mt-4 w-full bg-gray-800 text-white py-2 rounded-md transition duration-300 hover:bg-gray-700"
          >
            Back to Home
          </button>
        </div>

        {/* Contact Section Code */}
        <section className="py-8 w-full z-10"> {/* Added z-10 */}
          <div className="container mx-auto text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Us</h3>
            <p className="mb-4 text-white">We'd love to hear from you!</p>
            <div className="flex justify-center">
              <div className="w-full max-w-md p-8 rounded-lg border border-white"> {/* Added border to contact form */}
                <input
                  type="email"
                  placeholder="Your Email"
                  className="block w-full border border-gray-300 rounded-md p-2 mb-4 text-black"
                  required
                />
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="block w-full border border-gray-300 rounded-md p-2 mb-4 text-black"
                  required
                ></textarea>
                <button className="w-full bg-orange-600 text-white py-2 rounded-md font-bold">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Footer Code */}
      <footer className="bg-gray-800 text-white py-4 w-full">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Developed By Ade's-Tech.</p>
          <p>Follow us on social media for the latest updates.</p>
        </div>
      </footer>
    </div>
  );
};

export default AddPropertyForm;













