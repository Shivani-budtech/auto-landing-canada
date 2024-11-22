import React from 'react';
import './index.css';
import '../../responsive.css';
function HowWorksGrid() {
    const Array = [
        {
            title: "Online Auto Financing",
            img: "online_fin.png",
            desc: "Get approved without having to leave the comfort of your home",
        },
        {
            title: "Guides",
            img: "guide.png",
            desc: "Guides covering registration, insurance, buying/selling, licence renewal and much more",
        },
        {
            title: "Car Loan Calculator",
            img: "calc.png",
            desc: "Try out our car loan calculator to see what you can expect your payments to be",
        },
        {
            title: "Canadian Car Blog",
            img: "car_blog.png",
            desc: "Over 500 blog posts covering everything about car and auto financing in Canada",
        },
        {
            title: "Bad Credit Car Loans",
            img: "verified.png",
            desc: "No matter your credit issues there are programs available to help get you approved",
        },
        {
            title: "Lowest Rates",
            img: "low_arr.png",
            desc: "We work with a vast network of lenders who offer the lowest car rates in Canada",
        },
    ];
    return (
        <section className="how-works-grid container">
            <div className="sec-title">
                What Sets Us Apart 
                <span>
                    Discover a new standard in car financing and immerse yourself in an exceptional experience that sets us apart.
                </span>
            </div>
            <div className="how-works-grid-row">
                <img src={require("../../images/dotted-bg.png")} className="first-img" />
                <img src={require("../../images/round.png")} className="last-img" />
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
