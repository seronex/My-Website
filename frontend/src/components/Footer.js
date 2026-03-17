import React from 'react';
import { Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-contact">
            <Phone size={18} className="footer-phone-icon" />
            <span className="footer-contact-text">
              Contact: <a href="tel:+917670862829" className="footer-contact-link">+91 7670862829</a> - Sudheer Pagidipally
            </span>
          </div>
          <p className="footer-text">
            © {currentYear} Seronex Innovations Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
