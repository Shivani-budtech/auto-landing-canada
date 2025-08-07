import React from 'react';
import './index.css';
import '../../responsive.css';
function waysToBuy() {
   
    return (
        <section className="ways-to-buy container">
            
            <div className="info">
               <h2 className="way-desc">Get pre-approved for a car loan from the comfort of your home through web, mobile or tablet</h2>
            </div>
            <div className="content">
                <img src={`/images/car_app.webp`} alt="A smartphone displaying an auto loan app, a car loan application marked 'approved,' and a red SUV, symbolizing vehicle financing with a red shape behind all." />
            </div>
        </section>
    );
}

export default waysToBuy;
