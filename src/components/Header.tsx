import React from 'react';
import logo from "../images/main-logo.png";

function Header() {
  return (
    <div className="main-header">
      <div className="header-container">
        <div className="header-logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="header-nav">
          <div className="nav-link-dropdown">
            <a href="#">Why Choose ALC?</a>
          </div>
          <div className="nav-link-dropdown">
            <a href="#">Resources</a>
          </div>
        </div>
        <div className="header-btn">
          <a href="#" className="primary-btn">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
