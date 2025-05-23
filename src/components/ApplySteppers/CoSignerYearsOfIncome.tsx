import React, { useState } from 'react';


const CoSignerYearsOfIncome = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);

    const handleBack = () => {
        setHasError(0);
        if (formData.co_signer_employment_status === "employed" || formData.co_signer_employment_status === "self-employed") {
            if (formData.co_signer_income_type === "monthly") {
                setalcStep('co_signer_monthly_income');
            } else if (formData.co_signer_income_type === "other") {
                setalcStep('co_signer_monthly_income');
            } else if (formData.co_signer_income_type === "annual") {
                setalcStep('co_signer_annual_income');
            } else if (formData.co_signer_income_type === "hourly") {
                setalcStep('co_signer_hourly_income');
            }
        } else if (formData.co_signer_employment_status === "student") {
            if (formData.co_signer_do_you_work === "yes") {
                if (formData.co_signer_income_type === "monthly") {
                    setalcStep('co_signer_monthly_income');
                } else if (formData.co_signer_income_type === "other") {
                    setalcStep('co_signer_monthly_income');
                } else if (formData.co_signer_income_type === "annual") {
                    setalcStep('co_signer_annual_income');
                } else if (formData.co_signer_income_type === "hourly") {
                    setalcStep('co_signer_hourly_income');
                }
            } else {
                setalcStep('co_signer_monthly_income');
            }
        } else if (formData.co_signer_employment_status === "retired" || formData.co_signer_employment_status === "other") {
            setalcStep('co_signer_monthly_income');
        }
    }

    const handleNext = () => {
        if (formData.co_signer_income_year === "" && formData.co_signer_income_month === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setalcStep('co_signer_where_do_you_work'); // Move to the next step
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        if (e.target.value <= 100 && e.target.value >= 0){
            setFormData({ ...formData, co_signer_income_year: e.target.value });
        }
    };
    const handleChangeMonth = (e) => {
        setHasError(0);
        if (e.target.value <= 12 && e.target.value >= 0) {
            setFormData({ ...formData, co_signer_income_month: e.target.value });
        }
    }


    return (
        <div className='stepper-content'>
            <div className="stepper-title-desc">
                Co-applicant details
            </div>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <h2 className='stepper-question-title'>For how long have you been receiving this income source?</h2>
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
                                <input type='number' className='' value={formData.co_signer_income_year} placeholder="0" name="co_signer_income_year" onChange={handleChange} />
                            </span>
                        </div>
                    </div>
                    <div className='stepper-input'>
                        <span>
                            Months
                        </span>
                        <div className="form-input">
                            <span className='text-input'>
                                <input type='number' className='' value={formData.co_signer_income_month} placeholder="0" name="co_signer_income_month" onChange={handleChangeMonth} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='secondary-btn' onClick={handleBack}>Back</button>
                    <button type='button' className='primary-btn' onClick={handleNext}>Continue</button>
                </div>
                <h3 className="stepper-desc">
                    Enter '1 month' if you recently started your job.
                </h3>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.co_signer_income_year === "" && formData.co_signer_income_month === "" ? <li>Entry can not be 0 year and 0 month</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default CoSignerYearsOfIncome;
