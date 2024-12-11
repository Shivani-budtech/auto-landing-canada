import React from 'react';
import './index.css';
import '../../responsive.css';
import { Link } from 'react-router-dom';
function AboutUs() {
    return (
        <section className="about-us-sec container">
            <div className="about-us-container">
                <div className='about-image'>
                    <img src={require("../../images/about-us-img.png")} />
                </div>
                <div className='about-content'>
                    <h1>
                        Our Story <br /> Driving Dreams Across Canada
                    </h1>
                    <p>
                        At Auto Lending Canada, our journey began with a simple mission: to make car ownership accessible for every Canadian, no matter their financial situation. We saw a gap in the market—a need for a car loan company that not only provided financing but also cared about the people behind the applications. That’s when we decided to create a service that combines speed, affordability, and a human touch.
                    </p>
                    <p>
                        Our process is simple because we believe car financing shouldn’t be complicated. From fast online applications to approvals in minutes, we’ve streamlined every step to make your experience smooth and hassle-free. Over the years, we’ve helped thousands of Canadians, from coast to coast, drive off in cars they love.
                    </p>
                    <p>
                        But our story doesn’t stop here. We continue to innovate, finding new ways to save our customers money, offer better terms, and provide exceptional service.
                    </p>
                    <Link to="/contact_us" className="primary-btn">Get in Touch</Link>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
