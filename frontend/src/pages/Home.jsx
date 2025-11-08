import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="home-section">
      <h1 className="home-title">Winter Vogue 2025</h1>
      <p className="home-subtitle">
        Cozy meets chic — explore our curated winter collection
      </p>

      <div className="home-content">
        <div className="home-image-box">
          <img
            src="https://wallpapercave.com/wp/POpBPMG.jpg"
            alt="Winter Fashion"
            className="home-image"
          />
        </div>

        <div className="home-text">
          <h2>Stay Warm. Look Stunning.</h2>
          <p>
            Wrap yourself in comfort this season. From knitted scarves to
            statement coats, find the perfect blend of style and warmth. Every
            outfit tells a story — make yours unforgettable this winter.
          </p>
          <button
            className="shop-now-btn"
            onClick={() => navigate('/shop')}
          >
            Shop the Collection
          </button>
        </div>
      </div>

      {/* 🔥 Campfire Animation */}
      <div className="campfire">
        <div className="flame flame1"></div>
        <div className="flame flame2"></div>
        <div className="flame flame3"></div>
        <div className="flame flame4"></div>
        <div className="flame flame5"></div>
        <div className="logs"></div>
      </div>
    </section>
  );
}
