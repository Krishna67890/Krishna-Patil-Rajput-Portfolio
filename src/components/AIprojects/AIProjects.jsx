import React from 'react';
import ProjectCard from '../ProjectCard';
import './AIProjects.css';

// Importing assets for AI projects
import ai1 from '../../assets/AI assistant 1.png';
import ai2 from '../../assets/AI assistant 2.png';
import ai3 from '../../assets/AI assistant 3.png';
import ai4 from '../../assets/AI assistant 4.png';
import jarvis from '../../assets/Jarvis AI Assistant.png';
import yourAi from '../../assets/Your AI.png';
import virtualAssistant from '../../assets/Chatbot Virtual Assistant.png';
import chatbotJarvis from '../../assets/Chatbot Jarvis.png';

const AIProjects = ({ searchQuery }) => {
  const aiItems = [
    {
      title: "Professional AI Assistant",
      description: "A high-performance AI-powered virtual assistant built to streamline workflows and provide intelligent responses.",
      tech: "AI Integration, JavaScript, React, NLP",
      image: ai1,
      screenshots: [ai1, ai2, ai3, ai4],
      link: "https://krishnablogy.blogspot.com/2026/01/your-professional-ai-assistant.html",
      github: "#"
    },
    {
      title: "Jarvis AI Assistant",
      description: "A personal AI companion inspired by sci-fi, capable of voice interaction and multi-tasking.",
      tech: "Voice Recognition, AI APIs, JavaScript",
      image: jarvis,
      screenshots: [jarvis],
      link: "https://krishnablogy.blogspot.com/2025/05/jarvis-your-personal-ai-assistant.html",
      github: "#"
    },
    {
      title: "Your Ai",
      description: "A custom-built AI interface focused on personalized user interactions and smart assistance.",
      tech: "OpenAI API, React, CSS3",
      image: yourAi,
      screenshots: [yourAi],
      link: "https://krishnablogy.blogspot.com/2024/08/your-ai.html",
      github: "#"
    },
    {
      title: "Chatbot Virtual Assistant",
      description: "A sophisticated combination of a chatbot and voice assistant for a seamless interactive experience.",
      tech: "Web Speech API, NLP, JavaScript",
      image: virtualAssistant,
      screenshots: [virtualAssistant],
      link: "https://krishnablogy.blogspot.com/p/chatbot-and-voice-assistant-combination.html",
      github: "#"
    },
    {
      title: "Chatbot Jarvis",
      description: "An advanced chat-based implementation of the Jarvis system with intelligent querying capabilities.",
      tech: "AI Logic, Frontend Dev, API",
      image: chatbotJarvis,
      screenshots: [chatbotJarvis],
      link: "https://krishnablogy.blogspot.com/p/chatbot-jarvis.html",
      github: "#"
    }
  ];

  const filteredItems = aiItems.filter(item => {
    const query = searchQuery.toLowerCase().replace(/[^a-z0-9]/g, '');
    const title = item.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    const desc = item.description.toLowerCase().replace(/[^a-z0-9]/g, '');
    const tech = (item.tech || "").toLowerCase().replace(/[^a-z0-9]/g, '');
    const link = (item.link || "").toLowerCase();

    return title.includes(query) ||
           desc.includes(query) ||
           tech.includes(query) ||
           link.includes(searchQuery.toLowerCase());
  });

  if (filteredItems.length === 0 && searchQuery !== "") {
    return null;
  }

  return (
    <section id="ai-projects" className="ai-section">
      <div className="container">
        <h2 className="section-title">🤖 AI Projects</h2>
        <div className="projects-grid">
          {filteredItems.map((item, index) => (
            <ProjectCard key={index} project={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProjects;