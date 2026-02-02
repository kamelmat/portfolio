import React, { useState } from 'react';
import '../../styles/components/work.css';

// Add WorkCard component
const WorkCard = ({ content, activeTab, onTabChange }) => {
    // Handle organization name for data-company attribute
    const getCompanySlug = (org) => {
        if (!org) return '';
        return org.toLowerCase().replace('.com', '').replace(' ', '-');
    };

    return (
        <div className="work-card" data-company={getCompanySlug(content.organization)}>
            <div className="work-card__left">
                <div className="work-card__header">
                    <div className="work-card__icon">
                        <i className={content.icon}></i>
                    </div>
                    <span className="work-card__period">{content.period}</span>
                </div>
                <h3 className="work-card__role">{content.role}</h3>
                <div className="work-card__buttons">
                    <button className="detail-button">
                        <span className="detail-button__label">Organization</span>
                        <span className="detail-button__value">
                            {content.organization || content.details?.organization}
                        </span>
                    </button>
                    <button className="detail-button">
                        <span className="detail-button__label">Industry</span>
                        <span className="detail-button__value">
                            {content.industry || content.details?.industry}
                        </span>
                    </button>
                    <button className="detail-button">
                        <span className="detail-button__label">Skills</span>
                        <span className="detail-button__value long">
                            {Array.isArray(content.skills) 
                                ? content.skills.join(', ') 
                                : content.details?.skills || content.skills}
                        </span>
                    </button>
                </div>
            </div>
            <div className="work-card__right">
                <div className="content-tabs">
                    {Object.keys(content.content).map((tab) => (
                        <button
                            key={tab}
                            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => onTabChange(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="content-text">
                    {content.content[activeTab]}
                </div>
            </div>
        </div>
    );
};

const Work = () => {
    const [activeTab, setActiveTab] = useState({
        thoughtworks: 'CONTEXT',
        geeks: 'CONTEXT',
        flipas: 'CONTEXT',
        binaurapp: 'CONTEXT',
        voltix: 'CONTEXT',
        sabina: 'CONTEXT'
    });

    const workContent = {
        thoughtworks: {
            icon: "fa-solid fa-lightbulb",
            period: "May 2025 – Present",
            role: "Associate Consultant Developer",
            organization: "Thoughtworks",
            industry: "Technology Consulting",
            skills: ["Ai Engineering", "Java", "AI Research", "MCP Architecture", "Agile", "TDD", "Software Design"],
            content: {
                CONTEXT: "Joined Thoughtworks as part of the Graduate Program and quickly progressed to Associate Consultant, bringing over 25 years of cross-disciplinary expertise in music, neuroscience, strategy, and software development. Selected for my unique ability to merge scientific insight, creative problem-solving, and software engineering, which has proven critical in shaping innovative AI solutions. Currently positioned to lead the European implementation of AiWorks, Thoughtworks’ flagship AI platform.",
                SOLUTION: "Currently staffed on an advanced internal AI research project, designing and developing a 'brPlayed a central role in the creation of AiWorks’ “brain”, leveraging my neuroscience research experience to design Model Context Protocols (MCPs), multi-agent deep intelligence systems, and Context Engineering frameworks. Developed and integrated cutting-edge AI tooling, including RAG & Dynamic RAG systems with Cognee, Langchain, Langraph, and Arango.AI. Currently leading the implementation of AiWorks across European clients, combining architecture, prototyping, and performance optimization, while driving adoption of AI agents in practical, scalable solutions. Authored thought leadership articles on Context Engineering and Service-as-Software, exploring the future impact of agentic AI in enterprise markets.ain' architecture to enhance the efficiency of context windows via a Model Context Protocol (MCP). Contribute to architectural decisions, prototyping, and performance optimization, integrating research findings into scalable solutions. Apply my prior entrepreneurial, creative, and technical experience to strengthen team ideation, problem-solving, and delivery.",
                OUTCOME: "Delivered foundational AI architectures for AiWorks, enabling multi-agent context-aware intelligence with high scalability. Contributed to early-stage AI capabilities that enhance internal tooling and client-facing solutions, positioning Thoughtworks as a pioneer in AI agentic applications. Recognized for bridging neuroscience, research, and software engineering, elevating team ideation, knowledge sharing, and creative problem-solving. Articles on Context Engineering and Service-as-Software have further established thought leadership in AI-driven enterprise innovation."
            }
        },        
        geeks: {
            icon: "fa-solid fa-chalkboard-teacher",
            period: "2025",
            role: "FULLSTACK DEVELOPER TEACHER",
            organization: "4Geeks Academy",
            industry: "Tech Education",
            skills: ["JavaScript", "React", "Python", "Flask", "SQLAlchemy", "HTML", "CSS"],
            content: {
                CONTEXT: "Joined 4Geeks Academy, a worldwide leading programming education company, to mentor and guide students through comprehensive full stack development curriculum.",
                SOLUTION: "Provided hands-on mentorship in JavaScript, React, Python, Flask, SQLAlchemy, HTML, and CSS. Conducted technical assessments of students' backend and frontend implementations while assisting with code optimization and debugging challenges.",
                OUTCOME: "Successfully guided students in building full stack projects while instilling good programming practices. Evaluated and provided detailed feedback on tasks and projects, ensuring proper application of concepts and technologies learned."
            }
        },
        flipas: {
            icon: "fa-solid fa-laptop-code",
            period: "2025",
            role: "FULL STACK DEVELOPER INTERN",
            organization: "Flipas.com",
            industry: "Tech Start-up",
            skills: ["React", "React Native", "Node.js", "Prisma", "React Query"],
            content: {
                CONTEXT: "Joined Flipas.com, an innovative AI-powered platform focused on helping Generation Z create compelling CVs. The platform needed both web and mobile solutions to effectively reach its target audience.",
                SOLUTION: "Contributed to fullstack development using React and React Native, ensuring responsive experiences across platforms. Built and integrated front-end interfaces with a Node.js backend using Prisma and React Query. Additionally, developed a native Trivia game component and implemented automated data update systems.",
                OUTCOME: "Successfully delivered a cross-platform solution that enhanced user engagement through interactive features like the Trivia game. The implementation of cron jobs for data updates and push notifications improved user retention and platform functionality."
            }
        },
        binaurapp: {
            icon: "fa-solid fa-computer",
            period: "2023 - Present",
            role: "SOFTWARE DEVELOPER",
            details: {
                organization: "Binaurapp",
                industry: "Tech Start-Up",
                skills: "Dev, Product Design, Business Plan"
            },
            content: {
                CONTEXT: "Binaurapp is an innovative app designed to improve mental well-being through binaural audio. Its primary goal is to help users achieve states of sleep, relaxation, concentration, and overall well-being using advanced sound technologies. The app offers personalized programs tailored to reduce stress, improve focus, and provide moments of calm.",
                SOLUTION: "The unique approach behind Binaurapp is the theory of moving binaural waves, developed by Matias Kamelman. Using 5th-order ambisonics, Binaurapp creates immersive sound environments that induce specific brain states without requiring active participation from the user. By combining these waves with soundscapes and personalized music, the app offers a transformative auditory experience.",
                OUTCOME: "Binaurapp stands out by being the only app that allows users to connect their Spotify account to select their desired music, applying music therapy principles. This personalized approach recognizes that music's effect on relaxation or stimulation is subjective, depending on individual backgrounds. Ultimately, Binaurapp creates a unique and personalized experience, where the true magic lies in the user themselves."
            }
        },
        voltix: {
            icon: "fa-solid fa-computer fa-2x",
            period: "2024",
            role: "BACKEND DEVELOPER",
            details: {
                organization: "Voltix",
                industry: "Tech Start-Up",
                skills: "Python, Django, API, SQL"
            },
            content: {
                CONTEXT: "At Igrowker, we developed a cutting-edge application aimed at helping users track their electricity consumption and detect billing discrepancies. The app allows users to scan their electricity bills and compare them with actual consumption data. Our goal was to provide transparency and empower users to monitor their energy usage effectively.",
                SOLUTION: "I worked on the backend using Django (Python), along with tools like Celery for task management, Redis for caching and queuing, and WeasyPrint for generating PDF reports. Collaborating with a team of 17 people, we followed agile methodologies, focusing on clean code and clean architecture. The backend infrastructure ensured seamless processing of data, enabling real-time comparisons and notifications for users.",
                OUTCOME: "The application successfully delivered accurate notifications when discrepancies were detected between user-submitted bills and actual consumption. The combination of robust backend technologies and agile development practices resulted in a reliable and scalable solution. This enhanced user trust and engagement, positioning the app as an essential tool for energy management and cost control."
            }
        },
        sabina: {
            icon: "fa-solid fa-briefcase fa-2x",
            period: "2023 - 2024",
            role: "GENERAL MANAGER",
            details: {
                organization: "Sabina Estates",
                industry: "Real Estate",
                skills: "Management, HHRR, Strategy"
            },
            content: {
                CONTEXT: "As General Manager at Sabina Estates from March 2023 to July 2024, I managed a team of over 50 employees in Ibiza. My role focused on overseeing the company's structural reorganization, which required a strategic approach to human resources, sales planning, and inventory management.",
                SOLUTION: "I implemented a comprehensive overhaul of operational processes, from recruitment and professional development to optimizing purchasing and inventory. I also led the development of strategic sales plans that aligned with the company's long-term goals, ensuring that every area operated more efficiently.",
                OUTCOME: "The restructuring led to an 18% improvement in operational efficiency and generated savings of up to €295,000. These results positioned Sabina Estates as a leader in operational efficiency within the sector, showcasing the effectiveness of the strategies I applied."
            }
        }
    };

    const handleTabChange = (company, tab) => {
        setActiveTab(prev => ({ ...prev, [company]: tab }));
    };

    return (
        <section className="work" id="work">
            <div className="work__container">
                <h2 className="work__title">Work History</h2>
                
                {Object.entries(workContent).map(([key, content]) => (
                    <WorkCard
                        key={key}
                        content={content}
                        activeTab={activeTab[key]}
                        onTabChange={(tab) => handleTabChange(key, tab)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Work; 