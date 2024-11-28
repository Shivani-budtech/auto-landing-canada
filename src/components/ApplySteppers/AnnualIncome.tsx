import React, { useState } from 'react';


const AnnualIncome = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);
    const remainingSteps = 10 - 3 - 1;
    const remainingMinutes = Math.ceil((remainingSteps / 10) * 3);

    const handleBack = () => {
        setHasError(0);
        setalcStep('income_type');
    }

    const handleNext = () => {
        if (formData.annual_income === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setalcStep(''); // Move to the next step
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, annual_income: e.target.value });
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
                <div className='stepper-text-input'>
                    <span className="input-guide" style={{ marginLeft: "15px" }}>Round to Nearest Dollar</span>
                    <span className='dollar-input'>
                        <input type='number' className='' value={formData.annual_income} placeholder="Annual Income" name="annual_income" onChange={handleChange} />
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
                        {formData.annual_income === "" ? <li>Enter Annual Income</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default AnnualIncome;
