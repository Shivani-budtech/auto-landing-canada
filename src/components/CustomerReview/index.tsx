import React from 'react';
import { useState } from "react";
import "./index.css";
import '../../responsive.css';

function CustomerReview() {
    const arr = [
        {
            desc: "I was nervous about applying for a car loan, but the process was so easy! The team helped me navigate everything, and I was approved within hours. Now I’m driving my new SUV, and I couldn’t be happier!",
            name: "Sarah M.",
        },
        {
            desc: "After comparing several lenders, I found the best rates here. The customer service was outstanding—they took the time to explain all my options clearly. I’m thrilled with my new ride!",
            name: "James T.",
        },
        {
            desc: "As a first-time car buyer in Canada, I had a lot of questions. Thankfully, my loan officer was incredibly patient and guided me through every step. I found a loan that works perfectly with my budget!",
            name: "Linda R.",
        },
        {
            desc: "As a first-time car buyer in Canada, I had a lot of questions. Thankfully, my loan officer was incredibly patient and guided me through every step. I found a loan that works perfectly with my budget!",
            name: "Linda R.",
        },
        {
            desc: "As a first-time car buyer in Canada, I had a lot of questions. Thankfully, my loan officer was incredibly patient and guided me through every step. I found a loan that works perfectly with my budget!",
            name: "Linda R.",
        },
        {
            desc: "As a first-time car buyer in Canada, I had a lot of questions. Thankfully, my loan officer was incredibly patient and guided me through every step. I found a loan that works perfectly with my budget!",
            name: "Linda R.",
        },
        {
            desc: "As a first-time car buyer in Canada, I had a lot of questions. Thankfully, my loan officer was incredibly patient and guided me through every step. I found a loan that works perfectly with my budget!",
            name: "Linda R.",
        },
        {
            desc: "As a first-time car buyer in Canada, I had a lot of questions. Thankfully, my loan officer was incredibly patient and guided me through every step. I found a loan that works perfectly with my budget!",
            name: "Linda R.",
        },
    ];
    const [testimonials, setTestimonials] = useState(arr);

    return (
        <section className="reviews-sec container">
            <div className="review-grid">
                <div className="review-items-container">
                    <div className="review">
                        <div className="review-desc">As a first-time car buyer in Canada, I had a lot of questions. Thankfully, my loan officer was incredibly patient and guided me through every step. I found a loan that works perfectly with my budget!</div>
                        <div className="review-author">Linda R.</div>
                        <img
                            alt="review vector"
                            src={require(`./testimonial-vec.png`)}
                            className="review-vec"
                        />
                    </div>
                    <div className="review">
                        <div className="review-desc">As a first-time car buyer in Canada, I had a lot of questions. Thankfully, my loan officer was incredibly patient and guided me through every step. I found a loan that works perfectly with my budget!</div>
                        <div className="review-author">Linda R.</div>
                        <img
                            alt="review vector"
                            src={require(`./testimonial-vec.png`)}
                            className="review-vec"
                        />
                    </div>
                </div>
                <div className="review-image-container">
                    <img
                        alt="review vector"
                        src={require(`./customer-review-1.png`)}
                        className=""
                    />
                </div>
                <div className="review-image-container">
                    <img
                        alt="review vector"
                        src={require(`./customer-review-2.png`)}
                        className=""
                    />
                </div>
                <div className="review-items-container">
                    <div className="review">
                        <div className="review-desc">As a first-time car buyer in Canada, I had a lot of questions. Thankfully, my loan officer was incredibly patient and guided me through every step. I found a loan that works perfectly with my budget!</div>
                        <div className="review-author">Linda R.</div>
                        <img
                            alt="review vector"
                            src={require(`./testimonial-vec.png`)}
                            className="review-vec"
                        />
                    </div>
                    <div className="review">
                        <div className="review-desc">As a first-time car buyer in Canada, I had a lot of questions. Thankfully, my loan officer was incredibly patient and guided me through every step. I found a loan that works perfectly with my budget!</div>
                        <div className="review-author">Linda R.</div>
                        <img
                            alt="review vector"
                            src={require(`./testimonial-vec.png`)}
                            className="review-vec"
                        />
                    </div>
                </div>
            </div>
                        
                    
        </section>
    );
}

export default CustomerReview;
