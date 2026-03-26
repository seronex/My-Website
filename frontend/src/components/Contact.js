import React from 'react';
import { Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-description">
            We're here to help you achieve your digital and operational goals. Reach out today to discuss your project.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <Mail size={32} />
            </div>
            <h3 className="contact-title">Business Inquiries</h3>
            <a href="mailto:business@seronex.in" className="contact-link">
              business@seronex.in
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <Clock size={32} />
            </div>
            <h3 className="contact-title">Business Hours</h3>
            <p className="contact-text">Mon-Fri: 9AM - 6PM IST</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
