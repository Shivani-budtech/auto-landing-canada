import React from 'react';
import './index.css';
import '../../responsive.css';
import { Link } from 'react-router-dom';

function AboutBanner() {

    return (
        <section className="banner-sec about-banner container">
            <div className="banner-container about-banner">
                <div className='banner-content' >
                    <div className="sec-title" style={{ marginBottom: '10px' }}>
                        Leaders in Car Financing Across Canada
                    </div>
                    <div className="banner-desc" style={{ marginBottom: '0px' }}>At Auto Lending Canada, we offer simple and affordable auto financing for individuals and families across Canada.</div>
                    <div className="banner-btn">
                        <Link to="/apply" className='primary-btn'>Apply Now</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutBanner;
