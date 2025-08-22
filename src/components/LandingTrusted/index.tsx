import React from 'react';
import './index.css';


function TrustedCustomers() {
  return (
    <section className="trusted-customers container">
      <h2 className="trusted-title">Trusted Across Canada</h2>
      <p className="trusted-subtitle">
        Across Canada, our trusted dealership partners provide flexible financing options. Whatever your credit or income situation, we’ll work to get you into a car you’ll love.
      </p>
      <div className="customer-grid">
          <div className="customer-card deskset">
            <img src={`/images/website.webp`} alt={`Happy Customer`} />
          </div>
          <div className="customer-card mobileset">
            <img src={`/images/phone.webp`} alt={`Happy Customer`} />
          </div>
      </div>
    </section>
  );
}

export default TrustedCustomers;
