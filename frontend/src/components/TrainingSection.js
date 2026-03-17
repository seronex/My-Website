import React from 'react';
import { Briefcase, School, Code, UserCheck, ArrowRight } from 'lucide-react';

const TrainingSection = () => {
  const services = [
    {
      icon: <Briefcase size={32} />,
      title: 'Corporate Training Programs',
      description: 'Customized training solutions for upskilling your workforce in emerging technologies and best practices.'
    },
    {
      icon: <School size={32} />,
      title: 'Academic Partnerships',
      description: 'Collaborative programs with universities and colleges to bridge the gap between education and industry.'
    },
    {
      icon: <Code size={32} />,
      title: 'Intensive Bootcamps',
      description: 'Fast-paced, immersive learning experiences designed to transform beginners into job-ready professionals.'
    },
    {
      icon: <UserCheck size={32} />,
      title: 'One-on-One Mentorship',
      description: 'Personalized guidance from industry experts to accelerate career growth and skill development.'
    }
  ];

  return (
    <section id="training" className="detail-section">
      <div className="container">
        <div className="detail-header">
          <h2 className="detail-title">Professional Training</h2>
          <p className="detail-description">
            Building tomorrow's workforce with industry-relevant training in technology, leadership, and innovation.
          </p>
          <button className="detail-button">
            Explore Training
            <ArrowRight size={20} className="button-icon" />
          </button>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon gradient-orange">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
