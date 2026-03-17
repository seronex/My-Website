import React from 'react';
import { Package, HardDrive, FileText, Users, ArrowRight } from 'lucide-react';

const ProcurementSection = () => {
  const services = [
    {
      icon: <Package size={32} />,
      title: 'Corporate Procurement',
      description: 'Complete procurement lifecycle management from requisition to delivery with vendor coordination.'
    },
    {
      icon: <HardDrive size={32} />,
      title: 'Tech Infrastructure',
      description: 'Hardware, networking equipment, and IT infrastructure sourcing for enterprises of all sizes.'
    },
    {
      icon: <FileText size={32} />,
      title: 'Software Licensing',
      description: 'Strategic software license management, renewals, and asset tracking for cost control.'
    },
    {
      icon: <Users size={32} />,
      title: 'Vendor Management',
      description: 'End-to-end vendor selection, negotiation, contracting, and ongoing relationship management.'
    }
  ];

  return (
    <section id="procurement" className="detail-section alt-section">
      <div className="container">
        <div className="detail-header">
          <h2 className="detail-title">Procurement Services</h2>
          <p className="detail-description">
            Strategic sourcing and vendor management designed to optimize costs and strengthen supply chains.
          </p>
          <button className="detail-button">
            View Details
            <ArrowRight size={20} className="button-icon" />
          </button>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon gradient-purple">
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

export default ProcurementSection;
