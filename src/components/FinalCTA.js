import React from 'react';

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <h2>Ready to Ace Chemistry? 🚀</h2>
        <p>Join thousands of students who've mastered the periodic table the fun way!</p>
        <a href="https://amzn.to/3J6fmTr" className="cta-button" target="_blank" rel="noopener noreferrer">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{
              verticalAlign: 'middle',
              marginRight: '8px',
              display: 'inline-block'
            }}
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span>Shop from Amazon now</span>
        </a>
      </div>
    </section>
  );
}

export default FinalCTA;
