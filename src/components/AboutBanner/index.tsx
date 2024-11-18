import React from 'react';
import './index.css';
import '../../responsive.css';
function AboutBanner() {

    return (
        <section className="banner-sec about-banner container">
            <div className="banner-container">
                <div className='banner-content'>
                    <div className="banner-desc">Start your journey now</div>
                    <div className="sec-title">
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
