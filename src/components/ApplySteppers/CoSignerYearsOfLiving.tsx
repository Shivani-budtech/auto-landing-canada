import React, { useState } from 'react';


const CoSignerYearsOfLiving = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);

    const handleBack = () => {
        setHasError(0);
        setalcStep('co_signer_home_address');
    }

    const handleNext = () => {
        if (formData.co_signer_living_year === "" && formData.co_signer_living_month === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setalcStep('co_signer_home_details'); // Move to the next step
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        if (e.target.value <= 100 && e.target.value >= 0) {
            setFormData({ ...formData, co_signer_living_year: e.target.value });
        }
    };
    const handleChangeMonth = (e) => {
        setHasError(0);
        if (e.target.value <= 12 && e.target.value >= 0) {
            setFormData({ ...formData, co_signer_living_month: e.target.value });
        }
    }


    return (
        <div className='stepper-content'>
            <div className="stepper-title-desc">
                Co-applicant details
            </div>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <h2 className='stepper-question-title'>How long have you been living at your current address?</h2>
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
                                <input type='number' className='' value={formData.co_signer_living_year} placeholder="0" name="co_signer_income_year" onChange={handleChange} />
                            </span>
                        </div>
                    </div>
                    <div className='stepper-input'>
                        <span>
                            Months
                        </span>
                        <div className="form-input">
                            <span className='text-input'>
                                <input type='number' className='' value={formData.co_signer_living_month} placeholder="0" name="co_signer_income_month" onChange={handleChangeMonth} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='secondary-btn' onClick={handleBack}>Back</button>
                    <button type='button' className='primary-btn' onClick={handleNext}>Continue</button>
                </div>
                <h3 className="stepper-desc">
                    If you just moved in please enter 1 month to continue.
                </h3>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.co_signer_living_year === "" && formData.co_signer_living_month === "" ? <li>Entry cannot be 0 years and 0 months</li> : ""}
                    </ul> : ""
                }
            </div>
        </div>
    );
}

export default CoSignerYearsOfLiving;
