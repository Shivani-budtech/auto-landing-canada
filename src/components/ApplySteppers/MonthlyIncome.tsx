import React, { useState } from 'react';


const MonthlyIncome = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);

    const handleBack = () => {
        setHasError(0);
        if(formData.employment_status === "retired") {
            setalcStep('employment_status');
        } else if (formData.employment_status === "student") {
            setalcStep('do_you_work');
        } else if (formData.employment_status === "other") {
            setalcStep('income_source');
        } else {
            setalcStep('income_type');
        }
    }

    const handleNext = () => {
        if (formData.monthly_income === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setalcStep('years_of_income'); // Move to the next step
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, monthly_income: e.target.value });
    };
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>What is your monthly income before taxes & deductions?</span>
                </div>
                <span className='stepper-time'>2 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-text-input'>
                    <span className="input-guide" style={{ marginLeft: "15px" }}>Round to Nearest Dollar</span>
                    <span className='dollar-input'>
                        <input type='number' className='' value={formData.monthly_income} placeholder="Monthly Income" name="monthly_income" onChange={handleChange} />
                    </span>
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
                        {formData.monthly_income === "" ? <li>Enter Monthly Income</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default MonthlyIncome;
