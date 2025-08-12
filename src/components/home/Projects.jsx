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

const Projects = () => {
  const projects = [
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
      title: "TELEGRAM GAS BOT",
      description: "This is a Telegram bot that helps users find the cheapest gas station near their location. It utilizes the Overpass API to locate gas stations and Google Maps for easy navigation.",
      status: "github",
      images: [TelegramBot, TelegramBot2],
      link: "https://github.com/kamelmat/Telegram-Gas-Station-Bot",
      tags: ["Python", "APIs"]
    },
    {
      title: "BINAURAPP",
      description: "Built to improve your sleep, stay calm, or manage pain, Binaurapp offers a solution through brain entrainment. Developed with React, Redux, Python, PostgreSQL, and Sfëar, Binaurapp seamlessly integrates moving binaural waves into your favorite Spotify tracks, enhancing your well-being effortlessly.",
      status: "currently on start-up development",
      images: [Girl, Mixer],
      link: "https://www.binaurapp.com",
      tags: ["React", "Redux", "Python", "PostgreSQL", "Sfëar"]
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
    {
      title: "KAMELMAT",
      description: "First experience creating a website, fully built on WordPress. The project involved extensive research into various HTML functions, introducing web development fundamentals. Additionally, it provides a unique window into my life as a professional musician, showcasing my music, social media presence, and creative journey.",
      status: "Live Site",
      images: [Kmt, Kmt2],
      link: "https://kamelmat.com/",
      tags: ["WordPress", "HTML", "Music", "Web Development"]
    }
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