import React from 'react';
import './Business.css';

const Business = () => {
  return (
    <div className="business-container">
      <div className="business-card" >
        <div className="business-front " id='cardd'>
          <h1>Business Hours</h1>
          <ul>
            <li>Monday: 9:00 AM - 5:00 PM</li>
            <li>Tuesday: 9:00 AM - 5:00 PM</li>
            <li>Wednesday: 9:00 AM - 5:00 PM</li>
            <li>Thursday: 9:00 AM - 5:00 PM</li>
            <li>Friday: 9:00 AM - 5:00 PM</li>
            <li>Saturday: Closed</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
       
      </div>
    </div>
  );
}

export default Business;
