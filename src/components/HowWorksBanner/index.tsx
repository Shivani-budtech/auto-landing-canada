import React from 'react';
import './index.css';
import '../../responsive.css';
import { Link } from 'react-router-dom';
function HowWorksBanner() {

    return (
        <section className="banner-sec bottom-banner container">
            <div className="banner-container how-works-banner">
                <div className='banner-content'>
                    <div className="sec-title">GET APPROVED FOR CAR FINANCING IN CANADA WITH 3 EASY STEPS </div>
                    <div className="banner-desc">
                    Understanding the car financing process in Canada shouldn’t be complicated. With Auto Lending Canada, we’ve streamlined it into three simple steps to help you secure the best auto loan rates in Canada!

                    </div>
                    <div className="banner-btn">
                        <Link to="/apply" className="primary-btn">Get Approved Today</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowWorksBanner;
