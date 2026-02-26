import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon1 from './HomeIcon1.png';
import Icon2 from './HomeIcon2.png';
import Icon3 from './HomeIcon3.png';

const Home = () => {
  const navigate = useNavigate();

  const handleAction = (action) => {
    navigate(`/${action.toLowerCase()}`);
  };

  return (
    <div className="bg-light min-vh-100">
      <div className="container pt-5"> 
        <div className="row align-items-start pt-4"> 
          <div className="col-md-4 pt-5">
            <h1 className="display-4 fw-bold text-dark mb-0">AREA ALERT</h1>
            <p className="text-secondary fs-6 fw-semibold mb-4">PINCODE-BASED MISSING ALERT SYSTEM</p>
            <div className="d-flex gap-2">
              <button className="btn btn-success px-4 fw-bold shadow big-btn" onClick={() => handleAction("Register")}>Register</button>
              <button className="btn btn-outline-primary px-4 fw-bold shadow big-btn" onClick={() => handleAction("Login")}>Login</button>
            </div>
          </div>
          {/* Right Side: Increased to col-8 for bigger images */}
          <div className="col-md-8">
            <div className="row g-1 justify-content-center"> 
              
              <div className="col-4 text-center">
                <div className="img-wrapper">
                  <img src={Icon1} alt="Viz 1" className="custom-hover-img shadow rounded-4" />
                </div>
              </div>

              <div className="col-4 text-center">
                <div className="img-wrapper">
                  <img src={Icon2} alt="Viz 2" className="custom-hover-img shadow rounded-4" />
                </div>
              </div>

              <div className="col-4 text-center">
                <div className="img-wrapper">
                  <img src={Icon3} alt="Viz 3" className="custom-hover-img shadow rounded-4" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        .img-wrapper {
          display: flex;
          justify-content: center;
          padding: 5px;
        }

        .custom-hover-img {
          width: 100%;
          /* Significantly increased max-width for tall icons */
          max-width: 240px; 
          height: auto;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          position: relative;
          z-index: 1;
        }

        .custom-hover-img:hover {
          transform: scale(1.15); /* Moderate grow so they don't overlap too much */
          z-index: 10;
          box-shadow: 0 20px 40px rgba(0,0,0,0.25) !important;
        }

        /* Ensure the main container starts right at the top */
        .min-vh-100 {
          display: block !important; 
        }
      `}</style>
    </div>
  );
}

export default Home;