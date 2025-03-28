import React from 'react';
import { Link } from "react-router-dom";

const MobileHeader = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <div className={isMenuOpen == "opened" ? "mobile-header active" : "mobile-header"}>
            <div className="close-header" onClick={() => setIsMenuOpen("closed")}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
            </div>
            <div className=''>
                <h3>Why Choose ALC?</h3>
                <ul>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/how-it-works">How it works?</Link>
                    </li>
                    <li>
                        <Link to="/customer-stories">Customer Stories</Link>
                    </li>
                    <li>
                        <Link to="/power-sports">Power Sports</Link>
                    </li>
                </ul>
                <h3>Resources</h3>
                <ul>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/faqs">FAQs</Link>
                    </li>
                    <li>
                        <Link to="/car-loan-calculator">Car Loan Calculator</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MobileHeader;
