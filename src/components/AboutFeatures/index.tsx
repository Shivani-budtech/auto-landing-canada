import React from 'react';
import './index.css';
import '../../responsive.css';
function AboutFeatures() {
    const whyChoose = [
        {
            title: "Fast Approval Process",
            img: "safe.webp",
            desc: "We offer a quick and seamless approval process, ensuring you can secure your auto loan and hit the road without delay.",
        },
        {
            title: "Affordable Rate",
            img: "fast.webp",
            desc: "Enjoy the lowest interest rates in Canada and customizable payment options designed to fit your budget and lifestyle.",
        },
        {
            title: "All Credit Types Welcome",
            img: "chat.webp",
            desc: "Our inclusive financing solutions ensure everyone, regardless of credit history, can access reliable and affordable car loans.",
        },
        {
            title: "Nationwide Service",
            img: "reference.webp",
            desc: "Serving customers across Canada, we’re committed to making car financing easy and stress-free with personalized support every step of the way.",
        },
    ];
    return (
        <section className="about-features container">
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutFeatures;
