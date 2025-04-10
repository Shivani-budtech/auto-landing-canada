import React from 'react';
import './index.css';
import '../../responsive.css';
import { Link } from 'react-router-dom';
function BottomBanner() {

    return (
        <section className="banner-sec bottom-banner container">
            <div className="banner-container home-banner">
                <div className='banner-content'>
                    <h2 className="sec-title">Your Trusted Partner for AUTO LOAN FINANCING IN CANADA! </h2>
                    <div className="banner-desc">
                    Looking for easy and fast auto financing? We provide affordable car loans across Canada, helping you get the car you want—hassle-free! Apply now!

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
