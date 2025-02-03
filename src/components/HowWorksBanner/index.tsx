import React from 'react';
import './index.css';
import '../../responsive.css';
import { Link } from 'react-router-dom';
function HowWorksBanner() {

    return (
        <section className="banner-sec bottom-banner container">
            <div className="banner-container how-works-banner">
                <div className='banner-content'>
                    <div className="sec-title">Get Approved for Car Financing in 3 Easy Steps</div>
                    <div className="banner-desc">
                        Understanding the car financing process shouldn't be complicated. With Auto lending canada, we've streamlined it into three simple steps to get you driving your dream car in no time
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
