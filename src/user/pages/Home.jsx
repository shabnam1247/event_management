import React from "react";
import "../components/Home.css";
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // For Twitter (X)

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="logo">🎓 College Event System</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Events</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#" className="login-btn">Login / Register</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Manage.<br />Participate.<br />Celebrate.
          </h1>
          <p>
            A platform to manage college events, streamline registrations, and
            bring students together.
          </p>
          <a href="#" className="btn btn-primary">View Events</a>
          <a href="#" className="btn btn-secondary">Register New</a>
        </div>
        <div className="hero-img">
          <img
            src="https://via.placeholder.com/400x250/cee4ff/1a3b8e?text=Event+Banner"
            alt="Event Banner"
          />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming">
        <h2>Upcoming Events</h2>
        <div className="cards">
          <div className="card">
            <h3>Workshop on AI</h3>
            <p>25 Sep</p>
            <a href="#" className="register-btn">Register</a>
          </div>
          <div className="card">
            <h3>Cultural Fest</h3>
            <p>28 Sep</p>
            <a href="#" className="register-btn">Register</a>
          </div>
          <div className="card">
            <h3>Hackathon</h3>
            <p>1 Oct</p>
            <a href="#" className="register-btn">Register</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About the System</h2>
        <p>
          A platform to manage college events, streamline registrations, and
          bring students together.
        </p>
        <div className="features">
          <div className="feature">📝 <br /> Easy Registration</div>
          <div className="feature">🔔 <br /> Notifications</div>
          <div className="feature">🎯 <br /> For Students</div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta">
        <h2>Don’t miss the next event – Join Now!</h2>
        <a href="#" className="btn btn-secondary">Register Now</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Left Section */}
          <div className="footer-left">
            <h2>Al Jamia Arts & Science College</h2>
            <p>
              Perinthalmanna, Poopalam Valambur (P.O), <br />
              Malappuram Dt, Kerala, India, Pin-679325
            </p>
            <p><FaEnvelope /> artscollege@aljamia.net</p>
            <p><FaPhone /> +91 7994 188918</p>
          </div>

          {/* Links */}
          <div className="footer-links">
            <ul>
              <li><a href="#">University of Calicut</a></li>
              <li><a href="#">Exam Notifications</a></li>
              <li><a href="#">University Results</a></li>
              <li><a href="#">MHRD India</a></li>
              <li><a href="#">DCE Trivandrum</a></li>
            </ul>
            <ul>
              <li><a href="#">Admission</a></li>
              <li><a href="#">IQAC</a></li>
              <li><a href="#">Faculties</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>
            © 2024 Ajas. All Rights Reserved. 
            <a href="#"> Privacy Policy </a> | Powered by <a href="#">DataHex</a>
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

