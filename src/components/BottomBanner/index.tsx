import React from 'react';
import './index.css';
import '../../responsive.css';
import { Link } from 'react-router-dom';
function BottomBanner() {

    return (
        <section className="banner-sec bottom-banner container">
            <div className="banner-container">
                <div className='banner-content'>
                    <div className="sec-title">Your Trusted Partner for Auto Loans in Canada!</div>
                    <div className="banner-desc">
                        Looking for easy and fast car financing? We provide affordable auto loans across Canada, helping you drive your dream car without hassle.
                    </div>
                    <div className="banner-btn">
                        <Link to="/apply" className="primary-btn">Get Approved Today</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BottomBanner;
