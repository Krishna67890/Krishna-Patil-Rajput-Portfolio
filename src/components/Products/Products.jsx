import React from 'react';
import ProjectCard from '../ProjectCard';
import './Products.css';
import littleLearnersImg from '../../assets/Little-Learners-Hub 1.png';
import linkedinImg from '../../assets/Linked in 1.png';
import blockcraft1 from '../../assets/Blockcraft 1.png';
import blockcraft2 from '../../assets/Blockcraft 2.png';
import blockcraft3 from '../../assets/Blockcraft 3.png';
import blockcraft4 from '../../assets/Blockcraft 4.png';
import candyMatch1 from '../../assets/Candy-Match 1.png';
import candyMatch2 from '../../assets/Candy-Match 2.png';
import candyMatch3 from '../../assets/Candy-Match 3.png';
import whyWasIOption1 from '../../assets/Why Was I Only An Option 1.png';
import whyWasIOption2 from '../../assets/Why Was I Only An Option 2.png';
import whyWasIOption3 from '../../assets/Why Was I Only An Option 3.png';
import webDev1 from '../../assets/Web devlopment roadmap 1.png';
import webDev2 from '../../assets/Web Devlopment Roadmap 2.png';


const Products = ({ searchQuery }) => {
  const products = [
    {
      id: 'little-learners',
      brand: "Krishnadai Productions",
      title: "Little Learners Hub",
      price: "$4",
      description: "Interactive educational platform for kids. Perfect for early learning and engagement.",
      link: "https://krishnapatilrajput.gumroad.com/l/littlelearnershub",
      image: littleLearnersImg,
      screenshots: [littleLearnersImg],
      narration: "Krishnadai Productions presents: Little Learners Hub for only 4 dollars. An interactive educational platform for kids featuring alphabets, numbers, and early childhood games. I am sure that you will get the best from me."
    },
    {
      id: 'linkedin-clone',
      brand: "Krishnadai Productions",
      title: "LinkedIn Clone (React)",
      price: "$10",
      description: "High-fidelity professional networking site clone with post feeds and user profiles.",
      link: "https://krishnapatilrajput.gumroad.com/l/linkedin-clone-react",
      image: linkedinImg,
      screenshots: [linkedinImg],
      narration: "Krishnadai Productions presents: LinkedIn Clone built with React for 10 dollars. It features professional networking mechanics, user profiles, and interactive feeds. I am sure that you will get the best from me."
    },
    {
      id: 'blockcraft-builder',
      brand: "Krishnadai Productions",
      title: "BlockCraft Builder: Dream House Edition",
      price: "$1.04 / ₹100",
      description: "Build, design, and decorate your dream home in this lightweight HTML5 browser game.",
      link: "https://krishnapatilrajput.gumroad.com/l/BlockCraft-Builder-Dream-House-Edition",
      itchLink: "https://krishnapatilrajput.itch.io/blockcraft-builder-dream-house-edition",
      image: blockcraft1,
      screenshots: [blockcraft1, blockcraft2, blockcraft3, blockcraft4],
      video: "https://www.youtube.com/embed/fT-YgEvbDOA",
      narration: "Krishnadai Productions presents: BlockCraft Builder Dream House Edition for 1.04 US dollars, which is 100 rupees. Build, design, and decorate your dream home in this lightweight HTML5 browser game. I am sure that you will get the best from me."
    },
    {
      id: 'candy-match',
      brand: "Krishnadai Productions",
      title: "Candy Match Game",
      price: "$1",
      description: "A fun and addictive match-three puzzle game with colorful graphics and engaging levels.",
      link: "https://krishnapatilrajput.gumroad.com/l/candy-match-game",
      itchLink: "https://krishnapatilrajput.itch.io/candy-match-game",
      image: candyMatch1,
      screenshots: [candyMatch1, candyMatch2, candyMatch3],
      narration: "Krishnadai Productions presents: Candy Match Game for only 1 dollar. A fun and addictive match-three puzzle game featuring colorful graphics and engaging levels. Available on Gumroad and Itch.io. I am sure that you will get the best from me."
    },
    {
      id: 'why-was-i-option',
      brand: "Krishnadai Productions",
      title: "Why Was I Only an Option? (Digital Edition)",
      price: "$4.99 / ₹953",
      description: "A heartfelt journey through love, heartbreak, healing, and self-discovery. Written by Aniket S. Kardile.",
      link: "https://krishnapatilrajput.gumroad.com/l/why-was-i-only-an-option",
      image: whyWasIOption1,
      screenshots: [whyWasIOption1, whyWasIOption2, whyWasIOption3],
      narration: "Introducing Why Was I Only an Option? (Digital Edition)—a heartfelt journey through love, heartbreak, healing, and self-discovery. Written by Aniket S. Kardile and published by Krishna Patil Rajput, this 97-page ebook is filled with emotional reflections, inspiring quotes, and lessons to help you heal and rediscover your self-worth. Get your copy today for just $4.99, approximately ₹953, and begin your journey toward healing."
    },
    {
      id: 'web-dev-roadmap',
      brand: "Krishnadai Productions",
      title: "Web Development Fundamentals & Advanced Concepts (2026 Edition)",
      price: "₹95",
      description: "Learn HTML, CSS, JavaScript, React, Node.js, databases, APIs, web security, and deployment.",
      link: "https://krishnapatilrajput.gumroad.com/l/web-development-roadmap-2026",
      image: webDev1,
      screenshots: [webDev1, webDev2],
      narration: "Start your web development journey today with Web Development Fundamentals & Advanced Concepts (2026 Edition). Learn HTML, CSS, JavaScript, React, Node.js, databases, APIs, web security, deployment, and the complete Full Stack roadmap—all in one beginner-friendly guide. Written by Krishna Ajaysing Rajput. Available now for just ₹95. Download your copy today and begin building your future in web development."
    }
  ];

  const filteredProducts = products.filter(product => {
    const query = searchQuery.toLowerCase().replace(/[^a-z0-9]/g, '');
    const title = product.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    const desc = product.description.toLowerCase().replace(/[^a-z0-9]/g, '');
    const link = (product.link || "").toLowerCase();
    const itchLink = (product.itchLink || "").toLowerCase();

    return title.includes(query) ||
           desc.includes(query) ||
           link.includes(searchQuery.toLowerCase()) ||
           itchLink.includes(searchQuery.toLowerCase());
  });

  if (filteredProducts.length === 0 && searchQuery !== "") {
    return null;
  }

  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2 className="section-title">💎 Krishna Patil Rajputs Products</h2>
        <p className="section-subtitle">Premium Source Codes & Digital Assets</p>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card-wrapper">
              <div className="product-brand-tag">{product.brand}</div>
              <div className="product-price-tag">{product.price}</div>
              <ProjectCard
                project={{
                  ...product,
                  tech: product.brand, // Using brand as tech tag for consistency in ProjectCard
                  link: product.link
                }}
              />
              <div className="product-buy-action">
                {product.link && product.link.includes('gumroad') && (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn buy-btn gumroad-btn"
                  >
                    🛍️ Buy on Gumroad
                  </a>
                )}
                {product.itchLink && (
                  <a
                    href={product.itchLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn buy-btn itch-btn"
                  >
                    🎮 Buy on itch
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
