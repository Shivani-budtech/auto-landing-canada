import React, { useState } from 'react';


const CoSignerEmploymentStatus = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);
    const creditOptions = [
        {
            'title': 'Employed',
            'val': 'employed'
        },
        {
            'title': 'Student',
            'val': 'student'
        },
        {
            'title': 'Self-Employed',
            'val': 'self-employed'
        },
        {
            'title': 'Retired / Pension',
            'val': 'retired'
        },
        {
            'title': 'Other',
            'val': 'other'
        }
    ];

    const handleBack = () => {
        setHasError(0);
        setalcStep('co_signer_name');
    }

    const handleNext = () => {
        if (formData.co_signer_employment_status === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            if (formData.co_signer_employment_status === "employed") {
                setalcStep('co_signer_income_type');
            } else if (formData.co_signer_employment_status === "self-employed") {
                setalcStep('co_signer_income_type');
            } else if (formData.co_signer_employment_status === "student") {
                setalcStep('co_signer_do_you_work');
            } else if (formData.co_signer_employment_status === "retired") {
                setalcStep('co_signer_monthly_income');
            } else if (formData.co_signer_employment_status === "other") {
                setalcStep('co_signer_income_source');
            }
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, co_signer_employment_status: e.target.value });
    };
    return (
        <div className='stepper-content'>
            <div className="stepper-title-desc">
                Co-applicant details
            </div>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>What is your current employment status?</span>
                </div>
                <span className='stepper-time'>3 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-option-input'>
                    {Object.entries(creditOptions).map(([key, option]) => (
                        <div key={key} className="option-radio">

                            <label>
                                <span>{option.title}</span>
                                <input
                                    type="radio"
                                    value={option.val}
                                    name="co_signer_employment_status"
                                    checked={formData.co_signer_employment_status === option.val}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                    ))}
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='secondary-btn' onClick={handleBack}>Back</button>
                    <button type='button' className='primary-btn' onClick={handleNext}>Continue</button>
                </div>
                <div className="stepper-desc">
                    Your employment status helps us find the best vehicle and financing options for you.
                </div>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.co_signer_employment_status === "" ? <li>Employment Status is required</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default CoSignerEmploymentStatus;
