import React from 'react';
import '../components/Contact.css';

export default function ContactPage() {
  return (
    <div className="contact-container">
     

       <section className="contact-section">
        <div className="contact-box">
          <div className="contact-info">
            <h1>Get in touch</h1>
            <p>Have any questions or need further information about our events? We'd love to hear from you!</p>

            <div className="info-item">
              <i className="fa fa-map-marker"></i>
              <span>123 College Ave, City, State 12345</span>
            </div>
            <div className="info-item">
              <i className="fa fa-phone"></i>
              <span>+1 (234) 567-890</span>
            </div>
            <div className="info-item">
              <i className="fa fa-envelope"></i>
              <span>info@example.com</span>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Email address" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" rows="4" required></textarea>
            <button type="submit">Send message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
