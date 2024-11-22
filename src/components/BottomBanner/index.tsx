import React from 'react';
import './index.css';
import '../../responsive.css';
import { Link } from 'react-router-dom';
function BottomBanner() {

    return (
        <section className="banner-sec bottom-banner container">
            <div className="banner-container">
                <div className='banner-content'>
                    <div className="sec-title">Get Approved for Your Car Loan</div>
                    <div className="banner-desc">
                        Your online application takes only 3 minutes to complete and we only ask for information we actually need.
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
