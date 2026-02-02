import React from 'react';
import '../../styles/components/hero.css';
import profileImg from '../../assets/pic7.jpeg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__roles">
             {/*  <span className="role">Fullstack Dev</span>
              <span className="role">Manager</span>
              <span className="role">Musician</span> */}
            </div>
            
            <div className="hero__titles">
              <h1 className="title title--fullstack">I AM A FULLSTACK DEV</h1>
              <h2 className="title title--manager">A MANAGER</h2>
              <h2 className="title title--musician">&amp; MUSICIAN</h2>
            </div>

            <p className="hero__description">
            Full-stack developer and AI Engineer with a solid background in JavaScript, React, Python, and SQL, currently contributing to Thoughtworks’ AiWorks. Proven ability to adapt quickly to fast-changing environments, integrate teamwork, and resolve conflicts effectively. Known for innovative problem-solving and proactive leadership, fostering team excellence. Passionate about continuous learning and applying new knowledge to drive project success. A diverse background and creative mindset that can significantly contribute to your full-stack development team.
            </p>

            <button 
              className="hero__cta"
              onClick={() => window.open('mailto:kamelmat@gmail.com', '_blank')}
            >
              <span className="cta__text">Contact Me</span>
              <span className="cta__icon">→</span>
            </button>
          </div>

          <div className="hero__visual">
            <div className="hero__image">
              <img src={profileImg} alt="Profile" />
            </div>
            <div className="hero__skills">
              <div className="skills__track">
                {[
                  "Website Developer",
                  "Mobile App Developer",
                  "Web App Developer",
                  "Back-end Developer",
                  "Front-end Developer",
                  "Music Expert",
                  "Software Developer",
                  "Manager",
                  "Musician"
                ].map((skill, index) => (
                  <span key={index} className="skill">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 