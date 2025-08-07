import React from 'react';
import './index.css';


function TrustedCustomers() {
  return (
    <section className="trusted-customers container">
      <h2 className="trusted-title">Trusted by Over 1 Million Canadians</h2>
      <p className="trusted-subtitle">
        Our nationwide network of partner dealerships have special finance programs available, so regardless of your current income or credit situation we are confident we'll be able to help you get a car you love.
      </p>
      <div className="customer-grid">
          <div className="customer-card">
            <img src={`/images/dark_customer_grid.webp`} alt={`Happy Customer`} />
          </div>
      </div>
    </section>
  );
}

export default TrustedCustomers;
