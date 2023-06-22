import React from 'react';
import './contact.css';

function Contact() {
  return (
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Feel free to get in touch with us using the contact information below.</p>
        <div className="contact-info">
          <div className="contact-card">
            <img  className='emailIcon' src="https://www.freepnglogos.com/uploads/email-png/email-logo-png-master-internet-marketing-with-loretta-1.png" alt="email icon" />
              <a href="mailto:youremail@example.com">youremail@example.com</a>
          </div>
          <div className="contact-card">
            <img className='emailIcon' src="https://www.freepnglogos.com/uploads/logo-telepon-png/cara-mendapatkan-nomor-telpon-gratis-untuk-verifikasi-21.png" alt="phone icon" />
            <a href="tel:+123456789">+1 234 567 89</a>
          </div>
          <div className="contact-card">
            <img className='emailIcon' src="https://www.freepnglogos.com/uploads/lokasi-logo-png/lokasi-logo-google-ubicaci-imagen-gratis-28.png" alt="address icon" />
            <p>123 Street, City, Country</p>
          </div>
        </div>
      </div>
  );
}

export default Contact;
