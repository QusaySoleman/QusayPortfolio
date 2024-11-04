import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
   <div className="nav-content ">
      <nav className="navbar navbar-expand-lg ">
        <a className="logo" href="/">
          B11-FD
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse p-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="contact-me">Contact</NavLink>
            </li>
          </ul>
          <div className="call-icon-box">
            <i className="call-icon bi bi-telephone-plus-fill me-3"></i>
            <div className="call-icon-phone-number">0993519890</div>
          </div>
        </div>
      </nav>
      </div>
   
  );
}

export default Navbar;