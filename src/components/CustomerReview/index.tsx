import React from 'react';
import { useState, useEffect } from "react";
import "./index.css";
import '../../responsive.css';
import axios from 'axios';
import { API_URL, BACKEND_URL } from '../Constant.tsx';

function CustomerReview() {
    const arr = [];
    const [testimonials, setTestimonials] = useState(arr);
    const [cms, setCms] = useState([]);

    const fetchTestimonials = async () => {
        try {
            const response = await axios.get(API_URL + "customer_stories");
            setTestimonials(response.data.testimonials);
            setCms(response.data.cms);
        } catch (err) {
            
        }
    };

    useEffect(() => {
        fetchTestimonials();
    }, []);

    return (
        <section className="reviews-sec container">
            <div className="review-grid">
                {Object.entries(testimonials).map(([key, testimonial_chunk], index) => (
                    <div key={key} className={index % 2 === 1 ? 'review-row reverse' : 'review-row'}>
                        <div className="review-items-container">
                            {Array.isArray(testimonial_chunk) ? (
                                testimonial_chunk.reduce((acc, curr) => {
                                    return acc.concat(curr);
                                }, []).map((item, itemIndex) => (
                                    <div className="review">
                                        <div className="review-desc">
                                            { item.content }
                                        </div>
                                        <div className="review-author">
                                            {item.author}
                                        </div>
                                        <img className="review-vec"
                                            alt="review vector"
                                            src={require(`./testimonial-vec.png`)}
                                        />
                                    </div>
                                ))
                            ) : ""}
                        </div>
                        <div className="review-image-container">
                            <img
                                alt="review vector"
                                src={
                                    cms[index] 
                                        ? BACKEND_URL + "public/uploads/" +cms[index]
                                        : require(`../../images/customer-review-1.png`)
                                }
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CustomerReview;
