import React, { useState } from 'react';


const YearsOfLiving = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);

    const handleBack = () => {
        setHasError(0);
        setalcStep('home_address');
    }

    const handleNext = () => {
        if (formData.living_year === "" && formData.living_month === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setalcStep('home_details'); // Move to the next step
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        if (e.target.value <= 100 && e.target.value >= 0) {
            setFormData({ ...formData, living_year: e.target.value });
        }
    };
    const handleChangeMonth = (e) => {
        setHasError(0);
        if (e.target.value <= 12 && e.target.value >= 0) {
            setFormData({ ...formData, living_month: e.target.value });
        }
    }


    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>How long have you been living at your current address?</span>
                </div>
                <span className='stepper-time'>2 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-flex-input' style={{ margin: "30px 0" }}>
                    <div className='stepper-input'>
                        <span>
                            Years
                        </span>
                        <div className="form-input">
                            <span className='text-input'>
                                <input type='number' className='' value={formData.living_year} placeholder="0" name="income_year" onChange={handleChange} />
                            </span>
                        </div>
                    </div>
                    <div className='stepper-input'>
                        <span>
                            Months
                        </span>
                        <div className="form-input">
                            <span className='text-input'>
                                <input type='number' className='' value={formData.living_month} placeholder="0" name="income_month" onChange={handleChangeMonth} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='secondary-btn' onClick={handleBack}>Back</button>
                    <button type='button' className='primary-btn' onClick={handleNext}>Continue</button>
                </div>
                <div className="stepper-desc">
                    If you just moved in please enter 1 month to continue.
                </div>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.living_year === "" && formData.living_month === "" ? <li>Entry cannot be 0 years and 0 months</li> : ""}
                    </ul> : ""
                }
            </div>
        </div>
    );
}

export default YearsOfLiving;
