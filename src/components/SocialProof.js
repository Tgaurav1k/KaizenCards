import React, { useEffect, useRef, useState } from 'react';

function SocialProof() {
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const testimonials = [
    "\"This is a great beginner-level learning tool for my kid. It has become a consistent part of her daily play and learning.\" - Rashmi Singh",
    "\"I ordered this for my daughter last week. The product is innovative and well-designed. Highly recommend!\" - Sachin Mulik",
    "\"Cut my exam preparation time in half! The categorization system is genius. Highly recommend!\" - Gaurav"
  ];

  return (
    <section id="reviews" className={`social-proof ${isVisible ? 'animate-on-scroll animated' : 'animate-on-scroll'}`} ref={ref}>
      <div className="container">
        <h2>Parents & Students Love Kaizen! ❤️</h2>
        <div className="rating-display">⭐⭐⭐⭐⭐</div>
        <p className="review-count">4.4/5 based on 180+ Verified Amazon Reviews</p>
        
        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              {testimonial}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
