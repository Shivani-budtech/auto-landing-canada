import React from 'react';
import './index.css';


function StepsTOFollow() {
    return (
        <section className='steps-sec'>
            <div className="container">
                <div className="steps-row">
                    <div className='steps-to-follow'>
                        <img src={`/images/step_1.webp`} />
                        <h2>One simple application done in 3 minutes or less.</h2>
                    </div>
                    <div className='steps-to-follow'>
                        <img src={`/images/step_2.webp`} />
                        <h2>We'll get you the best auto loan rates to compare.
                        </h2>
                    </div>
                    <div className='steps-to-follow'>
                        <img src={`/images/step_3.webp`} />
                        <h2>We have access to 100+ dealerships across the nation!</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StepsTOFollow;
