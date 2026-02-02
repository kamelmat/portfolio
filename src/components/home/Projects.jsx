import React from 'react';
import '../../styles/components/projects.css';
// Import all images
import Girl from "../../assets/Girl.jpg";
import Mixer from "../../assets/Mixer.png";
import Metal1 from "../../assets/bestbackground.png";
import Metal2 from "../../assets/ZenGutiar.jpg";
import Voltix1 from "../../assets/voltix1.jpeg";
import Voltix2 from "../../assets/voltix2.jpeg";
import Star1 from "../../assets/StarWarsConnectFour.jpg";
import Star2 from "../../assets/connect4.png";
import Kmt from "../../assets/KM-2013-final-black.jpg";
import Kmt2 from "../../assets/kmt.JPG";
import Flipas1 from "../../assets/StarWars1.jpg";
import Flipas2 from "../../assets/star-wars-ship-1.jpg";
// Add new image imports
import Cover from "../../assets/cover.jpg";
import DragonSamurai from "../../assets/dragonsamurai.jpg";
import TelegramBot from "../../assets/telegrambot.jpg";
import TelegramBot2 from "../../assets/telegrambot2.jpg";
import Killgorithm1 from "../../assets/Killgorithm.png";
import Killgorithm2 from "../../assets/Kiillgorithm2.png";
import Yana1 from "../../assets/YANA.jpeg";
import Yana2 from "../../assets/Yana2.jpg";

