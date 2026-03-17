import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            Enterprise Technology Solutions
          </div>
          <h1 className="hero-title">
            Welcome to Seronex Innovations Private Limited
          </h1>
          <h2 className="hero-subtitle">
            Empowering Innovation through <span className="highlight">Technology</span>, <span className="highlight">Procurement</span>, and <span className="highlight">Training</span>
          </h2>
          <p className="hero-description">
            Transforming businesses with end-to-end digital, strategic, and professional development solutions.
          </p>
          <button className="hero-button" onClick={() => scrollToSection('solutions')}>
            Explore Our Solutions
            <ArrowRight size={20} className="button-icon" />
          </button>
        </div>
        <div className="hero-image-container">
          <img 
            src="https://customer-assets.emergentagent.com/job_d5a906b6-e682-4b21-a13b-4884f20df966/artifacts/yvvfi0lt_bajaj-finance.avif" 
            alt="Bajaj Finance" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
