import { useState } from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = 'service_lflzuwo';
    const ownerTemplate = 'template_two1jpt'; // ✅ Sends message to YOU
    const autoReplyTemplate = 'template_0hl2ptl'; // ✅ Sends auto-reply to the user
    const publicKey = 'IXjc_exI7fo9vr7zK';

    // 1️⃣ Send email to YOU (owner)
    emailjs
      .send(serviceID, ownerTemplate, formData, publicKey)
      .then(() => {
        console.log('📩 Message sent to owner successfully');

        // 2️⃣ Send auto-reply to the sender
        return emailjs.send(serviceID, autoReplyTemplate, formData, publicKey);
      })
      .then(() => {
        console.log('✅ Auto-reply sent successfully');
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error('❌ Email sending failed:', err);
        alert('Something went wrong while sending your message. Please try again.');
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to transform your furniture? Let's discuss your project!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon"><FaPhoneAlt /></div>
              <h3>Phone</h3>
              <p>(03) 447 984</p>
            </div>

            <div className="info-card">
              <div className="info-icon"><FaEnvelope /></div>
              <h3>Email</h3>
              <p>sarahbashir2005@gmail.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <h3>Location</h3>
              <p>Beirut</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {isSubmitted && (
              <div className="success-message">
                ✓ Thank you! We've sent you a confirmation email.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="projectType">Project Type *</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Select a service...</option>
                <option value="custom-painting">Custom Furniture Painting</option>
                <option value="restoration">Restoration & Refinishing</option>
                <option value="specialty">Specialty Finishes</option>
                <option value="room-project">Full Room Project</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Project Details *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your furniture and what you'd like to achieve..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
