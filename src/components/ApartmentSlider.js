import React, { useState, useEffect } from 'react';

const images = [
  './slide1.jpg',
  './slide2.jpg',
  './slide3.jpg',
];

const ApartmentSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-80 md:h-96 lg:h-[450px] overflow-hidden">
      <div className="absolute inset-0">
        <img src={images[currentImage]} alt="Apartment" className="w-full h-full object-cover transition-all duration-1000" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold px-4">
          Owning a home is a keystone of wealth
        </h2>
      </div>
    </section>
  );
};

export default ApartmentSlider;

