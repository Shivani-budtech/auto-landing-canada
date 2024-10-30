import React from 'react';
import './index.css';
import '../../responsive.css';
function AboutUs() {
    return (
        <section className="about-us-sec">
            <div className="about-us-container">
                <div className='about-image'>
                    <img src={require("./about-us-img.png")} />
                </div>
                <div className='about-content'>
                    <h1>
                        The Story of Auto Lending Canada
                    </h1>
                    <p>
                        Over the past decade, Auto Lending Canada has been a forerunner in the transformative journey of Canada’s online vehicle sales and financing sector. Driven by the vision to revolutionize the car buying process, we leveraged digital innovation to effectively meet the evolving demands of consumers. Our unwavering dedication led to robust partnerships with top Canadian dealerships and banks, providing us with the ability to offer competitive financing options that respect each customer’s unique needs.
                    </p>
                    <p>
                        Today, Auto Lending Canada stands proudly as a trusted leader in the online automotive sales and marketing industry. With a vast selection of high-quality vehicles at our fingertips through dealer partners, we’ve been able to address a significant industry challenge and transform it into our strength. As we continue our journey, we remain committed to delivering affordability, quality, and an unparalleled buying experience, solidifying our reputation as a customer-centric, forward-thinking leader in the auto finance world.
                    </p>
                    <a href='#' className="primary-btn mt-10">Get in Touch</a>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
