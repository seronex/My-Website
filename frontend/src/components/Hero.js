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
    </section>
  );
};

export default Hero;
