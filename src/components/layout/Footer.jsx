import React, { useState } from 'react';
import '../../styles/components/footer.css';
import youtube from '../../assets/youtube.png';
import twitter from '../../assets/X.png';
import linkedin from '../../assets/linkedin.png';
import insta from '../../assets/instagram.png';
import github from '../../assets/github.svg';

const Footer = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLinkedin = () => {
        window.open('https://www.linkedin.com/in/matias-kamelman/', '_blank');
    };

    const handleInstagram = () => {
        window.open('https://www.instagram.com/matiaskamelman', '_blank');
    };
    
    const handleTwitter = () => {
        window.open('https://x.com/MatiasKamelman', '_blank');
    };

    const handleYoutube = () => {
        window.open('https://www.youtube.com/@MatiasKamelman', '_blank');
    };

    const handleGithub = () => {
        window.open('https://github.com/kamelmat', '_blank');
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Section - Social Squares */}
                <div className="footer-left">
                    {/* GitHub Card - Horizontal */}
                    <div className="footer-square footer-square--horizontal">
                        <div className="square-header">
                            <div className="icon" onClick={handleGithub}>
                                <img src={github} alt="GitHub" />
                            </div>
                        </div>
                        <div className="square-title">GITHUB</div>
                        <div className="square-text">
                            <p>Check out my repositories and contributions</p>
                        </div>
                            <div className="get-quote-small" onClick={handleGithub}>
                                <div className="group82">
                                    <div className="ellipse1" />
                                    <div className="arrow"></div>
                                </div>
                            </div>
                    </div>
                    
                    <div className="footer-square">
                        <div className="square-header">
                            <div className="icon" onClick={handleYoutube}>
                                <img src={youtube} alt="youtube" />
                            </div>
                            <div className="get-quote-small" onClick={handleYoutube}>
                                <div className="group82">
                                    <div className="ellipse1" />
                                    <div className="arrow"></div>
                                </div>
                            </div>
                        </div>
                        <div className="square-title">YOUTUBE</div>
                        <div className="square-text">
                            <p>Have a look on my workflow, stack and experiences coding</p>
                        </div>
                    </div>
                    
                    <div className="footer-square">
                        <div className="square-header">
                            <div className="icon" onClick={handleTwitter}>
                                <img src={twitter} alt="twitter" />
                            </div>
                            <div className="get-quote-small" onClick={handleTwitter}>
                                <div className="group82">
                                    <div className="ellipse1" />
                                    <div className="arrow"></div>
                                </div>
                            </div>
                        </div>
                        <div className="square-title">TWITTER - X</div>
                        <div className="square-text">
                            <p>Engage my tweets about my interesting coding journey.</p>
                        </div>
                    </div>

                    <div className="footer-square">
                        <div className="square-header">
                            <div className="icon" onClick={handleLinkedin}>
                                <img src={linkedin} alt="linkedin" />
                            </div>
                            <div className="get-quote-small" onClick={handleLinkedin}>
                                <div className="group82">
                                    <div className="ellipse1" />
                                    <div className="arrow"></div>
                                </div>
                            </div>
                        </div>
                        <div className="square-title">LINKEDIN</div>
                        <div className="square-text">
                            <p>Have a feel of my professional outlook and contributions.</p>
                        </div>
                    </div>

                    <div className="footer-square">
                        <div className="square-header">
                            <div className="icon" onClick={handleInstagram}>
                                <img src={insta} alt="instagram" />
                            </div>
                            <div className="get-quote-small" onClick={handleInstagram}>
                                <div className="group82">
                                    <div className="ellipse1" />
                                    <div className="arrow"></div>
                                </div>
                            </div>
                        </div>
                        <div className="square-title">INSTAGRAM</div>
                        <div className="square-text">
                            <p>Discover more about my creative and personal journey.</p>
                        </div>
                    </div>
                </div>

                {/* Right Section - CTA */}
                <div className="footer-right">
                    <div className="cta-title">
                        Let's Work Together
                    </div>
                    <div className="cta-buttons">
                        <button className="cta-button" onClick={() => window.open('mailto:kamelmat@gmail.com')}>
                            <i className="fa-solid fa-envelope"></i> Email Me
                        </button>
                        <button className="cta-button2" onClick={toggleDropdown}>
                            <i className="fa-solid fa-phone"></i> Call Me
                        </button>
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                <p>Please call: +34 618174853</p>
                            </div>
                        )}
                    </div>
                    <div className="footer-copyright">
                        <p>© Matias Kamelman 2025. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 