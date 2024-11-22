import React from 'react';
import './index.css';


function StepsTOFollow() {
    return (
        <section className='steps-sec'>
            <div className="container">
                <div className="steps-row">
                    <div className='steps-to-follow'>
                        <img src={require("../../images/step_1.png")} />
                        <p>Our online application takes less than 60 seconds</p>
                    </div>
                    <div className='steps-to-follow'>
                        <img src={require("../../images/step_2.png")} />
                        <p>Get matched with one of our amazing partners</p>
                    </div>
                    <div className='steps-to-follow'>
                        <img src={require("../../images/step_3.png")} />
                        <p>We make sure you are getting the best possible deal</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StepsTOFollow;
