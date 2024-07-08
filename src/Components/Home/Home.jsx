import React from "react";
import { FaEnvelope, FaPhone, FaBirthdayCake, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons from react-icons
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <>
      <div className="container">
        <img
          id="profile"
          src="https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510027_640.png"
          alt="profile"
        />

        <h1 className="fade-in">Hy I'm Batman !</h1>

        <div className="info">
          <div className="info-field">
            <h3>Email</h3>
            <p>Superman@gmail.com</p>
          </div>
          <div className="info-field">
            <h3>Number</h3>
            <p>+91-8770315263</p>
          </div>
          <div className="info-field">
            <h3>Address</h3>
            <p>123 Apple Street, Cupertino, CA</p>
          </div>
          <div className="info-field">
            <h4>Description</h4>
            <p>Innovative tech visionary and co-founder of Apple Inc.</p>
          </div>
        </div>

        <div className="contact">
          <h1 className="slide-in">Contact</h1>
          <div className="contact-info">
            <div className="item">
              <FaEnvelope className="icon" />
              <div className="block">Email address</div>
              <div>Superman@gmail.com</div>
            </div>
            <div className="item">
              <FaPhone className="icon" />
              <div className="block">Mobile Number</div>
              <div>+91-8770315263</div>
            </div>
            <div className="item">
              <FaBirthdayCake className="icon" />
              <div className="block">Birth-Date</div>
              <div>2nd October 1869</div>
            </div>
            <div className="item">
              <FaMapMarkerAlt className="icon" />
              <div className="block">Location</div>
              <div>New York</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
