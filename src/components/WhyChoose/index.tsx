import React from 'react';
import { Link } from "react-router-dom";
import '../../responsive.css';
import './index.css';
function WhyChoose() {
    const whyChoose = [
        {
            title: "Better Rates",
            img: "wheel.webp",
            desc: "Choose us for the best auto financing in Canada and get unbeatable deals on interest rates with flexible payments for more savings!",
            link: "#",
        },
        {
            title: "Low Payments",
            img: "approval.webp",
            desc: "Save more with low payments on auto financing - get flexible loans from Canada’s most trusted auto loan provider and drive your dream car!",
            link: "#",
        },
        {
            title: "Saving Money",
            img: "24-7.webp",
            desc: "Choose the best car for your budget. With easy auto financing and flexible loans, apply stress-free and enjoy low monthly payments in Canada.",
            link: "#",
        },
    ];
    return (
        <section className="why-choose container">
            <div className="sec-title">
                Why Choose ALC?
                <span>
                Apply and get pre-approved auto financing in minutes! Enjoy the best rates, low monthly payments, and significant savings. We make Auto Loans in Canada easy and affordable!
                </span>
            </div>
            <div className="why-choose-row">
                <img src={`/images/dotted-bg.webp`} className="first-img" />
                <img src={`/images/round.webp`} className="last-img" />
                <div className="grida">
                    {Object.entries(whyChoose).map(([key, why]) => (
                        <div key={key} className="grida-item">
                            <div className="grida-img">
                                <img src={`/images/${why.img}`} />
                            </div>
                            <div className="grida-title">{why.title}</div>
                            <div className="grida-desc">{why.desc}</div>
                            <div className="grida-link">
                                <Link to="/about" >Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChoose;
