import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import './index.css';
import '../../responsive.css';

function AboutUs() {
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <title>Lowest Auto Finance Rates in Canada | Pre Approved Car Loan</title>
                <meta name="description" content="Start with Pre Approved Loan for a car in minutes to determine your borrowing power and Lowest Auto Finance Rates in Canada! Start with Pre Approved Loans!" />
                <meta name="keywords" content="Pre Approved Car Loan Canada, Lowest Car Finance Rates Canada, Auto Finance Canada" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://autolendingcanada.ca/about" />
                
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Auto Lending Canada" />
                <meta property="og:title" content="Lowest Auto Finance Rates in Canada | Pre Approved Car Loan" />
                <meta property="og:description" content="Start with Pre Approved Loan for a car in minutes to determine your borrowing power and Lowest Auto Finance Rates in Canada! Start with Pre Approved Loans!" />
                <meta property="og:url" content="https://autolendingcanada.ca/about" />
            </Helmet>

            <section className="about-us-sec container">
                <div className="about-us-container">
                    <div className='about-image'>
                        <img src={`/images/our-story.webp`} alt="Our Story" />
                    </div>
                    <div className='about-content'>
                        <h2>
                        Driving Dreams Across Canada — <br /> with Pre-Approved Car Loans & Auto Financing
                        </h2>
                        <p>
                        At Auto Lending Canada, our journey began with a simple mission: to make car ownership accessible for every Canadian, no matter their financial situation. We saw a gap in the market—a need for a car loan company that not only provided financing but also cared about the people behind the applications. That’s when we decided to create a service that combines speed, affordability, and a human touch.

                        </p>
                        <p>
                        Our process is simple because we believe car financing shouldn’t be complicated. From fast online applications to approvals in minutes, we’ve streamlined every step to make your experience smooth and hassle-free. Whether you’re looking for a Pre Approved Car Loan or need access to Auto Finance in Canada, we ensure a stress-free journey.

                        </p>
                        <p>
                        Over the years, we’ve helped thousands of Canadians, from coast to coast, drive off in cars they love. But our story doesn't stop here. Providing the Lowest Car Finance Rates in Canada, we continue to innovate, finding new ways to save our customers money, offer better terms, and provide exceptional service.



                        </p>
                        <Link to="/contact-us" className="primary-btn">Get in Touch</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;
