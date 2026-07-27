import React from 'react';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';
import './Skills.css';

const Skills = ({ searchQuery }) => {
  const { speak } = usePortfolioVoice();

  const allSkills = [
    { name: "React.js", icon: "react", desc: "Expertise in building dynamic user interfaces with React and hooks." },
    { name: "Next.js", icon: "nextjs", desc: "Building SEO-friendly and performant web applications using Next.js." },
    { name: "TypeScript", icon: "ts", desc: "Writing type-safe and scalable JavaScript code." },
    { name: "JavaScript", icon: "js", desc: "Core language for web development with deep understanding of ES6+." },
    { name: "Tailwind", icon: "tailwind", desc: "Rapid UI development with utility-first CSS framework." },
    { name: "Node.js", icon: "nodejs", desc: "Backend development with Node.js runtime." },
    { name: "Express", icon: "express", desc: "Building robust REST APIs with Express framework." },
    { name: "MongoDB", icon: "mongodb", desc: "NoSQL database for flexible data storage." },
    { name: "MySQL", icon: "mysql", desc: "Relational database management and complex querying." },
    { name: "Firebase", icon: "firebase", desc: "Real-time databases and cloud authentication." },
    { name: "Postman", icon: "postman", desc: "API testing and documentation." },
    { name: "Git", icon: "git", desc: "Version control and collaborative development." },
    { name: "GitHub", icon: "github", desc: "Hosting and managing code repositories." },
    { name: "VS Code", icon: "vscode", desc: "Primary IDE for coding and development." },
    { name: "Docker", icon: "docker", desc: "Containerization for consistent development environments." },
    { name: "Ubuntu", icon: "ubuntu", desc: "Linux distributions for server management." },
    { name: "Linux", icon: "linux", desc: "Operating system proficiency for development." },
    { name: "Windows", icon: "windows", desc: "Windows development environment." },
    { name: "Python", icon: "python", desc: "General-purpose programming and scripting." },
    { name: "Java", icon: "java", desc: "Object-oriented programming for applications." },
    { name: "C++", icon: "cpp", desc: "High-performance systems programming." },
    { name: "C#", icon: "cs", desc: "Application development with .NET framework." },
    { name: "Unity", icon: "unity", desc: "Game development in 2D and 3D." },
    { name: "Godot", icon: "godot", desc: "Open-source game engine for 2D and 3D games." },
    { name: "Rust", icon: "rust", desc: "Safe and fast systems programming language." },
    { name: "Kotlin", icon: "kotlin", desc: "Modern Android development language." },
    { name: "Dart", icon: "dart", desc: "Client-optimized language for fast apps." },
    { name: "Three.js", icon: "threejs", desc: "Creating 3D graphics for the browser." }
  ];

  const futureSkills = [
    { name: "AWS", icon: "aws", desc: "Cloud computing and infrastructure services." },
    { name: "Kubernetes", icon: "kubernetes", desc: "Orchestrating containerized applications." },
    { name: "Terraform", icon: "terraform", desc: "Infrastructure as Code for cloud resources." },
    { name: "Go", icon: "go", desc: "Efficient and scalable systems programming." },
    { name: "Swift", icon: "swift", desc: "iOS and macOS application development." },
    { name: "Ruby", icon: "ruby", desc: "Web development with Ruby on Rails." },
    { name: "PHP", icon: "php", desc: "Server-side scripting for web apps." },
    { name: "Elixir", icon: "elixir", desc: "Functional programming for scalable systems." },
    { name: "Svelte", icon: "svelte", desc: "Cybernetically enhanced web apps." },
    { name: "Zig", icon: "zig", desc: "General-purpose systems programming." },
    { name: "Haskell", icon: "haskell", desc: "Purely functional programming." },
    { name: "Scala", icon: "scala", desc: "Scalable language for JVM." },
    { name: "Julia", icon: "julia", desc: "High-level, high-performance programming." },
    { name: "Lua", icon: "lua", desc: "Lightweight scripting for games and apps." }
  ];

  const filteredAllSkills = allSkills.filter(skill => {
    const query = searchQuery.toLowerCase().replace(/[^a-z0-9]/g, '');
    const name = skill.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const desc = skill.desc.toLowerCase().replace(/[^a-z0-9]/g, '');
    return name.includes(query) || desc.includes(query);
  });

  const filteredFutureSkills = futureSkills.filter(skill => {
    const query = searchQuery.toLowerCase().replace(/[^a-z0-9]/g, '');
    const name = skill.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const desc = skill.desc.toLowerCase().replace(/[^a-z0-9]/g, '');
    return name.includes(query) || desc.includes(query);
  });

  if (filteredAllSkills.length === 0 && filteredFutureSkills.length === 0 && searchQuery !== "") {
    return null;
  }

  const handleMouseEnter = (skill) => {
    speak(`${skill.name}. ${skill.desc}`);
  };

  return (
    <section id="skills" className="skills-section-cinematic">
      <div className="container">
        <h2 className="section-title reveal-text" onMouseEnter={() => speak("This is my technical arsenal. Hover over any technology to learn more.")}>
          <span className="title-emoji">🛡️</span> <span className="title-text">Technical Arsenal</span>
        </h2>

        {filteredAllSkills.length > 0 && (
          <div className="skills-immersive-wall">
            {filteredAllSkills.map((skill, index) => (
              <div
                key={index}
                className="skill-item-advanced bounce-hover"
                onMouseEnter={() => handleMouseEnter(skill)}
              >
                <div className="icon-container-floating">
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    alt={skill.name}
                    className="skill-main-logo"
                    loading="lazy"
                  />
                  <div className="skill-reflection">
                    <img src={`https://skillicons.dev/icons?i=${skill.icon}`} alt="" />
                  </div>
                  <div className="skill-glow"></div>
                </div>
                <span className="skill-text-label">{skill.name}</span>
              </div>
            ))}
          </div>
        )}

        {filteredFutureSkills.length > 0 && (
          <div className="future-tech-zone">
            <h3 className="zone-title" onMouseEnter={() => speak("My polyglot ambitions. I am currently exploring and expanding my knowledge in these technologies.")}>
              <span className="title-emoji">🌐</span> <span className="title-text">Polyglot Ambitions</span>
            </h3>
            <p className="zone-subtitle">Expanding my horizons across diverse programming paradigms and cloud architectures</p>
            <div className="skills-immersive-wall mini">
              {filteredFutureSkills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item-advanced bounce-hover"
                  onMouseEnter={() => handleMouseEnter(skill)}
                >
                  <div className="icon-container-floating future">
                    <img
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      alt={skill.name}
                      className="skill-main-logo"
                    />
                    <div className="skill-reflection">
                      <img src={`https://skillicons.dev/icons?i=${skill.icon}`} alt="" />
                    </div>
                  </div>
                  <span className="skill-text-label">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;