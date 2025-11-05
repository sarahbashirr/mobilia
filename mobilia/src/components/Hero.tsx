import React from 'react';
import './Hero.css';

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1>Expert Hands, Creative Timeless Woodwork</h1>
          <p>Transform your furniture with professional painting and restoration services. 
             Each piece receives meticulous attention to detail and high-quality finishes.</p>
          <button className="cta-button" onClick={scrollToContact}>
            Get Started →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;