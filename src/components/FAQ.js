import React, { useState, useEffect, useRef } from 'react';

function FAQ() {
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

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is this aligned with CBSE/ICSE curriculum?",
      answer: "Yes! The cards cover all elements and properties required by CBSE, ICSE, and state board curricula for grades 6-12. Perfect for JEE/NEET exam preparation."
    },
    {
      question: "What age group is this suitable for?",
      answer: "Designed for students aged 12-17, but younger kids (10+) can use it with parental guidance. Many adults also find it helpful for competitive exam preparation!"
    },
    {
      question: "Is this a digital or physical product?",
      answer: "These are high-quality physical flashcards printed on durable card stock. No screens, no apps, no distractions - just effective learning!"
    },
    {
      question: "How long does delivery take?",
      answer: "Amazon Prime members get 1-2 day delivery. Standard delivery takes 3-5 business days across India and 7 days money back garentee through amazon."
    },
    {
      question: "What if my child doesn't like it?",
      answer: "We offer a 30-day money-back guarantee through Amazon. If you're not satisfied, return it for a full refund - no questions asked!"
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`faq-section ${isVisible ? 'animate-on-scroll animated' : 'animate-on-scroll'}`} ref={ref}>
      <div className="container">
        <h2>Frequently Asked Questions 💬</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
              </div>
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
