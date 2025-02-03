import React, { useState } from 'react';

const CoSignerWhereDoYouWork = ({ formData, setFormData, setalcStep }) => {

    const [hasError, setHasError] = useState(0);

    const handleBack = () => {
        setalcStep('co_signer_years_of_income');
    }

    const handleNext = () => {
        if (formData.co_signer_company_name === "" || formData.co_signer_job_title === "") {
            setHasError(1);
        } else {
            setHasError(0);
            setalcStep('co_signer_home_address');
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, co_signer_company_name: e.target.value });
    };
    const handleChangeJob = (e) => {
        setHasError(0);
        setFormData({ ...formData, co_signer_job_title: e.target.value });
    }
    return (
        <div className='stepper-content'>
            <div className="stepper-title-desc">
                Co-applicant details
            </div>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Where is your place of employment?</span>
                </div>
                <span className='stepper-time'>2 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-flex-input'>
                    <div className='stepper-input input-text'>
                        <div className='stepper-text-input'>
                            <span className="input-guide">Company Name</span>
                            <span className='text-input'>
                                <input type='text' className='' name="co_signer_company_name" value={formData.co_signer_company_name} onChange={handleChange} />
                            </span>
                        </div>
                    </div>
                    <div className='stepper-input input-text'>
                        <div className='stepper-text-input'>
                            <span className="input-guide">Job Title</span>
                            <span className='text-input'>
                                <input type='text' className='' name="co_signer_job_title" value={formData.co_signer_job_title} onChange={handleChangeJob} />
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
                        {formData.co_signer_company_name === "" ? <li>Enter company name</li> : ""}
                        {formData.co_signer_job_title === "" ? <li>Enter job title</li> : ""}
                    </ul> : ""
                }

            </div>
        </div>
    );
}

export default CoSignerWhereDoYouWork;
