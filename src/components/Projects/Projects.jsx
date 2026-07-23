import React from 'react';
import ProjectCard from '../ProjectCard';
import './Projects.css';
import resumePdf from '../../assets/Krishna Patil resume.pdf';

// Importing assets
import tech1 from '../../assets/TechFundamentals 1.png';
import tech2 from '../../assets/TechFundamentals 2.png';
import tech3 from '../../assets/TechFundamentals 3.png';
import tech4 from '../../assets/TechFundamentals 4.png';
import tech5 from '../../assets/TechFundamentals 5.png';

import samadhan1 from '../../assets/Samadhan Home 1.png';
import samadhan2 from '../../assets/Samadhan Home Valt 2.png';
import samadhan3 from '../../assets/Samadhan Service Center 3.png';
import samadhan4 from '../../assets/Samadhan Login 4.png';
import samadhan5 from '../../assets/Samadhan Profile Identity 5.png';
import samadhan6 from '../../assets/Samadhan Watsapp Payment 6.png';

import velocity1 from '../../assets/Velocity Motors 1.png';
import velocity2 from '../../assets/Velocity Motors 2.png';
import velocity3 from '../../assets/Velocity Motors 3.png';
import velocity4 from '../../assets/Velocity Motors 4.png';
import velocity5 from '../../assets/Velocity Motors 5.png';
import velocity6 from '../../assets/Velocity Motors 6.png';
import velocity7 from '../../assets/Velocity Motors 7.png';
import velocity8 from '../../assets/Velocity Motors 8.png';

import prix1 from '../../assets/Prix Robotics 1.png';
import prix2 from '../../assets/Prix Robotics 2.png';
import prix3 from '../../assets/Prix Robotics 3.png';
import prix4 from '../../assets/Prix Robotics 4.png';
import prix5 from '../../assets/Prix Robotics 5.png';

import ai1 from '../../assets/AI assistant 1.png';
import ai2 from '../../assets/AI assistant 2.png';
import ai3 from '../../assets/AI assistant 3.png';
import ai4 from '../../assets/AI assistant 4.png';

import chicken1 from '../../assets/Online Chicken 1.png';
import chicken2 from '../../assets/Online Chicken 2.png';
import chicken3 from '../../assets/Online Chicken 3.png';
import chicken4 from '../../assets/Online Chicken 4.png';
import chicken5 from '../../assets/Online Chicken 5.png';

import game1 from '../../assets/GameHub 1.png';
import game2 from '../../assets/GameHub 2.png';
import game3 from '../../assets/GameHub 3.png';
import game4 from '../../assets/GameHub 4.png';
import game5 from '../../assets/GameHub 5.png';

import yt1 from '../../assets/Youtube 1.png';
import yt2 from '../../assets/Youtube 2.png';
import yt3 from '../../assets/youtube 3.png';
import yt4 from '../../assets/Youtube 4.png';

import linkedin1 from '../../assets/Linked in 1.png';
import linkedin2 from '../../assets/Linked in 2.png';
import linkedin3 from '../../assets/Linked in 3.png';
import linkedin4 from '../../assets/Linked in 4.png';
import linkedin5 from '../../assets/Linked in 5.png';

import airbnb1 from '../../assets/Airbnb 1.png';
import airbnb2 from '../../assets/Airbnb 2.png';
import airbnb3 from '../../assets/Airbnb 3.png';
import airbnb4 from '../../assets/Airbnb 4.png';
import airbnb5 from '../../assets/Airbnb 5.png';

import organic1 from '../../assets/Organic Farming 1.png';
import organic2 from '../../assets/Organic Farming 2.png';
import organic3 from '../../assets/Organic Farming 3.png';
import organic4 from '../../assets/Organic Farming 4.png';
import organic5 from '../../assets/Organic Farming 5.png';

import feed1 from '../../assets/Feedmind 1.png';
import feed2 from '../../assets/FeedMind 2.png';
import feed3 from '../../assets/Feedmind 3.png';
import feed4 from '../../assets/FeedMind 4.png';
import feed5 from '../../assets/FeedMind 5.png';

import sing1 from '../../assets/Singers 1.png';
import sing2 from '../../assets/Singers 2.png';

import sikkim1 from '../../assets/Siikkim 1.png';
import sikkim2 from '../../assets/Sikkim 2.png';
import sikkim3 from '../../assets/Sikkim 3.png';
import sikkim4 from '../../assets/Sikkim 4.png';
import sikkim5 from '../../assets/Sikkim 5.png';

