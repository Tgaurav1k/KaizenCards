import React from 'react';

function StickyCTA() {
  return (
    <div className="sticky-cta">
      <a href="https://www.amazon.in/gp/product/B0DNKGMNTP" target="_blank" rel="noopener noreferrer">
        <img 
          src="/images/imageAmazonLogo.png"
          alt="Amazon Logo" 
          style={{
            height: '20px',
            width: 'auto',
            verticalAlign: 'middle',
            marginRight: '6px',
            borderRadius: '3px',
            background: 'white',
            padding: '2px'
          }}
        />
        Shop From Amazon Now 
      </a>
    </div>
  );
}

export default StickyCTA;
