import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/components/githubModal.css';

const GitHubModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Only show modal if we're on the home page
        if (location.pathname === '/') {
            // Reset visibility state
            setIsVisible(false);
            
            // Show modal after 8 seconds
            const showTimer = setTimeout(() => {
                setIsVisible(true);
            }, 8000);

            // Hide modal after 16 seconds (8s delay + 8s show time)
            const hideTimer = setTimeout(() => {
                setIsVisible(false);
            }, 16000);

            // Cleanup timers when component unmounts or route changes
            return () => {
                clearTimeout(showTimer);
                clearTimeout(hideTimer);
            };
        } else {
            // Hide modal when not on home page
            setIsVisible(false);
        }
    }, [location.pathname]); // Re-run effect when path changes

    const handleGitHub = () => {
        window.open('https://github.com/kamelmat', '_blank');
    };

    return (
        <div className={`github-modal ${isVisible ? 'visible' : ''}`}>
            <div className="github-modal__content">
                <div className="github-modal__header">
                    <svg className="github-modal__icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                    </svg>
                    <h3>Check out my GitHub</h3>
                </div>
                <div className="github-modal__body">
                    <p>Explore my latest projects and contributions!</p>
                </div>
                <button 
                    className="github-modal__cta"
                    onClick={handleGitHub}
                >
                    Go to GitHub →
                </button>
            </div>
        </div>
    );
};

export default GitHubModal; 