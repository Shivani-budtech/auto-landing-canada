import React from 'react';
import '../../responsive.css';
import './index.css';
function AboutFeatures() {
    const whyChoose = [
        {
            title: "Fast Approval Process",
            img: "safe.webp",
            desc: "We offer a quick and seamless approval process, including pre approved auto financing to ensure you can hit the road without delay.",
        },
        {
            title: "Affordable & Lowest Rates",
            img: "fast.webp",
            desc: "Enjoy the lowest car finance interest rates in Canada and customizable payment options designed to fit your budget and lifestyle.",
        },
        {
            title: "All Credit Types Welcome",
            img: "chat.webp",
            desc: "Our financing solutions, including a bad credit car loan ensures everyone, regardless of their credit history, can access reliable and affordable loans.",
        },
        {
            title: "Nationwide Service",
            img: "reference.webp",
            desc: "Serving customers across Canada, we’re committed to making auto car finance loans easy and stress-free with the lowest rates possible.",
        },
    ];
    return (
        <section className="about-features container">
            <div className="why-choose-row">
                <img src={`/images/dotted-bg.webp`} className="first-img" alt="A repeating pattern of grey colored dots on a transparent background, creating a visually striking and rhythmic design."/>
                <img src={`/images/round.webp`} className="last-img" alt="A plain bold red circle against a transparent background."/>
                <div className="grida">
                    {Object.entries(whyChoose).map(([key, why]) => (
                        <div key={key} className="grida-item">
                            <div className="grida-img">
                                <img src={`/images/${why.img}`} />
                            </div>
                            <h2 className="grida-title">{why.title}</h2>
                            <div className="grida-desc">{why.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutFeatures;
