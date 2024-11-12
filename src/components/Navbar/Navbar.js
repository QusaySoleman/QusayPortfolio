import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="nav-content fixed-top navbar navbar-expand-lg ">
     
        <a className="logo" href="#home">
          B11
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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact-me">Contact</a>
            </li>
          </ul>
          <div className="call-icon-box">
            <i className="call-icon bi bi-telephone-plus-fill me-3"></i>
            <div className="call-icon-phone-number" title="Call Me">
              0993519890
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default Navbar;
