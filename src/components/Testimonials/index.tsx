import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import '../../responsive.css';
import { API_URL } from '../Constant.tsx';
import "./index.css";

function Testimonials() {
    const arr = [
        {
            desc: "I was nervous about applying for a car loan, but the process was so easy! The team helped me navigate everything, and I was approved within hours. Now I’m driving my new SUV, and I couldn’t be happier!",
            name: "Sarah M.",
        },
        {
            desc: "The customer service was outstanding—they took the time to explain all my options clearly. I’m thrilled with my new ride!",
            name: "James T.",
        },
        {
            desc: "As a first-time car buyer in Canada, I had a lot of questions. Thankfully, my loan officer was incredibly patient and guided me through every step. I found a loan that works perfectly with my budget!",
            name: "Linda R.",
        },
    ];
    const [testimonials, setTestimonials] = useState(arr);


    const fetchTestimonials = async () => {
        try {
            const response = await axios.get(API_URL+"testimonials"); // Replace with your API URL
            setTestimonials(response.data); // Assume the API returns an array of blogs

        } catch (err) {

        }
    };

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 835,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ],
    };

    return (
        <section className="testimonials-sec container">
            <h4 className="sec-title">Why Canadians Love Us</h4>
            <div className="testimonial-grid">
                <Slider {...settings}>
                    {Object.entries(testimonials).map(([key, testimonial]) => (
                        <div key={key} className="testimonial-item">
                            <div className="testimonial">
                                <div className="testimonial-desc">{testimonial.content}</div>
                                <div className="testimonial-author">{testimonial.author}</div>
                                <img
                                    alt="Stylized red quotation marks symbolizing dialogue or emphasis, with a modern design against a transparent background."
                                    src={`/images/testimonial-vec.webp`}
                                    className="testimonail-vec"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Testimonials;
