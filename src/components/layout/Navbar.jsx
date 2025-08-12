import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          MATIAS KAMELMAN
        </Link>

        <div className={`navbar__hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>

        <div className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar__link">Home</Link>
          <Link to="/about" className="navbar__link">About</Link>
          <Link to="/work" className="navbar__link">Work</Link>
          <Link to="/contact" className="navbar__cta">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 