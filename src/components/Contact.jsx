import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../styles/components/contact.css';

// Remove the Vite references and use only CRA environment variables
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

// Initialize EmailJS only if we have the required keys
if (PUBLIC_KEY) {
    emailjs.init(PUBLIC_KEY);
}

const Contact = () => {
    const location = useLocation();
    // Removed unused dropdown state
    // const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');
    const form = useRef();
    
    const [formData, setFormData] = useState({
        user_name: '',
        user_surname: '',
        user_company: '',
        user_email: '',
        message: '',
        subject: ''
    });

    useEffect(() => {
        const envVars = {
            serviceId: SERVICE_ID,
            templateId: TEMPLATE_ID,
            publicKey: PUBLIC_KEY
        };

        const missingVars = Object.entries(envVars).filter(([_, value]) => !value);
        
        if (missingVars.length > 0) {
            console.error('Missing environment variables:', 
                missingVars.map(([key]) => key).join(', ')
            );
        }
    }, []);

    useEffect(() => {
        if (location.state?.subject) {
            setFormData(prev => ({
                ...prev,
                subject: location.state.subject
            }));
        }
    }, [location.state?.subject]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if EmailJS is properly configured
        if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
            console.error('EmailJS configuration is missing');
            setStatus('error');
            return;
        }

        setIsLoading(true);
        
        try {
            const templateParams = {
                subject: formData.subject || 'General Inquiry', // Provide default if empty
                user_name: formData.user_name,
                user_surname: formData.user_surname,
                user_company: formData.user_company,
                user_email: formData.user_email,
                message: formData.message,
                reply_to: formData.user_email
            };

            const result = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY
            );

            if (result.text === 'OK') {
                setStatus('success');
                form.current.reset();
                setFormData({
                    user_name: '',
                    user_surname: '',
                    user_company: '',
                    user_email: '',
                    message: '',
                    subject: ''
                });
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCancel = () => {
        setFormData({
            user_name: '',
            user_surname: '',
            user_company: '',
            user_email: '',
            message: '',
            subject: ''
        });
        setStatus('');
    };

    // Removed unused toggleDropdown function
    // const toggleDropdown = () => {
    //     setDropdownOpen(!isDropdownOpen);
    // };

    return (
        <section className="contact">
            <div className="contact__container">
                <h1 className="contact__title">Let's Connect</h1>
                
                <div className="contact__content contact__content--full">
                    <div className="contact__form-container">
                        <h2 className="contact__subtitle">Send me a message</h2>
                        <form ref={form} className="contact__form" onSubmit={handleSubmit}>
                            <div className="form__group">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="Subject"
                                    className="form__input"
                                    readOnly={!!location.state?.subject}
                                />
                            </div>
                            <div className="form__group">
                                <input
                                    type="text"
                                    name="user_name"
                                    value={formData.user_name}
                                    onChange={handleInputChange}
                                    placeholder="Name"
                                    required
                                    className="form__input"
                                />
                            </div>
                            <div className="form__group">
                                <input
                                    type="text"
                                    name="user_surname"
                                    value={formData.user_surname}
                                    onChange={handleInputChange}
                                    placeholder="Surname"
                                    required
                                    className="form__input"
                                />
                            </div>
                            <div className="form__group">
                                <input
                                    type="text"
                                    name="user_company"
                                    value={formData.user_company}
                                    onChange={handleInputChange}
                                    placeholder="Company"
                                    className="form__input"
                                />
                            </div>
                            <div className="form__group">
                                <input
                                    type="email"
                                    name="user_email"
                                    value={formData.user_email}
                                    onChange={handleInputChange}
                                    placeholder="Email"
                                    required
                                    className="form__input"
                                />
                            </div>
                            <div className="form__group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Message"
                                    required
                                    className="form__input form__textarea"
                                ></textarea>
                            </div>
                            {status && (
                                <div className={`form__status form__status--${status}`}>
                                    {status === 'success' 
                                        ? 'Message sent successfully!' 
                                        : 'Failed to send message. Please try again.'}
                                </div>
                            )}
                            <div className="form__buttons">
                                <button 
                                    type="submit" 
                                    className="form__button form__button--submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Sending...' : 'Send Message'}
                                </button>
                                <button 
                                    type="button" 
                                    className="form__button form__button--cancel" 
                                    onClick={handleCancel}
                                    disabled={isLoading}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
