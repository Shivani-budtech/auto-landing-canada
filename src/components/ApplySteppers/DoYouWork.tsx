import React, { useState } from 'react';


const DoYouWork = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);

    const handleBack = () => {
        setHasError(0);
        setalcStep('employment_status');
    }

    const handleNext = () => {
        if (formData.do_you_work === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            if (formData.do_you_work === "yes") {
                setalcStep('income_type');
            } else {
                setalcStep('monthly_income');
            }
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, do_you_work: e.target.value });
    };
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Are you currently working while attending school?</span>
                </div>
                <span className='stepper-time'>3 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className="inline-radio-input">
                    <div className="inline-radio-row">
                        <div className="inline-radio">
                            <label>
                                <span>Yes</span>
                                <input
                                    type='radio'
                                    name="do_you_work"
                                    value="yes"
                                    checked={formData.do_you_work === "yes"}
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className="inline-radio">
                            <label>
                                <span>No</span>
                                <input
                                    type='radio'
                                    name="do_you_work"
                                    value="no"
                                    checked={formData.do_you_work === "no"}
                                    onChange={handleChange} />
                            </label>
                        </div>
                    </div>
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='secondary-btn' onClick={handleBack}>Back</button>
                    <button type='button' className='primary-btn' onClick={handleNext}>Continue</button>
                </div>
                <div className="stepper-desc">
                    Your income details help us make sure your vehicle payments are easy and affordable.
                </div>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.do_you_work === "" ? <li>Please select one</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default DoYouWork;
