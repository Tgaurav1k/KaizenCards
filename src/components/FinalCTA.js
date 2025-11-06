import React from 'react';

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <h2>Ready to Ace Chemistry? 🚀</h2>
        <p>Join thousands of students who've mastered the periodic table the fun way!</p>
        <button 
          type="button"
          className="cta-button"
          onClick={() => window.open('https://amzn.to/3J6fmTr', '_blank', 'noopener,noreferrer')}
          style={{ fontSize: '1.5rem' }}
        >
          <img 
            src={`${process.env.PUBLIC_URL}/images/imageAmazonLogo.png`}
            alt="Amazon Logo" 
            style={{
              height: '40px',
              width: 'auto',
              verticalAlign: 'middle',
              marginRight: '10px',
              borderRadius: '3px',
              background: 'white',
              padding: '4px'
            }}
          />
          <span>Shop from Amazon now</span>
        </button>
      </div>
    </section>
  );
}

export default FinalCTA;
