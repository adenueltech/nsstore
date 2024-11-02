import React, { useEffect, useState, useRef } from 'react';
import './PropertySection.css';  // Import your CSS file for animations

const properties = [
  { id: 1, title: 'Luxury Villa', price: '$1,200,000', bedrooms: 5, status: 'For Sale', backgroundImage: './luxry.jpg ' },
  { id: 2, title: 'Modern Apartment', price: '$850,000', bedrooms: 3, status: 'For Rent', backgroundImage: './modern.jpg' },
  { id: 3, title: 'Cozy Cottage', price: '$450,000', bedrooms: 2, status: 'For Sale', backgroundImage: './cozy.jpg' },
  { id: 4, title: 'City Condo', price: '$650,000', bedrooms: 2, status: 'For Rent', backgroundImage: './condo.jpg' },
  { id: 5, title: 'Spacious Townhouse', price: '$900,000', bedrooms: 4, status: 'For Sale', backgroundImage: './spa.jpg' },
  { id: 6, title: 'Charming Bungalow', price: '$400,000', bedrooms: 3, status: 'For Rent', backgroundImage: './boungalow.jpg' },
];

const PropertySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="properties" 
      ref={sectionRef} 
      className="py-16 bg-gray-100" 
      style={{
        padding: '20px',
      }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Properties</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div 
            key={property.id} 
            className={`border rounded-lg overflow-hidden shadow-lg relative h-64 transition-transform duration-700 ease-out ${
              isVisible ? 'drop-down-animation' : 'hidden-property'
            }`}
            style={{
              backgroundImage: `url(${property.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="bg-black bg-opacity-50 p-4 text-white h-full flex flex-col justify-end">
              <h3 className="font-semibold text-lg">{property.title}</h3>
              <p>{property.bedrooms} Bedrooms</p>
              <p className="text-xl font-bold">{property.price}</p>
              <p className={`mt-2 inline-block px-2 py-1 text-sm font-semibold ${property.status === 'For Sale' ? 'bg-gray-500' : 'bg-orange-500'} text-white`}>
                {property.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertySection;

