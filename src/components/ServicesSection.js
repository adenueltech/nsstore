import React from 'react';

const services = [
  { id: 1, title: 'Property Sales', description: 'We help you buy and sell properties seamlessly.', icon: '🏡' },
  { id: 2, title: 'Rentals', description: 'Find your ideal rental property with our expert guidance.', icon: '🏠' },
  { id: 3, title: 'Property Management', description: 'Professional management services for your property.', icon: '🗝️' },
  { id: 4, title: 'Real Estate Consulting', description: 'Get expert advice for all your real estate needs.', icon: '💼' },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-16 px-4 text-black bg-cover bg-center"
      style={{
        backgroundImage: `url('/service.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white bg-opacity-90 border border-gray-300 rounded-lg shadow-md p-6 text-center text-gray-800 hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-black font-medium">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

