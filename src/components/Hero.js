import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Hero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleViewAllProducts = () => {
    if (user) {
      navigate("/products");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="relative w-full h-[600px] bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/heroimage.jpg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-left h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Up to <span className="text-red-500">10% off</span> Voucher!
          </h2>
          <p className="text-lg sm:text-xl justify-left font-bold items-left text-white">
            Shop now and save big on our exclusive collections.
          </p>
          <button
            onClick={handleViewAllProducts}
            className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-[30px] hover:bg-red-600 transition"
          >
            Shop Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
