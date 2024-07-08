import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaUser, FaPenFancy } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-containerr">
      <h1 className='h'>Contact Me</h1>
      <div className="contact-infoo">
        <div className="contact-item">
          <FaMapMarkerAlt size={24} />
          <p>Italy</p>
        </div>
        <div className="contact-item">
          <FaEnvelope size={24} />
          <p>batman@gmail.com</p>
        </div>
      </div>
      <div className="form-container">
        <h2>Enquiry Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">
              <FaUser size={20} />
              <span>Your Name</span>
            </label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope size={20} />
              <span>Email</span>
            </label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              <FaPenFancy size={20} />
              <span>Write Anything Here</span>
            </label>
            <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
