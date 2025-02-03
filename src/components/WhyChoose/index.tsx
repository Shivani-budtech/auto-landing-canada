import React from 'react';
import './index.css';
import '../../responsive.css';
import { Link } from "react-router-dom";
function WhyChoose() {
    const whyChoose = [
        {
            title: "Better Rates",
            img: "wheel.png",
            desc: "Choose us for car financing in Canada and enjoy unbeatable rates, flexible payments, and more money in your pocket!",
            link: "#",
        },
        {
            title: "Low Payments",
            img: "approval.png",
            desc: "With our low payments, you’ll save more while driving the car you love. Choose Canada’s trusted car loan provider!",
            link: "#",
        },
        {
            title: "Saving Money",
            img: "24-7.png",
            desc: "Get the best rates in Canada, low monthly payments, and save more with our tailored auto financing solutions.",
            link: "#",
        },
    ];
    return (
        <section className="why-choose container">
            <div className="sec-title">
                Why Choose ALC?
                <span>
                    Enjoy better rates, low monthly payments, and significant savings. We make car financing in Canada easy and affordable!
                </span>
            </div>
            <div className="why-choose-row">
                <img src={require("../../images/dotted-bg.png")} className="first-img" />
                <img src={require("../../images/round.png")} className="last-img" />
                <div className="grida">
                    {Object.entries(whyChoose).map(([key, why]) => (
                        <div key={key} className="grida-item">
                            <div className="grida-img">
                                <img src={require(`../../images/${why.img}`)} />
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
