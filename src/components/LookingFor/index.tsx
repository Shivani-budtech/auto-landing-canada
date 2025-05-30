import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../responsive.css';
import './index.css';

function LookingFor() {

    

    const lookingTabs = [
        {
            title: "Coupe"
        },
        {
            title: "Hatchback"
        },
        {
            title: "Sedan"
        },
        {
            title: "Minivan",
        },
        {
            title: "SUV & Crossover"
        },
        {
            title: "Truck"
        },
    ];
    const [activeTab, setActiveTab] = useState(lookingTabs[0].title);
    function changeTab(e,currstape) {
        setActiveTab(currstape);
    }
    const imagePath = "../../images/";
    return (
        <section className="looking-for container">
            <h2 className="sec-title">
            Fast Auto Loan Financing for All Makes and Models
            </h2>
            <div className="looking-for-row">
                <div className="content">
                    <img src={`/images/single-car.webp`} alt="A vibrant red Dodge Challenger in front of a large red circle, showcasing its sleek design and sporty appearance." />
                </div>
                <div className="info">
                    <div className="desc">What type of vehicle are you looking for?</div>
                    <div className="looking-for-tabs">
                        {Object.entries(lookingTabs).map(([key, looking]) => (
                            <div key={key} className={activeTab == looking.title ? "tab active" : "tab"} onClick={(e) => changeTab(e,looking.title)}>
                                {looking.title}
                            </div>
                        ))}
                    </div>
                    <Link to={{ pathname: '/apply', }} state={{ vehicle_type: activeTab }} className="primary-btn" >
                        Apply Now
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default LookingFor;
