import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "./DashboardIcon.png"; // update path if needed

function Dashboard() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="min-vh-100 bg-light " >
      <div className="container py-5 mt-4">

        {/* Hero Section */}
        <div className="row align-items-center mb-5">
          
          {/* Left Text */}
          <div className="col-lg-5">
            <h1 className="display-4 fw-bold text-dark mb-0">
              AREA ALERT
            </h1>
            <p
              className="text-secondary fw-semibold mt-2 mb-4"
              style={{ letterSpacing: "1px" }}
            >
              PINCODE-BASED MISSING ALERT SYSTEM
            </p>
          </div>

          {/* Right Image */}
          <div className="col-lg-7 text-center">
            <img
              src={Icon}
              alt="Map illustration"
              className="img-fluid"
              style={{
                width: "100%",
                maxWidth: "550px",
                filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.15))"
              }}
            />
          </div>
        </div>

        {/* Action Cards */}
        <div className="row g-4 mt-2">

          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm overflow-hidden" style={{ cursor: "pointer", borderRadius: "15px" }} onClick={() => handleNavigation("/report-missing")}>
              <div className="p-4 text-white text-center" style={{ backgroundColor: "#1b69c1" }}>
                <i className="fas fa-user-plus mb-2" style={{ fontSize: "2.5rem" }}></i>
                <h4 className="fw-bold mb-0">Report Missing</h4>
              </div>
              <div className="card-body text-center py-4">
                <p className="text-secondary mb-0">Quickly file alerts for persons or vehicles</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div
              className="card h-100 border-0 shadow-sm overflow-hidden"
              style={{ cursor: "pointer", borderRadius: "15px" }}
              onClick={() => handleNavigation("/area-alerts")}
            >
              <div
                className="p-4 text-white text-center"
                style={{ backgroundColor: "#c68824" }}
              >
                <i className="fas fa-bullhorn mb-2" style={{ fontSize: "2.5rem" }}></i>
                <h4 className="fw-bold mb-0">Area Alerts</h4>
              </div>
              <div className="card-body text-center py-4">
                <p className="text-secondary mb-0">
                  View active cases in your local pincode
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm overflow-hidden" style={{ cursor: "pointer", borderRadius: "15px" }} onClick={() => handleNavigation("/my-reports")}>
              <div className="p-4 text-white text-center" style={{ backgroundColor: "#67a229" }}>
                <i className="fas fa-clipboard-check mb-2" style={{ fontSize: "2.5rem" }}></i>
                <h4 className="fw-bold mb-0">My Reports</h4>
              </div>
              <div className="card-body text-center py-4">
                <p className="text-secondary mb-0"> Track your submitted alerts and status</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
