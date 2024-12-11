import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Count from '../components/Count';
import WeCreate from '../components/WeCreate';
import NewInStore from '../components/NewInStore';
import BestFurniture from '../components/BestFurniture';
import AllProduct from '../components/AllProduct';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Count />
      <WeCreate />
      <NewInStore />
      <BestFurniture />
      <AllProduct />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
