import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <img 
            src="https://customer-assets.emergentagent.com/job_d5a906b6-e682-4b21-a13b-4884f20df966/artifacts/mhp9cp3n_Senorex_logo_Final.png" 
            alt="Seronex Innovations" 
            className="logo-image"
          />
          <span className="logo-text">Seronex<span className="logo-highlight"> Innovations</span></span>
        </div>

        <div className="navbar-menu">
          <button className="nav-link active" onClick={() => scrollToSection('home')}>Home</button>
          <button className="nav-link" onClick={() => scrollToSection('solutions')}>Solutions</button>
          <button className="nav-link" onClick={() => scrollToSection('software')}>Software</button>
          <button className="nav-link" onClick={() => scrollToSection('procurement')}>Procurement</button>
          <button className="nav-link" onClick={() => scrollToSection('training')}>Training</button>
          <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
          <button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
        </div>

        <button className="theme-toggle" onClick={toggleTheme}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
