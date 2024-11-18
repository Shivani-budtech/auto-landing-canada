import React from 'react';
import logo from "../images/main-logo.png";
import { Link, useLocation } from "react-router-dom";
function Footer() {
  const location = useLocation();
  const curLoc = location.pathname;
  console.log(curLoc);
  return (
    <div>
      <div className="footer-sec">
        <img src={require(`../images/logos.png`)} />
        <div className="footer-container">
          <div className="footer-col-1">
            <div className="header-logo">
              <Link to="/">
                <img src={logo} alt="logo" />
                <div>
                  Auto Lending <span>Canada</span>
                </div>
              </Link>
            </div>
            <div className="footer-desc">
              A decade leading Canada’s online auto sales with tailored financing options. Your trusted partner for a seamless and affordable auto finance experience.
            </div>
            <div className="footer-cols">
              <div className="footer-col">
                <div className="footer-col-title">
                  Why Choose ALC?
                </div>
                <ul>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                      <Link to="/">How it works?</Link>
                  </li>
                  <li>
                      <Link to="/customer_stories">Customer Stories</Link>
                  </li>
                  <li>
                      <Link to="/">Power Sports</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <div className="footer-col-title">
                  Financing
                </div>
                <ul>
                  <li>
                      <Link to="/contact_us">Contact Us</Link>
                  </li>
                  <li>
                      <Link to="/blogs">Blogs</Link>
                  </li>
                  <li>
                      <Link to="/faqs">FAQs</Link>
                  </li>
                  <li>
                      <Link to="/calculator">Car loan calculator</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-col-2">
            <div className="footer-contact-row">
                <div className="contact-row">
                  <a href="#" className="primary-btn contact-phone">778-650-0611</a>
                  <a href="#" className="primary-btn contact-phone">888-899-7356</a>
                </div>
                <div className="contact-row">
                  <a href="#" className="primary-btn contact-email">info@autolendingcanada.com</a>
                </div>
            </div>
            
            <div className="social-media-copyright">
              <div className="social-media-row">
                <a href="#">
                  <img src={require(`../images/insta-social.png`)} />
                </a>
                <a href="#">
                  <img src={require(`../images/facebook-social.png`)} />
                </a>
                <a href="#">
                  <img src={require(`../images/youtube-social.png`)} />
                </a>
                <a href="#">
                  <img src={require(`../images/linkedin-social.png`)} />
                </a>
                <a href="#">
                  <img src={require(`../images/twitter-social.png`)} />
                </a>
                <a href="#">
                  <img src={require(`../images/tiktok-social.png`)} />
                </a>
              </div>
              <div className="copy-right-desc">
                © 2024 Auto Lending Canada, All Rights Reserved.
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
