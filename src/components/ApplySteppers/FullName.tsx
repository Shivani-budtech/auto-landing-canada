import React, { useState } from 'react';

const FullName = ({ formData, setFormData, setalcStep }) => {

    const [hasError, setHasError] = useState(0);

    const handleBack = () => {
        setHasError(0);
        setalcStep('date_of_birth');
    }

    const handleNext = () => {
        if (formData.first_name === "" || formData.last_name === "") {
            setHasError(1); // Show error
        } else {
            setHasError(0); // Clear error
            setFormData({
                ...formData,
                co_signer_first_name: formData.first_name,
                co_signer_last_name: formData.last_name
            });
            setalcStep('contact_details'); // Move to the next step
        }
    }
    const handleChange = (e) => {
        setHasError(0);
        setFormData({ ...formData, first_name: e.target.value });
    };
    const handleChangeLastName = (e) => {
        setHasError(0);
        setFormData({ ...formData, last_name: e.target.value });
    };

    return (
        <div className='stepper-content'>
            <div className="stepper-question">
                <div className='stepper-title-sec'>
                    <h2 className='stepper-question-title'>What is your full name?</h2>
                </div>
                <span className='stepper-time'>1 minutes from finish</span>
            </div>
            <div className="stepper-input">
                <div className='stepper-flex-input'>
                    <div className='stepper-input input-text'>
                        <div className='stepper-text-input'>
                            <span className="input-guide">First Name</span>
                            <span className='text-input'>
                                <input type='text' className='' name="first_name" value={formData.first_name} onChange={handleChange} />
                            </span>
                        </div>
                    </div>
                    <div className='stepper-input input-text'>
                        <div className='stepper-text-input'>
                            <span className="input-guide">Last Name</span>
                            <span className='text-input'>
                                <input type='text' className='' name="last_name" value={formData.last_name} onChange={handleChangeLastName} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='stepper-btn bigger-btn'>
                    <button type='button' className='secondary-btn' onClick={handleBack}>Back</button>
                    <button type='button' className='primary-btn' onClick={handleNext}>Continue to Final Step</button>
                </div>
            </div>
            <div className="error-messages">
                {hasError === 1 ?
                    <ul>
                        {formData.first_name === "" ? <li>Please enter first name</li> : ""}
                        {formData.last_name === "" ? <li>Please enter last name</li> : ""}
                    </ul> : ""
                }
            </div>
        </div>
    );
}

export default FullName;
