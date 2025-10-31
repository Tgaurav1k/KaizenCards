import React from 'react';
import Header from './Header';
import Footer from './Footer';

function ShippingInfo() {
  return (
    <div className="policy-page">
      <Header />
      <div className="policy-container">
        <h1>Shipping Information</h1>
        <p>We want you to receive your Kaizen Microlessons products as quickly as possible. All orders placed through Amazon are fulfilled by Amazon's trusted delivery network.</p>

        <h2>Delivery Time</h2>
        <ul>
          <li>Amazon Prime members – 1-2 business days.</li>
          <li>Standard delivery – 3-5 business days across India.</li>
          <li>Rural or remote areas may take up to 7 days.</li>
        </ul>

        <h2>Shipping Charges</h2>
        <p>Shipping costs are displayed during checkout on Amazon. Prime members enjoy free shipping benefits as per their membership terms.</p>

        <h2>Tracking Orders</h2>
        <p>Once your order is dispatched, you'll receive a confirmation email or SMS with a tracking link. You can track it directly via your <a href="https://amzn.to/3J6fmTr" target="_blank" rel="noopener noreferrer">Amazon Orders page</a>.</p>

        <h2>Damaged or Lost Packages</h2>
        <p>In rare cases where your package is lost or arrives damaged, please reach out through Amazon's "Help" section for quick resolution or replacement.</p>
      </div>
      <Footer />
    </div>
  );
}

export default ShippingInfo;

