import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../responsive.css";
import "./index.css";
function InternalHeader() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");
  const [pageDesc, setPageDesc] = useState("");
  useEffect(() => {
    // Dynamically set the title based on the route
    switch (location.pathname) {
      case "/about":
        setPageTitle("Your Trusted Partner for the Lowest Auto Loan Rates in Canada");
        setPageDesc(
          "At ALC, we pride ourselves on delivering pre approved, fast, transparent, and affordable auto loans in Canada. With the lowest rates, low monthly payments, and a customer-first approach, we’re here to drive your dreams forward."
        );
        break;
      case "/customer-stories":
        setPageTitle("Customer Stories");
        setPageDesc(
          "At Auto Lending Canada, we pride ourselves on delivering fast, transparent, and affordable auto loan services. With new finance rates for new cars, low monthly payments, and a customer-first approach, we’re here to drive your dreams forward."
        );
        break;
      case "/contact-us":
        setPageTitle("Contact Us");
        setPageDesc(
          "<span class='email-header'>info@autolendingcanada.ca</span><span class='phone-header'>844-405-5363</span>"
        );
        break;
      case "/blogs":
        setPageTitle("ALC BLogs");
        setPageDesc("");
        break;
      case "/faqs":
        setPageTitle("FAQs About Car Loans in Canada");
        setPageDesc(
          "Need clarity on auto financing in Canada? Auto Lending Canada’s FAQs are here to help! Find detailed answers and make your car purchase stress-free."
        );
        break;
      case "/car-loan-calculator":
        setPageTitle("Plan Your Budget with Our Car Loan Estimator for Canada ");
        setPageDesc(
          "Pick your loan amount, choose the duration, and select your credit rating with our car loan calculator for Canada to explore your best financing options."
        );
        break;
      case "/power-sports":
        setPageTitle("Affordable Auto Financing in Canada for Powersports Vehicles ");
        setPageDesc(
          "Looking to finance your dream power sports vehicle? Our auto financing services in Canada offer affordable and flexible loans for motorcycles, ATVs, jet skis, and more."
        );
        break;
      case "/how-it-works":
        setPageTitle("How Car Financing in Canada Works – Get the Best Rates Today!");
        setPageDesc(
          "Discover auto financing options in Canada that perfectly align with your lifestyle and budget. With just a quick and easy quiz, you’ll be matched with the lowest car finance rates in Canada and gain access to the best car loans in Canada."
        );
        break;
      case "/privacy-policy":
        setPageTitle("Privacy Policy");
        setPageDesc("");
        break;
      case "/terms-of-use":
        setPageTitle("Terms of Use");
        setPageDesc("");
        break;
      case "/membership_programme":
        setPageTitle("Auto Lending Canada Advantage Membership Program");
        setPageDesc(
          "<b>Welcome to the Auto Lending Canada Advantage Membership Program!</b><br />Our Advantage Membership offers exclusive benefits designed to simplify your car loan process and provide added value to our members."
        );
        break;
      default:
        setPageTitle("My Website");
    }
  }, [location]);
  return (
    <section className="internal-header header-marging">
      <div className="header-title">{pageTitle}</div>
      <div
        className="header-desc"
        dangerouslySetInnerHTML={{ __html: pageDesc }}
      />
    </section>
  );
}

export default InternalHeader;
