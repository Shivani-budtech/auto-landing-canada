import React from 'react';
import './index.css';
import '../../responsive.css';
function waysToBuy() {
    const waysToBuy = [
        {
            img: "budget.webp",
            title: "Budget Discovery",
            desc: "Start your car-buying journey by discovering your budget. Calculate how much you can comfortably spend on your dream car with our easy-to-use tools.",
        },
        {
            img: "finance.webp",
            title: "Financing Approval",
            desc: "Get pre-approved for your car loan in minutes! Our hassle-free financing process ensures you secure the best rates in Canada.",
        },
        {
            img: "vehicle.webp",
            title: "Vehicle Selection",
            desc: "Choose the perfect vehicle for your lifestyle and budget. With financing secured, finding your dream car has never been easier!",
        },
    ];
    return (
        <section className="ways-to-buy container">
            
            <div className="info">
                {Object.entries(waysToBuy).map(([key, ways]) => (
                    <div key={key} className="way-sec-container">
                        <div className="way-section">
                            <div className="way-img">
                                <img src={require(`../../images/${ways.img}`)} />
                            </div>
                            <div className="way-info">
                                <h2>{ways.title}</h2>
                                <div className="way-desc">{ways.desc}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="content">
                <img src={require(`../../images/car_app.webp`)} />
            </div>
        </section>
    );
}

export default waysToBuy;
