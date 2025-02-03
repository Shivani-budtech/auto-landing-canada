import React from 'react';
import { Link } from "react-router-dom";
import './index.css';
function HomeTop() {
    return (
        <section className="car-ad header-marging">
            <div className="car-ad-row container">
                <div className="content">
                    <h1>
                        Secure Your <span>Car Financing</span> in Minutes!
                    </h1>
                    <p className="description">
                        Canada’s Quickest Car Loan Approval Process – Your Dream Car Awaits!
                    </p>
                    <p className="subtext">
                        Get Approved in No Time!
                    </p>
                    <div className="buttons">
                        <Link to="/apply" className="primary-btn">Apply Now</Link>
                        <Link to="/about" className="secondary-btn">Learn More</Link>
                    </div>
                </div>
                <div className="info">
                    <img src={require(`../../images/home-cars.png`)} />
                </div>
            </div>
        </section>
    );
}

export default HomeTop;
