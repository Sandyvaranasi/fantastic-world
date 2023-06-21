import React from 'react';
import './contact.css';

function Contact() {
  return (
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Feel free to get in touch with us using the contact information below.</p>
        <div className="contact-info">
          <div className="contact-card">
            <i className="fas fa-envelope fa-3x"></i>
            <h4>Email</h4>
            <a href="mailto:youremail@example.com">youremail@example.com</a>
          </div>
          <div className="contact-card">
            <i className="fas fa-phone fa-3x"></i>
            <h4>Phone</h4>
            <a href="tel:+123456789">+1 234 567 89</a>
          </div>
          <div className="contact-card">
            <i className="fas fa-map-marker-alt fa-3x"></i>
            <h4>Address</h4>
            <p>123 Street, City, Country</p>
          </div>
        </div>
      </div>
  );
}

export default Contact;
