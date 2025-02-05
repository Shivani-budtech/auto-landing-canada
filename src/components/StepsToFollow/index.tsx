import React from 'react';
import './index.css';


function StepsTOFollow() {
    return (
        <section className='steps-sec'>
            <div className="container">
                <div className="steps-row">
                    <div className='steps-to-follow'>
                        <img src={require("../../images/step_1.webp")} />
                        <p>One simple application done in 3 minutes or less.</p>
                    </div>
                    <div className='steps-to-follow'>
                        <img src={require("../../images/step_2.webp")} />
                        <p>We'll get you the best rates to compare.</p>
                    </div>
                    <div className='steps-to-follow'>
                        <img src={require("../../images/step_3.webp")} />
                        <p>We have access to 100+ dealerships across the nation!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StepsTOFollow;
