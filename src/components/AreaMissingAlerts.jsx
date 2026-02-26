import React, { useState } from 'react';
import Icon from "./1.webp";
import Icon1 from "./2.webp";
import Icon2 from "./3.webp";
import Icon3 from "./4.webp";

const AreaMissingAlerts = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'Person',
      name: 'Krishna',
      category: 'Missing Child',
      location: 'Central Park',
      time: '2 hours ago',
      image:Icon,
      status: 'active',
    },
    {
      id: 2,
      type: 'Child',
      name: 'Navya',
      category: 'Missing Child',
      location: 'Near Mall',
      time: '2 hours ago',
      image: Icon1,
      status: 'active',
    },
    {
      id: 3,
      type: 'Bike',
      name: 'Yamaha R15',
      category: 'Missing Bike',
      location: 'Cafe Area',
      time: '2 hours ago',
      image: Icon2,
      status: 'active',
    },
    {
      id: 4,
      type: 'Person',
      name: 'Smith',
      category: 'Missing Person',
      location: 'Main St',
      time: 'Yesterday',
      image: Icon3,
      status: 'found',
    },
  ]);

  const [activeFilter, setActiveFilter] = useState('All Categories');

  const filters = ['All Categories', 'Missing Child', 'Missing Bike', 'Missing Car'];

  const filteredAlerts = activeFilter === 'All Categories' 
    ? alerts 
    : alerts.filter(alert => alert.category === activeFilter);

  return (
    <div className='bg-light'>
    <div className="container mt-5 px-4">
      {/* Header Section */}
      <header className="mb-4">
        <h1 className="display-5 fw-bold text-dark">Area Missing Alerts</h1>
        <p className="text-muted">
          Showing active alerts in pincode: <span className="fw-bold">400001</span>
        </p>
      </header>

      {/* Category Tabs - Fixed to show only underline, no box */}
      <div className="d-flex gap-4 border-bottom mb-5 overflow-auto">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`btn border-0 shadow-none rounded-0 pb-2 px-1 fw-bold position-relative ${
              activeFilter === filter 
              ? 'text-dark border-bottom border-danger border-3' 
              : 'text-secondary bg-transparent'
            }`}
            style={{ 
              marginBottom: '-1px', // Aligns underline perfectly with header border
              transition: 'none' 
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Alerts Grid */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredAlerts.map((alert) => (
          <div className="col" key={alert.id}>
            {/* Conditional border color based on status */}
            <div className={`card h-100 shadow-sm border-2 ${alert.status === 'found' ? 'border-success' : 'border-danger'}`} style={{ borderRadius: '12px' }}>
              <div className="card-body">
                {/* Header info */}
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="rounded-circle text-white d-flex align-items-center justify-content-center" 
                       style={{ width: '28px', height: '28px', backgroundColor: alert.status === 'found' ? '#198754' : '#dc3545' }}>
                    <i className={`fas ${alert.status === 'found' ? 'fa-check' : 'fa-user'} small`}></i>
                  </div>
                  <div>
                    <h6 className="card-title mb-0 fw-bold text-dark" style={{ fontSize: '0.9rem' }}>
                      {alert.status === 'found' ? 'Found' : 'Missing'} {alert.type}:
                    </h6>
                    <small className="text-muted">
                      {alert.name} • <span className="fst-italic">{alert.time}</span>
                    </small>
                  </div>
                </div>

                {/* Image */}
                <img 
                  src={alert.image} 
                  className={`card-img rounded mb-3 ${alert.status === 'found' ? 'opacity-75 grayscale' : ''}`} 
                  alt={alert.name} 
                  style={{ height: '300px', objectFit: 'cover' }}
                />

                <p className="card-text small text-secondary mb-3">
                  <strong>Last Seen:</strong> {alert.location}
                </p>

                {/* Button Action */}
                {alert.status === 'active' ? (
                  <button className="btn btn-danger w-100 fw-bold d-flex align-items-center justify-content-center gap-2 py-2 rounded-pill shadow-sm">
                    <i className="fas fa-phone-alt"></i> Call Contact
                  </button>
                ) : (
                  <div className="btn btn-outline-success w-100 fw-bold d-flex align-items-center justify-content-center gap-2 py-2 rounded-pill disabled" style={{ borderStyle: 'dashed' }}>
                    <i className="fas fa-check-circle"></i> Thank You
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer link */}
      <div className="mt-5 mb-5 text-muted d-flex align-items-center gap-2 small">
        <i className="fas fa-history"></i> Past Incidents
      </div>

      <style>{`
        .grayscale {
          filter: grayscale(100%);
        }
        /* Custom scrollbar for mobile category tabs */
        .overflow-auto::-webkit-scrollbar {
          height: 0px;
        }
      `}</style>
    </div>
    </div>
  );
};

export default AreaMissingAlerts;