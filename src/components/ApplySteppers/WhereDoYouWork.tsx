import React, { useState } from 'react';

const WhereDoYouWork = ({ formData, setFormData, setalcStep }) => {

    const [hasError, setHasError] = useState(0);

    const handleBack = () => {
        setalcStep('years_of_income');
    }

    const handleNext = () => {
        if (formData.company_name === "" || formData.job_title === "") {
            setHasError(1);
        } else {
            setHasError(0);
            setalcStep('home_address'); 
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, company_name: e.target.value });
    };
    const handleChangeJob = (e) => {
        setHasError(0);
        setFormData({ ...formData, job_title: e.target.value });
    }
    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <h2 className='stepper-question-title'>Where is your place of employment?</h2>
                </div>
                <span className='stepper-time'>2 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-flex-input'>
                    <div className='stepper-input input-text'>
                        <div className='stepper-text-input'>
                            <span className="input-guide">Company Name</span>
                            <span className='text-input'>
                                <input type='text' className='' name="company_name" value={formData.company_name} onChange={handleChange} />
                            </span>
                        </div>
                    </div>
                    <div className='stepper-input input-text'>
                        <div className='stepper-text-input'>
                            <span className="input-guide">Job Title</span>
                            <span className='text-input'>
                                <input type='text' className='' name="job_title" value={formData.job_title} onChange={handleChangeJob} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='stepper-btn'>
                    <button type='button' className='secondary-btn' onClick={handleBack}>Back</button>
                    <button type='button' className='primary-btn' onClick={handleNext}>Continue</button>
                </div>
                <div className="stepper-desc">
                    Don’t worry, we won’t visit—we just need these details to verify your employment and secure the best rates for you.
                </div>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.company_name === "" ? <li>Enter company name</li> : ""}
                        {formData.job_title === "" ? <li>Enter job title</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default WhereDoYouWork;
