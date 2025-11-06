import React from 'react';

function StickyCTA() {
  const handleClick = () => {
    window.open('https://amzn.to/3J6fmTr', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="sticky-cta">
      <button 
        className="sticky-cta-button" 
        onClick={handleClick}
        aria-label="Shop From Amazon Now"
        style={{ fontSize: '1.3rem' }}
      >
        <img 
          src={`${process.env.PUBLIC_URL}/images/imageAmazonLogo.png`}
          alt="Amazon Logo" 
          style={{
            height: '28px',
            width: 'auto',
            verticalAlign: 'middle',
            marginRight: '6px',
            borderRadius: '3px',
            background: 'white',
            padding: '2px'
          }}
        />
        Shop From Amazon Now 
      </button>
    </div>
  );
}

export default StickyCTA;
