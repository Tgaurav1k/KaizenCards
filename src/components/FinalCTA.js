import React from 'react';

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <h2>Ready to Ace Chemistry? 🚀</h2>
        <p>Join thousands of students who've mastered the periodic table the fun way!</p>
        <a href="https://amzn.to/3J6fmTr" className="cta-button" target="_blank" rel="noopener noreferrer">
          <img 
            src="/images/imageAmazonLogo.png"
            alt="Amazon Logo" 
            style={{
              height: '32px',
              width: 'auto',
              verticalAlign: 'middle',
              marginRight: '10px',
              borderRadius: '3px',
              background: 'white',
              padding: '4px'
            }}
          />
          <span>Shop from Amazon now</span>
        </a>
      </div>
    </section>
  );
}

export default FinalCTA;
