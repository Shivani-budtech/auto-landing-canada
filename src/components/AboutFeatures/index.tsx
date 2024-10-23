import React from 'react';
import './index.css';
function AboutFeatures() {
    const whyChoose = [
        {
            title: "Safe and Confidential",
            img: "safe.png",
            desc: "Your privacy is our top priority. Our platform utilizes advanced encryption to ensure all transactions are secure and confidential.",
        },
        {
            title: "Fast Solutions",
            img: "fast.png",
            desc: "We offer efficient solutions for all your needs, helping you secure your dream vehicle and financing quickly and effortlessly.",
        },
        {
            title: "Customer Care",
            img: "chat.png",
            desc: "Our dedicated customer service team aims to build long-lasting relationships through active listening and problem-solving.",
        },
        {
            title: "Referral Program",
            img: "reference.png",
            desc: "We value loyalty. Our referral program rewards you for spreading the word about us, providing incentives for each successful referral you make.",
        },
    ];
    return (
        <section className="why-choose">
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutFeatures;
