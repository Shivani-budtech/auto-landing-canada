import React, { useState } from 'react';

const CoSignerName = ({ formData, setFormData, setalcStep }) => {

    const [hasError, setHasError] = useState(0);

    const handleBack = () => {
        setHasError(0);
        setalcStep('co_signer');
    }

    const handleNext = (e) => {
        if (formData.co_signer_first_name === "" || formData.co_signer_last_name === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setalcStep('co_signer_employment_status');
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, co_signer_first_name: e.target.value });
    };
    const handleChangeLastName = (e) => {
        setHasError(0);
        setFormData({ ...formData, co_signer_last_name: e.target.value });
    };

    return (
        <div className='stepper-content'>
            <div className="stepper-title-desc">
                Co-applicant details
            </div>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <span className='stepper-question-title'>Co-applicant for:</span>
                </div>
                <span className='stepper-time'>3 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-flex-input'>
                    <div className='stepper-input input-text'>
                        <div className='stepper-text-input'>
                            <span className="input-guide">Main applicant's first Name</span>
                            <span className='text-input'>
                                <input type='text' className='' style={{ boxShadow:"none" }} disabled name="co_signer_first_name" value={formData.co_signer_first_name} onChange={handleChange} />
                            </span>
                        </div>
                    </div>
                    <div className='stepper-input input-text'>
                        <div className='stepper-text-input'>
                            <span className="input-guide">Main applicant's last Name</span>
                            <span className='text-input'>
                                <input type='text' className='' style={{ boxShadow: "none" }} disabled name="co_signer_last_name" value={formData.co_signer_last_name} onChange={handleChangeLastName} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='stepper-btn bigger-btn'>
                    <button type='button' className='secondary-btn' onClick={handleBack}>Back</button>
                    <button type='button' className='primary-btn' onClick={handleNext}>Continue</button>
                </div>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.co_signer_first_name === "" ? <li>Please enter first name</li> : ""}
                        {formData.co_signer_last_name === "" ? <li>Please enter last name</li> : ""}
                    </ul> : ""
                }
            </div>
        </div>
    );
}

export default CoSignerName;
