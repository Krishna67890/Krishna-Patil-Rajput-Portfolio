import React from 'react';
import './Products.css';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';
import littleLearnersImg from '../../assets/Little-Learners-Hub 1.png';
import linkedinImg from '../../assets/Linked in 1.png';
import blockcraftImg from '../../assets/Blockcraft 1.png';

const Products = ({ searchQuery }) => {
  const { speak, stop } = usePortfolioVoice();

  const products = [
    {
      id: 'little-learners',
      brand: "Krishnadai Productions",
      title: "Little Learners Hub",
      price: "$4",
      description: "Interactive educational platform for kids. Perfect for early learning and engagement.",
      link: "https://krishnadai.gumroad.com/l/littlelearnershub",
      image: littleLearnersImg,
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
      narration: "Krishnadai Productions presents: LinkedIn Clone built with React for 10 dollars. It features professional networking mechanics, user profiles, and interactive feeds. I can sure that you will get best from me."
    },
    {
      id: 'blockcraft-builder',
      brand: "Krishnadai Productions",
      title: "BlockCraft Builder: Dream House Edition",
      price: "$1.04",
      description: "Build, design, and decorate your dream home in this lightweight HTML5 browser game.",
      link: "https://krishnadai.gumroad.com/l/BlockCraft-Builder-Dream-House-Edition",
      image: blockcraftImg,
      narration: "Krishnadai Productions presents: BlockCraft Builder Dream House Edition for 1.04 US dollars, which is 100 rupees. Build, design, and decorate your dream home in this lightweight HTML5 browser game. I can sure that you will get best from me."
    }
  ];

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <div
              key={product.id}
              className="product-card glass-morphism"
              onMouseEnter={() => speak(product.narration)}
              onMouseLeave={stop}
            >
              <div className="product-brand-tag">{product.brand}</div>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                <div className="product-price">{product.price}</div>
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
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
