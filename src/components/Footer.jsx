import React from 'react'
import '../styles/Footer.css'
import AnimatedSection from './AnimatedSection'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa'

const Footer = () => {
  return (

    <AnimatedSection>
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + Social */}
        <div className="footer-logo-section">
          <img src="/logo.jpg" alt="School Logo" className="footer-logo" />
          <h3>Better Millennium</h3>
          <p>Academy</p>
          <div className="social-icons">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    <FaYoutube />
  </a>
</div>

        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <p><FaMapMarkerAlt /> Address:<br />Near Railway Station, Bider, Duddhi,<br />Sonbhadra, U.P.-231208</p>
          <p><FaEnvelope /> Email: bmacademydudhi@gmail.com</p>
          <p><FaPhoneAlt /> Phone: +91 790587750, 8127029300</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/mandatory-public-disclosure">Mandatory Public Disclosure</a></li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="footer-form">
          <h4>Contact Us</h4>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Better Millennium Academy. All Rights Reserved.</p>
      </div>
    </footer>
    </AnimatedSection>
  )
}

export default Footer
