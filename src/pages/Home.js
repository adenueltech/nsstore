import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FlashSales from '../components/FlashSales';
import Category from '../components/Category';
import Footer from '../components/Footer';
import BestSellingProduct from '../components/BestSellingProduct'
import Productcom from '../components/Productovv'
import NewArrival from '../components/NewArrival'
import Services from '../components/Services'

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto p-4">
        <FlashSales />
        <Category />
        <BestSellingProduct />
        <Productcom />
        <NewArrival />
        <Services />
        
      </div>
      <Footer />
      
    </div>
  );
};

export default Home;
