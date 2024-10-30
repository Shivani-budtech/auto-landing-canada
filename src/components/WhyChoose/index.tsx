import React from 'react';
import './index.css';
import '../../responsive.css';
function WhyChoose() {
    const whyChoose = [
        {
            title: "Get Any Make and Model",
            img: "wheel.png",
            desc: "Step into variety with Auto Lending Canada. From economy to luxury, your ideal vehicle awaits.",
            link: "#",
        },
        {
            title: "99% Guaranteed Approval",
            img: "approval.png",
            desc: "Navigate auto financing with ease. Our customized options align with your budget for a smooth purchase.",
            link: "#",
        },
        {
            title: "24/7 Accepting Applications",
            img: "24-7.png",
            desc: "Our dedicated team is here 24/7 to ensure a seamless and top--tier application process.",
            link: "#",
        },
    ];
    return (
        <section className="why-choose">
            <div className="sec-title">
                Why Choose ALC?
                <span>
                    Discover a new standard in car financing and immerse yourself in an
                    exceptional experience that sets us apart.
                </span>
            </div>
            <div className="why-choose-row">
                <img src={require("./dotted-bg.png")} className="first-img" />
                <img src={require("./round.png")} className="last-img" />
                <div className="grida">
                    {Object.entries(whyChoose).map(([key, why]) => (
                        <div key={key} className="grida-item">
                            <div className="grida-img">
                                <img src={require(`./${why.img}`)} />
                            </div>
                            <div className="grida-title">{why.title}</div>
                            <div className="grida-desc">{why.desc}</div>
                            <div className="grida-link">
                                <a href={why.link}>Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChoose;
