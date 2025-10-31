import React, { useEffect, useRef, useState } from 'react';

function ProductDetails() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const node = ref.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <section id="product" className={`product-details ${isVisible ? 'animate-on-scroll animated' : 'animate-on-scroll'}`} ref={ref}>
      <div className="container">
        <h2>What's Inside Your Learning Kit? 📦</h2>
        <p className="section-intro">Every card is scientifically designed for maximum retention and understanding</p>
        
        <div className="details-showcase">
          <div className="detail-card">
            <div className="card-icon">⚛️</div>
            <h3>Complete Element Data</h3>
            <ul>
              <li>Element Symbol & Name</li>
              <li>Atomic Number & Mass</li>
            </ul>
          </div>
          
          <div className="detail-card">
            <div className="card-icon">🌡️</div>
            <h3>Physical Properties</h3>
            <ul>
              <li>Boiling & Melting Points</li>
              <li>Density & State of Matter</li>
              <li>Electronegativity Values</li>
            </ul>
          </div>
          
          <div className="detail-card">
            <div className="card-icon">🔬</div>
            <h3>Chemical Classification</h3>
            <ul>
              <li>Element Family Groups</li>
              <li>Period & Block Location</li>
            </ul>
          </div>
          
          <div className="detail-card">
            <div className="card-icon">💡</div>
            <h3>Fun Science Facts</h3>
            <ul>
              <li>Real-world Applications</li>
              <li>Historical Discoveries</li>
              <li>Memory-boosting Trivia</li>
              <li>Interesting Uses</li>
            </ul>
          </div>
        </div>

        <div className="deck-features">
          <div className="feature-row">
            <div className="feature-item">
              <span className="feature-number">118</span>
              <span className="feature-label"><b>Complete Elements</b></span>
            </div>
            <div className="feature-item">
              <span className="feature-number">3</span>
              <span className="feature-label"><b>Priority Categories</b></span>
              <span className="feature-label">Most Important<br />Important<br />Not Important</span>
            </div>
            <div className="feature-item">
              <span className="feature-number">10</span>
              <span className="feature-label"><b>Facts Per Element</b></span>
            </div>
          </div>
        </div>
        
        <div className="bonus-box">
          <h3>🎁 FREE BONUSES INCLUDED!</h3>
          <div className="bonus-content">
            <div className="bonus-item">
              <span className="bonus-icon">📅</span>
              <p><strong>30-Day Learning Plan</strong>Daily structured lessons for guaranteed results</p>
            </div>
            <div className="bonus-divider"></div>
            <div className="bonus-item">
              <span className="bonus-icon">📊</span>
              <p><strong>Large Periodic Table Poster</strong>Beautiful wall chart for quick reference</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
