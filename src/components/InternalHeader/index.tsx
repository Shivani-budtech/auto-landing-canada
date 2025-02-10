import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import './index.css';
import '../../responsive.css';
function InternalHeader() {
    const location = useLocation();
    const [pageTitle, setPageTitle] = useState("");
    const [pageDesc, setPageDesc] = useState("");
    useEffect(() => {
        // Dynamically set the title based on the route
        switch (location.pathname) {
            case "/about":
                setPageTitle("About us");
                setPageDesc("At Auto Lending Canada, we pride ourselves on delivering fast, transparent, and affordable auto loan services. With better rates, low monthly payments, and a customer-first approach, we’re here to drive your dreams forward.");
                break;
            case "/customer_stories":
                setPageTitle("Customer Stories");
                setPageDesc("At Auto Lending Canada, we pride ourselves on delivering fast, transparent, and affordable auto loan services. With better rates, low monthly payments, and a customer-first approach, we’re here to drive your dreams forward.");
                break;
            case "/contact_us":
                setPageTitle("Contact Us");
                setPageDesc("<span class='email-header'>info@autolendingcanada.ca</span><span class='phone-header'>844-405-5363</span>");
                break;
            case "/blogs":
                setPageTitle("ALC BLogs");
                setPageDesc("");
                break;
            case "/faqs":
                setPageTitle("Frequently Asked Questions");
                setPageDesc("Need clarity on auto financing? Auto Lending Canada’s FAQs are here to help! Find detailed answers and make your car purchase stress-free.");
                break;
            case "/calculator":
                setPageTitle("Plan Your Budget");
                setPageDesc("Estimate your car loan approval options with this easy-to-use calculator. Apply with Auto Lending Canada to get a pre-approval designed specifically for your financial circumstances in no time.");
                break;
            case "/power_sports":
                setPageTitle("Power Sports");
                setPageDesc("Looking to finance your dream powersports vehicle? Our loan company specializes in affordable and flexible financing options for motorcycles, ATVs, jet skis, and more.");
                break;
            case "/how_works":
                setPageTitle("How it works? ");
                setPageDesc("Discover personalized auto financing options in Canada that perfectly fit your lifestyle and budget. With just a quick and easy quiz, you’ll be matched with competitive car loan rates tailored to your needs.");
                break;
            case "/privacy_policy":
                setPageTitle("Privacy Policy");
                setPageDesc("");
                break;
            case "/terms_of_use":
                setPageTitle("Terms of Use");
                setPageDesc("");
                break;
            case "/membership_programme":
                setPageTitle("Auto Lending Canada Advantage Membership Program");
                setPageDesc("<b>Welcome to the Auto Lending Canada Advantage Membership Program!</b><br />Our Advantage Membership offers exclusive benefits designed to simplify your car loan process and provide added value to our members.");
                break;
            default:
                setPageTitle ("My Website");
        }
    }, [location]);
    return (
        <section className="internal-header header-marging">
            <div className="header-title">
                {pageTitle}
            </div>
            <div className='header-desc'
                dangerouslySetInnerHTML={{ __html: pageDesc }}
            />
        </section>
    );
}

export default InternalHeader;
