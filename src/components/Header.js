import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <img src={`${process.env.PUBLIC_URL}/images/Kaizen_Vertical_withBG_white_logo.png`} alt="Kaizen Microlessons" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
          <span className="logo-text">Kaizen Microlessons</span>
        </Link>
        <button 
          type="button"
          className="nav-cta" 
          onClick={() => window.open('https://amzn.to/3J6fmTr', '_blank', 'noopener,noreferrer')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(90deg, #ff6b6b, #ff4c4c)',
            color: 'white',
            padding: '10px 22px',
            borderRadius: '50px',
            border: 'none',
            fontWeight: 600,
            fontSize: '1.15rem',
            textDecoration: 'none',
            fontFamily: "'Segoe UI', sans-serif",
            transition: 'all 0.2s ease'
          }}
        >
          <span>Shop From Amazon →</span>
          <img 
            src={`${process.env.PUBLIC_URL}/images/imageAmazonLogo.png`}
            alt="Amazon Logo" 
            style={{
              height: '26px',
              width: 'auto',
              verticalAlign: 'middle',
              borderRadius: '3px',
              background: 'white',
              padding: '2px'
            }}
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
