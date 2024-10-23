import React from 'react';
function Footer() {
  return (
    <div className="footer-sec">
      <div className="footer-container">
        <div className="footer-col-1">
          <div className="footer-logo">
            <a href="#">
              <img src={require(`../images/footer-logo.png`)} />
            </a>
          </div>
          <div className="footer-desc">
            A decade leading Canada’s online auto sales with tailored financing options. Your trusted partner for a seamless and affordable auto finance experience.
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <div className="footer-col-title">
                Company
              </div>
              <ul>
                <li>
                  <a href="#">Why Choose ALC?</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">
                Financing
              </div>
              <ul>
                <li>
                  <a href="#">Car & Auto</a>
                </li>
                <li>
                  <a href="#">Power Sport</a>
                </li>
                <li>
                  <a href="#">Loan Calculator</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-col-2">
          <div className="contact-row">
            <a href="#" className="primary-btn contact-phone">778-650-0611</a>
            <a href="#" className="primary-btn contact-phone">888-899-7356</a>
          </div>
          <div className="contact-row">
            <a href="#" className="primary-btn contact-email">info@autolendingcanada.com</a>
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
            </div>
            <div className="copy-right-desc">
              © 2024 Auto Lending Canada, All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
