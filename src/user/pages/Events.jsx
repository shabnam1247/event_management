import React from "react";
import "../components/Eventpage.css";

const EventPage = () => {
  return (
    <div className="event-container">
      <h1 className="event-title">Event Details</h1>

      <div className="event-card">
        <img
          src="event.png"
          alt="Event"
          className="event-image"
        />

        <div className="event-info">
          <h2>April 25, 2024</h2>
          <p className="time">10:00 AM – 4:00 PM</p>
          <p className="location">123 Main Street, Anytown, USA</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="register-btn">REGISTER</button>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
