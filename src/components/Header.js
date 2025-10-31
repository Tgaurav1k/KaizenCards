import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">
          <div className="logo-icon">
            <img src="/images/Kaizen_Vertical_withBG_white_logo.png" alt="Kaizen Microlessons" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
          <span className="logo-text">Kaizen Microlessons</span>
        </a>
        <a 
          href="https://amzn.to/3J6fmTr" 
          className="nav-cta" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(90deg, #ff6b6b, #ff4c4c)',
            color: 'white',
            padding: '10px 22px',
            borderRadius: '50px',
            fontWeight: 600,
            textDecoration: 'none',
            fontFamily: "'Segoe UI', sans-serif",
            transition: 'all 0.2s ease'
          }}
        >
          <span>Shop From Amazon →</span>
          <img 
            src="/images/imageAmazonLogo.png"
            alt="Amazon Logo" 
            style={{
              height: '20px',
              width: 'auto',
              verticalAlign: 'middle',
              borderRadius: '3px',
              background: 'white',
              padding: '2px'
            }}
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
