import React, { useState } from 'react';


const EmploymentStatus = ({ formData, setFormData, setalcStep }) => {
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
        setalcStep('credit_rating');
    }

    const handleNext = () => {
        if (formData.employment_status === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            if (formData.employment_status === "employed") {
                setalcStep('income_type'); 
            } else if (formData.employment_status === "self-employed") {
                setalcStep('income_type'); 
            } else if (formData.employment_status === "student") {
                setalcStep('do_you_work');
            } else if (formData.employment_status === "retired") {
                setalcStep('monthly_income');
            } else if (formData.employment_status === "other") {
                setalcStep('income_source');
            }
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, employment_status: e.target.value });
    };
    return (
        <div className='stepper-content'>
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
                                    name="employment_status"
                                    checked={formData.employment_status === option.val}
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
                        {formData.employment_status === "" ? <li>Employment Status is required</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default EmploymentStatus;
