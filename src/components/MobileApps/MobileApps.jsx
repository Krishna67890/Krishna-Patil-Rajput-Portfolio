import React from 'react';
import ProjectCard from '../ProjectCard';
import './MobileApps.css';

// Importing assets
import little1 from '../../assets/Little-Learners-Hub 1.png';
import little2 from '../../assets/Little-Learners-Hub 2.png';
import game1 from '../../assets/GameHub 1.png';
import game2 from '../../assets/GameHub 2.png';
import unit1 from '../../assets/Unit Converter 1.jpg';
import unit2 from '../../assets/Unit Converter 2.jpg';
import unit3 from '../../assets/Unit Converter 3.jpg';
import unit4 from '../../assets/Unit Converter 4.jpg';
import blogger1 from '../../assets/Krishna Bloggers 1.jpg';
import blogger2 from '../../assets/Krishna Bloggers 2.jpg';

import coffee1 from '../../assets/Cofee Shop 1.jpg';
import coffee2 from '../../assets/Cofee Shop 2.jpg';
import coffee3 from '../../assets/Cofee Shop 3.jpg';
import coffee4 from '../../assets/Cofee Shop 4.jpg';
import coffee5 from '../../assets/Cofee shop 5.jpg';
import coffee6 from '../../assets/Cofee Shop 6.jpg';
import coffee7 from '../../assets/Cofee Shop 7.jpg';
import coffee8 from '../../assets/Cofee Shop 8.jpg';
import coffee9 from '../../assets/Cofee Shop 9.jpg';
import coffee10 from '../../assets/Cofee Shop 10.jpg';
import coffee11 from '../../assets/Cofee Shop 11.jpg';
import coffee12 from '../../assets/Cofee Shop 12.jpg';

const MobileApps = ({ searchQuery }) => {
  const apps = [
    {
      title: "Coffee Shop App",
      description: "A premium marketing and ordering application for a coffee shop featuring a wide selection of beverages and dishes.",
      tech: "React Native, UI/UX Design, Order Management",
      image: coffee1,
      screenshots: [coffee1, coffee2, coffee3, coffee4, coffee5, coffee6, coffee7, coffee8, coffee9, coffee10, coffee11, coffee12],
      github: "https://github.com/Krishna67890/Cofee-restaurent-app-",
      link: "https://github.com/Krishna67890/Cofee-restaurent-app-"
    },
    {
      title: "Unit Converter",
      description: "A versatile mobile application for converting units, currencies, and processing images with a clean, intuitive interface.",
      tech: "Android, Java/Kotlin, API Integration",
      image: unit1,
      screenshots: [unit1, unit2, unit3, unit4],
      github: "https://github.com/Krishna67890/UnitCurrencyImage_Converter",
      link: "https://github.com/Krishna67890/UnitCurrencyImage_Converter"
    },
    {
      title: "KrishnaBloggers",
      description: "A professional blogging platform app designed for seamless content creation and reading experience.",
      tech: "React Native, Firebase, Node.js",
      image: blogger1,
      screenshots: [blogger1, blogger2],
      github: "https://github.com/Krishna67890/KRISHNABLOGGERS",
      link: "https://github.com/Krishna67890/KRISHNABLOGGERS"
    },
    {
      title: "GameHub Mobile",
      description: "The mobile version of GameHub, optimized for on-the-go gaming discovery and community interaction.",
      tech: "React Native, Game API, Redux",
      image: game1,
      screenshots: [game1, game2],
      github: "https://github.com/Krishna67890/GameHub",
      link: "https://github.com/Krishna67890/GameHub"
    },
    {
      title: "Little-Learners-Hub Mobile",
      description: "Interactive educational experience for children, fully optimized for mobile devices with touch-friendly controls.",
      tech: "React Native, CSS, Educational Logic",
      image: little1,
      screenshots: [little1, little2],
      github: "https://github.com/Krishna67890/Little-Learners-Hub",
      link: "https://github.com/Krishna67890/Little-Learners-Hub"
    }
  ];

  const filteredApps = apps.filter(app => {
    const query = searchQuery.toLowerCase().replace(/[^a-z0-9]/g, '');
    const title = app.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    const desc = app.description.toLowerCase().replace(/[^a-z0-9]/g, '');
    const tech = (app.tech || "").toLowerCase().replace(/[^a-z0-9]/g, '');
    const link = (app.link || "").toLowerCase();

    return title.includes(query) ||
           desc.includes(query) ||
           tech.includes(query) ||
           link.includes(searchQuery.toLowerCase());
  });

  if (filteredApps.length === 0 && searchQuery !== "") {
    return null;
  }

  return (
    <section id="mobile-apps" className="mobile-apps-section">
      <div className="container">
        <h2 className="section-title">📱 Mobile & Responsive Apps</h2>
        <div className="projects-grid">
          {filteredApps.map((app, index) => (
            <ProjectCard key={index} project={app} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileApps;