import React from 'react';
import logo from "../images/main-logo.png";
import { Link, useLocation } from "react-router-dom";
const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  return (
    <div className="main-header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header-nav">
          <div className="nav-link-dropdown">
            <a href="#">Why Choose ALC?</a>
            <div className="dropdown-menu">
              <ul>
                <li className={location.pathname == "/about" ? "active" : ""}> 
                  <Link to="/about">About Us</Link>
                </li>
                <li className={location.pathname == "/customer_stories" ? "active" : ""} > 
                  <Link to="/customer_stories">Customer Stories</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-link-dropdown">
            <a href="#">Resources</a>
            <div className="dropdown-menu">
              <ul>
                <li className={location.pathname == "/contact_us" ? "active" : ""}>
                  <Link to="/contact_us">Contact Us</Link>
                </li>
                <li className={location.pathname == "/blogs" ? "active" : ""} >
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li className={location.pathname == "/faqs" ? "active" : ""} >
                  <Link to="/faqs">FAQs</Link>
                </li>
                <li className={location.pathname == "/calculator" ? "active" : ""} >
                  <Link to="/calculator">Car Loan Calculator</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-btn">
          <Link to="/apply" className="primary-btn">Apply Now</Link>
        </div>
        <div className="header-mobile-toggle" onClick={() => setIsMenuOpen("opened")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
