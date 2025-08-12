import React from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Work from './Work';
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <Projects />
            <Work />
        </div>
    );
};

export default Home;