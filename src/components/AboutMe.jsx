import React from 'react';
import '../styles/components/about.css';
import img1 from '../assets/Pic1.jpeg';
import img2 from '../assets/LineFreehand.png';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.png';
import logo9 from '../assets/logo9.png';
import logo10 from '../assets/logo10.png';
import logo11 from '../assets/logo11.png';
import logo12 from '../assets/logo12.png';
import logo13 from '../assets/logo13.png';
import logo14 from '../assets/logo14.png';
import logo15 from '../assets/logo15.png';
import logo16 from '../assets/logo16.png';
import logo17 from '../assets/logo17.png';
import logo18 from '../assets/logo18.png';
import logo19 from '../assets/logo19.png';
import logo20 from '../assets/logo20.png';
import logo21 from '../assets/logo21.png';
import logo22 from '../assets/logo22.png';
import logo23 from '../assets/logo23.png';
import logo24 from '../assets/logo24.png';
import glowImage from '../assets/Glow.png';

const AboutMe = () => {
    return (
        <section className="about-me-container d-flex flex-column align-items-center justify-content-center">
            {/* Barras Laterales Animadas */}
            <div className="vertical-bar left-bar">
                <div className="scrolling-text">
                    {[
                        "Website Developer",
                        "Mobile App Developer",
                        "Web App Developer",
                        "Back-End Developer",
                        "Front-End Developer",
                        "Music Expert",
                        "Software Developer",
                        "Manager",
                        "Musician",
                        "Full Stack Developer",
                        "Human Resoures",
                        "Project Manager",
                        "Music Producer",
                        "Software Engineer",
                    ].map((text, index) => (
                        <div className="text-item" key={index}>
                            <div className="vertical-text">{text}</div>
                            <div className="shape"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contenido Central */}
            <div className="about-me-content text-center">
                <img src={glowImage} alt="Decorative Glow" className="background-image" />
                <div className="profile-photo-wrapper">
                    <img src={img1} alt="Matias Kamelman" className="profile-photo" />
                    <div className="profile-photo-decoration"></div>
                </div>
                <h2 className="about-me-title">MATIAS KAMELMAN</h2>
                <div className="about-me-description">
                    <p>
                        I am a versatile full-stack developer with a strong foundation in creating robust and scalable web applications.
                    </p>
                    <p>
                        With a background in team management and over ten years of experience in leadership roles, I bring a unique perspective to development projects, seamlessly combining technical expertise with organizational strategy.
                    </p>
                    <p>
                        My passion for problem-solving and innovation drives me to craft efficient, user-focused solutions while ensuring smooth collaboration between technical and non-technical teams.
                    </p>
                    <p>
                        Outside the tech world, I channel my    creativity into music, leveraging the discipline and artistry it teaches to enhance my work in software development. Let's collaborate to build transformative digital experiences that make a difference.
                    </p>

                </div>
                <a href="https://drive.google.com/file/d/1m3EqoxU_HCg_f6ycG3kbuitk7_bwSz3H/view?usp=sharing" download className="btn-resume" target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-download" style={{ color: '#EAF0ED' }}></i>
                    <span className="btn-text">RESUME</span>
                </a>
            </div>

            {/* Tech Stack Section */}
            <div className="tech-stack">
                <div className="freehand-loop">
                    <img src={img2} alt="Freehand Loop" className="background-image" />
                    <h3 className="tech-stack-title">MY TECH STACK</h3>
                </div>
                <div className="tech-icons">
                    <img src={logo1} alt="Tech 1" className="tech-icon larger-icon" />
                    <img src={logo2} alt="Tech 2" className="tech-icon larger-icon" />
                    <img src={logo3} alt="Tech 3" className="tech-icon larger-icon" />
                    <img src={logo4} alt="Tech 4" className="tech-icon" />
                    <img src={logo5} alt="Tech 5" className="tech-icon" />
                    <img src={logo6} alt="Tech 6" className="tech-icon" />
                    <img src={logo7} alt="Tech 7" className="tech-icon" />
                    <img src={logo8} alt="Tech 8" className="tech-icon" />
                    <img src={logo9} alt="Tech 9" className="tech-icon" />
                    <img src={logo10} alt="Tech 10" className="tech-icon" />
                    <img src={logo11} alt="Tech 11" className="tech-icon" />
                    <img src={logo12} alt="Tech 12" className="tech-icon" />
                    <img src={logo13} alt="Tech 13" className="tech-icon" />
                    <img src={logo14} alt="Tech 14" className="tech-icon" />
                    <img src={logo15} alt="Tech 15" className="tech-icon" />
                    <img src={logo16} alt="Tech 16" className="tech-icon" />
                    <img src={logo17} alt="Tech 17" className="tech-icon" />
                    <img src={logo18} alt="Tech 18" className="tech-icon" />
                    <img src={logo19} alt="Tech 19" className="tech-icon" />
                    <img src={logo20} alt="Tech 20" className="tech-icon" />
                    <img src={logo21} alt="Tech 21" className="tech-icon" />
                    <img src={logo22} alt="Tech 22" className="tech-icon" />
                    <img src={logo23} alt="Tech 23" className="tech-icon" />
                    <img src={logo24} alt="Tech 24" className="tech-icon" />
                </div>
            </div>

            {/* Barra Derecha */}
            <div className="vertical-bar right-bar">
                <div className="scrolling-text">
                    {[
                        "Website Developer",
                        "Mobile App Developer",
                        "Web App Developer",
                        "Back-End Developer",
                        "Front-End Developer",
                        "Music Expert",
                        "Software Developer",
                        "Manager",
                        "Musician",
                        "Full Stack Developer",
                        "Human Resoures",
                        "Project Manager",
                        "Music Producer",
                        "Software Engineer",
                    ].map((text, index) => (
                        <div className="text-item" key={index}>
                            <div className="vertical-text">{text}</div>
                            <div className="shape"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
