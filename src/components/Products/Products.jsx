import React from 'react';
import ProjectCard from '../ProjectCard';
import './Products.css';
import littleLearnersImg from '../../assets/Little-Learners-Hub 1.png';
import linkedinImg from '../../assets/Linked in 1.png';
import blockcraft1 from '../../assets/Blockcraft 1.png';
import blockcraft2 from '../../assets/Blockcraft 2.png';
import blockcraft3 from '../../assets/Blockcraft 3.png';
import blockcraft4 from '../../assets/Blockcraft 4.png';

const Products = ({ searchQuery }) => {
  const products = [
    {
      id: 'little-learners',
      brand: "Krishnadai Productions",
      title: "Little Learners Hub",
      price: "$4",
      description: "Interactive educational platform for kids. Perfect for early learning and engagement.",
      link: "https://krishnadai.gumroad.com/l/littlelearnershub",
      image: littleLearnersImg,
      screenshots: [littleLearnersImg],
      narration: "Krishnadai Productions presents: Little Learners Hub for only 4 dollars. An interactive educational platform for kids featuring alphabets, numbers, and early childhood games. I can sure that you will get best from me."
    },
    {
      id: 'linkedin-clone',
      brand: "Krishnadai Productions",
      title: "LinkedIn Clone (React)",
      price: "$10",
      description: "High-fidelity professional networking site clone with post feeds and user profiles.",
      link: "https://krishnadai.gumroad.com/l/linkedin-clone-react",
      image: linkedinImg,
      screenshots: [linkedinImg],
      narration: "Krishnadai Productions presents: LinkedIn Clone built with React for 10 dollars. It features professional networking mechanics, user profiles, and interactive feeds. I can sure that you will get best from me."
    },
    {
      id: 'blockcraft-builder',
      brand: "Krishnadai Productions",
      title: "BlockCraft Builder: Dream House Edition",
      price: "$1.04 / ₹100",
      description: "Build, design, and decorate your dream home in this lightweight HTML5 browser game.",
      link: "https://krishnadai.gumroad.com/l/BlockCraft-Builder-Dream-House-Edition",
      image: blockcraft1,
      screenshots: [blockcraft1, blockcraft2, blockcraft3, blockcraft4],
      video: "https://www.youtube.com/embed/fT-YgEvbdiA",
      narration: "Krishnadai Productions presents: BlockCraft Builder Dream House Edition for 1.04 US dollars, which is 100 rupees. Build, design, and decorate your dream home in this lightweight HTML5 browser game. I can sure that you will get best from me."
    }
  ];

  const filteredProducts = products.filter(product => {
    const query = searchQuery.toLowerCase().replace(/[^a-z0-9]/g, '');
    const title = product.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    const desc = product.description.toLowerCase().replace(/[^a-z0-9]/g, '');
    const link = (product.link || "").toLowerCase();

    return title.includes(query) ||
           desc.includes(query) ||
           link.includes(searchQuery.toLowerCase());
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
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn buy-btn"
                >
                  Buy on Gumroad
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
