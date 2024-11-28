import React, { useState } from 'react';


const IncomeType = ({ formData, setFormData, setalcStep }) => {
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
    const remainingSteps = 10 - 3 - 1;
    const remainingMinutes = Math.ceil((remainingSteps / 10) * 3);

    const handleBack = () => {
        setHasError(0);
        if(formData.employment_status === "student") {
            setalcStep('do_you_work');
        } else {
            setalcStep('employment_status');
        }
    }

    const handleNext = () => {
        if (formData.income_type === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            if (formData.income_type === "monthly") {
                setalcStep('monthly_income');
            } else if (formData.income_type === "other") {
                setalcStep('monthly_income');
            } else if (formData.income_type === "annual") {
                setalcStep('annual_income');
            } else if (formData.income_type === "hourly") {
                setalcStep('hourly_income');
            }
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, income_type: e.target.value });
    };
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Income Details. Please Select One:</span>
                </div>
                <span className='stepper-time'>{remainingMinutes} minutes from finish</span>
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
                                    name="income_type"
                                    checked={formData.income_type === option.val}
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
                    Your income details help us make sure your vehicle payments are easy and affordable.
                </div>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.income_type === "" ? <li>Please select one</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default IncomeType;
