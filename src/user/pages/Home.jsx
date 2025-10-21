import React, { useState } from 'react';
import Header from '../components/Header';

export default function EventLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
    }

    /* Header & Navigation */
    header {
      background: #ffffff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .header-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
    }

    .logo {
      font-size: 26px;
      font-weight: bold;
      text-decoration: none;
      color: #2c3e50;
    }

    nav {
      display: flex;
      gap: 35px;
      align-items: center;
    }

    nav a {
      color: #555;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
    }

    nav a:hover {
      color: #3498db;
    }

    .cta-button {
      background: #3498db;
      color: white;
      padding: 10px 25px;
      border-radius: 5px;
      text-decoration: none;
      font-weight: 600;
      transition: background 0.3s;
    }

    .cta-button:hover {
      background: #2980b9;
    }

    .menu-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #2c3e50;
    }

    /* Hero Section */
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 100px 20px;
      text-align: center;
    }

    .hero-content {
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero h1 {
      font-size: 50px;
      margin-bottom: 20px;
      font-weight: bold;
    }

    .hero p {
      font-size: 18px;
      margin-bottom: 30px;
      opacity: 0.95;
    }

    .hero-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn-primary {
      background: white;
      color: #667eea;
      padding: 12px 40px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .btn-secondary {
      background: transparent;
      color: white;
      padding: 12px 40px;
      border: 2px solid white;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }

    .btn-secondary:hover {
      background: white;
      color: #667eea;
    }

    /* Features Section */
    .features {
      padding: 80px 20px;
      background: #f8f9fa;
    }

    .section-title {
      text-align: center;
      font-size: 36px;
      margin-bottom: 60px;
      color: #2c3e50;
      font-weight: bold;
    }

    .features-grid {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
    }

    .feature-card {
      background: white;
      padding: 35px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, box-shadow 0.3s;
      text-align: center;
    }

    .feature-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    .feature-icon {
      font-size: 45px;
      margin-bottom: 15px;
    }

    .feature-card h3 {
      font-size: 20px;
      margin-bottom: 12px;
      color: #2c3e50;
    }

    .feature-card p {
      color: #666;
      font-size: 14px;
      line-height: 1.6;
    }

    /* Events Showcase Section */
    .events-showcase {
      padding: 80px 20px;
      background: white;
    }

    .events-grid {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .event-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .event-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    .event-image {
      height: 200px;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 60px;
      color: white;
    }

    .event-content {
      padding: 25px;
    }

    .event-content h4 {
      font-size: 18px;
      margin-bottom: 10px;
      color: #2c3e50;
      font-weight: bold;
    }

    .event-date {
      color: #3498db;
      font-size: 13px;
      margin-bottom: 10px;
      font-weight: 600;
    }

    .event-desc {
      color: #666;
      font-size: 13px;
      margin-bottom: 15px;
      line-height: 1.5;
    }

    .event-btn {
      background: #3498db;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 600;
      font-size: 13px;
      transition: background 0.3s;
    }

    .event-btn:hover {
      background: #2980b9;
    }

    /* Event Details Grid */
    .event-details {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid #eee;
      font-size: 12px;
      color: #666;
    }

    .event-detail-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .detail-icon {
      color: #3498db;
      font-weight: bold;
    }

    /* Stats Section */
    .stats {
      background: #2c3e50;
      color: white;
      padding: 60px 20px;
    }

    .stats-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 40px;
      text-align: center;
    }

    .stat-number {
      font-size: 42px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #3498db;
    }

    .stat-label {
      font-size: 16px;
    }

    /* CTA Section */
    .cta-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 70px 20px;
      text-align: center;
      color: white;
    }

    .cta-section h2 {
      font-size: 36px;
      margin-bottom: 15px;
      font-weight: bold;
    }

    .cta-section p {
      font-size: 16px;
      margin-bottom: 30px;
      opacity: 0.95;
    }

    /* Footer */
    footer {
      background: #2c3e50;
      color: white;
      padding: 50px 20px 20px;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 30px;
      margin-bottom: 30px;
    }

    .footer-section h4 {
      margin-bottom: 15px;
      color: #3498db;
      font-weight: bold;
    }

    .footer-section a {
      color: #bbb;
      text-decoration: none;
      display: block;
      margin-bottom: 8px;
      font-size: 14px;
      transition: color 0.3s;
    }

    .footer-section a:hover {
      color: #3498db;
    }

    .footer-bottom {
      border-top: 1px solid #444;
      padding-top: 20px;
      text-align: center;
      color: #999;
      font-size: 14px;
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Mobile Navigation */
    .mobile-menu {
      display: none;
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      background: white;
      flex-direction: column;
      padding: 20px;
      gap: 10px;
      z-index: 50;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .mobile-menu a {
      color: #555;
      text-decoration: none;
      font-weight: 500;
      padding: 10px 0;
    }

    .mobile-menu.active {
      display: flex;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .menu-toggle {
        display: block;
      }

      nav {
        display: none;
      }

      .header-container {
        height: auto;
        padding: 15px 20px;
      }

      .hero h1 {
        font-size: 32px;
      }

      .hero p {
        font-size: 16px;
      }

      .hero {
        padding: 60px 20px;
      }

      .hero-buttons {
        flex-direction: column;
        align-items: center;
      }

      .btn-primary, .btn-secondary {
        width: 100%;
      }

      .section-title {
        font-size: 28px;
        margin-bottom: 40px;
      }

      .features-grid, .events-grid {
        grid-template-columns: 1fr;
      }

      .footer-content {
        grid-template-columns: 1fr;
      }

      .stats-container {
        grid-template-columns: 1fr 1fr;
      }

      .event-details {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .hero h1 {
        font-size: 24px;
      }

      .section-title {
        font-size: 22px;
      }

      .stats-container {
        grid-template-columns: 1fr;
      }

      .cta-section h2 {
        font-size: 24px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

<Header/>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Manage Your Events Effortlessly</h1>
          <p>Create, organize, and execute perfect events with our all-in-one management platform</p>
          <div className="hero-buttons">
            <button className="btn-primary">Start Free Trial</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2 className="section-title">Why Choose EventHub?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Easy Scheduling</h3>
            <p>Create and manage event schedules with an intuitive calendar interface. Automate reminders and notifications.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Guest Management</h3>
            <p>Track attendees, send invitations, and manage RSVPs all in one place. No spreadsheets needed.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Budget Tracking</h3>
            <p>Keep expenses under control with real-time budget tracking and detailed financial reports.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Analytics</h3>
            <p>Get detailed insights about your events with comprehensive analytics and performance metrics.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Secure & Reliable</h3>
            <p>Your data is protected with enterprise-grade security. 99.9% uptime guarantee for all services.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Scalable</h3>
            <p>From small meetings to large conferences, our platform scales with your needs seamlessly.</p>
          </div>
        </div>
      </section>

      {/* Events Showcase */}
      <section className="events-showcase" id="events">
        <h2 className="section-title">Featured Events</h2>
        <div className="events-grid">
          <div className="event-card">
            <div className="event-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1540575467063-178f50002cbc?w=500&h=300&fit=crop")' }}></div>
            <div className="event-content">
              <h4>Tech Summit 2025</h4>
              <div className="event-date">March 15-17, 2025</div>
              <div className="event-desc">Join industry leaders to explore cutting-edge technologies, network with professionals, and discover innovation trends.</div>
              <div className="event-details">
                <div className="event-detail-item">
                  <span className="detail-icon">📍</span>
                  <span>San Francisco</span>
                </div>
                <div className="event-detail-item">
                  <span className="detail-icon">👥</span>
                  <span>500+ Attendees</span>
                </div>
                <div className="event-detail-item">
                  <span className="detail-icon">🎯</span>
                  <span>3 Days</span>
                </div>
                <div className="event-detail-item">
                  <span className="detail-icon">💵</span>
                  <span>$299</span>
                </div>
              </div>
              <button className="event-btn">Register Now</button>
            </div>
          </div>

          <div className="event-card">
            <div className="event-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop")' }}></div>
            <div className="event-content">
              <h4>Design Workshop</h4>
              <div className="event-date">April 5, 2025</div>
              <div className="event-desc">Master modern design principles with expert designers. Learn UI/UX, branding, and design thinking from professionals.</div>
              <div className="event-details">
                <div className="event-detail-item">
                  <span className="detail-icon">📍</span>
                  <span>New York</span>
                </div>
                <div className="event-detail-item">
                  <span className="detail-icon">👥</span>
                  <span>150 Attendees</span>
                </div>
                <div className="event-detail-item">
                  <span className="detail-icon">🎯</span>
                  <span>1 Day</span>
                </div>
                <div className="event-detail-item">
                  <span className="detail-icon">💵</span>
                  <span>$149</span>
                </div>
              </div>
              <button className="event-btn">Register Now</button>
            </div>
          </div>

          <div className="event-card">
            <div className="event-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=300&fit=crop")' }}></div>
            <div className="event-content">
              <h4>Awards Gala 2025</h4>
              <div className="event-date">May 20, 2025</div>
              <div className="event-desc">Celebrate excellence with industry professionals. Network, enjoy dinner, and honor outstanding achievements in tech.</div>
              <div className="event-details">
                <div className="event-detail-item">
                  <span className="detail-icon">📍</span>
                  <span>Los Angeles</span>
                </div>
                <div className="event-detail-item">
                  <span className="detail-icon">👥</span>
                  <span>300 Attendees</span>
                </div>
                <div className="event-detail-item">
                  <span className="detail-icon">🎯</span>
                  <span>1 Evening</span>
                </div>
                <div className="event-detail-item">
                  <span className="detail-icon">💵</span>
                  <span>$399</span>
                </div>
              </div>
              <button className="event-btn">Register Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          <div>
            <div className="stat-number">5000+</div>
            <div className="stat-label">Events Managed</div>
          </div>
          <div>
            <div className="stat-number">50K+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div>
            <div className="stat-number">2M+</div>
            <div className="stat-label">Total Attendees</div>
          </div>
          <div>
            <div className="stat-number">98%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="signup">
        <h2>Ready to Transform Your Event Management?</h2>
        <p>Join thousands of event organizers already using EventHub</p>
        <button className="btn-primary">Get Started Free</button>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#careers">Careers</a>
            <a href="#blog">Blog</a>
            <a href="#press">Press</a>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#security">Security</a>
            <a href="#updates">Updates</a>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <a href="#help">Help Center</a>
            <a href="#contact">Contact Us</a>
            <a href="#faq">FAQ</a>
            <a href="#community">Community</a>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
            <a href="#compliance">Compliance</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 EventHub. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}