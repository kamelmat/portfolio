import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/services.css';

const Services = () => {
    const navigate = useNavigate();

    const handleContact = (subject) => {
        navigate('/contact', { state: { subject } });
    };

    const services = [
        {
            id: 1,
            title: "FREELANCE",
            description: "Custom web and software solutions tailored to your needs. Flexible, scalable, and efficient.",
            cta: "Hire Me",
            subject: "Freelance Inquiry",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
            )
        },
        {
            id: 2,
            title: "CONTRACTOR",
            description: "Hire me as a contractor for short or long-term projects. I integrate seamlessly into existing teams.",
            cta: "Work Together",
            subject: "Contractor Request",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
            )
        },
        {
            id: 3,
            title: "CONSULTOR",
            description: "Strategic consulting in tech, business, product development, entertainment integration into Hotels. Get expert insights to scale your ideas.",
            cta: "Get Consulting",
            subject: "Consulting Request",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
            )
        },
        {
            id: 4,
            title: "PRODUCER",
            description: "Music production, event coordination, and audio branding for top-tier experiences.",
            cta: "Start a Project",
            subject: "Production Services",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                </svg>
            )
        },
        {
            id: 5,
            title: "SPEAKER",
            description: "Engaging keynotes on technology, music, and innovation. Book me for your next event.",
            cta: "Book Me",
            subject: "Speaking Engagement",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                </svg>
            )
        }
    ];

    return (
        <section className="services">
            <div className="services__container">
                <h2 className="services__title">SERVICES</h2>
                <div className="services__grid">
                    {services.map((service) => (
                        <article key={service.id} className="service-card">
                            <div className="service-card__icon">
                                {service.icon}
                            </div>
                            <h3 className="service-card__title">{service.title}</h3>
                            <p className="service-card__description">{service.description}</p>
                            <button 
                                className="service-card__cta"
                                onClick={() => handleContact(service.subject)}
                            >
                                {service.cta}
                                <span className="service-card__arrow">→</span>
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services; 