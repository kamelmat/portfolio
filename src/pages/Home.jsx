import React from 'react';
import Hero from '../components/home/Hero';
import Projects from '../components/home/Projects';
import Work from '../components/home/Work';
import '../styles/pages/home.css';

const Home = () => {
  return (
    <main className="home">
      <Hero />
      <Projects />
      <Work />
    </main>
  );
};

export default Home; 