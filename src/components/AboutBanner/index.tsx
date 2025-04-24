import React from 'react';
import { Link } from 'react-router-dom';
import '../../responsive.css';
import './index.css';

function AboutBanner() {

    return (
        <section className="banner-sec about-banner container">
            <div className="banner-container about-banner">
                <div className='banner-content' >
                    <h2 className="sec-title" style={{ marginBottom: '10px' }}>
                    Leaders in The Lowest Car <br/>Loan Rates Across Canada
                    </h2>
                    <div className="banner-desc" style={{ marginBottom: '0px' }}>At Auto Lending Canada, we offer simple and affordable auto financing<br/>for individuals and families with the lowest loan rates across Canada.
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
