import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const curLoc = location.pathname;
  console.log("curLoc",location.pathname);
  const isApplyNow = curLoc === "/apply_now";
  const isApply = curLoc === "/apply";

  return (
    <>
      {!isApplyNow && (
        
        <div className={isApply ? 'apply-footer main-footer-container' : 'main-footer-container'}>
          <div className="footer-sec">
            <img src={`/images/logos.webp`} alt="A red maple leaf with a white silhouette of a car in the center, symbolizing Canadian automotive culture with the logo of Auto Lending Canada."/>
            <div className="footer-container">
              <div className="footer-col-1">
                <div className="header-logo">
                  <Link to="/">
                    <img src={`/images/main-logo.webp`} alt="White car icon centered in a red maple leaf silhouette on a grey background, symbolizing Canadian automotive themes." />
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
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/how-it-works">How it works?</Link></li>
                      <li><Link to="/customer-stories">Customer Stories</Link></li>
                      <li><Link to="/power-sports">Power Sports</Link></li>
                    </ul>
                  </div>
                  <div className="footer-col">
                    <div className="footer-col-title">
                      Financing
                    </div>
                    <ul>
                      <li><Link to="/contact-us">Contact Us</Link></li>
                      <li><Link to="/blogs">Blogs</Link></li>
                      <li><Link to="/faqs">FAQs</Link></li>
                      <li><Link to="/car-loan-calculator">Car Loan Calculator</Link></li>
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
                    <a href="mailto:info@autolendingcanada.ca" className="primary-btn contact-email">info@autolendingcanada.ca</a>
                  </div>
                </div>
                <div className="social-media-copyright">
                  <div className="social-media-row">
                    <a href="https://www.instagram.com/autolendingcanada/" rel="noreferrer" target='_blank'>
                      <img src={`/images/insta-social.webp`} alt="Instagram logo"/>
                    </a>
                    <a href="https://www.facebook.com/people/Auto-Lending-Canada/61561773263064/" rel="noreferrer" target='_blank'>
                      <img src={`/images/facebook-social.webp`} alt="Facebook logo"/>
                    </a>
                    <a href="https://www.youtube.com/@AutoLendingCanada" rel="noreferrer" target='_blank'>
                      <img src={`/images/youtube-social.webp`} alt="YouTube logo" />
                    </a>
                    <a href="https://www.linkedin.com/company/auto-lending-canada/" rel="noreferrer" target='_blank'>
                      <img src={`/images/linkedin-social.webp`} alt="LinkedIn logo" />
                    </a>
                    <a href="https://x.com/AutoLendingCA" rel="noreferrer" target='_blank'>
                      <img src={`/images/twitter-social.webp`} alt="Twitter logo" />
                    </a>
                    <a href="https://www.tiktok.com/@autolendingcanada" rel="noreferrer" target='_blank'>
                      <img src={`/images/tiktok-social.webp`} alt="TikTok logo" />
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
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-use">Terms of Use</Link>
            </div>
          </div>
        </div>
      )}

      {isApplyNow && (
        <div className="small-footer footer-sec">
          <p>Copyright © 2025 Auto Lending Canada. All rights reserved. Auto Lending Canada® and the Auto Lending Canada Logo design are registered <br/> trademarks of Auto Lending Canada Ltd. Other trademarks are the property of their respective owners.</p>
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
