import React, { useEffect, useRef, useState } from 'react';

function ProblemSection() {
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
    <section className={`problem-section ${isVisible ? 'animate-on-scroll animated' : 'animate-on-scroll'}`} ref={ref}>
      <div className="container">
        <h2>Still Struggling with Chemistry Elements? 😰</h2>
        <p>Traditional memorization is broken. Students spend <strong>60+ days</strong> cramming element names, only to forget them during exams. There's a better way...</p>
      </div>
    </section>
  );
}

export default ProblemSection;
