import React from 'react';
import './index.css';


function StepsTOFollow() {
    return (
        <section className='steps-sec-new'>
            <div className="container">
                <div className="steps-row-new ">
                    <div className='steps-to-follow'>
                        <img src={`/images/step_1.webp`} alt='Logo featuring the word “step” in black with bold red text "01" next to it.' />
                        <h2>Start by discovering your real budget — simply complete our quick online pre-approval application here.</h2>
                    </div>
                    <div className='steps-to-follow'>
                        <img src={`/images/step_2.webp`} alt='Logo featuring the word “step” in black with bold red text "02" next to it. '/>
                        <h2>We’ll match you with a trusted local dealership that only shows you vehicles you’re already approved for — no guesswork, no hassle.
                        </h2>
                    </div>
                    <div className='steps-to-follow'>
                        <img src={`/images/step_3.webp`} alt='Logo featuring the word “step” in black with bold red text "03" next to it.' />
                        <h2>Pick the car that suits you best, and you could be driving it within just 48 hours!</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StepsTOFollow;
