import React, { useState } from 'react';

const CollegeLoginPage = () => {
  const [formData, setFormData] = useState({
    registerNumber: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.registerNumber.trim()) {
      newErrors.registerNumber = 'Register number is required';
    } else if (!/^[A-Za-z0-9]{6,12}$/.test(formData.registerNumber)) {
      newErrors.registerNumber = 'Register number should be 6-12 characters (letters and numbers only)';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Handle successful login here
      console.log('Login attempt:', formData);
      alert('Login successful! (This is a demo)');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 d-flex align-items-center justify-content-center p-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5 col-xl-4">
            <div className="card shadow-lg border-0" style={{ borderRadius: '1rem', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
              <div className="card-body p-5">
                {/* Header */}
                <div className="text-center mb-4">
                  <div className="mb-3">
                    <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle" style={{ width: '80px', height: '80px' }}>
                      <i className="fas fa-graduation-cap text-white" style={{ fontSize: '2rem' }}></i>
                    </div>
                  </div>
                  <h2 className="fw-bold text-dark mb-2">Welcome Back</h2>
                  
                </div>

                {/* Login Form */}
                <div onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="registerNumber" className="form-label fw-semibold text-dark">
                      Register Number
                    </label>
                    <div className="input-group">
                      <span className="input-group-text border-end-0 bg-light">
                        <i className="fas fa-id-card text-muted"></i>
                      </span>
                      <input
                        type="text"
                        className={`form-control border-start-0 ${errors.registerNumber ? 'is-invalid' : ''}`}
                        id="registerNumber"
                        name="registerNumber"
                        value={formData.registerNumber}
                        onChange={handleChange}
                        placeholder="Enter your register number"
                        style={{ paddingLeft: '0.5rem' }}
                      />
                    </div>
                    {errors.registerNumber && (
                      <div className="invalid-feedback d-block">
                        {errors.registerNumber}
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password" className="form-label fw-semibold text-dark">
                      Password
                    </label>
                    <div className="input-group">
                      <span className="input-group-text border-end-0 bg-light">
                        <i className="fas fa-lock text-muted"></i>
                      </span>
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`form-control border-start-0 border-end-0 ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        style={{ paddingLeft: '0.5rem' }}
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-start-0"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                      </button>
                    </div>
                    {errors.password && (
                      <div className="invalid-feedback d-block">
                        {errors.password}
                      </div>
                    )}
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label text-muted" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-decoration-none text-primary small">
                      Forgot Password?
                    </a>
                  </div>

                  {/* Login Button */}
                  <button
                    onClick={handleSubmit}
                    className="btn btn-primary w-100 py-2 fw-semibold mb-3"
                    style={{ borderRadius: '0.5rem' }}
                  >
                    Sign In
                  </button>

                  {/* Additional Options */}
                  
                </div>

                {/* Footer */}
                <div className="text-center mt-4 pt-3 border-top">
                  <small className="text-muted">
                    © 2025 College Event Management System
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  
     
    </div>
  );
};

export default CollegeLoginPage;