import React from 'react';
import './index.css';
import '../../responsive.css';
function HowWorksGrid() {
    const Array = [
        {
            title: "Fast Approvals Across Canada",
            img: "online_fin.webp",
            desc: " Our streamlined application process ensures you get approved for your car loan in minutes, no matter where you are in Canada.",
            alt: ''
        },
        {
            title: "Lowest Car Finance Rates for Every Budget",
            img: "guide.webp",
            desc: "Enjoy some of the lowest car finance rates in Canada, with flexible payment plans tailored to your financial needs.",
            alt: 'A rectangular shape with curved edges on the left and straight edges on the right, with a thick line at the bottom'
        },
        {
            title: "Inclusive Financing for All Credit Types",
            img: "calc.webp",
            desc: "Whether you have good credit, bad credit, or no credit, we specialize in securing auto loans for every Canadian driver.",
            alt: 'Signs of plus (+) and minus (-) on the left and right, with the signs of multiplication (x) and division (÷) below on the left and right.'
        },
        {
            title: "Nationwide Network for All Makes and Models",
            img: "car_blog.webp",
            desc: "From compact cars to SUVs, we provide car financing in Canada for all vehicle types, ensuring reliable service across the country.",
            alt: ''
        },
        {
            title: "Customer-First Approach with Expert Support",
            img: "verified.webp",
            desc: "Our team is dedicated to guiding you every step of the way, offering personalized advice to help you secure the best auto loan rates in Canada with ease.",
            alt: ''
        },
        {
            title: "Save Time and Money with Tailored Solutions",
            img: "low_arr.webp",
            desc: "Our efficient process and customized online car loan options help you save both time and money, getting you behind the wheel faster!",
            alt: "A minimalist down arrow with a curved line from the top on a transparent background."
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
                <img src={`/images/dotted-bg.webp`} className="first-img" alt="A repeating pattern of grey colored dots on a transparent background, creating a visually striking and rhythmic design."/>
                <img src={`/images/round.webp`} className="last-img" alt="A solid red circle on a transparent background."/>
                <div className="grida">
                    {Object.entries(Array).map(([key, why]) => (
                        <div key={key} className="grida-item">
                            <div className="grida-img">
                                <img src={`/images/${why.img}`} alt={`${why.alt}`} />
                            </div>
                            <div className='grida-desc-sec'>
                            <h3 className="grida-title">{why.title}</h3>
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
