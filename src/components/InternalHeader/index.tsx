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
                setPageDesc("<span class='email-header'>info@autolendingcanada.com</span><span class='phone-header'>888-899-7356</span>");
                break;
            case "/blogs":
                setPageTitle("ALC BLogs");
                setPageDesc("");
                break;
            case "/faqs":
                setPageTitle("Frequently Asked Questions");
                setPageDesc("Find quick answers to common questions about auto financing at Auto Lending Canada. Browse through our comprehensive FAQs to gain the clarity you need for a seamless car buying experience.");
                break;
            case "/calculator":
                setPageTitle("Your Budget Matters");
                setPageDesc("This car loan calculator will help provide you with a rough estimate of what your approval options could be. Once you apply with Auto Lending Canada you will receive a pre-approval tailored to your personal financial circumstances at the click of a button.");
                break;
            case "/power_sports":
                setPageTitle("Power Sports");
                setPageDesc("Discover the ease of auto financing with Auto Lending Canada. Our innovative approach removes stress and connects you with tailored options. Redefine your car-buying journey with us, where every step is filled with simplicity and ease.");
                break;
            case "/how_works":
                setPageTitle("How it works? ");
                setPageDesc("Discover personalized auto financing options in Canada that perfectly fit your lifestyle and budget. With just a quick and easy quiz, you’ll be matched with competitive car loan rates tailored to your needs.");
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
