import './Services.css';
import woodImage from '../images/wood.jpg';

function Services() {
  const services = [
    {
      title: 'Custom Furniture Painting',
      description: 'Professional painting services for all types of wood furniture. We use premium paints and finishes to bring new life to your pieces.'
    },
    {
      title: 'Restoration & Refinishing',
      description: 'Expert restoration of antique and vintage furniture. We carefully restore pieces to their original beauty while preserving their character.'
    },
    {
      title: 'Full Room Projects',
      description: 'Transform entire rooms with coordinated furniture painting. We work with you to create cohesive, beautiful spaces.'
    }
  ];

  return (
    <section id="services" className="services" style={{ '--wood-image': `url(${woodImage})` } as React.CSSProperties}>
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Quality craftsmanship for every piece</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;