const Projects = () => {
  const projects = [
    {
      title: "BINAURAPP",
      description: "Built to improve your sleep, stay calm, or manage pain, Binaurapp offers a solution through brain entrainment. Developed with React, Redux, Python, PostgreSQL, and Sfëar, Binaurapp seamlessly integrates moving binaural waves into your favorite Spotify tracks, enhancing your well-being effortlessly.",
      status: "currently on start-up development",
      images: [Girl, Mixer],
      link: "https://www.binaurapp.com",
      tags: ["React", "Redux", "Python", "PostgreSQL", "Sfëar"]
    },
    {
      title: "YANA — YOU ARE NOT ALONE",
      description: "YANA is a non-profit digital platform created to support people experiencing unwanted loneliness and to help organizations identify early indicators of suicidal risk. Conceived as an MVP with a strong social mission, YANA is designed to be adopted by enterprises, NGOs, and institutions as a scalable tool for early intervention and emotional support. The concept, vision, and initial product definition were created and proposed by me, and later developed in collaboration with iGrowker by a multidisciplinary team of 17 professionals, including QA, Business Analysts, Backend and Frontend Developers, DevOps, and UX/UI Designers. I served as Tech Lead and Stakeholder, overseeing technical direction, architectural decisions, and alignment between social impact, organizational needs, and delivery.",
      status: "Tech for Good MVP",
      images: [Yana1, Yana2],
      link: "https://yana-front.vercel.app/",
      tags: ["React", "Backend Services", "DevOps", "QA", "UX/UI Design"]
    },
    {
      title: "KILLGORITHM",
      description: "KILLGORITHM is a personal music project supported by an AI-assisted software development workflow, combining modern web technologies with a self-produced artistic output. While the music itself is entirely human-composed and produced, AI was used exclusively in the software development process and in the creation of the video content, enabling rapid prototyping, iteration, and delivery. The project reflects an end-to-end approach, where engineering, product, and creative production coexist within a single independently developed platform.",
      status: "Live Site",
      images: [Killgorithm1, Killgorithm2],
      link: "https://killgorithm-landing.vercel.app/",
      tags: ["React", "Cursor", "Custom CSS", "GenAI", "Vercel"]
    },
    {
      title: "DRAGON SAMURAI",
      description: "The Dragon Samurai project is an action-packed 2D platformer built with Phaser 3, an HTML5 game framework. In this game, players control a samurai navigating through different environments, battling enemies, and overcoming obstacles. Currently in its early stages, the game features one level and basic combat mechanics, with plans for future expansion, including more levels, enemies, and boss fights.",
      status: "github",
      images: [Cover, DragonSamurai],
      link: "https://dragon-samurai.vercel.app/",
      githubLink: "https://github.com/kamelmat/DragonSamurai",
      tags: ["HTML5", "CSS", "JavaScript", "Phaser3"]
    },
    {
      title: "FLIPAS",
      description: "AI-powered platform designed to help Gen Z create compelling CVs. Fullstack development using React and React Native for responsive web and mobile experiences. Built and connected front-ends to a Node.js backend with Prisma and React Query. Developed a native Trivia game in React Native, plus implemented cron jobs for data updates and push notifications.",
      status: "Live on March",
      images: [Flipas1, Flipas2],
      link: "https://flipas.com",
      tags: ["React", "React Native", "Node.js", "Prisma", "React Query", "Typescript", "Cron jobs"]
    },
    {
      title: "TELEGRAM GAS BOT",
      description: "This is a Telegram bot that helps users find the cheapest gas station near their location. It utilizes the Overpass API to locate gas stations and Google Maps for easy navigation.",
      status: "github",
      images: [TelegramBot, TelegramBot2],
      link: "https://github.com/kamelmat/Telegram-Gas-Station-Bot",
      tags: ["Python", "APIs"]
    },
    {
      title: "METAL GUITAR ACADEMY",
      description: "Finding great metal guitar teachers can be a challenge. That's why we developed Metal Guitar Academy that connects you with top-tier instructors through an innovative teacher brokerage system. Built with React, Redux, Python, Django, and PostgreSQL, this app makes mastering metal guitar more accessible than ever.",
      status: "CURRENTLY BUILDING STUDY PROGRAMS",
      images: [Metal1, Metal2],
      link: "https://metal-guitar-academy.vercel.app/",
      tags: ["React", "Redux", "Python", "Django", "PostgreSQL"]
    },
    {
      title: "VOLTIX",
      description: "Identifying discrepancies in electricity bills can be time-consuming and inaccurate. To solve this, VOLTIX uses OCR technology to extract data from invoices and cross-checks it against up to 50 APIs for errors or overcharges. This real-world project, organized by Igrowker and executed by a 17-person team, delivered a robust MVP built with Django, Tesseract, and Docker that improved measurement both in time and accuracy.",
      status: "IGrowkers",
      images: [Voltix1, Voltix2],
      link: "https://www.linkedin.com/posts/igrowker_voltix-ocr-talento-activity-7272695689317359616-tfUy",
      githubLink: "https://github.com/kamelmat/i004-voltix-back",
      tags: ["Django", "Tesseract", "Docker", "OCR", "API Integration"]
    },
    {
      title: "CONNECT FOUR",
      description: "Challenge your friends to an epic Star Wars-themed Connect Four game! This online experience combines the strategic fun of the classic game with the immersive world of Star Wars. Developed with React and Python, it showcases a dynamic, interactive web application while integrating creative design and advanced functionality.",
      status: "Github",
      images: [Star1, Star2],
      link: "https://github.com/kamelmat/Connect-Four-Star-Wars",
      tags: ["React", "Python", "Game Development", "Star Wars Theme"]
    },
  
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__title">PROJECTS</h2>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-card__images">
                <img src={project.images[0]} alt={project.title} className="project-card__image main" />
                <img src={project.images[1]} alt={project.title} className="project-card__image hover" />
              </div>
              <div className="project-card__content">
                <div className="project-card__header">
                  <h3 
                    className="project-card__title" 
                    data-project={project.title}
                  >
                    {project.title}
                  </h3>
                  <div 
                    className="project-card__status"
                    data-project={project.title}
                  >
                    {project.status === "github" ? (
                      <a href={project.githubLink || project.link} target="_blank" rel="noopener noreferrer">
                        {project.status}
                      </a>
                    ) : (
                      project.status
                    )}
                  </div>
                </div>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-card__tag">{tag}</span>
                  ))}
                </div>
                <div className="project-card__actions">
                  <a href={project.link} className="project-card__link" target="_blank" rel="noopener noreferrer">
                    Visit Site
                    <span className="project-card__arrow">→</span>
                  </a>
                  {project.githubLink && (
                    <a href={project.githubLink} className="project-card__link" target="_blank" rel="noopener noreferrer">
                      View Code
                      <span className="project-card__arrow">→</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
       {/*  <div className="Frame28">
          <div className="Logo">
            <div className="Binaurapp" data-project="METAL GUITAR ACADEMY">METAL GUITAR ACADEMY</div>
          </div>
        </div>
        <div className="Frame28">
          <div className="CurrentlyOnStartUpDevelopment" data-project="METAL GUITAR ACADEMY">
            CURRENTLY BUILDING STUDY PROGRAMS
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects; 