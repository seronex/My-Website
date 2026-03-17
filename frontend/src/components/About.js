import React from 'react';
import { Lightbulb, Handshake, Award, Shield, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Lightbulb size={32} />,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies and methodologies to solve complex business challenges.'
    },
    {
      icon: <Handshake size={32} />,
      title: 'Client Partnership',
      description: 'Building long-term relationships through transparency, collaboration, and shared success.'
    },
    {
      icon: <Award size={32} />,
      title: 'Quality Excellence',
      description: 'Delivering solutions that exceed industry standards with rigorous testing and attention to detail.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Integrity',
      description: 'Operating with honesty, ethics, and accountability in every interaction and deliverable.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">About Seronex Innovations</h2>
          <p className="section-description">
            Seronex Innovations empowers organizations through innovation, integrity, and excellence across every service we deliver.
          </p>
          <button className="detail-button">
            Read More About Us
            <ArrowRight size={20} className="button-icon" />
          </button>
        </div>

        <div className="values-section">
          <h3 className="values-heading">Our Core Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
