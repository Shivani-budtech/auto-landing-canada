import React from 'react';
import './index.css';
import '../../responsive.css';
function HowWorksGrid() {
    const Array = [
        {
            title: "Fast Approvals Across Canada",
            img: "online_fin.webp",
            desc: "Our streamlined application process ensures you get approved for your car loan in minutes, no matter where you are in Canada.",
        },
        {
            title: "Competitive Rates for Every Budget",
            img: "guide.webp",
            desc: "Enjoy some of the lowest interest rates in the Canadian market, with flexible payment plans tailored to suit your financial needs.",
        },
        {
            title: "Inclusive Financing for All Credit Types",
            img: "calc.webp",
            desc: "Whether you have good credit, bad credit, or no credit, we specialize in securing auto loans for every Canadian driver.",
        },
        {
            title: "Nationwide Network for All Makes and Models",
            img: "car_blog.webp",
            desc: "From compact cars to SUVs, we finance vehicles of all makes and models, providing reliable service across Canada.",
        },
        {
            title: "Customer-First Approach with Expert Support",
            img: "verified.webp",
            desc: "Our team is dedicated to guiding you every step of the way, offering personalized advice to make car financing stress-free.",
        },
        {
            title: "Save Time and Money with Tailored Solutions",
            img: "low_arr.webp",
            desc: "Our efficient process and customized loan options help you save both time and money, putting you behind the wheel faster.",
        },
    ];
    return (
        <section className="how-works-grid container">
            <div className="sec-title">
                What Sets Us Apart 
                <span>
                    We stand out by empowering you to take charge of your auto loan and drive towards your financial goals with confidence
                </span>
            </div>
            <div className="how-works-grid-row">
                <img src={require("../../images/dotted-bg.webp")} className="first-img" />
                <img src={require("../../images/round.webp")} className="last-img" />
                <div className="grida">
                    {Object.entries(Array).map(([key, why]) => (
                        <div key={key} className="grida-item">
                            <div className="grida-img">
                                <img src={require(`../../images/${why.img}`)} />
                            </div>
                            <div className='grida-desc-sec'>
                            <div className="grida-title">{why.title}</div>
                            <div className="grida-desc">{why.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowWorksGrid;
