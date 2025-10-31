import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Kaizen Microlessons</h3>
            <p>Transforming chemistry education through gamified learning. Making science fun, one element at a time!</p>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="https://amzn.to/3J6fmTr" target="_blank" rel="noopener noreferrer">Buy on Amazon</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#reviews">Customer Reviews</a></li>
              <li><a href="#product">Product Details</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li><a href="mailto:b3solns1@gmail.com" style={{color: '#fff', textDecoration: 'none'}}>Contact Us</a></li>
              <li><a href="/shipping-info" style={{color: '#fff', textDecoration: 'none'}}>Shipping Info</a></li>
              <li><a href="/return-policy" style={{color: '#fff', textDecoration: 'none'}}>Return Policy</a></li>
              <li><a href="/privacy-policy" style={{color: '#fff', textDecoration: 'none'}}>Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Kaizen Microlessons. All rights reserved. | Made with ❤️ for Chemistry Students</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
