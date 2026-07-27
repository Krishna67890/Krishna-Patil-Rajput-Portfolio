import React from 'react';
import ProjectCard from '../ProjectCard';
import './ToolsCodes.css';

// Importing assets
import cyber1 from '../../assets/Cyber 1.png';
import cyber2 from '../../assets/Cyber 2.png';
import cyber3 from '../../assets/Cyber 3.png';
import cyber4 from '../../assets/cyber 4.png';
import cyber5 from '../../assets/cyber 5.png';

import formula1 from '../../assets/Formula 1.png';
import formula2 from '../../assets/Formula 2.png';

import typing1 from '../../assets/Typing 1.png';
import typing2 from '../../assets/Typing 2.png';
import typing3 from '../../assets/typing 3.png';
import typing4 from '../../assets/typing 4.png';

const ToolsCodes = ({ searchQuery }) => {
  const codes = [
    {
      title: "Cyber-Hub Learners",
      description: "An educational portal dedicated to cybersecurity awareness and foundational security concepts.",
      tech: "React, Security APIs, Educational Tech",
      image: cyber1,
      screenshots: [cyber1, cyber2, cyber3, cyber4, cyber5],
      link: "https://krishnablogy.blogspot.com/2025/09/cyber-hub-learners.html"
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
      title: "Typing Speed App",
      description: "A gamified typing master tool to track and improve typing speed and accuracy in real-time.",
      tech: "JavaScript, React, Performance Metrics",
      image: typing1,
      screenshots: [typing1, typing2, typing3, typing4],
      link: "https://krishnablogy.blogspot.com/2025/08/typing-master-lerners.html"
    }
  ];

  const filteredCodes = codes.filter(code => {
    const query = searchQuery.toLowerCase().replace(/[^a-z0-9]/g, '');
    const title = code.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    const desc = code.description.toLowerCase().replace(/[^a-z0-9]/g, '');
    const tech = (code.tech || "").toLowerCase().replace(/[^a-z0-9]/g, '');
    const link = (code.link || "").toLowerCase();

    return title.includes(query) ||
           desc.includes(query) ||
           tech.includes(query) ||
           link.includes(searchQuery.toLowerCase());
  });

  if (filteredCodes.length === 0 && searchQuery !== "") {
    return null;
  }

  return (
    <section id="tools" className="logic-section">
      <div className="container">
        <h2 className="section-title">💻 Logic & Core Coding</h2>
        <div className="projects-grid">
          {filteredCodes.map((item, index) => (
            <ProjectCard key={index} project={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsCodes;