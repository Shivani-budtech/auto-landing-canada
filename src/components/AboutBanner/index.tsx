import React from 'react';
import './index.css';
function AboutBanner() {

    return (
        <section className="banner-sec">
            <div className="banner-container">
                <div className='banner-content'>
                    <div className="sec-title">Start your journey now</div>
                    <div className="banner-desc">
                        YOUR DREAM CAR AWAITS YOU
                    </div>
                    <div className="banner-btn">
                        <a href='#' className='primary-btn'>Apply Now</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutBanner;
