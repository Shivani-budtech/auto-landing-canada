import React from 'react';
import './index.css';
import '../../responsive.css';
function waysToBuy() {
    const waysToBuy = [
        {
            img: "budget.webp",
            title: "Budget Discovery",
            desc: "Auto financing made easy! Use our smart tools to find the perfect budget for your dream car and get the best auto loans!",
            alt: "A dollar sign in the middle of a circle with 2 lines representing the tire or wheel of the vehicle."
        },
        {
            img: "finance.webp",
            title: "Financing Approval",
            desc: "Apply now to get a pre-approved loan for your car in minutes! We provide the best auto financing in Canada with a hassle-free process that ensures you secure the best auto loan rates.",
            alt:"An image of a car with a check mark inside of a shape representing vehicle financing."
        },
        {
            img: "vehicle.webp",
            title: "Vehicle Selection",
            desc: "Choose the perfect vehicle for your lifestyle and budget. Auto financing with us makes finding your dream car easier than ever - with the best Car Loan Rates! Apply Now!",
            alt: "A circle with a rectangle on top with the words ‘approved’ written on top displaying an auto loan or car loan application approval."
        },
    ];
    return (
        <section className="ways-to-buy container">
            
            <div className="info">
                {Object.entries(waysToBuy).map(([key, ways]) => (
                    <div key={key} className="way-sec-container">
                        <div className="way-section">
                            <div className="way-img">
                                <img src={`/images/${ways.img}`} alt={ways.alt} />
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
                <img src={`/images/car_app.webp`} alt="A smartphone displaying an auto loan app, a car loan application marked 'approved,' and a red SUV, symbolizing vehicle financing with a red shape behind all." />
            </div>
        </section>
    );
}

export default waysToBuy;
