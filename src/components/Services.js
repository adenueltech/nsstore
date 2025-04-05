import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const services = [
  { icon: 'fas fa-shipping-fast', title: 'Free Shipping', description: 'Orders over $100' },
  { icon: 'fas fa-headphones-alt', title: '24/7 Support', description: 'We are here to help' },
  { icon: 'fas fa-shield-alt', title: 'Secure Payment', description: 'Safe and reliable' },
];

const Services = () => {
  return (
    <div className="flex  sm:flex-row justify-center items-center sm:gap-[100px] p-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-4  text-white  shadow-lg w-32  transition duration-300"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-800 mb-2">
            <i className={`${service.icon} text-2xl`}></i>
          </div>
          <h3 className="font-semibold text-black text-lg">{service.title}</h3>
          <p className="text-sm  text-black">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
