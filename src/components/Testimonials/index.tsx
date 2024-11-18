import React from 'react';
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import '../../responsive.css';

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
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
            <div className="sec-title">Why Canadians Love Us</div>
            <div className="testimonial-grid">
                <Slider {...settings}>
                    {Object.entries(testimonials).map(([key, testimonial]) => (
                        <div key={key} className="testimonial-item">
                            <div className="testimonial">
                                <div className="testimonial-desc">{testimonial.desc}</div>
                                <div className="testimonial-author">{testimonial.name}</div>
                                <img
                                    alt="Testimonial vector"
                                    src={require(`./testimonial-vec.png`)}
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
