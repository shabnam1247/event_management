import React, { useState } from "react";
import "../../user/components/Register.css";

const EventRegistration = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    event: "",
    comments: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    setShowSuccess(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: "",
      year: "",
      event: "",
      comments: "",
      terms: false,
    });
    setTimeout(() => setShowSuccess(false), 5000);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>🎉 Event Registration</h1>
        <p>Fill in your details to register for the event</p>
      </div>

      <div className="form-container">
        {showSuccess && (
          <div className="success-message">
            ✅ Registration successful! We'll send you a confirmation email shortly.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">
                First Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">
                Last Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              Phone Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="department">
                Department <span className="required">*</span>
              </label>
              <select
                id="department"
                name="department"
                required
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">Select Department</option>
                <option value="CS">Computer Science</option>
                <option value="BCA">Bachelor Of Computer Application</option>
                <option value="BBA">Bachelor Of Business Administration</option>
                <option value="B.COM">Bachelor Of Commerce</option>
                <option value="GEO">Geography</option>
                <option value="PSY">Psychology</option>
                <option value="MB">Microbiology</option>
                <option value="IS">Islamic Studies</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="year">
                Year <span className="required">*</span>
              </label>
              <select
                id="year"
                name="year"
                required
                value={formData.year}
                onChange={handleChange}
              >
                <option value="">Select Year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="event">
              Select Event <span className="required">*</span>
            </label>
            <select
              id="event"
              name="event"
              required
              value={formData.event}
              onChange={handleChange}
            >
              <option value="">Choose an event</option>
              <option value="tech-symposium">Tech Symposium 2025</option>
              <option value="ai-workshop">AI & Cloud Workshop</option>
              <option value="cultural-fest">Annual Cultural Fest</option>
              <option value="music-night">Music Night</option>
              <option value="hackathon">Coding Club Hackathon</option>
              <option value="photo-exhibition">Photography Exhibition</option>
              <option value="cleanliness-drive">Cleanliness Drive</option>
              <option value="blood-donation">Blood Donation Camp</option>
              <option value="basketball">Inter-College Basketball</option>
              <option value="sports-day">Annual Sports Day</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="comments">Additional Comments (Optional)</label>
            <textarea
              id="comments"
              name="comments"
              placeholder="Any special requirements or questions..."
              value={formData.comments}
              onChange={handleChange}
            />
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              checked={formData.terms}
              onChange={handleChange}
            />
            <label htmlFor="terms">
              I agree to the terms and conditions{" "}
              <span className="required">*</span>
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Register Now
          </button>
        </form>

        <a href="#" className="back-link" onClick={() => window.history.back()}>
          ← Back to Events
        </a>
      </div>
    </div>
  );
};

export default EventRegistration;
