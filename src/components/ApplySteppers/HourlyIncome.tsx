import React, { useState } from 'react';


const HourlyIncome = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);

    const handleBack = () => {
        setHasError(0);
        setalcStep('income_type');
    }

    const handleNext = () => {
        if (formData.hourly_income === "" || formData.hour_week === "") {
            setHasError(1);
        } else {
            setHasError(0);
            setalcStep('years_of_income'); // Move to the next step
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, hourly_income: e.target.value });
    };
    const handleChangeHour = (e) => {
        setHasError(0);
        setFormData({ ...formData, hour_week: e.target.value });
    };
    return (
        <div className='stepper-content'>
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
                        <input type='number' className='' value={formData.hourly_income} placeholder="Hourly wage" name="hourly_income" onChange={handleChange} />
                    </span>
                </div>
                <div className='stepper-text-input'>
                    <span className="input-guide" style={{ marginLeft: "15px" }}>Round to Nearest Hour</span>
                    <span className='text-input'>
                        <input type='number' className='' value={formData.hour_week} placeholder="Average Hours per week" name="hour_week" onChange={handleChangeHour} />
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
                        {formData.hourly_income === "" ? <li>Enter Hourly Income</li> : ""}
                        {formData.hour_week === "" ? <li>Enter Average hours per week you work</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default HourlyIncome;
