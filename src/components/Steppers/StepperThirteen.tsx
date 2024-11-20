import React from 'react';


const StepperThirteen = ({ formData, setFieldValue, nextStep, prevStep, errors, touched, total_steps, alcStep }) => {
    const remainingSteps = total_steps - alcStep - 1;
    const remainingMinutes = Math.ceil((remainingSteps / total_steps) * 3);
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Are you a Canadian citizen or permanent resident?</span>
                </div>
                <span className='stepper-time'>{remainingMinutes} minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='inline-radio-input'>
                    <div className="inline-radio-row-gap">
                        <div className="inline-radio-gap">
                            <label>
                                <span>
                                    Yes
                                </span>
                                <input
                                    type='radio'
                                    name="canadian_citizen"
                                    value="yes"
                                    checked={formData.canadian_citizen === "yes"}
                                    onChange={(e) => setFieldValue("canadian_citizen", e.target.value)} />
                            </label>
                        </div>
                        <div className="inline-radio-gap">
                            <label>
                                <span>
                                    No
                                </span>
                                <input
                                    type='radio'
                                    name="canadian_citizen"
                                    value="no"
                                    checked={formData.canadian_citizen === "no"}
                                    onChange={(e) => setFieldValue("canadian_citizen", e.target.value)} />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Do you have a valid Canadian driver's licence?</span>
                </div>
            </div>
            <div className="stepper-input">
                <div className='inline-radio-input'>
                    <div className="inline-radio-row-gap">
                        <div className="inline-radio-gap">
                            <label>
                                <span>
                                    Yes
                                </span>
                                <input
                                    type='radio'
                                    name="canadian_licence"
                                    value="yes"
                                    checked={formData.canadian_licence === "yes"}
                                    onChange={(e) => setFieldValue("canadian_licence", e.target.value )} />
                            </label>
                        </div>
                        <div className="inline-radio-gap">
                            <label>
                                <span>
                                    No
                                </span>
                                <input
                                    type='radio'
                                    name="canadian_licence"
                                    value="no"
                                    checked={formData.canadian_licence === "no"}
                                    onChange={(e) => setFieldValue("canadian_licence", e.target.value)} />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='stepper-btn'>
                <button type='button' className='secondary-btn' onClick={prevStep}>Back</button>
                <button type='button' className='primary-btn' onClick={nextStep}>Continue</button>
            </div>
        </div>
    );
}

export default StepperThirteen;
