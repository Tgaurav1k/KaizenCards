import React, { useState, useEffect, useMemo } from 'react';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = useMemo(() => [
    { image: `${process.env.PUBLIC_URL}/images/img1.png`, caption: 'Learn faster, while playing' },
    { image: `${process.env.PUBLIC_URL}/images/img2.png`, caption: 'Gamified, not Boring.' },
    { image: `${process.env.PUBLIC_URL}/images/img3.png`, caption: 'Learn together. No screens needed.' },
    { image: `${process.env.PUBLIC_URL}/images/Box Front Isometric.jpg`, caption: 'Periodic Table Trump Cards' }
  ], []);

  // Preload first image for faster initial load
  useEffect(() => {
    const firstImage = `${process.env.PUBLIC_URL}/images/img1.png`;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = firstImage;
    link.fetchPriority = 'high';
    document.head.appendChild(link);
    
    // Also preload as Image object for immediate display
    const img = new Image();
    img.src = firstImage;
    img.decoding = 'async';
    
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);
  
  // Preload next image when current slide changes (for smooth transitions)
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % slides.length;
    const nextImage = slides[nextIndex].image;
    const img = new Image();
    img.src = nextImage;
    img.decoding = 'async';
  }, [currentSlide, slides]);

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
          <div className="hero-badge">⚛️ Play and Learn Chemistry</div>
          <h1>Master the Periodic Table with <span className="highlight">Kaizen TrumpCards</span></h1>
          <div className="hero-description">
            <p>Revolutionary gamified chemistry trumpcards for students aged 12-17. Learn all 118 elements 4x faster with fun facts and proven memory techniques. Reduce study time from 60 to 15 days!</p>
          </div>
        </div>
        
        <div className="hero-image-section">
          <div className="hero-carousel">
            <div className="carousel-container">
              {slides.map((slide, index) => {
                // Only render active slide and next slide for smoother transitions
                const shouldRender = index === currentSlide || index === (currentSlide + 1) % slides.length;
                
                return shouldRender ? (
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
                          fetchPriority={index === 0 ? 'high' : 'auto'}
                          decoding="async"
                        />
                      </div>
                      <div className="carousel-caption">{slide.caption}</div>
                    </div>
                  </div>
                ) : null;
              })}
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
