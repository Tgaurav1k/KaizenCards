import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

function SolutionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const autoChangeIntervalRef = useRef(null);
  const mainContainerRef = useRef(null);

  const images = useMemo(() => ([
    { src: `${process.env.PUBLIC_URL}/images/BoxwithWhiteBG.jpg`, alt: 'Box with White BG' },
    { src: `${process.env.PUBLIC_URL}/images/Periodic Table (Amazon Image 3).jpg`, alt: 'Periodic Table' },
    { src: `${process.env.PUBLIC_URL}/images/AMAZON_PTABLE-01.jpg`, alt: 'Image 1' },
    { src: `${process.env.PUBLIC_URL}/images/AMAZON_PTABLE-02.jpg`, alt: 'Image 2' },
    { src: `${process.env.PUBLIC_URL}/images/AMAZON_PTABLE-03.jpg`, alt: 'Image 3' },
    { src: `${process.env.PUBLIC_URL}/images/AMAZON_PTABLE-04.jpg`, alt: 'Image 4' },
    { src: `${process.env.PUBLIC_URL}/images/AMAZON_PTABLE-05.jpg`, alt: 'Image 5' },
    { src: `${process.env.PUBLIC_URL}/images/AMAZON_PTABLE-07.jpg`, alt: 'Image 6' }
  ]), []);

  // Preload carousel images to avoid decode lag during auto-switch on mobile
  useEffect(() => {
    images.forEach((img) => {
      const i = new Image();
      i.src = img.src;
      i.decoding = 'async';
    });
  }, [images]);

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

  const changeMainImage = (index) => {
    setCurrentImageIndex(index);
  };

  const stopAutoChange = useCallback(() => {
    if (autoChangeIntervalRef.current) {
      clearInterval(autoChangeIntervalRef.current);
      autoChangeIntervalRef.current = null;
    }
  }, []);

  const startAutoChange = useCallback(() => {
    stopAutoChange();
    if (images.length > 0) {
      autoChangeIntervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }
  }, [images.length, stopAutoChange]);

  useEffect(() => {
    if (images.length > 0) {
      startAutoChange();
    }

    const container = mainContainerRef.current;
    if (container) {
      container.addEventListener('mouseenter', stopAutoChange);
      container.addEventListener('mouseleave', startAutoChange);
    }

    return () => {
      stopAutoChange();
      if (container) {
        container.removeEventListener('mouseenter', stopAutoChange);
        container.removeEventListener('mouseleave', startAutoChange);
      }
    };
  }, [images.length, startAutoChange, stopAutoChange]);

  return (
    <section className={`solution-section ${isVisible ? 'animate-on-scroll animated' : 'animate-on-scroll'}`} ref={ref}>
      <div className="container">
        <h2>Here's the Smarter Way to Learn Chemistry 🎯</h2>
        <div className="solution-content">
          <div className="solution-gallery">
            <div className={`main-image-container ${currentImageIndex >= 1 ? 'larger-image' : ''} ${currentImageIndex >= 2 ? 'taller-image' : ''}`} ref={mainContainerRef}>
              {images.length > 0 && images[currentImageIndex] && (
                <img
                  id="mainImage"
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt || "Kaizen Periodic Table Cards"}
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                  className={`img-fade ${currentImageIndex === 2 ? 'img-third' : ''} ${currentImageIndex >= 2 ? 'img-3to8' : ''}`}
                  style={{ opacity: 1, transition: 'opacity 0.45s ease-out' }}
                />
              )}
              <div className="image-badge">Premium Trumpcards</div>
              <div className="image">Gamified Learning System</div>
            </div>
            <div className="thumbnail-strip">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail-item ${index === currentImageIndex ? 'active' : ''}`}
                  onMouseEnter={() => {
                    stopAutoChange();
                    changeMainImage(index);
                  }}
                  onClick={() => {
                    stopAutoChange();
                    changeMainImage(index);
                    setTimeout(startAutoChange, 5000);
                  }}
                >
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
          <ul className="solution-features">
            <li>
              <span className="checkmark">✅</span>
              <div>
                <strong>Learn While Playing</strong>
                Gamified flashcard format makes studying addictive, not boring
              </div>
            </li>
            <li>
              <span className="checkmark">✅</span>
              <div>
                <strong>Smart Categorization</strong>
                Priority-based learning: Master important elements first
              </div>
            </li>
            <li>
              <span className="checkmark">✅</span>
              <div>
                <strong>Screen-Free Learning</strong>
                Parent-approved, no digital distractions
              </div>
            </li>
            <li>
              <span className="checkmark">✅</span>
              <div>
                <strong>4x Faster Results</strong>
                Reduces learning time from 60 to just 15 days
              </div>
            </li>
            <li>
              <span className="checkmark">✅</span>
              <div>
                <strong>Memory-Boosting Fun Facts</strong>
                Interesting trivia that makes elements unforgettable
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;
