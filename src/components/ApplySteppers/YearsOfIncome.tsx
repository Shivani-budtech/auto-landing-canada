import React, { useState } from 'react';


const YearsOfIncome = ({ formData, setFormData, setalcStep }) => {
    const [hasError, setHasError] = useState(0);

    const handleBack = () => {
        setHasError(0);
        if (formData.employment_status === "employed" || formData.employment_status === "self-employed") {
            if (formData.income_type === "monthly") {
                setalcStep('monthly_income');
            } else if (formData.income_type === "other") {
                setalcStep('monthly_income');
            } else if (formData.income_type === "annual") {
                setalcStep('annual_income');
            } else if (formData.income_type === "hourly") {
                setalcStep('hourly_income');
            }
        } else if (formData.employment_status === "student") {
            if (formData.do_you_work === "yes") {
                if (formData.income_type === "monthly") {
                    setalcStep('monthly_income');
                } else if (formData.income_type === "other") {
                    setalcStep('monthly_income');
                } else if (formData.income_type === "annual") {
                    setalcStep('annual_income');
                } else if (formData.income_type === "hourly") {
                    setalcStep('hourly_income');
                }
            } else {
                setalcStep('monthly_income');
            }
        } else if (formData.employment_status === "retired" || formData.employment_status === "other") {
            setalcStep('monthly_income');
        }
    }

    const handleNext = () => {
        if (formData.income_year === "" && formData.income_month === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setalcStep('where_do_you_work'); // Move to the next step
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, income_year: e.target.value });
    };
    const handleChangeMonth = (e) => {
        setHasError(0);
        setFormData({ ...formData, income_month: e.target.value });
    }


    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>How long have you been receiving this source of income?</span>
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
                                <input type='number' className='' value={formData.income_year} placeholder="0" name="income_year" onChange={handleChange}  />
                            </span>
                        </div>
                    </div>
                    <div className='stepper-input'>
                        <span>
                            Months
                        </span>
                        <div className="form-input">
                            <span className='text-input'>
                                <input type='number' className='' value={formData.income_month} placeholder="0" name="income_month" onChange={handleChangeMonth} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='secondary-btn' onClick={handleBack}>Back</button>
                    <button type='button' className='primary-btn' onClick={handleNext}>Continue</button>
                </div>
                <div className="stepper-desc">
                    Enter '1 month' if you recently started your job.
                </div>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.income_year === "" && formData.income_month === "" ? <li>Entry can not be 0 year and 0 month</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default YearsOfIncome;
