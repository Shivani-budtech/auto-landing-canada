import React, { useState } from 'react';


const CosignerDoYouWork = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);

    const handleBack = () => {
        setHasError(0);
        setalcStep('co_signer_employment_status');
    }

    const handleNext = () => {
        if (formData.co_signer_do_you_work === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            if (formData.co_signer_do_you_work === "yes") {
                setalcStep('co_signer_income_type');
            } else {
                setalcStep('co_signer_monthly_income');
            }
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, co_signer_do_you_work: e.target.value });
    };
    return (
        <div className='stepper-content'>
            <div className="stepper-title-desc">
                Co-signer details
            </div>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Are you currently employed while attending school?</span>
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
                                    name="co_signer_do_you_work"
                                    value="yes"
                                    checked={formData.co_signer_do_you_work === "yes"}
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
                                    checked={formData.co_signer_do_you_work === "no"}
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
                        {formData.co_signer_do_you_work === "" ? <li>Please select one</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default CosignerDoYouWork;
