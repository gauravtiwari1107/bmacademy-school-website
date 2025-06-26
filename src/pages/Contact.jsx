// ContactUs.jsx
import React from 'react';
import {motion} from 'framer-motion';
import '../styles/Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';

import emailjs from "@emailjs/browser";
import {useRef} from 'react';

const ContactUs = () => {
  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_fu106fp'
    )
    .then((result) => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      alert("Failed to send message.");
      console.error(error);
    });
  };

  return (

    <AnimatedSection>
    <div className="contact-container">
      <header className="contact-header">
        <h1>📬 Contact Us</h1>
        <p>We'd love to hear from you! Reach out using the details below or send us a message directly.</p>
      </header>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-box">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Address</h4>
              <p>Near Railway Station, Bider, Duddhi, Sonbhadra, U.P.-231208</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhone className="info-icon" />
            <div>
              <h4>Phone</h4>
              <p>+91 790587750</p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>bmacademydudhi@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Write your message..." rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>

    </AnimatedSection>
  );
};

export default ContactUs;
