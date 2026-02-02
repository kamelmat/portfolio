import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPublicationsOpen, setIsPublicationsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePublications = () => {
    setIsPublicationsOpen(!isPublicationsOpen);
  };

  const publications = [
    {
      title: "Why context engineering is like teaching AI to skip stones",
      url: "https://www.thoughtworks.com/insights/blog/generative-ai/why-context-engineering-is-like-teaching-AI-to-skip-stones",
      category: "Thoughtworks"
    },
    {
      title: "Service-as-Software: A new economic model for the age of AI agents",
      url: "https://www.thoughtworks.com/insights/blog/generative-ai/service-as-software-a-new-economic-model-for-age-of-ai-agents",
      category: "Thoughtworks"
    },
    {
      title: "Why Spatial Sound Movement Makes MBW More Effective",
      url: "https://lamenteresonante.blogspot.com/2025/08/why-spatial-sound-movement-makes-mbw.html",
      category: "Blog"
    },
    {
      title: "Visit La Mente Resonante Blog →",
      url: "https://lamenteresonante.blogspot.com/",
      category: "Blog"
    }
  ];

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
          
          <div className="navbar__dropdown">
            <button 
              className="navbar__link navbar__dropdown-toggle" 
              onClick={togglePublications}
            >
              Publications
              <span className={`dropdown-arrow ${isPublicationsOpen ? 'open' : ''}`}>▼</span>
            </button>
            {isPublicationsOpen && (
              <div className="navbar__dropdown-menu">
                <div className="navbar__dropdown-section">
                  <div className="navbar__dropdown-label">Thoughtworks</div>
                  {publications.filter(p => p.category === "Thoughtworks").map((pub, index) => (
                    <a 
                      key={index}
                      href={pub.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="navbar__dropdown-item"
                    >
                      {pub.title}
                    </a>
                  ))}
                </div>
                <div className="navbar__dropdown-section">
                  <div className="navbar__dropdown-label">Blog</div>
                  {publications.filter(p => p.category === "Blog").map((pub, index) => (
                    <a 
                      key={index}
                      href={pub.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="navbar__dropdown-item"
                    >
                      {pub.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/contact" className="navbar__cta">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 