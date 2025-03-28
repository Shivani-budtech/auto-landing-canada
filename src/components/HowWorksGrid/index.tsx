import React from 'react';
import './index.css';
import '../../responsive.css';
function HowWorksGrid() {
    const Array = [
        {
            title: "Fast Approvals Across Canada",
            img: "online_fin.webp",
            desc: " Our streamlined application process ensures you get approved for your car loan in minutes, no matter where you are in Canada.",
        },
        {
            title: "Lowest Car Finance Rates for Every Budget",
            img: "guide.webp",
            desc: "Enjoy some of the lowest car finance rates in Canada, with flexible payment plans tailored to your financial needs.",
        },
        {
            title: "Inclusive Financing for All Credit Types",
            img: "calc.webp",
            desc: "Whether you have good credit, bad credit, or no credit, we specialize in securing auto loans for every Canadian driver.",
        },
        {
            title: "Nationwide Network for All Makes and Models",
            img: "car_blog.webp",
            desc: "From compact cars to SUVs, we provide car financing in Canada for all vehicle types, ensuring reliable service across the country.",
        },
        {
            title: "Customer-First Approach with Expert Support",
            img: "verified.webp",
            desc: "Our team is dedicated to guiding you every step of the way, offering personalized advice to help you secure the best auto loan rates in Canada with ease.",
        },
        {
            title: "Save Time and Money with Tailored Solutions",
            img: "low_arr.webp",
            desc: "Our efficient process and customized online car loan options help you save both time and money, getting you behind the wheel faster!",
        },
    ];
    return (
        <section className="how-works-grid container">
            <div className="sec-title">
            What Makes Our Online Car Loan Process Stand Out?
                <span>
                We are here to empower you to secure the best auto finance rates in Canada that help you drive towards your financial goals with confidence.

                </span>
            </div>
            <div className="how-works-grid-row">
                <img src={`/images/dotted-bg.webp`} className="first-img" />
                <img src={`/images/round.webp`} className="last-img" />
                <div className="grida">
                    {Object.entries(Array).map(([key, why]) => (
                        <div key={key} className="grida-item">
                            <div className="grida-img">
                                <img src={`/images/${why.img}`} />
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
