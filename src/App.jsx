import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import LinkedInModal from './components/LinkedInModal';
import GitHubModal from './components/GitHubModal';
import Services from './components/Services';
import './styles/base/_reset.css';
import './styles/base/_variables.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Services />} />
        </Routes>
        <Footer />
        <LinkedInModal />
        <GitHubModal />
      </div>
    </BrowserRouter>
  );
};

export default App;
