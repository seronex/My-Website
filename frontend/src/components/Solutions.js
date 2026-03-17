import React from 'react';
import { Code2, ShoppingCart, GraduationCap, ArrowRight } from 'lucide-react';

const Solutions = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const solutions = [
    {
      icon: <Code2 size={32} />,
      title: 'Software Development',
      description: 'End-to-end custom software solutions powered by cutting-edge technologies and agile methodologies.',
      features: [
        'Enterprise Application Development',
        'AI/ML and Data Science Integration',
        'Cloud-Native Architecture',
        'Full-Stack Web & Mobile Development'
      ],
      link: 'software',
      gradient: 'gradient-blue'
    },
    {
      icon: <ShoppingCart size={32} />,
      title: 'Procurement Services',
      description: 'Strategic procurement solutions that optimize costs, ensure compliance, and streamline vendor relationships.',
      features: [
        'Corporate Procurement Management',
        'Technology Infrastructure Sourcing',
        'Software Licensing & Asset Management',
        'Vendor Selection & Negotiation'
      ],
      link: 'procurement',
      gradient: 'gradient-purple'
    },
    {
      icon: <GraduationCap size={32} />,
      title: 'Professional Training',
      description: 'Comprehensive training programs that upskill teams and prepare professionals for tomorrow challenges.',
      features: [
        'Corporate Training Programs',
        'Academic Institution Partnerships',
        'Intensive Coding Bootcamps',
        'One-on-One Mentorship'
      ],
      link: 'training',
      gradient: 'gradient-orange'
    }
  ];

  return (
    <section id="solutions" className="solutions-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Solutions</h2>
          <p className="section-description">
            We offer integrated technology, procurement, and training solutions to empower organizations.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className={`solution-icon ${solution.gradient}`}>
                {solution.icon}
              </div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              <ul className="solution-features">
                {solution.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
                <li className="more-features">+2 more capabilities</li>
              </ul>
              <button 
                className="solution-link" 
                onClick={() => scrollToSection(solution.link)}
              >
                Explore Details
                <ArrowRight size={18} className="link-icon" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
