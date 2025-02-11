import React, { useState } from 'react';
import './index.css';
import '../../responsive.css';
import { Link } from 'react-router-dom';

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
            <div className="sec-title">
                Quick Car Financing for All Makes and Models
            </div>
            <div className="looking-for-row">
                <div className="content">
                    <img src={`/images/single-car.webp`} />
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