import formula1 from '../../assets/Formula 1.png';
import formula2 from '../../assets/Formula 2.png';

import cyber1 from '../../assets/Cyber 1.png';
import cyber2 from '../../assets/Cyber 2.png';
import cyber3 from '../../assets/Cyber 3.png';
import cyber4 from '../../assets/cyber 4.png';
import cyber5 from '../../assets/cyber 5.png';

import typing1 from '../../assets/Typing 1.png';
import typing2 from '../../assets/Typing 2.png';
import typing3 from '../../assets/typing 3.png';
import typing4 from '../../assets/typing 4.png';

import little1 from '../../assets/Little-Learners-Hub 1.png';
import little2 from '../../assets/Little-Learners-Hub 2.png';

import eventpulse1 from '../../assets/Event Pulse AI Login.png';
import eventpulse2 from '../../assets/Event Pulse AI 2.png';
import eventpulse3 from '../../assets/Eventpulse AI 3.png';
import eventpulse4 from '../../assets/Eventpulse AI 4.png';
import eventpulse5 from '../../assets/Eventpulse AI 5.png';

import logimind1 from '../../assets/Logimind AI 1.png';
import logimind2 from '../../assets/Logimind AI 2 Login.png';
import logimind3 from '../../assets/Logimind AI 3.png';
import logimind4 from '../../assets/Logimind AI 4.png';
import logimind5 from '../../assets/Logimind AI 5.png';
import logimind6 from '../../assets/Logimind AI 6.png';
import logimind7 from '../../assets/Logimind AI 7.png';

import autoflow1 from '../../assets/Autoflow AI 1 login.png';
import autoflow2 from '../../assets/AutoFlow AI 2.png';
import autoflow3 from '../../assets/AutoFlow AI 3.png';
import autoflow4 from '../../assets/AutoFlow AI 4.png';
import autoflow5 from '../../assets/AutoFlow AI 5.png';
import autoflow6 from '../../assets/AutoFlow AI 6.png';

import democracy1 from '../../assets/Democracy lens 1.png';
import democracy2 from '../../assets/Democracy lens 2.png';
import democracy3 from '../../assets/Democracy Lens 3.png';
import democracy4 from '../../assets/Democracy lens 4.png';
import democracy5 from '../../assets/Democracy Lens 5.png';
import democracy6 from '../../assets/Democracy Lens 6.png';

import mulani1 from '../../assets/Mulani Electricians 1.png';
import mulani2 from '../../assets/Mulani Electricians 2.png';
import mulani3 from '../../assets/Mulani Electricians 3.png';
import mulani4 from '../../assets/Mulani Electricians 4.png';
import mulani5 from '../../assets/Mulani Electricians 5.png';

import fitness1 from '../../assets/Fitness Temple 1.png';
import fitness2 from '../../assets/Fitness Temple 2.png';
import fitness3 from '../../assets/Fitness Temple 3.png';
import fitness4 from '../../assets/Fitness Temple 4.png';
import fitness5 from '../../assets/Fitness Temple 5.png';

import civic1 from '../../assets/CivicMindAI 1.png';
import civic2 from '../../assets/CivicMindAI 2.png';
import civic3 from '../../assets/CivicMindAI 3.png';
import civic4 from '../../assets/CivicMindAI 4.png';
import civic5 from '../../assets/CivicMindAI 5.png';

import arena1 from '../../assets/ArenaMindAI 1.png';
import arena2 from '../../assets/ArenaMindAI 2.png';
import arena3 from '../../assets/ArenaMindAI 3.png';
import arena4 from '../../assets/ArenaMindAI 4.png';
import arena5 from '../../assets/ArenaMindAI 5.png';

import urban1 from '../../assets/UrbanMindAI 1.png';
import urban2 from '../../assets/UrbanMindAI 2.png';

