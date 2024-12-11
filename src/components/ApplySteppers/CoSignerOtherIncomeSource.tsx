import React, { useState } from 'react';


const CoSignerOtherIncomeSource = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);
    const creditOptions = [
        {
            'title': 'Long Term Disability',
            'val': 'Long Term Disability'
        },
        {
            'title': 'Spousal Support / Alimony',
            'val': 'Spousal Support / Alimony'
        },
        {
            'title': 'Child Support',
            'val': 'Child Support'
        },
        {
            'title': 'Social Assistance / Welfare',
            'val': 'Social Assistance / Welfare'
        },
        {
            'title': 'Maternity Leave',
            'val': 'Maternity Leave'
        },
        {
            'title': 'Baby Bonus / Child Tax',
            'val': 'Baby Bonus / Child Tax'
        },
        {
            'title': 'Unemployed / EI',
            'val': 'Unemployed / EI'
        },
        {
            'title': 'Other / Not Listed',
            'val': 'Other / Not Listed'
        }
    ];

    const handleBack = () => {
        setHasError(0);
        setalcStep('co_signer_employment_status');
    }

    const handleNext = () => {
        if (formData.co_signer_income_source === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setalcStep('co_signer_monthly_income');
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, co_signer_income_source: e.target.value });
    };
    return (
        <div className='stepper-content'>
            <div className="stepper-title-desc">
                Co-signer details
            </div>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>What is your primary source of income?</span>
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
                                    name="co_signer_income_source"
                                    checked={formData.co_signer_income_source === option.val}
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
                    Your employment status will help determine the best vehicle and financing options for you.
                </div>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.co_signer_income_source === "" ? <li>Please select one</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default CoSignerOtherIncomeSource;
