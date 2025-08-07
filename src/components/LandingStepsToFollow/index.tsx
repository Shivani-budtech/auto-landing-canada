import React from 'react';
import './index.css';


function StepsTOFollow() {
    return (
        <section className='steps-sec-new'>
            <div className="container">
                <div className="steps-row-new ">
                    <div className='steps-to-follow'>
                        <img src={`/images/step_1.webp`} alt='Logo featuring the word “step” in black with bold red text "01" next to it.' />
                        <h2>One simple application done in 3 minutes or less.</h2>
                    </div>
                    <div className='steps-to-follow'>
                        <img src={`/images/step_2.webp`} alt='Logo featuring the word “step” in black with bold red text "02" next to it. '/>
                        <h2>We'll get you the best auto loan rates to compare.
                        </h2>
                    </div>
                    <div className='steps-to-follow'>
                        <img src={`/images/step_3.webp`} alt='Logo featuring the word “step” in black with bold red text "03" next to it.' />
                        <h2>We have access to 100+ dealerships across the nation!</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StepsTOFollow;
