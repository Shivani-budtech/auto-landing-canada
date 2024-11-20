import React from 'react';

const StepperNine = ({ formData, setFieldValue, nextStep, prevStep, errors, touched, total_steps, alcStep }) => {

    const remainingSteps = total_steps - alcStep - 1;
    const remainingMinutes = Math.ceil((remainingSteps / total_steps) * 3);
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Where do you work?</span>
                </div>
                <span className='stepper-time'>{remainingMinutes} minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-flex-input'>
                    <div className='stepper-input input-text'>
                        <div className='stepper-text-input'>
                            <span className="input-guide">Company Name</span>
                            <span className='text-input'>
                                <input type='text' className='' name="company_name" value={formData.company_name} onChange={(e) => setFieldValue("company_name", e.target.value)} />
                            </span>
                        </div>
                    </div>
                    <div className='stepper-input input-text'>
                        <div className='stepper-text-input'>
                            <span className="input-guide">Job Title</span>
                            <span className='text-input'>
                                <input type='text' className='' name="job_title" value={formData.job_title} onChange={(e) => setFieldValue("job_title", e.target.value)} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='secondary-btn' onClick={prevStep}>Back</button>
                    <button type='button' className='primary-btn' onClick={nextStep}>Continue</button>
                </div>
                <div className="stepper-desc">
                    We won't come visit, but we need these details to confirm your employment status so you can get the best rates possible.
                </div>
            </div>
        </div>
    );
}

export default StepperNine;
