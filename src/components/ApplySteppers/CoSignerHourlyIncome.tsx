import React, { useState } from 'react';


const CoSignerHourlyIncome = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);

    const handleBack = () => {
        setHasError(0);
        setalcStep('co_signer_income_type');
    }

    const handleNext = () => {
        if (formData.co_signer_hourly_income === "" || formData.co_signer_hour_week === "") {
            setHasError(1);
        } else {
            setHasError(0);
            setalcStep('co_signer_years_of_income'); // Move to the next step
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, co_signer_hourly_income: e.target.value });
    };
    const handleChangeHour = (e) => {
        setHasError(0);
        setFormData({ ...formData, co_signer_hour_week: e.target.value });
    };
    return (
        <div className='stepper-content'>
            <div className="stepper-title-desc">
                Co-signer details
            </div>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>What is your hourly wage?</span>
                </div>
                <span className='stepper-time'>2 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-text-input'>
                    <span className="input-guide" style={{ marginLeft: "15px" }}>Round to Nearest Dollar</span>
                    <span className='dollar-input'>
                        <input type='number' className='' value={formData.co_signer_hourly_income} placeholder="Hourly wage" name="co_signer_hourly_income" onChange={handleChange} />
                    </span>
                </div>
                <div className='stepper-text-input'>
                    <span className="input-guide" style={{ marginLeft: "15px" }}>Round to Nearest Hour</span>
                    <span className='text-input'>
                        <input type='number' className='' value={formData.co_signer_hour_week} placeholder="Average Hours per week" name="co_signer_hour_week" onChange={handleChangeHour} />
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
                        {formData.co_signer_hourly_income === "" ? <li>Enter Hourly Income</li> : ""}
                        {formData.co_signer_hour_week === "" ? <li>Enter Average hours per week you work</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default CoSignerHourlyIncome;
