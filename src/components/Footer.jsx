import React, {useState} from 'react';
import '../styles/Footer.css';
import youtube from '../assets/youtube.png';
import twitter from '../assets/X.png';
import linkedin from '../assets/linkedin.png';
import insta from '../assets/instagram.png';

const Footer = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
    };

    const handleLinkedin = () => {
        window.open('https://www.linkedin.com/in/matias-kamelman/', '_blank'); // Open LinkedIn in a new tab
    };

    const handleInstagram = () => {
        window.open('https://www.instagram.com/matiaskamelman', '_blank'); // Open Instagram in a new tab
    }    
    
    const handleTwitter = () => {
        window.open('https://x.com/MatiasKamelman', '_blank'); // Open Twitter in a new tab
    }

    const handleYoutube = () => {
        window.open('https://www.youtube.com/@MatiasKamelman', '_blank'); // Open Youtube in a new tab
    }

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Sección Izquierda - 4 Cuadrados */}
                <div className="footer-left">
                    <div className="footer-square">
                        <div className="d-flex justify-content-between align-items-start" style={{ marginTop: '10px' }}>
                            <div className="icon ms-3" onClick={handleYoutube}>
                                <img src={youtube} alt="youtube" />
                            </div>
                            <div className="GetAQuoteSmall me-2" onClick={handleYoutube}>
                                <div className="Group82">
                                    <div className="Ellipse1" />
                                    <div className="Arrow"></div>
                                </div>
                            </div>
                        </div>
                        <div className="title mt-5 ms-3">
                            YOUTUBE
                        </div>
                        <div className="paragraph ms-3">
                            <p>Have a look on my workflow, stack and experiences coding</p>
                        </div>
                    </div>
                    
                    <div className="footer-square">
                    <div className="d-flex justify-content-between align-items-start" style={{ marginTop: '10px' }}>
                            <div className="icon ms-3" onClick={handleTwitter}>
                                <img src={twitter} alt="twitter" />
                            </div>
                            <div className="GetAQuoteSmall me-2" onClick={handleTwitter}>
                                <div className="Group82">
                                    <div className="Ellipse1" />
                                    <div className="Arrow"></div>
                                </div>
                            </div>
                        </div>
                        <div className="title mt-5 ms-3">
                        TWITTER - X
                        </div>
                        <div className="paragraph ms-3">

                        <p>Engage my tweets about my interesting coding journey.</p>
                        </div>
                    </div>
                    <div className="footer-square">
                    <div className="d-flex justify-content-between align-items-start" style={{ marginTop: '10px' }}>
                            <div className="icon ms-3" onClick={handleLinkedin}>
                                <img src={linkedin} alt="linkedin" />
                            </div>
                            <div className="GetAQuoteSmall me-2" onClick={handleLinkedin}>
                                <div className="Group82">
                                    <div className="Ellipse1" />
                                    <div className="Arrow"></div>
                                </div>
                            </div>
                        </div>
                        <div className="title mt-5 ms-3">
                        LINKEDIN
                        </div>
                        <div className="paragraph ms-3">
                        <p>Have a feel of my professional outlook and contributions.</p>
                        </div>
                    </div>
                    <div className="footer-square">
                    <div className="d-flex justify-content-between align-items-start" style={{ marginTop: '10px' }}>
                            <div className="icon ms-3" onClick={handleInstagram}>
                                <img src={insta} alt="instagram" />
                            </div>
                            <div className="GetAQuoteSmall me-2" onClick={handleInstagram}>
                                <div className="Group82">
                                    <div className="Ellipse1" />
                                    <div className="Arrow"></div>
                                </div>
                            </div>
                        </div>
                        <div className="title mt-5 ms-3">
                        INSTAGRAM
                        </div>  
                        <div className="paragrapgh ms-3">
                        <p>Discover more about my creative and personal journey.</p>
                        </div>
                    </div>
                </div>

                {/* Sección Derecha - CTA */}
                <div className="footer-right">

                    <div className="title d-flex justify-content-center align-text-center mt-5">
                        Let´s Work Together
                    </div>
                    <div className="cta-vertical">
                        <button className="cta-button" onClick={() => window.open('mailto:kamelmat@gmail.com')}>
                            <i className="fa-solid fa-envelope"></i> Email Me
                        </button>
                        <button className="cta-button2" onClick={toggleDropdown}><i class="fa-solid fa-phone"></i> Call Me</button>
                        {isDropdownOpen && (
                            <div className="dropdown-menu show" style={{ display: 'block' }}>
                                <p className="dropdown-item">Please call: +34 618174853</p>
                            </div>
                        )}
                    </div>
                    <div className="cta-horizontal">
                        <p>© Matias Kamelman 2024. All rights reserved.</p>
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
