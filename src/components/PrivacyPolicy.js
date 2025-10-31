import React from 'react';
import Header from './Header';
import Footer from './Footer';

function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <Header />
      <div className="policy-container">
        <h1>Privacy Policy</h1>
        <p>Kaizen Microlessons ("we", "our", "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we handle information when you visit our website or interact with our products sold through Amazon.</p>

        <h2>Information We Collect</h2>
        <ul>
          <li>Basic contact information if you email us directly.</li>
          <li>Anonymous site analytics such as traffic data and page views.</li>
          <li>No financial or personal data is collected directly by us — all transactions occur via Amazon's secure checkout.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We may use limited contact information to respond to inquiries, improve our website, or share updates only if you request them.</p>

        <h2>Data Security</h2>
        <p>Your data is never sold or shared with third parties. Amazon handles all payment and delivery information under its own <a href="https://www.amazon.in/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>

        <h2>Cookies</h2>
        <p>Our website may use cookies for analytics and basic functionality. You can disable cookies in your browser settings at any time.</p>

        <h2>Contact</h2>
        <p>For any privacy concerns, contact us at <a href="mailto:b3solns1@gmail.com">b3solns1@gmail.com</a>.</p>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;

