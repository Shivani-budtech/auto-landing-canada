import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../responsive.css';
import { API_URL, BACKEND_URL } from '../Constant.tsx';
import "./index.css";

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
                                        <h2 className="review-author">
                                            {item.author}
                                        </h2>
                                        <img className="review-vec"
                                            alt="Stylized red quotation marks symbolizing dialogue or emphasis, with a modern design against a transparent background."
                                            src={`/images/testimonial-vec.webp`} 
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
                                        : `/images/customer-review-1.webp`
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
