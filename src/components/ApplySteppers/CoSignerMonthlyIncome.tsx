import React, { useState } from 'react';


const CoSignerMonthlyIncome = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);

    const handleBack = () => {
        setHasError(0);
        if (formData.co_signer_employment_status === "retired") {
            setalcStep('co_signer_employment_status');
        } else if (formData.co_signer_employment_status === "student") {
            setalcStep('co_signer_do_you_work');
        } else if (formData.co_signer_employment_status === "other") {
            setalcStep('co_signer_income_source');
        } else {
            setalcStep('co_signer_income_type');
        }
    }

    const handleNext = () => {
        if (formData.co_signer_monthly_income === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setalcStep('co_signer_years_of_income'); // Move to the next step
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        var value = e.target.value;
        const numericValue = value.replace(/[^0-9.]/g, "");
        const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        setFormData({ ...formData, co_signer_monthly_income: formattedValue });
    };
    return (
        <div className='stepper-content'>
            <div className="stepper-title-desc">
                Co-applicant details
            </div>
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
                        <input type='text' className='' value={formData.co_signer_monthly_income} placeholder="Monthly Income" name="monthly_income" onChange={handleChange} />
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
                        {formData.co_signer_monthly_income === "" ? <li>Enter Monthly Income</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default CoSignerMonthlyIncome;
