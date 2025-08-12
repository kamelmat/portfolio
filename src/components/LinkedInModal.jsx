import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/components/linkedinModal.css';

const LinkedInModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    
    // You could maintain an array of your latest posts
    const latestPosts = [
        {
            title: "Latest Project Update",
            content: "🚀 Just launched my updated portfolio with React and modern web technologies!",
            date: "2024"
        },
        {
            title: "Tech Achievement",
            content: "💻 Successfully implemented full-stack features in recent projects",
            date: "2024"
        },
        {
            "title": "🎵 AI in Music: Evolution or Revolution?",
            "content": "🤖 Exploring how artificial intelligence is transforming the music industry and what it means for artists.",
            "date": "2025"
        },
        {
            "title": "💻 Mastering Full-Stack Development",
            "content": "🛠️ Sharing insights on integrating JavaScript, React, and Python to build robust applications.",
            "date": "2025"
        },
        {
            "title": "🎶 Music Therapy: Healing Through Sound",
            "content": "🧠 Discussing the benefits of music therapy and its impact on mental health.",
            "date": "2025"
        },
        {
            "title": "🌐 The Future of Web Development",
            "content": "🚀 Analyzing upcoming trends and technologies shaping the web development landscape.",
            "date": "2025"
        },
        {
            "title": "🎛️ Innovations in Music Production",
            "content": "🎤 Highlighting the latest tools and techniques revolutionizing music production.",
            "date": "2025"
        },
        {
            "title": "🤝 Effective Team Collaboration in Tech Projects",
            "content": "📈 Strategies for enhancing collaboration and productivity within development teams.",
            "date": "2025"
        },
        {
            "title": "🎼 Bridging the Gap Between Music and Technology",
            "content": "🔗 Exploring interdisciplinary approaches to combine musical artistry with technological innovation.",
            "date": "2025"
        },
        {
            "title": "🧠 The Role of Neuroscience in Music Education",
            "content": "🎓 Understanding how neuroscience can inform and improve methods in music education.",
            "date": "2025"
        }
        // Add more posts as needed
    ];

    // Randomly select a post each time the modal shows
    const [currentPost, setCurrentPost] = useState(latestPosts[0]);

    useEffect(() => {
        if (location.pathname === '/') {
            setIsVisible(false);
            
            const showTimer = setTimeout(() => {
                // Select random post when showing modal
                const randomPost = latestPosts[Math.floor(Math.random() * latestPosts.length)];
                setCurrentPost(randomPost);
                setIsVisible(true);
            }, 4000);

            const hideTimer = setTimeout(() => {
                setIsVisible(false);
            }, 12000);

            return () => {
                clearTimeout(showTimer);
                clearTimeout(hideTimer);
            };
        } else {
            setIsVisible(false);
        }
    }, [location.pathname]);

    const handleReadMore = () => {
        window.open('https://www.linkedin.com/in/matias-kamelman/recent-activity/all/', '_blank');
    };

    return (
        <div className={`linkedin-modal ${isVisible ? 'visible' : ''}`}>
            <div className="linkedin-modal__content">
                <div className="linkedin-modal__header">
                    <svg className="linkedin-modal__icon" viewBox="0 0 24 24" fill="#0A66C2">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                    </svg>
                    <h3>{currentPost.title}</h3>
                </div>
                <div className="linkedin-modal__body">
                    <p>{currentPost.content}</p>
                    <p className="linkedin-modal__timestamp">{currentPost.date}</p>
                </div>
                <button 
                    className="linkedin-modal__cta"
                    onClick={handleReadMore}
                >
                    Read More →
                </button>
            </div>
        </div>
    );
};

export default LinkedInModal; 