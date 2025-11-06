import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Mobilia Works</h3>
            <p>Professional furniture painting and restoration services. Transforming pieces with expert craftsmanship and attention to detail.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button onClick={() => scrollToSection('services')}>Services</button></li>
              <li><button onClick={() => scrollToSection('gallery')}>Gallery</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Custom Furniture Painting</li>
              <li>Restoration & Refinishing</li>
              <li>Specialty Finishes</li>
              <li>Full Room Projects</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📞 (03) 447 984</li>
              <li>📧 sarahbashir2005@gmail.com</li>
              <li>📍 Beirut</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} WoodCraft Painter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;