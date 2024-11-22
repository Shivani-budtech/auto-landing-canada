import React from 'react';
import './index.css';
import '../../responsive.css';
import { Link } from 'react-router-dom';

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
                        <Link to="/apply" className='primary-btn'>Apply Now</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutBanner;
