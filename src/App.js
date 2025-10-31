import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ProductDetails from './components/ProductDetails';
import SocialProof from './components/SocialProof';
import FinalCTA from './components/FinalCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import PrivacyPolicy from './components/PrivacyPolicy';
import ReturnPolicy from './components/ReturnPolicy';
import ShippingInfo from './components/ShippingInfo';

function HomePage() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ProductDetails />
      <SocialProof />
      <FinalCTA />
      <FAQ />
      <StickyCTA />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/return-policy" element={<ReturnPolicy />} />
      <Route path="/shipping-info" element={<ShippingInfo />} />
    </Routes>
  );
}

export default App;
