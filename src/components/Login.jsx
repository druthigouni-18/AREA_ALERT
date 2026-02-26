import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); //
  const [credentials, setCredentials] = useState({
    phoneNumber: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", credentials);
    // After successful login logic, redirect to dashboard
    navigate('/dashboard'); //
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex flex-column align-items-center pt-5">
      <div className="text-start mb-4" style={{ width: '100%', maxWidth: '800px' }}>
        <h1 className="fw-bold display-5 text-dark">Welcome Back</h1>
        <p className="text-secondary fs-5">Login to receive local missing alerts</p>
      </div>

      <div className="card border-0 shadow-sm p-5 w-100" style={{ maxWidth: '800px', borderRadius: '12px' }}>
        <form onSubmit={handleSubmit}>
          <div className="row mb-4 align-items-center">
            <label className="col-sm-4 text-sm-end text-secondary fw-semibold">Phone Number</label>
            <div className="col-sm-7">
              <input  type="tel"  name="phoneNumber" className="form-control form-control-lg bg-light border-0"  placeholder="Phone Number" onChange={handleChange} required/>
            </div>
          </div>

          <div className="row mb-4 align-items-center">
            <label className="col-sm-4 text-sm-end text-secondary fw-semibold">Password</label>
            <div className="col-sm-7">
              <input type="password" name="password" className="form-control form-control-lg bg-light border-0"  placeholder="Password" onChange={handleChange} required/>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-sm-7 offset-sm-4">
              <button type="submit" className="btn btn-success btn-lg w-50 fw-bold shadow-sm mb-3" style={{ backgroundColor: '#28a745', border: 'none' }}>Login</button>
              <p className="text-secondary small">
                Don't have an account? <Link to="/register" className="text-primary text-decoration-none fw-bold">Register</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default Login;