import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import PropertySection from './components/PropertySection';
import ApartmentSlider from './components/ApartmentSlider';
import AddProperty from './components/AddProperty';
import AboutUs from './components/AboutUs';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AddPropertyForm from './components/AddPropertyForm'; // Import the new form component

function App() {
  return (
    <Router>
      {/* Only render the NavigationBar on the home page */}
      <Routes>
        <Route path="/" element={
          <>
            <NavigationBar />
            <HeroSection />
            <PropertySection />
            <ApartmentSlider />
            <AddProperty />
            <AboutUs />
            <ServicesSection />
            <ContactSection />
            <Footer />
          </>
        } />
        
        {/* Add Property Form Page without NavigationBar */}
        <Route path="/add-property" element={<AddPropertyForm />} />
      </Routes>
    </Router>
  );
}

export default App;




