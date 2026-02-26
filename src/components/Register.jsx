import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate(); //
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    pincode: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    // After successful registration, redirect to dashboard
    navigate('/dashboard'); //
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex flex-column align-items-center pt-5">
      <div className="text-start mb-4" style={{ width: '100%', maxWidth: '800px' }}>
        <h1 className="fw-bold display-5 text-dark">Join the Community</h1>
        <p className="text-secondary fs-5">Sign up to receive and share local missing alerts</p>
      </div>

      <div className="card border-0 shadow-sm p-5 w-100" style={{ maxWidth: '800px', borderRadius: '12px' }}>
        <form onSubmit={handleSubmit}>
          <div className="row mb-4 align-items-center">
            <label className="col-sm-4 text-sm-end text-secondary fw-semibold">Full Name</label>
            <div className="col-sm-7">
              <input type="text" name="fullName" className="form-control form-control-lg bg-light border-0 shadow-sm" placeholder="Enter full name" onChange={handleChange} required/>
            </div>
          </div>

          <div className="row mb-4 align-items-center">
            <label className="col-sm-4 text-sm-end text-secondary fw-semibold">Phone Number</label>
            <div className="col-sm-7">
              <input type="tel" name="phoneNumber" className="form-control form-control-lg bg-light border-0" placeholder="Phone Number" onChange={handleChange} required/>
            </div>
          </div>

          <div className="row mb-2 align-items-center">
            <label className="col-sm-4 text-sm-end text-secondary fw-semibold">Pincode</label>
            <div className="col-sm-7">
              <div className="input-group">
                <input type="text" name="pincode" className="form-control form-control-lg bg-light border-0" placeholder="Pincode" onChange={handleChange} required/>
                <span className="input-group-text bg-light border-0 text-primary">
                  <i className="fas fa-info-circle"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-sm-7 offset-sm-4">
              <small className="text-muted" style={{ fontSize: '0.8rem' }}>Your pincode helps us connect with local community alerts.</small>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-sm-7 offset-sm-4">
              <button type="submit" className="btn btn-success btn-lg w-50 fw-bold shadow-sm mb-3" style={{ backgroundColor: '#28a745', border: 'none' }}>Register</button>
              <p className="text-secondary small">
                Already have account? <Link to="/login" className="text-primary text-decoration-none fw-bold">Login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;