import React, { useState } from 'react';
import { User, Lock, Calendar, Users, Trophy, GraduationCap } from 'lucide-react';
import '../components/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    registerNumber: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.registerNumber) {
      newErrors.registerNumber = 'Register number is required';
    } else if (!/^[A-Z0-9]{6,12}$/i.test(formData.registerNumber)) {
      newErrors.registerNumber = 'Invalid register number format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert(`Welcome ${formData.registerNumber}! Login successful.`);
    }, 2000);
  };

  return (
    <div className="login-page">
      {/* Background */}
      <div className="background">
        <div className="icon graduation"><GraduationCap size={60} /></div>
        <div className="icon calendar"><Calendar size={50} /></div>
        <div className="icon trophy"><Trophy size={45} /></div>
        <div className="icon users"><Users size={55} /></div>

        <div className="circle"></div>
        <div className="square"></div>
        <div className="dot"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Main */}
      <div className="container">
        <div className="header fade-in">
          <div className="logo">
            <Calendar className="logo-icon" />
          </div>
          <h1>Event Portal</h1>
          <p className="subtitle">College Event Management System</p>
          <p className="desc">Sign in to manage and participate in events</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="form slide-up">
          {/* Register Number */}
          <div className="form-group">
            <label htmlFor="registerNumber">Register Number</label>
            <div className="input-wrapper">
              <User className="input-icon" />
              <input
                type="text"
                id="registerNumber"
                name="registerNumber"
                value={formData.registerNumber}
                onChange={handleInputChange}
                placeholder="Enter your register number"
                className={errors.registerNumber ? 'error' : ''}
              />
            </div>
            {errors.registerNumber && (
              <p className="error-text shake">{errors.registerNumber}</p>
            )}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon" />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className={errors.password ? 'error' : ''}
              />
            </div>
            {errors.password && (
              <p className="error-text shake">{errors.password}</p>
            )}
          </div>

          {/* Button */}
          <button type="submit" disabled={isLoading} className="btn">
            {isLoading ? (
              <div className="loading">
                <div className="spinner"></div>
                Signing In...
              </div>
            ) : (
              'Sign In to Portal'
            )}
          </button>
        </form>

        {/* Extra */}
        <div className="extras">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert('Password reset functionality would be implemented here');
            }}
          >
            Forgot your password?
          </a>
          <p>
            New student? Contact your{' '}
            <button
              type="button"
              onClick={() => alert('Contact admin for new registration')}
              className="link-btn"
            >
              system administrator
            </button>{' '}
            for account creation
          </p>
        </div>

        {/* Footer */}
        <div className="footer">
          <p>© 2025 College Event Management System</p>
          <p>Secure • Reliable • User-Friendly</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
