import React from 'react';
import { Server, Brain, Cloud, Layers, ArrowRight } from 'lucide-react';

const SoftwareSection = () => {
  const services = [
    {
      icon: <Server size={32} />,
      title: 'Enterprise Application Development',
      description: 'Scalable, secure enterprise solutions tailored to complex business workflows and regulatory requirements.'
    },
    {
      icon: <Brain size={32} />,
      title: 'AI/ML and Data Science',
      description: 'Intelligent systems leveraging machine learning, deep learning, and advanced analytics for data-driven insights.'
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud-Native Solutions',
      description: 'Modern architectures built for AWS, Azure, and GCP with containerization, serverless, and microservices.'
    },
    {
      icon: <Layers size={32} />,
      title: 'Full-Stack Development',
      description: 'End-to-end web and mobile applications with React, Angular, Vue, React Native, and Flutter expertise.'
    }
  ];

  return (
    <section id="software" className="detail-section">
      <div className="container">
        <div className="detail-header">
          <h2 className="detail-title">Software Development</h2>
          <p className="detail-description">
            We deliver scalable enterprise software, AI-powered systems, and cloud-native architectures that drive innovation.
          </p>
          <button className="detail-button">
            Learn More
            <ArrowRight size={20} className="button-icon" />
          </button>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon gradient-blue">
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

export default SoftwareSection;
