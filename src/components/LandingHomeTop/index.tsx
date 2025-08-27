import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./index.css";

function HomeTop() {
  return (
    <>
      {/* Meta Tags for SEO */}
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Apply for Auto Financing in Canada & Secure the Best Loans | Auto Lending Canada
        </title>
        <meta
          name="description"
          content="Get fast approval for car loans in Canada. Apply now for the best rates, quick decisions & hassle-free auto financing with Auto Lending Canada!"
        />
        <meta
          name="keywords"
          content="Car Financing Canada, Best Car Loans Canada, Auto Financing Canada, Apply for Car Financing, Bad Credit Car Loan"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://autolendingcanada.ca/" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Auto Lending Canada" />
        <meta
          property="og:title"
          content="Apply for Auto Financing in Canada & Secure the Best Loans | Auto Lending Canada"
        />
        <meta
          property="og:description"
          content="Get fast approval for car loans in Canada. Apply now for the best rates, quick decisions & hassle-free auto financing with Auto Lending Canada!"
        />
        <meta property="og:image" content="https://autolendingcanada.ca/images/home-cars.webp" />
        <meta property="og:url" content="https://autolendingcanada.ca/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AutoLendingCA" />
        <meta name="twitter:title" content="Apply for Auto Financing in Canada & Secure the Best Loans | Auto Lending Canada" />
        <meta name="twitter:description" content="Get fast approval for car loans in Canada. Apply now for the best rates, quick decisions & hassle-free auto financing with Auto Lending Canada!" />
        <meta name="twitter:image" content="/images/home-cars.webp" />
      </Helmet>

      {/* Main Content */}
      <section className="car-ad header-marging">
        
        <img
          src="/home-top-bg.webp"
          alt="Hero background"
          className="hero-bg-img"
          loading="eager"
          fetchpriority="high"
          decoding="sync"
        />
        <div className="car-ad-row  car-ad-row-padding container">
          <div className="content">
            <h1>
            GET YOUR <span>CAR FINANCING</span><br/> IN MINUTES!
            </h1>
            <p className="description">
            No appointments, no obligation and free to apply

            </p>
            <p className="subtext">Are you looking for a new or used vehicle?</p>
            <div className="buttons">
              <Link to="/apply" className="primary-btn">
                New
              </Link>
              <Link to="/apply" className="primary-btn">
                Used
              </Link>
            </div>
            <p className="description">
            We have $0 down options, making it even easier for you to get the car you want.
            </p>
          </div>
          <div className="info">
            <img className="home-cars-img-small" src="./images/home-cars.webp" alt="Car Financing in Canada" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeTop;
