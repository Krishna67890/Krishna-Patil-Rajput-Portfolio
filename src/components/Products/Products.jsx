import React from 'react';
import './Products.css';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';

const Products = ({ searchQuery }) => {
  const { speak } = usePortfolioVoice();

  const storeData = {
    title: "KrishnaStores – Your Digital Marketplace for Learning, Gaming & Technology",
    subtitle: "KrishnaStores is a multi-category digital marketplace created by Krishna Patil Rajput, bringing together digital products, educational resources, interactive games, and technology solutions in one platform.",
    url: "https://krishnastores.vercel.app",
    categories: [
      {
        icon: "📚",
        name: "BookStore",
        items: [
          "Educational eBooks and digital books",
          "Programming and technology learning resources",
          "Self-improvement and knowledge-based books",
          "Digital guides and study materials"
        ]
      },
      {
        icon: "🎮",
        name: "GameStore",
        items: [
          "Interactive browser-based games",
          "Casual and entertainment games",
          "Creative gaming experiences",
          "Developer-created games and projects"
        ]
      },
      {
        icon: "💻",
        name: "WebStore",
        items: [
          "Ready-made websites and web solutions",
          "Web development projects",
          "Digital tools and technology products",
          "Developer resources and digital creations"
        ]
      },
      {
        icon: "🛍️",
        name: "Personal Store",
        items: [
          "Exclusive digital creations",
          "Personal projects and products",
          "Special collections and downloadable resources"
        ]
      }
    ],
    mission: "To make digital learning, entertainment, creativity, and technology accessible through one convenient platform."
  };

  if (searchQuery && !storeData.title.toLowerCase().includes(searchQuery.toLowerCase()) && !storeData.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) {
    return null;
  }

  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2 className="section-title">💎 Krishna Patil Rajput Freelance</h2>
        <p className="section-subtitle">Your Digital Marketplace for Learning, Gaming & Technology</p>

        <div
          className="freelance-store-card glass-morphism"
          onMouseEnter={() => speak("KrishnaStores. Your Digital Marketplace for Learning, Gaming and Technology by Krishna Patil Rajput.")}
        >
          <div className="store-header">
            <span className="store-badge">🛍️ FEATURED FREELANCE STORE</span>
            <h3 className="store-title">KrishnaStores</h3>
            <p className="store-desc">{storeData.subtitle}</p>
          </div>

          <div className="store-categories-grid">
            {storeData.categories.map((cat, idx) => (
              <div key={idx} className="store-category-box">
                <div className="cat-icon">{cat.icon}</div>
                <h4>{cat.name}</h4>
                <ul>
                  {cat.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="store-mission-box">
            <h4>🎯 Our Mission</h4>
            <p>{storeData.mission}</p>
          </div>

          <div className="store-footer-info">
            <p> <strong>Created & Developed by Krishna Patil Rajput</strong></p>
            <p className="role-sub">Freelance Full-Stack, Android & AI Developer.</p>
            <p className="store-tagline">✨ Learn. Play. Build. Explore.</p>
          </div>

          <div className="store-action-row">
            <a
              href="https://krishnastores.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary store-visit-btn"
              onClick={() => speak("Opening KrishnaStores, my official freelance digital marketplace.")}
            >
              🌐 Visit KrishnaStores Now ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
