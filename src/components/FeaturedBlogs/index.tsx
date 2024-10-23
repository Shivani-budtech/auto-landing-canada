import React, { useState } from 'react';
import './index.css';
function FeatureBlogs() {
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
    const [blogs, setBlogs] = useState(arr);
    return (
        <section className="featured-blogs-sec">
            <h1>Featured Blogs</h1>
            <div className="blog-list">
                {Object.entries(blogs).map(([key, blog]) => (
                    <div key={key} className="blog-list-item">
                        <div className='blog-list-image'>
                            <img src={require("./about-us-img.png")} />
                        </div>
                        <div className='blog-list-info'>
                            <div className='blog-list-title'>
                                How Rolling Over a Car Loan Works
                            </div>
                            <div className='blog-list-more'>
                                <div className='blog-list-date'>
                                    22 May, 2024
                                </div>
                                <div className='blog-list-btn'>
                                    <a href='#' className='primary-btn'>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeatureBlogs;
