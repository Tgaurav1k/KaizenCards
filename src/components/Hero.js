import React, { useState, useEffect } from 'react';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    { image: '/images/img1.png', caption: 'Learn faster.' },
    { image: '/images/img2.png', caption: 'Gamified, not Boring.' },
    { image: '/images/img3.png', caption: 'Learn together. No screens needed.' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isTransitioning, slides.length]);

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">⚛️ Chemistry Learning Revolution</div>
          <h1>Master the Periodic Table with <span className="highlight">Kaizen TrumpCards</span></h1>
          <div className="hero-description">
            <p>Revolutionary gamified chemistry trumpcards for students aged 12-17. Learn all 118 elements 4x faster with fun facts and proven memory techniques. Reduce study time from 60 to 15 days!</p>
          </div>
        </div>
        
        <div className="hero-image-section">
          <div className="hero-carousel">
            <div className="carousel-container">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <div className="hero-image-wrapper">
                    <div className="hero-image">
                      <img 
                        src={slide.image} 
                        alt={slide.caption}
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                    <div className="carousel-caption">{slide.caption}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-controls">
              <button 
                className="carousel-btn" 
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button 
                className="carousel-btn" 
                onClick={nextSlide}
                aria-label="Next slide"
              >
                ›
              </button>
            </div>

            <div className="carousel-dots">
              {slides.map((_, index) => (
                <span 
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
