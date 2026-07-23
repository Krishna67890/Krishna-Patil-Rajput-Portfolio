import React from 'react';
import ProjectCard from '../ProjectCard';
import './Courses.css';

// Importing assets for Courses with precise filenames
import pythonImg from '../../assets/python Programming.jpg';
import cppImg from '../../assets/Certificates/Cpp-and-Oop-Concepts.jpg';
import codes3Img from '../../assets/All codes part 3.jpg';
import cyberImg from '../../assets/CyberSecurity Course.jpg';
import computerEngCert from '../../assets/Computer Engineering Course.webp';
import sqlCert from '../../assets/SQL Course.png';
import linuxCert from '../../assets/Linux for Bingginners.png';
import backendCert from '../../assets/Backend development course.jpg';
import codes2Img from '../../assets/All codes part 2.jpg';
import codes1Img from '../../assets/All codes part 1.jpg';

const Courses = ({ searchQuery }) => {
  const courses = [
    {
      title: "Python Programming",
      description: "Master Python from basics to advanced concepts with hands-on projects and clear explanations.",
      tech: "Python, Logic, Programming",
      image: pythonImg,
      screenshots: [pythonImg],
      link: "https://krishnablogy.blogspot.com/2025/12/python-programming-course.html"
    },
    {
      title: "SQL Course",
      description: "Learn to manage and query databases effectively with this comprehensive SQL guide.",
      tech: "SQL, Database, MySQL",
      image: sqlCert,
      screenshots: [sqlCert],
      link: "https://krishnablogy.blogspot.com/2025/12/sql-course.html"
    },
    {
      title: "C / C++",
      description: "Foundational programming with C and C++, covering core syntax and object-oriented principles.",
      tech: "C, C++, Programming",
      image: cppImg,
      screenshots: [cppImg],
      link: "https://krishnablogy.blogspot.com/2025/12/cc-language-course-codes.html"
    },
    {
      title: "Backend Course",
      description: "The ultimate guide for beginners to understand server-side development and APIs.",
      tech: "Node.js, Express, Backend",
      image: backendCert,
      screenshots: [backendCert],
      link: "https://krishnablogy.blogspot.com/2025/03/ultimate-backend-course-for-beginners.html"
    },
    {
      title: "All Codes Part 3",
      description: "Advanced code snippets and logic solutions for intermediate to advanced learners.",
      tech: "Logic, Coding, Advanced",
      image: codes3Img,
      screenshots: [codes3Img],
      link: "https://krishnablogy.blogspot.com/2025/01/all-codes-for-beginner-part-3.html"
    },
    {
      title: "Cyber Security Course",
      description: "Understand the fundamentals of digital security and how to protect systems from threats.",
      tech: "Cybersecurity, Security, Network",
      image: cyberImg,
      screenshots: [cyberImg],
      link: "https://krishnablogy.blogspot.com/2024/09/cyber-cecurity-course.html"
    },
    {
      title: "Computer Engineering",
      description: "A deep dive into the core concepts and subjects of computer science and engineering.",
      tech: "Computer Science, Engineering",
      image: computerEngCert,
      screenshots: [computerEngCert],
      link: "https://krishnablogy.blogspot.com/2023/09/computer-engineering-course.html"
    },
    {
      title: "Linux for Beginners",
      description: "Start your journey with Linux, covering command lines, file systems, and more.",
      tech: "Linux, Terminal, OS",
      image: linuxCert,
      screenshots: [linuxCert],
      link: "https://krishnablogy.blogspot.com/2024/09/linux-information.html"
    },
    {
      title: "All Codes Part 2",
      description: "A collection of essential codes and algorithms for foundational learning.",
      tech: "Coding, Basics, Logic",
      image: codes2Img,
      screenshots: [codes2Img],
      link: "https://krishnablogy.blogspot.com/2024/08/all-codes-for-beginner.html"
    },
    {
      title: "All Codes Part 1",
      description: "The starting point for beginners with simple, clear, and effective coding examples.",
      tech: "Coding, Beginner, Basics",
      image: codes1Img,
      screenshots: [codes1Img],
      link: "https://krishnablogy.blogspot.com/2024/06/all-codes-for-beginner.html"
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.tech.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredCourses.length === 0 && searchQuery !== "") {
    return null;
  }

  return (
    <section id="courses" className="courses-section">
      <div className="container">
        <h2 className="section-title">🎓 Educational Courses</h2>
        <div className="projects-grid">
          {filteredCourses.map((course, index) => (
            <ProjectCard key={index} project={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