const Projects = ({ searchQuery, setSearchQuery }) => {
  const advancedProjects = [
    {
      title: "Smart Community AI",
      description: "An AI-powered Decision Intelligence Platform that leverages data and automation to help city stakeholders make better decisions for community well-being. Built for the Gen AI Academy APAC Edition Hackathon.",
      tech: "Gen AI, Cloud Solutions, Decision Intelligence",
      image: civic1,
      screenshots: [civic1, civic2, civic3, civic4, civic5],
      link: "https://krishnablogy.blogspot.com/2026/07/smart-community-ai.html",
      narration: "Problem Statement: Build an AI-powered Decision Intelligence Platform that leverages data, AI models, and intelligent automation to help individuals, communities, organizations, and city stakeholders analyze information, generate insights, predict outcomes, and make better decisions that improve everyday life and community well-being. The Siloed Multimodal Challenge: Urban data isn't just numbers; it's unorganized PDFs, chaotic audio, dashcam footage, and sensor streams. Traditional platforms cannot cross-analyze these formats simultaneously. The Insight-to-Action Gap: Most dashboards only visualize data but fail to automatically orchestrate or execute cross-department workflows to resolve the identified issues. The Algorithmic Trust Deficit: Stakeholders hesitate to trust AI black boxes. We provide transparency and justification for critical civic resource allocations. The Visionaries Meet Neural Networks: We are a team of AI innovators building intelligent, cloud-powered solutions for the Gen AI Academy APAC Edition Hackathon."
    },
    {
      title: "ArenaMindAI - FIFA World Cup 2026",
      description: "A Virtual PromptWars Challenge entry for the FIFA World Cup 2026, creating an intelligent arena experience.",
      tech: "Prompt Engineering, AI, Hack2Skill",
      image: arena1,
      screenshots: [arena1, arena2, arena3, arena4, arena5],
      video: "https://www.youtube.com/embed/HRLPRi5-Se4",
      link: "https://krishnablogy.blogspot.com/2026/07/virtual-promptwars-challenge-4-fifa.html"
    },
    {
      title: "UrbanMind AI | Kaggle AI Capstone Project",
      description: "A comprehensive AI capstone project focused on urban intelligence and data analysis.",
      tech: "AI, Data Science, Kaggle, React",
      image: urban1,
      screenshots: [urban1, urban2],
      video: "https://www.youtube.com/embed/zlT6qAyaO9Y",
      link: "https://krishnablogy.blogspot.com/2026/07/urbanmind-ai-kaggle-ai-capstone-project.html"
    },
    {
      title: "Fitness Temple Gym",
      description: "A modern fitness platform for Fitness Temple Gym, featuring workout programs and gym management features.",
      tech: "React, UI/UX, Fitness Tech",
      image: fitness1,
      screenshots: [fitness1, fitness2, fitness3, fitness4, fitness5],
      link: "https://krishnablogy.blogspot.com/2026/06/visit-fitness-temple-gym.html"
    },
    {
      title: "EventPulse AI",
      description: "An AI-powered event management platform developed for Hack2Skills, streamlining event planning and attendee engagement.",
      tech: "React, AI Integration, Hack2Skills, Tailwind CSS",
      image: eventpulse1,
      screenshots: [eventpulse1, eventpulse2, eventpulse3, eventpulse4, eventpulse5],
      link: "https://krishnablogy.blogspot.com/2026/04/event-pulse-ai-by-hack2skills-hackathon.html"
    },
    {
      title: "Logimind AI",
      description: "An intelligent solution for logistics and supply chain management, submitted for the Solution Challenge 2026.",
      tech: "AI, Logistics Tech, React, Hack2Skills",
      image: logimind1,
      screenshots: [logimind1, logimind2, logimind3, logimind4, logimind5, logimind6, logimind7],
      video: "https://www.youtube.com/embed/10QHzc4bNTQ",
      link: "https://krishnablogy.blogspot.com/2026/04/logimind-ai-by-solution-challenge-2026.html"
    },
    {
      title: "AutoFlow AI",
      description: "A productivity-focused AI tool that automates repetitive tasks and streamlines professional workflows.",
      tech: "AI Automation, React, Hack2Skills",
      image: autoflow1,
      screenshots: [autoflow1, autoflow2, autoflow3, autoflow4, autoflow5, autoflow6],
      link: "https://krishnablogy.blogspot.com/2026/04/autoflow-ai-let-ai-do-your-work.html"
    },
    {
      title: "Democracy Lens - AI Election-Mentor",
      description: "An AI-driven platform for electoral awareness and guidance, winner at Hack2Skill Virtual PromptWars.",
      tech: "Generative AI, React, Hack2Skills",
      image: democracy1,
      screenshots: [democracy1, democracy2, democracy3, democracy4, democracy5, democracy6],
      link: "https://krishnablogy.blogspot.com/2026/04/democracy-lens-ai-election-mentor.html"
    },
    {
      title: "Patil Electricals | Website For Sale",
      description: "This website is for sale as 1000 rupees. In this you can add products, ratings, and all kind of features are available. Visit then purchase this website for sale.",
      tech: "React, UI/UX, Service Management",
      image: mulani1,
      screenshots: [mulani1, mulani2, mulani3, mulani4, mulani5],
      link: "https://krishnablogy.blogspot.com/2026/05/mulani-electricals.html"
    },
    {
      title: "Samadhan Shoe Mart",
      description: "A comprehensive shoe e-commerce platform with WhatsApp-integrated payment and order management.",
      tech: "React, WhatsApp API, Payment Integration",
      image: samadhan1,
      screenshots: [samadhan1, samadhan2, samadhan3, samadhan4, samadhan5, samadhan6],
      link: "https://krishnablogy.blogspot.com/2026/04/new-samadhan-shoes-mart.html"
    },
    {
      title: "Velocity Motors",
      description: "Premium automotive showcase and service platform for modern vehicle management and sales.",
      tech: "React, UI/UX, Automotive Tech",
      image: velocity1,
      screenshots: [velocity1, velocity2, velocity3, velocity4, velocity5, velocity6, velocity7, velocity8],
      link: "https://krishnablogy.blogspot.com/2026/02/velociymotors.html"
    },
    {
      title: "Prix Robotics (AI Agent)",
      description: "An intelligent scholarship AI agent designed to assist students in finding and applying for scholarships.",
      tech: "AI, NLP, React, Scholarship API",
      image: prix1,
      screenshots: [prix1, prix2, prix3, prix4, prix5],
      link: "https://krishnablogy.blogspot.com/2026/03/scholarship-ai-agent.html"
    },
    {
      title: "Tech Fundamentals Hub",
      description: "A comprehensive learning platform designed to help beginners master core technical concepts with ease and clarity.",
      tech: "React, JavaScript, CSS, Blog Integration",
      image: tech1,
      screenshots: [tech1, tech2, tech3, tech4, tech5],
      link: "https://krishnablogy.blogspot.com/2026/02/tech-fundamentals-hub.html"
    },
    {
      title: "Professional AI Assistant",
      description: "A high-performance AI-powered virtual assistant built to streamline workflows and provide intelligent responses.",
      tech: "AI Integration, JavaScript, React, NLP",
      image: ai1,
      screenshots: [ai1, ai2, ai3, ai4],
      link: "https://krishnablogy.blogspot.com/2026/01/your-professional-ai-assistant.html"
    },
    {
      title: "Online Chicken Delivery App",
      description: "A robust e-commerce solution for fresh poultry delivery with real-time tracking and secure payment integration.",
      tech: "React, Node.js, Firebase, UI/UX",
      image: chicken1,
      screenshots: [chicken1, chicken2, chicken3, chicken4, chicken5],
      link: "https://krishnablogy.blogspot.com/2026/01/online-chicken-delivery-app.html"
    },
    {
      title: "GameHub",
      description: "A centralized platform for gamers featuring multi-genre game collections and community engagement tools.",
      tech: "React, Game APIs, CSS3, JavaScript",
      image: game1,
      screenshots: [game1, game2, game3, game4, game5],
      link: "https://krishnablogy.blogspot.com/2026/01/gamehub.html"
    },
    {
      title: "YouTube Clone",
      description: "A high-fidelity YouTube replica with video streaming capabilities, search functionality, and responsive video player.",
      tech: "React, YouTube API, Tailwind CSS",
      image: yt1,
      screenshots: [yt1, yt2, yt3, yt4],
      link: "https://krishnablogy.blogspot.com/2025/12/youtube-clone.html"
    },
    {
      title: "LinkedIn Clone",
      description: "A professional networking site clone featuring user profiles, post feeds, and social interaction mechanics.",
      tech: "React, Firebase, Redux, Styled Components",
      image: linkedin1,
      screenshots: [linkedin1, linkedin2, linkedin3, linkedin4, linkedin5],
      link: "https://krishnablogy.blogspot.com/2025/11/linkedin-clone.html"
    },
    {
      title: "Airbnb Clone",
      description: "Discover your dream stay with this sophisticated booking platform featuring map integration and property listings.",
      tech: "React, Leaflet, Node.js, CSS Grid",
      image: airbnb1,
      screenshots: [airbnb1, airbnb2, airbnb3, airbnb4, airbnb5],
      link: "https://krishnablogy.blogspot.com/2025/11/discover-your-dream-stay-explore-unique.html"
    },
    {
      title: "Organic Farming Platform",
      description: "An innovative agricultural web solution connecting organic farmers with consumers and providing farming insights.",
      tech: "React, UI/UX, Sustainability Tech",
      image: organic1,
      screenshots: [organic1, organic2, organic3, organic4, organic5],
      link: "https://krishnablogy.blogspot.com/2025/11/organic-farming.html"
    },
    {
      title: "Feed Mind",
      description: "A curated content discovery platform focused on mental growth, productivity, and tech education.",
      tech: "React, Content APIs, Framer Motion",
      image: feed1,
      screenshots: [feed1, feed2, feed3, feed4, feed5],
      link: "https://krishnablogy.blogspot.com/2025/10/feedmind_14.html"
    },
    {
      title: "Singgers App",
      description: "A mobile-first music application for artists to showcase their talent and connect with fans globally.",
      tech: "React Native, Audio API, Firebase",
      image: sing1,
      screenshots: [sing1, sing2],
      link: "https://krishnablogy.blogspot.com/2025/09/singgers-app.html"
    },
    {
      title: "Sikkim Travel App",
      description: "A specialized travel guide application for exploring the beauty of Sikkim with itinerary planning.",
      tech: "React, Mapbox, Responsive Design",
      image: sikkim1,
      screenshots: [sikkim1, sikkim2, sikkim3, sikkim4, sikkim5],
      link: "https://krishnablogy.blogspot.com/2025/09/sikkim-travel-app.html"
    },
    {
      title: "Formula Hub",
      description: "A quick-reference repository for complex mathematical and scientific formulas with interactive calculators.",
      tech: "React, MathJS, CSS Flexbox",
      image: formula1,
      screenshots: [formula1, formula2],
      link: "https://krishnablogy.blogspot.com/2025/09/formula-hub.html"
    },
    {
      title: "Cyber-Hub Learners",
      description: "An educational portal dedicated to cybersecurity awareness and foundational security concepts.",
      tech: "React, Security APIs, Educational Tech",
      image: cyber1,
      screenshots: [cyber1, cyber2, cyber3, cyber4, cyber5],
      link: "https://krishnablogy.blogspot.com/2025/09/cyber-hub-learners.html"
    },
    {
      title: "Typing Speed App",
      description: "A gamified typing master tool to track and improve typing speed and accuracy in real-time.",
      tech: "JavaScript, React, Performance Metrics",
      image: typing1,
      screenshots: [typing1, typing2, typing3, typing4],
      link: "https://krishnablogy.blogspot.com/2025/08/typing-master-lerners.html"
    },
    {
      title: "Little Learners Hub",
      description: "An interactive educational platform for kids featuring alphabets, numbers, and early childhood games.",
      tech: "React, React Router, CSS Animations",
      image: little1,
      screenshots: [little1, little2],
      link: "https://krishnablogy.blogspot.com/2025/08/little-lerners-hub.html"
    }
  ];

  const filteredProjects = advancedProjects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (project.tech && project.tech.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header-with-links">
          <h2 className="section-title">💻 Advanced Projects</h2>

          <div className="project-search-container">
            <div className="search-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search projects by name, tech or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="project-search-input"
              />
              {searchQuery && (
                <button className="clear-search" onClick={() => setSearchQuery("")}>✕</button>
              )}
            </div>
          </div>

          <div className="project-quick-links">
            <a href="https://github.com/krishna67890" target="_blank" rel="noopener noreferrer" title="GitHub">🐙 GitHub</a>
            <a href={resumePdf} download="Krishna_Patil_Resume.pdf" title="Resume">📄 Resume</a>
            <a href="https://learn.microsoft.com/en-us/users/krishnapatilrajput-1391/" target="_blank" rel="noopener noreferrer">Ⓜ️ Microsoft</a>
            <a href="https://www.kaggle.com/krishnapatilrajput" target="_blank" rel="noopener noreferrer">📊 Kaggle</a>
            <a href="https://www.credly.com/users/krishna-patil-rajput/" target="_blank" rel="noopener noreferrer">🏅 Credly</a>
            <a href="https://hack2skill.com/dashboard/user_public_profile/?userId=6985d138d9155d4c3659a9e1" target="_blank" rel="noopener noreferrer">🏆 Hack2Skills</a>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No projects match your search: "<strong>{searchQuery}</strong>"</p>
            <button className="btn btn-secondary" onClick={() => setSearchQuery("")}>Clear Search</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;