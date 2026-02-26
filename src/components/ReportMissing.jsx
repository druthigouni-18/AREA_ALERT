import React, { useState } from 'react';


function ReportMissing() {
    const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    location: '',
    pincode: '400001',
    dateTime: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Missing Report Submitted:', formData);
  };
  
  return (
    <div className="bg-light ">
    <div className="container mt-5 mb-5 " style={{ maxWidth: '900px' }}>
      <h1 className="display-5 fw-bold text-dark mb-4">Report Missing</h1>

      {/* Category Icons */}
      <div className="d-flex gap-3 mb-5">
        <div className="rounded-circle border d-flex align-items-center justify-content-center text-secondary hover-blue" style={{ width: '60px', height: '60px', cursor: 'pointer' }}>
          <i className="fas fa-users fs-5"></i>
        </div>
        <div className="rounded-circle border d-flex align-items-center justify-content-center text-secondary" style={{ width: '60px', height: '60px', cursor: 'pointer' }}>
          <span className="fw-bold" style={{ fontSize: '10px' }}>Missing</span>
        </div>
        <div className="rounded-circle border border-2 border-primary d-flex align-items-center justify-content-center text-primary" style={{ width: '60px', height: '60px', cursor: 'pointer' }}>
          <i className="fas fa-user fs-4"></i>
        </div>
        <div className="rounded-circle border d-flex align-items-center justify-content-center text-secondary" style={{ width: '60px', height: '60px', cursor: 'pointer' }}>
          <i className="fas fa-bicycle fs-5"></i>
        </div>
        <div className="rounded-circle border d-flex align-items-center justify-content-center text-secondary" style={{ width: '60px', height: '60px', cursor: 'pointer' }}>
          <i className="fas fa-car fs-5"></i>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="row g-4">
        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary small">Full Name</label>
          <input type="text" name="fullName" className="form-control" placeholder="Enter full name" onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary small">Age</label>
          <input type="number" name="age" className="form-control" placeholder="Age" onChange={handleChange} required/>
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary small">Last Seen Location</label>
          <select name="location" className="form-select text-secondary" onChange={handleChange}>
            <option value="">Select Area</option>
            <option value="Colaba">Colaba</option>
            <option value="Fort">Fort</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary small">Pincode</label>
          <input type="text" name="pincode" className="form-control" value={formData.pincode} onChange={handleChange}/>
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary small">Date & Time Last Seen</label>
          <input type="datetime-local" name="dateTime" className="form-control" onChange={handleChange} required/>
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold text-secondary small">Upload Photo</label>
          <div>
            <input type="file" id="file-upload" className="d-none" />
            <label htmlFor="file-upload" className="btn btn-light border btn-sm px-4">Choose File</label>
          </div>
        </div>

        <div className="col-12">
          <label className="form-label fw-bold text-secondary small">Description/Other Details</label>
          <textarea name="description" className="form-control" rows="4" onChange={handleChange}></textarea>
        </div>

        <div className="col-12 d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
          <p className="text-muted fst-italic small mb-3 mb-md-0">Alert will be shared with users in pincode {formData.pincode}</p>
          <button type="submit" className="btn btn-primary px-5 fw-bold shadow-sm"> Submit Alert</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default ReportMissing;


