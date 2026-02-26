import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-5 py-3">
        <Link className="navbar-brand fw-bold text-dark fs-4" to="/">AREA ALERT</Link>

        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto gap-3">
                <li className="nav-item"><Link className="nav-link fs-5" to="/about">About Us</Link></li>
                <li className="nav-item"><Link className="nav-link fs-5" to="/contact">Contact</Link></li>
            </ul>
        </div>
    </nav>

  );
}

export default Navbar;
