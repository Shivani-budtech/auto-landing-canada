import React, { useState } from 'react';


const CoSignerIncomeType = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);
    const SalaryOptions = [
        {
            'title': 'I Know My Annual Salary',
            'val': 'annual'
        },
        {
            'title': 'I Know My Monthly Income',
            'val': 'monthly'
        },
        {
            'title': 'I Know My Hourly Wage',
            'val': 'hourly'
        },
        {
            'title': 'Other',
            'val': 'other'
        }
    ];

    const handleBack = () => {
        setHasError(0);
        if (formData.co_signer_employment_status === "student") {
            setalcStep('co_signer_do_you_work');
        } else {
            setalcStep('co_signer_employment_status');
        }
    }

    const handleNext = () => {
        if (formData.co_signer_income_type === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            if (formData.co_signer_income_type === "monthly") {
                setalcStep('co_signer_monthly_income');
            } else if (formData.co_signer_income_type === "other") {
                setalcStep('co_signer_monthly_income');
            } else if (formData.co_signer_income_type === "annual") {
                setalcStep('co_signer_annual_income');
            } else if (formData.co_signer_income_type === "hourly") {
                setalcStep('co_signer_hourly_income');
            }
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, co_signer_income_type: e.target.value });
    };
    return (
        <div className='stepper-content'>
            <div className="stepper-title-desc">
                Co-signer details
            </div>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Please provide your income details by selecting one of the options below:</span>
                </div>
                <span className='stepper-time'>3 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-option-input'>
                    {Object.entries(SalaryOptions).map(([key, option]) => (
                        <div key={key} className="option-radio">

                            <label>
                                <span>{option.title}</span>
                                <input
                                    type="radio"
                                    value={option.val}
                                    name="co_signer_income_type"
                                    checked={formData.co_signer_income_type === option.val}
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
                    Your income details help us ensure that your vehicle payments are manageable and within your budget.
                </div>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.co_signer_income_type === "" ? <li>Please select one</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default CoSignerIncomeType;
