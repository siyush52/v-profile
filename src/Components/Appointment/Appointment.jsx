import React, { useState } from 'react';
import './Appointment.css';

const timeSlots = [
  "08:00 - 10:00",
  "10:00 - 12:00",
  "12:00 - 14:00",
  "14:00 - 16:00",
  "16:00 - 18:00",
  "18:00 - 20:00",
//   "20:00 - 22:00",
];

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="appointment-container">
      <h1 className='app'>Appointment</h1>
      <div className="calendar-container">
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="calendar"
        />
      </div>
      <div className="slots-container">
        {timeSlots.map((slot, index) => (
          <div
            key={index}
            className={`time-slot ${selectedTime === slot ? 'selected' : ''}`}
            onClick={() => handleTimeClick(slot)}
          >
            {slot}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointment;
