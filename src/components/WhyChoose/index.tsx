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
            alt:"A minimalist white icon with a tyre & wheel shape against a transparent background."
        },
        {
            title: "Low Payments",
            img: "approval.webp",
            desc: "Save more with low payments on auto financing - get flexible loans from Canada’s most trusted auto loan provider and drive your dream car!",
            link: "#",
            alt:"A white document with a dollar sign in the middle with 3 lines below the sign. There is a circle with a check mark on the right."
        },
        {
            title: "Saving Money",
            img: "24-7.webp",
            desc: "Choose the best car for your budget. With easy auto financing and flexible loans, apply stress-free and enjoy low monthly payments in Canada.",
            link: "#",
            alt:"The number 24/7 written with one arrow on top going from left to right and the second arrow below going from right to left."
        },
    ];
    return (
        <section className="why-choose container">
            <div className="sec-title">
                <h2 style={{fontSize:"inherit"}}>Why Choose ALC?</h2>
                <span>
                Apply and get pre-approved auto financing in minutes! Enjoy the best rates, low monthly payments, and significant savings. We make Auto Loans in Canada easy and affordable!
                </span>
            </div>
            <div className="why-choose-row">
                <img src={`/images/dotted-bg.webp`} className="first-img" alt="A repeating pattern of grey colored dots on a transparent background, creating a visually striking and rhythmic design."/>
                <img src={`/images/round.webp`} className="last-img" alt="A plain bold red circle against a transparent background."/>
                <div className="grida">
                    {Object.entries(whyChoose).map(([key, why]) => (
                        <div key={key} className="grida-item">
                            <div className="grida-img">
                                <img src={`/images/${why.img}`} alt={why.alt} />
                            </div>
                            <h3 className="grida-title" style={{margin:"0"}}>{why.title}</h3>
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
