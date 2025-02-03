import React from 'react';
import logo from "../images/main-logo.png";
import { Link, useLocation } from "react-router-dom";
function Footer() {
  const location = useLocation();
  const curLoc = location.pathname;
  return (
    <div className={(curLoc == "/apply") ? 'apply-footer main-footer-container' : 'main-footer-container'}>
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
              Enjoy affordable auto loan rates, low monthly payments, and exceptional service when financing your car with us. Our seamless online application process lets you get pre-approved for your auto loan in minutes. Explore our financing solutions tailored for all credit types and vehicle needs.
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
                    <Link to="/how_works">How it works?</Link>
                  </li>
                  <li>
                      <Link to="/customer_stories">Customer Stories</Link>
                  </li>
                  <li>
                      <Link to="/power_sports">Power Sports</Link>
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
                <a href="tel:844-405-5363" className="primary-btn contact-phone">844-405-5363</a>
                <a href="tel:778-652-3712" className="primary-btn contact-phone">778-652-3712</a>
                </div>
                <div className="contact-row">
                  <a href="mailto:info@autolendingcanada.com" className="primary-btn contact-email">info@autolendingcanada.com</a>
                </div>
            </div>
            
            <div className="social-media-copyright">
              <div className="social-media-row">
                <a href="https://www.instagram.com/autolendingcanada/" rel="noreferrer" target='_blank'>
                  <img src={require(`../images/insta-social.png`)} alt="instagram"/>
                </a>
                <a href="https://www.facebook.com/people/Auto-Lending-Canada/61561773263064/" rel="noreferrer" target='_blank'>
                  <img src={require(`../images/facebook-social.png`)} alt="facebook"/>
                </a>
                <a href="https://www.youtube.com/@AutoLendingCanada" rel="noreferrer" target='_blank'>
                  <img src={require(`../images/youtube-social.png`)} alt="facebook" />
                </a>
                <a href="https://www.linkedin.com/company/auto-lending-canada/" rel="noreferrer" target='_blank'>
                  <img src={require(`../images/linkedin-social.png`)} alt="linkedin" />
                </a>
                <a href="https://x.com/AutoLendingCA" rel="noreferrer" target='_blank'>
                  <img src={require(`../images/twitter-social.png`)} alt="twitter" />
                </a>
                <a href="https://www.tiktok.com/@autolendingcanada" rel="noreferrer" target='_blank'>
                  <img src={require(`../images/tiktok-social.png`)} alt="tiktok" />
                </a>
              </div>
              <div className="copy-right-desc">
                © 2025 Auto Lending Canada, All Rights Reserved.
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="small-footer">
        <p>Copyright © 2025 Auto Lending Canada. All rights reserved. Auto Lending Canada® and the Auto Lending Canada Logo design are registered <br/> trademarks of Auto Lending Canada Ltd. Other trademarks are the property of their respective owners.</p>
        <div className="footer-links">
          <Link to="/privacy_policy">Privacy Policy</Link>
          <Link to="/terms_of_user">Terms of Use</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
