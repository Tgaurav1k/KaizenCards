import React from 'react';
import Header from './Header';
import Footer from './Footer';

function ReturnPolicy() {
  return (
    <div className="policy-page">
      <Header />
      <div className="policy-container">
        <h1>Return & Refund Policy</h1>
        <p>We aim to ensure every learner loves their Kaizen Microlessons kit. However, if you are not completely satisfied, you can easily request a return through Amazon.</p>

        <h2>30-Day Return Window</h2>
        <p>Products purchased through Amazon are eligible for return within 30 days of delivery. The item must be unused, in original packaging, and accompanied by proof of purchase.</p>

        <h2>How to Request a Return</h2>
        <ul>
          <li>Go to your <a href="https://www.amazon.in/gp/your-account/order-history" target="_blank" rel="noopener noreferrer">Amazon Orders page</a>.</li>
          <li>Select the Kaizen Microlessons product.</li>
          <li>Click "Return or Replace Items."</li>
          <li>Choose the reason and preferred pickup option.</li>
        </ul>

        <h2>Refund Process</h2>
        <p>After Amazon receives and inspects the returned product, refunds are issued to your original payment method, typically within 5-7 business days.</p>

        <h2>Replacement Policy</h2>
        <p>Defective or damaged products are eligible for replacement at no extra cost. Please initiate a replacement request via Amazon's "My Orders."</p>
      </div>
      <Footer />
    </div>
  );
}

export default ReturnPolicy;

